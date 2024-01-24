import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'; 

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    console.log("Search button pressed");
    try {
      const response = await fetch('https://api.sampleapis.com/codingresources/codingResources');
      const jsonData = await response.json();
      const filteredData = jsonData.filter(item =>
        item.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setData(filteredData);
      console.log("Filtered data:", filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to render each item
  const renderData = () => {
    return data.map((item, index) => (
      <div key={index}>
        <h3>{item.description}</h3>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.url}
        </a>
      </div>
    ));
  };  

  return (
    <div>
      <div className="searchBar">
        <InputBase
          className="inputBase"
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className="searchIconWrapper">
          <IconButton onClick={handleSearch} aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <div>
        {renderData()}
      </div>
    </div>
  );
}

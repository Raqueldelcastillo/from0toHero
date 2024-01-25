import React, { useState, useEffect } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './searchBar.css'; 
// add favourite icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    // Retrieve favorites from local storage
    const localData = localStorage.getItem('favorites');
    return localData ? JSON.parse(localData) : {};
    // console.log("saved:", localData);
  });

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

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  // console.log("exsisting favourites:", favorites);



  const toggleFavorite = (item) => {
    setFavorites(prevFavorites => {
      const updatedFavorites = { ...prevFavorites };
      if (updatedFavorites[item.url]) {
        delete updatedFavorites[item.url]; 
        console.log("removed from favourites:", item.url);
      } else {
        updatedFavorites[item.url] = item; 
        console.log("favourites:", item.url);
      }
      return updatedFavorites;
    });
  };

  const renderData = () => {
    return data.map((item, index) => (
      <div key={index}>
        <h3>
          {favorites[item.url] ? (
            <FavoriteIcon onClick={() => toggleFavorite(item)} />
          ) : (
            <FavoriteBorderIcon onClick={() => toggleFavorite(item)} />
          )}
          {item.description}
        </h3>
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
          placeholder="Explore more.."
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

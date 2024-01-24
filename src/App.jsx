import React from "react";
import "./App.css";
import TopNav from "./components/navbar/TopNav";
import Caroussel from "./components/caroussel/caroussel";
import SearchBox from "./components/searchBox/seachBar";
import HeroSection from "./components/hero/Hero";
import Cardcontainer from "./components/ResourcesCards/cardcontainer";

function App() {
  return (
    <div>
      <TopNav />
      <HeroSection />
      <SearchBox />
      <Caroussel />
      <Cardcontainer />
    </div>
  );
}

export default App;

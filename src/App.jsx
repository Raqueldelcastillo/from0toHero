import React from "react";
import "./App.css";
import TopNav from "./components/navbar/TopNav";
import Caroussel from "./components/caroussel/caroussel";
import SearchBox from "./components/searchBox/seachBar";
import HeroSection from "./components/hero/Hero";
import Cardcontainer from "./components/ResourcesCards/cardcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsletterForm from "./components/newletterForm/NewsletterForm";

function App() {
  return (
    <div>
      <TopNav />
      <HeroSection />
      <SearchBox />
      <Caroussel />
      <Cardcontainer />
      <NewsletterForm />
    </div>
  );
}

export default App;

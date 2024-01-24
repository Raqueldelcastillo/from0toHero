import React from "react";
import "./App.css";
import TopNav from "./components/navbar/TopNav";
import Caroussel from "./components/caroussel/caroussel";
import SearchBox from "./components/searchBox/seachBar";
import HeroSection from "./components/hero/Hero";
import Cardcontainer from "./components/ResourcesCards/cardcontainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsletterForm from './components/newletterForm/NewsletterForm';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <div>
        <TopNav />
        <HeroSection />
        <SearchBox />
        <Caroussel />
        <Cardcontainer />
        < NewsletterForm />
        < Footer />
      </div>
    </div>
  );
}

export default App;

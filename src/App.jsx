import React from "react";
import "./App.css";
import Caroussel from "./components/caroussel/caroussel";
import SearchBox from "./components/searchBox/seachBar";
import HeroSection from "./components/hero/Hero";
import Cardcontainer from "./components/ResourcesCards/cardcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsletterForm from "./components/newletterForm/NewsletterForm";
import NewNavBar from "./components/newNav/newnavbar";
import Homepage from "./pages/homepage";
import AboutUs from "./pages/aboutus";
import RubberDuck from "./pages/rubberduck";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NewNavBar />
      <div className="page-container ">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/rubberduck" element={<RubberDuck />} />
        </Routes>
      </div>
      <HeroSection />
      <SearchBox />
      <div className="page-container ">
        <Routes>
          <Route path="/caroussel" element={<Caroussel />} />
        </Routes>
      </div>
      <div className="page-container ">
        <Routes>
          <Route path="/cardcontainer" element={<Cardcontainer />} />
        </Routes>
      </div>
      <NewsletterForm />
      <Footer />
    </>
  );
}

export default App;

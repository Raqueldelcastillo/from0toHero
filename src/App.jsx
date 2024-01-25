import React from "react";
import "./App.css";
import TopNav from "./components/navbar/TopNav";
import Caroussel from "./components/caroussel/caroussel";
import SearchBox from "./components/searchBox/seachBar";
import HeroSection from "./components/hero/Hero";
import Cardcontainer from "./components/ResourcesCards/cardcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsletterForm from "./components/newletterForm/NewsletterForm";
import NewNavBar from "./components/newNav/newnavbar";
import Homepage from "./pages/homepage";
import AboutUs from "./pages/aboutus";
import Careers from "./pages/careers";
import Previousprojects from "./pages/previousprojects";
import RubberDuck from "./pages/rubberduck";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {/* <TopNav /> */}
      <NewNavBar />
      <div className="page-container ">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/previous-projects" element={<Previousprojects />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/rubberduck" element={<RubberDuck />} />
        </Routes>
      </div>
      <HeroSection />
      <SearchBox />
      <Caroussel />
      <Cardcontainer />
      <NewsletterForm />
      <Footer />
    </>
  );
}

export default App;

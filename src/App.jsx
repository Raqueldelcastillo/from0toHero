import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Resources from "./pages/Resources";

import TopNav from "./components/navbar/TopNav";
import Caroussel from "./components/caroussel/caroussel";

function App() {
  return (
    <div>
      <Router>
        <TopNav />;
        <Caroussel />; {/* Wrap Route elements in a Routes component */}
        
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="blog" element={<Blog />} /> */}
          {/* Define a route that will have descendant routes */}
          {/* <Route path="contact/*" element={<Contact />} /> */}
        </Routes>
        <Resources />
      </Router>
    </div>
  );
}

export default App;

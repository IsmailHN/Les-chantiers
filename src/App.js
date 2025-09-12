import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Maritime from "./Maritime";
import Discovery from "./Discovery";
import Digital from "./Digital";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/maritime" element={<Maritime />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/digital" element={<Digital />} />
      </Routes>
    </Router>
  );
}

export default App;

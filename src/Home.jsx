import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";

import heroLogo from "./assets/images/logo.png";
import imgMaritime from "./assets/images/Maritime.png";
import imgDiscovery from "./assets/images/Discovery.png";
import imgDigital from "./assets/images/Digital.png";

const Home = () => {
  return (
    <div className="home">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <img src={heroLogo} alt="Logo" className="hero-logo" />
        <h1 className="title">Welcome to LES-CHANTIERS</h1>
        <p className="subtitle">Sea Technology &amp; Innovation</p>
        <Link className="explore-btn" to="/about-us">About us →</Link>
      </section>

      {/* Solutions Section */}
      <section className="solutions">
        <div className="solution-card">
          <img src={imgMaritime} alt="Maritime" />
          <h2>Maritime Solutions</h2>
          <p>Advanced maritime systems designed for efficiency, safety, and sustainability.</p>
          <Link className="solution-btn" to="/maritime">Explore Maritime →</Link>
        </div>

        <div className="solution-card">
          <img src={imgDiscovery} alt="Discovery" />
          <h2>Discovery Solutions</h2>
          <p>Explore new frontiers with autonomous vehicles, sonar systems, and scientific tools.</p>
          <Link className="solution-btn" to="/discovery">Explore Discovery →</Link>
        </div>

        <div className="solution-card">
          <img src={imgDigital} alt="Digital" />
          <h2>Digital Solutions</h2>
          <p>Unlock potential with digital twins, integrated platforms, and smart data ecosystems.</p>
          <Link className="solution-btn" to="/digital">Explore Digital →</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

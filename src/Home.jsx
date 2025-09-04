import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";

// Import images from src for reliability
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
        <button
          className="explore-btn"
          onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore Now
        </button>
      </section>

      {/* Solutions Section (Second Screen) */}
      <section className="solutions" id="solutions">
        <div className="solution-card" id="maritime">
          <img src={imgMaritime} alt="Maritime" />
          <h2>Maritime Solutions</h2>
          <p>
            Advanced maritime systems designed for efficiency, safety, and
            sustainability—from dynamic positioning to world-class navigation.
          </p>
          <button className="solution-btn">Explore Maritime →</button>
        </div>

        <div className="solution-card" id="discovery">
          <img src={imgDiscovery} alt="Discovery" />
          <h2>Discovery Solutions</h2>
          <p>
            Explore new frontiers with high-performance underwater and
            oceanographic technologies: autonomous vehicles, sonar, and more.
          </p>
          <button className="solution-btn">Explore Discovery →</button>
        </div>

        <div className="solution-card" id="digital">
          <img src={imgDigital} alt="Digital" />
          <h2>Digital Solutions</h2>
          <p>
            Unlock the full potential of your assets with digital twins,
            integrated platforms, and smart data ecosystems.
          </p>
          <button className="solution-btn">Explore Digital →</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

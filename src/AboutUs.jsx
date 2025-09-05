import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./AboutUs.css";

import heroLogo from "./assets/images/logo.png";

const AboutUs = () => {
  return (
    <div className="about-page">
      <Header />

      {/* Hero (same style as Home) */}
      <section className="hero">
        <img src={heroLogo} alt="Logo" className="hero-logo" />
        <h1 className="title">Welcome to LES-CHANTIERS</h1>
        <p className="subtitle">Sea Technology &amp; Innovation</p>
      </section>

      {/* About block under hero (no cards on this page) */}
      <section className="about-content">
        <div className="about-container">
          <p className="eyebrow">ABOUT US</p>
          <h2 className="about-title">A partner for your operational excellence</h2>

          <p className="about-lead">
            At Les-Chantiers, our strength lies in the expertise and commitment of our team.
            With over <strong>25 years of experience</strong> in maritime technologies and
            communication solutions, we bring deep industry knowledge, technical excellence,
            and a passion for innovation to every project.
          </p>

          <div className="about-divider" />

          <h3 className="about-subtitle">Our mission is clear</h3>
          <p className="about-text">
            We deliver Kongsberg’s cutting-edge solutions with the highest standards of service—
            ensuring your operations are <strong>smarter</strong>, <strong>safer</strong>, and
            <strong> more efficient</strong>. Partner with a team that understands your challenges
            and is dedicated to your success.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

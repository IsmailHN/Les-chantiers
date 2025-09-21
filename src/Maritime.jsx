import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Maritime.css";
import heroLogo from "./assets/images/logo.png";

const Maritime = () => {
  return (
    <div className="maritime-page">
      <Header />

      {/* Hero Section */}
      <section className="maritime-hero">
        <img src={heroLogo} alt="Logo" className="hero-logo" />
        <h1 className="hero-title">Maritime Solutions</h1>
        <p className="hero-subtitle">
          World-class technologies for safer, smarter, and more efficient operations at sea.
        </p>
      </section>

      {/* Cards Section */}
      <section className="maritime-wrap">
        <div className="maritime-grid">

          {/* Product */}
          <article className="maritime-card">
            <h3>Product</h3>
            <p>
              Explore our advanced maritime products including integrated bridge systems,
              dynamic positioning, automation, sonar, and remote support tools.
            </p>
          </article>

          {/* Segments */}
          <article className="maritime-card">
            <h3>Segments</h3>
            <p>
              Serving defense, commercial shipping, offshore energy, research vessels,
              and special operations with tailored solutions.
            </p>
          </article>

          {/* Services */}
          <article className="maritime-card">
            <h3>Services</h3>
            <p>
              From installation and commissioning to lifecycle support, we ensure your
              systems deliver peak performance and safety at all times.
            </p>
          </article>

          {/* Support */}
          <article className="maritime-card">
            <h3>Support</h3>
            <p>
              24/7 technical assistance, remote monitoring, spare parts supply, and
              predictive maintenance to maximize uptime.
            </p>
          </article>

          {/* Company */}
          <article className="maritime-card">
            <h3>Company</h3>
            <p>
              With over 25 years of experience in maritime technology, we are a trusted
              partner dedicated to innovation and operational excellence.
            </p>
          </article>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maritime;

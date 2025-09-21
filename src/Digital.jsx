import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Digital.css";
import heroLogo from "./assets/images/logo.png";

const Digital = () => {
  return (
    <div className="digital-page">
      <Header />

      {/* Hero */}
      <section className="digital-hero">
        <img src={heroLogo} alt="Logo" className="hero-logo" />
        <h1 className="hero-title">Digital Solutions</h1>
        <p className="hero-subtitle">
          Platforms, analytics, and lifecycle services that connect assets, people,
          and data—driving safer and more efficient operations.
        </p>
      </section>

      {/* Cards (only these five) */}
      <section className="digital-wrap">
        <div className="digital-grid">
          {/* Products */}
          <article className="digital-card">
            <h3>Products</h3>
            <p>
              Digital twins, onboard applications, data acquisition gateways,
              and secure cloud services designed for maritime operations.
            </p>
          </article>

          {/* Solutions */}
          <article className="digital-card">
            <h3>Solutions</h3>
            <p>
              Fleet performance, fuel optimization, remote assistance,
              compliance reporting, and integrated bridge digital workflows.
            </p>
          </article>

          {/* Resources */}
          <article className="digital-card">
            <h3>Resources</h3>
            <p>
              Product documents, release notes, SDKs, training guides, and
              best-practice playbooks to help your teams move faster.
            </p>
          </article>

          {/* Partners */}
          <article className="digital-card">
            <h3>Partners</h3>
            <p>
              Technology and service partners enabling certified integrations,
              turnkey deployments, and regional expertise.
            </p>
          </article>

          {/* Company */}
          <article className="digital-card">
            <h3>Company</h3>
            <p>
              A trusted team with 25+ years in maritime technology—focused on
              safety, reliability, and measurable value for operators.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Digital;

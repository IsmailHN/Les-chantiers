import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Discovery.css";
import heroLogo from "./assets/images/logo.png";

const Discovery = () => {
  return (
    <div className="discovery-page">
      <Header />

      {/* Hero */}
      <section className="discovery-hero">
        <img src={heroLogo} alt="Logo" className="hero-logo" />
        <h1 className="hero-title">Discovery Solutions</h1>
        <p className="hero-subtitle">
          Oceanographic and exploration technologies for precise data collection,
          autonomous missions, and dependable performance in demanding environments.
        </p>
      </section>

      {/* Cards */}
      <section className="discovery-wrap">
        <div className="discovery-grid">
          {/* Product */}
          <article className="discovery-card">
            <h3>Product</h3>
            <p>
              Autonomous underwater vehicles (AUVs), ROV payloads, multibeam sonars,
              current profilers, and sensor suites designed for research and industry.
            </p>
          </article>

          {/* Services */}
          <article className="discovery-card">
            <h3>Services</h3>
            <p>
              Mission design, equipment integration, calibration, sea trials, and
              lifecycle service to keep your exploration programs running smoothly.
            </p>
          </article>

          {/* Support */}
          <article className="discovery-card">
            <h3>Support</h3>
            <p>
              24/7 technical support, spares and logistics, firmware updates, and
              remote diagnostics to minimize downtime during critical campaigns.
            </p>
          </article>

          {/* Company */}
          <article className="discovery-card">
            <h3>Company</h3>
            <p>
              25+ years delivering robust ocean technologies with a focus on safety,
              reliability, and scientific integrity across global operations.
            </p>
          </article>

          {/* Application */}
          <article className="discovery-card">
            <h3>Application</h3>
            <p>
              Seafloor mapping, habitat assessment, subsea inspection, environmental
              monitoring, and defense reconnaissance—tailored to your use case.
            </p>
          </article>

          {/* Contact */}
          <article className="discovery-card">
            <h3>Contact</h3>
            <p>
              Ready to scope an expedition or system upgrade? Reach our specialists for
              specifications, availability, and project planning support.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Discovery;

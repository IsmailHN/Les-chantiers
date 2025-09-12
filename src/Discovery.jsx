import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Discovery.css";     
import heroLogo from "./assets/images/logo.png";

const Discovery = () => {
  return (
    <div className="discovery-page">
      <Header />

      <section className="discovery-hero">
        <img src={heroLogo} alt="Logo" className="hero-logo" />
        <h1 className="hero-title">Discovery Solutions</h1>
        <p className="hero-subtitle">
          Explore new frontiers with high-performance underwater and oceanographic technologies.
        </p>
      </section>

      <section className="discovery-wrap">
        <div className="discovery-grid">
          <article className="discovery-card"><h3>Container 1 Title</h3><p>Write your text for container 1 here. Describe your discovery capability or product.</p></article>
          <article className="discovery-card"><h3>Container 2 Title</h3><p>Write your text for container 2 here. Use cases, features, or benefits go here.</p></article>
          <article className="discovery-card"><h3>Container 3 Title</h3><p>Write your text for container 3 here. Add details you want users to know.</p></article>
          <article className="discovery-card"><h3>Container 4 Title</h3><p>Write your text for container 4 here. You can paste longer content if needed.</p></article>
          <article className="discovery-card"><h3>Container 5 Title</h3><p>Write your text for container 5 here. Keep it concise and impactful.</p></article>
          <article className="discovery-card"><h3>Container 6 Title</h3><p>Write your text for container 6 here. Bullet points work with &lt;ul&gt;&lt;li&gt;.</p></article>
          <article className="discovery-card"><h3>Container 7 Title</h3><p>Write your text for container 7 here. Highlight a key feature.</p></article>
          <article className="discovery-card"><h3>Container 8 Title</h3><p>Write your text for container 8 here. Mention reliability, safety, performance.</p></article>
          <article className="discovery-card"><h3>Container 9 Title</h3><p>Write your text for container 9 here. Add certifications/standards if relevant.</p></article>
          <article className="discovery-card"><h3>Container 10 Title</h3><p>Write your text for container 10 here. You can also add links/CTAs.</p></article>
          <article className="discovery-card"><h3>Container 11 Title</h3><p>Write your text for container 11 here. Keep consistent tone across cards.</p></article>
          <article className="discovery-card"><h3>Container 12 Title</h3><p>Write your text for container 12 here. Summarize value and invite contact.</p></article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Discovery;  // ✅ default export

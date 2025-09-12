import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Digital.css"; // ✅ correct case
import heroLogo from "./assets/images/logo.png";

const Digital = () => {
  return (
    <div className="digital-page">
      <Header />

      {/* Hero (animated gradient like other pages) */}
      <section className="digital-hero">
        <img src={heroLogo} alt="Logo" className="hero-logo" />
        <h1 className="hero-title">Digital Solutions</h1>
        <p className="hero-subtitle">
          Unlock the full potential of your assets with digital twins, integrated platforms,
          and smart data ecosystems.
        </p>
      </section>

      {/* 12 editable containers */}
      <section className="digital-wrap">
        <div className="digital-grid">
          <article className="digital-card"><h3>Container 1 Title</h3><p>Write your text for container 1 here. Describe your digital capability or product.</p></article>
          <article className="digital-card"><h3>Container 2 Title</h3><p>Write your text for container 2 here. Use cases, features, or benefits go here.</p></article>
          <article className="digital-card"><h3>Container 3 Title</h3><p>Write your text for container 3 here. Add details you want users to know.</p></article>
          <article className="digital-card"><h3>Container 4 Title</h3><p>Write your text for container 4 here. You can paste longer content if needed.</p></article>
          <article className="digital-card"><h3>Container 5 Title</h3><p>Write your text for container 5 here. Keep it concise and impactful.</p></article>
          <article className="digital-card"><h3>Container 6 Title</h3><p>Write your text for container 6 here. Bullet points work with &lt;ul&gt;&lt;li&gt;.</p></article>
          <article className="digital-card"><h3>Container 7 Title</h3><p>Write your text for container 7 here. Highlight a key platform or data flow.</p></article>
          <article className="digital-card"><h3>Container 8 Title</h3><p>Write your text for container 8 here. Mention reliability, scalability, or integrations.</p></article>
          <article className="digital-card"><h3>Container 9 Title</h3><p>Write your text for container 9 here. Add certifications/standards if relevant.</p></article>
          <article className="digital-card"><h3>Container 10 Title</h3><p>Write your text for container 10 here. You can also add links/CTAs.</p></article>
          <article className="digital-card"><h3>Container 11 Title</h3><p>Write your text for container 11 here. Keep consistent tone across cards.</p></article>
          <article className="digital-card"><h3>Container 12 Title</h3><p>Write your text for container 12 here. Summarize value and invite contact.</p></article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Digital;

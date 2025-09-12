import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Maritime.css"; // styles for this page
import heroLogo from "./assets/images/logo.png";

const Maritime = () => {
  // You can also map these from an array if you prefer
  return (
    <div className="maritime-page">
      <Header />

      {/* Hero (same vibe as other pages) */}
      <section className="maritime-hero">
        <img src={heroLogo} alt="Logo" className="hero-logo" />
        <h1 className="hero-title">Maritime Solutions</h1>
        <p className="hero-subtitle">
          World-class technologies for safer, smarter, and more efficient operations at sea.
        </p>
      </section>

      {/* 12 editable containers */}
      <section className="maritime-wrap">
        <div className="maritime-grid">
          <article className="maritime-card">
            <h3>Container 1 Title</h3>
            <p>Write your text for container 1 here. Describe your maritime capability or product.</p>
          </article>

          <article className="maritime-card">
            <h3>Container 2 Title</h3>
            <p>Write your text for container 2 here. Describe use cases, features, or benefits.</p>
          </article>

          <article className="maritime-card">
            <h3>Container 3 Title</h3>
            <p>Write your text for container 3 here. Add any details you want your users to know.</p>
          </article>

          <article className="maritime-card">
            <h3>Container 4 Title</h3>
            <p>Write your text for container 4 here. You can paste longer content if needed.</p>
          </article>

          <article className="maritime-card">
            <h3>Container 5 Title</h3>
            <p>Write your text for container 5 here. Keep it concise and impactful.</p>
          </article>

          <article className="maritime-card">
            <h3>Container 6 Title</h3>
            <p>Write your text for container 6 here. Bullet points can be used with &lt;ul&gt; &lt;li&gt; if needed.</p>
          </article>

          <article className="maritime-card">
            <h3>Container 7 Title</h3>
            <p>Write your text for container 7 here. This section can highlight a key feature.</p>
          </article>

          <article className="maritime-card">
            <h3>Container 8 Title</h3>
            <p>Write your text for container 8 here. Mention reliability, safety, or performance.</p>
          </article>

          <article className="maritime-card">
            <h3>Container 9 Title</h3>
            <p>Write your text for container 9 here. Add certifications or standards if relevant.</p>
          </article>

          <article className="maritime-card">
            <h3>Container 10 Title</h3>
            <p>Write your text for container 10 here. You can also add links or calls to action.</p>
          </article>

          <article className="maritime-card">
            <h3>Container 11 Title</h3>
            <p>Write your text for container 11 here. Keep consistent tone across cards.</p>
          </article>

          <article className="maritime-card">
            <h3>Container 12 Title</h3>
            <p>Write your text for container 12 here. Summarize value and invite contact.</p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maritime;

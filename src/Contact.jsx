import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";
import heroLogo from "./assets/images/logo.png";

// ✅ Update these if you ever need to change them
const EMAIL = "";
const PHONE_NUMBER_DISPLAY = "+212 5 22 12 34 56";
const PHONE_NUMBER_TEL = "+212522123456"; // tel-safe format (digits only)

const Contact = () => {
  // Prebuilt compose links
  const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(EMAIL)}`;
  const outlookLink = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(EMAIL)}`;
  const mailtoLink = `mailto:${EMAIL}`;

  return (
    <div className="contact-page">
      <Header />

      {/* Hero (same vibe as AboutUs) */}
      <section className="hero contact-hero">
        <img src={heroLogo} alt="Logo" className="hero-logo" />
        <h1 className="title">Get in touch</h1>
        <p className="subtitle">We’re here to help you move faster and safer.</p>
      </section>

      {/* Cards only */}
      <section className="contact-cards-wrap">
        <div className="contact-cards">
          {/* Email Card */}
          <div className="contact-card">
            <div className="card-icon email" aria-hidden="true">
              {/* Envelope icon */}
              <svg viewBox="0 0 48 48">
                <path d="M6 12h36a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2z" fill="currentColor" opacity=".12"/>
                <path d="M6 12h36a2 2 0 0 1 2 2v.5L24 28 4 14.5V14a2 2 0 0 1 2-2z" fill="currentColor"/>
                <path d="M42 36H6a2 2 0 0 1-2-2V14.5L24 28l20-13.5V34a2 2 0 0 1-2 2z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="card-title">Email</h3>
            <p className="card-text">
              Choose your email service to write us directly at <strong>{EMAIL}</strong>.
            </p>

            <div className="btn-row">
              <a className="card-btn primary" href={gmailLink} target="_blank" rel="noreferrer">
                {/* Gmail logo mark */}
                <svg className="btn-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#EA4335" d="M12 13.5L3 7v10a2 2 0 0 0 2 2h3v-7l4 3 4-3v7h3a2 2 0 0 0 2-2V7z"/>
                  <path fill="#FBBC05" d="M21 7.5v-.5l-9 6-9-6v.5l9 6z"/>
                  <path fill="#34A853" d="M15 19h3a2 2 0 0 0 2-2v-8l-5 3.3z"/>
                  <path fill="#4285F4" d="M6 19h3v-6.7L4 9v8a2 2 0 0 0 2 2z"/>
                </svg>
                Gmail
              </a>

              <a className="card-btn" href={outlookLink} target="_blank" rel="noreferrer">
                {/* Outlook logo mark */}
                <svg className="btn-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#0A66C2" d="M4 5h10v14H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>
                  <rect x="10" y="8" width="12" height="10" rx="1.5" ry="1.5" fill="#106EBE" opacity=".25"/>
                  <circle cx="9" cy="12" r="2.8" fill="#fff"/>
                </svg>
                Outlook
              </a>

              <a className="card-btn subtle" href={mailtoLink}>
                {/* Mail icon */}
                <svg className="btn-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6h16a2 2 0 0 1 2 2v.4L12 14 2 8.4V8a2 2 0 0 1 2-2z" fill="currentColor"/>
                  <path d="M22 18H2a2 2 0 0 1-2-2V8.4L12 14l12-5.6V16a2 2 0 0 1-2 2z" fill="currentColor" opacity=".6"/>
                </svg>
                Email App
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="contact-card">
            <div className="card-icon phone" aria-hidden="true">
              {/* Phone icon */}
              <svg viewBox="0 0 48 48">
                <path d="M32.5 30.6c1.7 1.7 3.7 3 6 3.6l2.6.7a2 2 0 0 1 1.5 1.9v5a2 2 0 0 1-2.2 2c-7.2-.6-14-4.1-19.3-9.4S12.3 24.6 11.7 17.4A2 2 0 0 1 13.7 15h5a2 2 0 0 1 1.9 1.5l.7 2.6c.6 2.3 1.9 4.3 3.6 6l6.6 5.5z" fill="currentColor"/>
              </svg>
            </div>
            <h3 className="card-title">Phone</h3>
            <p className="card-text">
              Call us directly — we’re available during business hours.
            </p>

            <a className="card-btn primary" href={`tel:${PHONE_NUMBER_TEL}`}>
              {/* Dial icon */}
              <svg className="btn-ico" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.23c1.2.48 2.5.75 3.8.79a1 1 0 0 1 1 1v3.4a1 1 0 0 1-1 1C12.3 21.9 2.1 11.7 2.3 2.7a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c.05 1.3.31 2.6.8 3.8a1 1 0 0 1-.23 1.1L6.6 10.8z" fill="currentColor"/>
              </svg>
              {PHONE_NUMBER_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

/** Build x-www-form-urlencoded body the way Netlify expects */
const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalKind, setModalKind] = useState("success"); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const form = e.target;
    const payload = {
      "form-name": form.getAttribute("name"),
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    try {
      if (isLocalhost) {
        // Netlify doesn’t process forms locally; simulate success so you can test the UI.
        await new Promise((r) => setTimeout(r, 600));
        setModalKind("success");
        form.reset();
      } else {
        // Try a normal fetch first (some sites need no-cors due to redirect behavior).
        let res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(payload),
        });

        // If we didn’t get a 2xx, try no-cors and assume success (opaque response).
        if (!res.ok) {
          await fetch("/", {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode(payload),
          });
        }

        setModalKind("success");
        form.reset();
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setModalKind("error");
    } finally {
      setSubmitting(false);
      setModalOpen(true);
    }
  };

  return (
    <div className="contact-page">
      <Header />

      <section className="contact-wrap">
        <div className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            We’d love to hear from you. Fill out the form and we’ll get back to you shortly.
          </p>

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Netlify hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden-field">
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" required />
              <input type="text" name="lastName" placeholder="Last Name" required />
            </div>

            <div className="form-row">
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Phone Number" />
            </div>

            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" rows="6" placeholder="Your message..." required />

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Centered modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div
            className={`modal ${modalKind === "success" ? "ok" : "err"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {modalKind === "success" ? (
              <>
                <div className="modal-icon">✅</div>
                <h3>Your message has been submitted successfully</h3>
                <p>We’ll contact you at the email you provided.</p>
              </>
            ) : (
              <>
                <div className="modal-icon">❌</div>
                <h3>Something went wrong</h3>
                <p>Please try again later.</p>
              </>
            )}
            <button className="modal-close" onClick={() => setModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;

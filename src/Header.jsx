import React, { useEffect, useRef, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./assets/images/logo.png";

const NAV = [
  {
    label: "Who we are",
    links: [
      { label: "About us", to: "/about-us" },
      { label: "Leadership", to: "/leadership" },
      { label: "Newsroom", to: "/news" },
    ],
  },
  {
    label: "What we do",
    links: [
      { label: "Products", to: "/products" },
      { label: "Solutions", to: "/solutions" },
      { label: "Case studies", to: "/cases" },
    ],
  },
  {
    label: "Our commitment",
    links: [
      { label: "Sustainability", to: "/sustainability" },
      { label: "Ethics & compliance", to: "/ethics" },
      { label: "Community", to: "/community" },
    ],
  },
  {
    label: "Careers",
    links: [
      { label: "Open roles", to: "/careers" },
      { label: "Life at LC", to: "/life" },
      { label: "Early careers", to: "/graduates" },
    ],
  },
  {
    label: "Investors",
    links: [
      { label: "Financials", to: "/investors/financials" },
      { label: "Reports", to: "/investors/reports" },
      { label: "Contact IR", to: "/investors/contact" },
    ],
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [mobileOpen, setMobileOpen] = useState(false);
  const hoverTimer = useRef(null);
  const rootRef = useRef(null);

  const dimIsOn = openIndex > -1 || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!rootRef.current || rootRef.current.contains(e.target)) return;
      setOpenIndex(-1);
      setMobileOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const clearHoverTimer = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };
  const openDropdown = (i) => {
    clearHoverTimer();
    setOpenIndex(i);
  };
  const scheduleClose = () => {
    clearHoverTimer();
    hoverTimer.current = setTimeout(() => setOpenIndex(-1), 130);
  };

  return (
    <Fragment>
      <header className={`header ${scrolled ? "scrolled" : ""}`} ref={rootRef}>
        <div className="container">
          {/* Brand link to home (unstyled link) */}
          <Link to="/" className="brand-link" aria-label="Go to home">
            <img src={logo} alt="Logo" className="brand-logo" />
            <span className="brand-name">LES-CHANTIERS</span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav">
            {NAV.map((group, i) => (
              <div
                key={group.label}
                className="nav-item"
                onMouseEnter={() => openDropdown(i)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className="nav-btn"
                  aria-haspopup="menu"
                  aria-expanded={openIndex === i}
                  onClick={() => setOpenIndex((x) => (x === i ? -1 : i))}
                >
                  {group.label}
                  <svg className={`chev ${openIndex === i ? "up" : ""}`} viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>

                {openIndex === i && (
                  <div
                    className={`menu-panel glass ${scrolled ? "light" : "dark"}`}
                    role="menu"
                    onMouseEnter={clearHoverTimer}
                    onMouseLeave={scheduleClose}
                  >
                    {group.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="menu-link"
                        role="menuitem"
                        onClick={() => {
                          setOpenIndex(-1);
                          setMobileOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className={`mobile-panel glass ${scrolled ? "light" : "dark"}`} role="menu">
            {NAV.map((g) => (
              <div key={g.label} className="mobile-group">
                <div className="mobile-group-title">{g.label}</div>
                {g.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="menu-link"
                    role="menuitem"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Dim page (not header) when any menu is open */}
      {dimIsOn && (
        <div
          className={`screen-dim ${scrolled ? "light" : "dark"}`}
          onClick={() => {
            setOpenIndex(-1);
            setMobileOpen(false);
          }}
          aria-hidden="true"
        />
      )}
    </Fragment>
  );
};

export default Header;

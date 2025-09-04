import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import logo from "./assets/images/logo.png";

const NAV = [
  {
    label: "Who we are",
    links: [
      { label: "About us", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Newsroom", href: "/news" },
    ],
  },
  {
    label: "What we do",
    links: [
      { label: "Products", href: "/products" },
      { label: "Solutions", href: "/solutions" },
      { label: "Case studies", href: "/cases" },
    ],
  },
  {
    label: "Our commitment",
    links: [
      { label: "Sustainability", href: "/sustainability" },
      { label: "Ethics & compliance", href: "/ethics" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    label: "Careers",
    links: [
      { label: "Open roles", href: "/careers" },
      { label: "Life at LC", href: "/life" },
      { label: "Early careers", href: "/graduates" },
    ],
  },
  {
    label: "Investors",
    links: [
      { label: "Financials", href: "/investors/financials" },
      { label: "Reports", href: "/investors/reports" },
      { label: "Contact IR", href: "/investors/contact" },
    ],
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1); // which dropdown is open (desktop)
  const [mobileOpen, setMobileOpen] = useState(false); // for the small-screen Menu button
  const rootRef = useRef(null);

  // scroll color switch
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // click outside to close
  useEffect(() => {
    const onDocClick = (e) => {
      if (!rootRef.current || rootRef.current.contains(e.target)) return;
      setOpenIndex(-1);
      setMobileOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} ref={rootRef}>
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="site-name">LES-CHANTIERS</div>
      </div>

      {/* Desktop nav */}
      <nav className="nav">
        {NAV.map((group, i) => (
          <div
            key={group.label}
            className="nav-item"
            onMouseEnter={() => setOpenIndex(i)}
            onMouseLeave={() => setOpenIndex((x) => (x === i ? -1 : x))}
          >
            <button
              className="nav-btn"
              aria-haspopup="menu"
              aria-expanded={openIndex === i}
              onClick={() => setOpenIndex((x) => (x === i ? -1 : i))}
            >
              {group.label}
              <svg
                className={`chev ${openIndex === i ? "up" : ""}`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>

            {openIndex === i && (
              <div className={`menu-panel ${scrolled ? "light" : "dark"}`} role="menu">
                {group.links.map((l) => (
                  <a key={l.href} href={l.href} className="menu-link" role="menuitem">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Menu button */}
      <div className="mobile-menu">
        <button
          className="dropdown-btn"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-haspopup="menu"
        >
          Menu ▾
        </button>
        {mobileOpen && (
          <div className={`mobile-panel ${scrolled ? "light" : "dark"}`} role="menu">
            {NAV.map((g) => (
              <div key={g.label} className="mobile-group">
                <div className="mobile-group-title">{g.label}</div>
                {g.links.map((l) => (
                  <a key={l.href} href={l.href} className="menu-link" role="menuitem">
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

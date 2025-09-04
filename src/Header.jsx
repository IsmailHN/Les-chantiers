import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "./assets/images/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="site-name">LES-CHANTIERS</div>
      </div>

      <div className="header-right" ref={menuRef}>
        <nav className="nav-links">
          <a href="#maritime">Maritime</a>
          <a href="#discovery">Discovery</a>
          <a href="#digital">Digital</a>
        </nav>

        <div className="menu">
          <button
            className="dropdown-btn"
            onClick={() => setDropdownOpen((v) => !v)}
            aria-expanded={dropdownOpen}
            aria-haspopup="menu"
          >
            Menu ▾
          </button>
          {dropdownOpen && (
            <div className={`dropdown ${scrolled ? "light" : "dark"}`} role="menu">
              <a href="/page1">Page 1</a>
              <a href="/page2">Page 2</a>
              <a href="/page3">Page 3</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

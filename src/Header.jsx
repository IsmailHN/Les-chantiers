import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">MyWebsite</div>
      <div className="menu">
        <button
          className="dropdown-btn"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Menu ▾
        </button>
        {dropdownOpen && (
          <div className="dropdown">
            <a href="/page1">Page 1</a>
            <a href="/page2">Page 2</a>
            <a href="/page3">Page 3</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

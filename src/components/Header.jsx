import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isTop = location.pathname === "/";

  const handleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // ページ内リンクかルート＋アンカーかを切り替え
  const navLinks = [
    { label: "HOME", href: "#home", anchor: "/#home" },
    { label: "WORKS", href: "#works", anchor: "/#works" },
    { label: "ABOUT", href: "#about", anchor: "/#about" },
    { label: "CONTACT", href: "#contact", anchor: "/#contact" },
  ];

  return (
    <header className="header">
      <div className="header-logo">
        <a
          href="https://x.com/Ruprous"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <img src={logo} alt="Logo" />
          <span className="logo-circle">
            <svg>
              <circle cx="27" cy="27" r="25" />
            </svg>
          </span>
        </a>
      </div>
      <nav className="header-nav">
        <ul>
          {navLinks.map(link => (
            <li key={link.label}>
              {isTop ? (
                <a href={link.href}>{link.label}</a>
              ) : (
                <Link to={link.anchor}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="hamburger" onClick={handleMenu}>
        <span />
        <span />
        <span />
      </div>
      <nav className={`side-menu${menuOpen ? " open" : ""}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.label}>
              {isTop ? (
                <a href={link.href} onClick={closeMenu}>{link.label}</a>
              ) : (
                <Link to={link.anchor} onClick={closeMenu}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 120,
            background: "rgba(0,0,0,0.1)"
          }}
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;
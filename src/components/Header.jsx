import React, { useState } from "react";
import "./Header.css";
import logo from "../images/logo/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#works">WORKS</a></li> {/* ← ここを修正 */}
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={handleMenu}>
        <span />
        <span />
        <span />
      </div>
      <nav className={`side-menu${menuOpen ? " open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>HOME</a></li>
          <li><a href="#works" onClick={closeMenu}>WORKS</a></li> {/* ← ここを修正 */}
          <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
          <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
        </ul>
      </nav>
      {/* サイドメニュー表示時の背景クリックで閉じる */}
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
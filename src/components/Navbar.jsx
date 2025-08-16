import React, { useState, useEffect } from 'react';
import '../components/CSS/navbar.css';
import { FaHome, FaServicestack, FaInfoCircle, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <button
        className={`burger left-burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`logo sticky-logo${scrolled ? ' scrolled' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: scrolled ? 'pointer' : 'default' }}
      >
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className={`sidebar-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <button onClick={() => {
              document.getElementById("home").scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}>
              <FaHome className="nav-icon" /> Home
            </button>
          </li>
          <li>
            <button onClick={() => {
              document.getElementById("services").scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}>
              <FaServicestack className="nav-icon" /> Services
            </button>
          </li>
          <li>
            <button onClick={() => {
              document.getElementById("about").scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}>
              <FaInfoCircle className="nav-icon" /> About
            </button>
          </li>
          <li>
            <button onClick={() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}>
              <FaEnvelope className="nav-icon" /> Contact
            </button>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </nav>
  );
}

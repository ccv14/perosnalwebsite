import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import TrueFocus from "./TrueFocus/TrueFocus";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaComments,
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuOpen &&
      !menuRef.current.contains(event.target) &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const leftButtons = [
    {
      id: 1,
      icon: <FaHome />,
      label: "Home",
      aria: "Navigate to Home section",
    },
    {
      id: 2,
      icon: <FaUser />,
      label: "About",
      aria: "Navigate to About section",
    },
    {
      id: 3,
      icon: <FaProjectDiagram />,
      label: "Projects",
      aria: "Navigate to Projects section",
    },
    {
      id: 4,
      icon: <FaComments />,
      label: "Blog",
      aria: "Navigate to Blog section",
    },
  ];

  const rightButtons = [
    {
      id: 5,
      icon: <FaEnvelope />,
      label: "Email",
      aria: "Contact via Email",
      link: "mailto:claudiu.cuciureanu@outlook.com",
    },
    {
      id: 6,
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      aria: "Contact via WhatsApp",
      link: "https://wa.me/0753504765",
    },
    {
      id: 7,
      icon: <FaGithub />,
      label: "GitHub",
      aria: "View GitHub profile",
      link: "https://github.com/ccv14",
    },
    {
      id: 8,
      icon: <FaLinkedin />,
      label: "LinkedIn",
      aria: "View LinkedIn profile",
      link: "https://linkedin.com/in/claudiu-cuciureanu",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta
          name="description"
          content="Professional portfolio showcasing skills, projects, and contact information"
        />
        <meta property="og:title" content="Your Professional Portfolio" />
        <meta
          property="og:description"
          content="Explore my work and get in touch"
        />
      </Helmet>

      <nav className="navbar">
        <div className="nav-section left-buttons">
          {leftButtons.map((btn) => (
            <a
              key={btn.id}
              href={`#${btn.label.toLowerCase()}`}
              className="nav-button"
              aria-label={btn.aria}
              onMouseEnter={() => setHoveredButton(btn.id)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {btn.icon}
              <span className="sr-only">{btn.label}</span>
            </a>
          ))}
        </div>

        <div className="logo-container">
          <TrueFocus
            sentence="Claudiu Cuciureanu"
            manualMode={false}
            blurAmount={4}
            borderColor="#6755F1"
            animationDuration={2}
            pauseBetweenAnimations={1}
            textColor="#ffffff"
          />
        </div>

        <div className="nav-section right-buttons">
          {rightButtons.map((btn) => (
            <a
              key={btn.id}
              href={btn.link}
              className="nav-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={btn.aria}
              onMouseEnter={() => setHoveredButton(btn.id)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {btn.icon}
              <span className="sr-only">{btn.label}</span>
            </a>
          ))}
        </div>

        <div
          className="hamburger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          ref={hamburgerRef}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <div className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <div className="mobile-menu-content">
          <ul>
            {[...leftButtons, ...rightButtons].map((btn, index) => (
              <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <a
                  href={btn.link || `#${btn.label.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  aria-label={btn.aria}
                >
                  {btn.icon}
                  <span>{btn.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

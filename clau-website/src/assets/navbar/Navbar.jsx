import React, { useState, useEffect, useRef } from "react";
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    {
      id: 1,
      icon: <FaHome />,
      label: "Home",
      aria: "Navigate to Home section",
      link: "#home",
    },
    {
      id: 2,
      icon: <FaUser />,
      label: "About",
      aria: "Navigate to About section",
      link: "#about",
    },
    {
      id: 3,
      icon: <FaProjectDiagram />,
      label: "Projects",
      aria: "Navigate to Projects section",
      link: "#projects",
    },
    {
      id: 4,
      icon: <FaComments />,
      label: "Contact",
      aria: "Navigate to Contact section",
      link: "#contact",
    },
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

  const leftButtons = navItems.slice(0, 4);
  const rightButtons = navItems.slice(4);

  return (
    <>
      <nav className="navbar">
        <div className="nav-section left-buttons">
          {leftButtons.map((btn) => (
            <a
              key={btn.id}
              href={btn.link}
              className="nav-button"
              aria-label={btn.aria}
              target={btn.link.startsWith("http") ? "_blank" : undefined}
              rel={
                btn.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {btn.icon}
            </a>
          ))}
        </div>

        <div className="logo-container">
          <TrueFocus
            sentence="Web Developer"
            manualMode={true}
            borderColor="var(--neon-purple)"
            glowColor="var(--neon-purple)"
          />
        </div>

        <div className="nav-section right-buttons">
          {rightButtons.map((btn) => (
            <a
              key={btn.id}
              href={btn.link}
              className="nav-button"
              aria-label={btn.aria}
              target="_blank"
              rel="noopener noreferrer"
            >
              {btn.icon}
            </a>
          ))}
        </div>

        <div
          className="hamburger-menu"
          onClick={toggleMenu}
          ref={hamburgerRef}
          aria-label="Toggle menu"
        >
          <div className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <div className="mobile-menu-header">
          <button
            className="close-menu-button"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <div className="mobile-menu-content">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={closeMenu}
                  aria-label={item.aria}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
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

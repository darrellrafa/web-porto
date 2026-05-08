"use client";

import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          const link = navLinks.find((l) => l.href === `#${id}`);
          if (link) setActive(link.label);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a className={styles.logo} href="#home" onClick={() => setActive("Home")}>
          <span className={styles.logoText}>Darrell</span>
          <span className={styles.logoDot}>.</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                className={`${styles.link} ${active === link.label ? styles.linkActive : ""}`}
                onClick={() => handleNavClick(link.label, link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className={styles.actions}>
          <ThemeToggle />
          <button
            className={styles.hireCta}
            onClick={() => handleNavClick("Contact", "#contact")}
          >
            Hire Me
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              className={`${styles.mobileLink} ${active === link.label ? styles.mobileLinkActive : ""}`}
              onClick={() => handleNavClick(link.label, link.href)}
            >
              {link.label}
            </button>
          ))}
          <div className={styles.mobileActions}>
            <ThemeToggle />
            <button
              className={styles.hireCta}
              onClick={() => handleNavClick("Contact", "#contact")}
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Theme Toggle ───────────────────────────────────────────── */
function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const theme = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("portfolio-theme", theme); } catch {}
  };

  if (!mounted) return <div className={styles.togglePlaceholder} />;

  return (
    <button
      onClick={toggle}
      className={styles.themeToggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? (
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      ) : (
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}

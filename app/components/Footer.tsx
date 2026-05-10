"use client";

import styles from "./Footer.module.css";
import { GitHubIcon, LinkedInIcon, TikTokIcon, InstagramIcon } from "./SocialIcons";

const socials = [
  { icon: GitHubIcon, href: "https://github.com/darrellrafa", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/darrellrafa/", label: "LinkedIn" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@darrell.mov", label: "TikTok" },
  { icon: InstagramIcon, href: "https://www.instagram.com/darrell.mp4/", label: "Instagram" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.topInner}>
            <div className={styles.brand}>
              <span className={styles.logoText}>Darrell</span>
              <span className={styles.logoDot}>.</span>
            </div>
            <p className={styles.tagline}>
              Building beautiful, performant web experiences.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.mid}>
        <div className="container">
          <div className={styles.midInner}>
            <nav className={styles.links}>
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.label === "Home" ? "#home" : l.href}
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(l.href.replace("#", ""))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className={styles.socials}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>
            © {year} Darrell Rafa Alamsyah. Built with{" "}
            <span className={styles.heart}>♥</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

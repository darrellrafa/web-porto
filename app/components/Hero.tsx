"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TikTokIcon, InstagramIcon } from "./SocialIcons";
import styles from "./Hero.module.css";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "8+", label: "Technologies" },
  { value: "20+", label: "Certificates" },
  // { value: "500+", label: "GitHub Commits" },
];

const socials = [
  { icon: GitHubIcon, href: "https://github.com/darrellrafa", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/darrellrafa/", label: "LinkedIn" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@darrell.mov", label: "TikTok" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
];

export default function Hero() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let angle = 0;
    const animate = () => {
      angle += 0.2;
      if (ringRef.current) {
        ringRef.current.style.transform = `rotate(${angle}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Left Column */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Available for Work</span>
          </div>

          <h1 className={styles.heading}>
            Hello, I&apos;m{" "}
            <span className={styles.accent}>Darrell Rafa Alamsyah</span>
          </h1>

          <div className={styles.roleRow}>
            <span className={styles.roleLine} />
            <span className={styles.role}>Full Stack Developer</span>
          </div>

          <p className={styles.bio}>
            Full-Stack Developer specializing in crafting seamless, high-converting digital experiences.
            From responsive web apps to robust mobile interfaces, I leverage modern frameworks to build performant products
            that bridge the gap between elegant design and functional code.
          </p>

          {/* Social Links */}
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
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className={styles.ctas}>
            <a 
              href="/cv/CV-Darrell%20Rafa%20Alamsyah.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn btn-outline ${styles.btnIcon}`}
            >
              <Download size={16} />
              Download CV
            </a>
            <button onClick={scrollToContact} className={`btn btn-primary ${styles.btnIcon}`}>
              Hire Me
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Column — Photo */}
        <div className={styles.photoWrapper}>
          <div className={styles.photoOuter}>
            {/* Spinning dashed ring */}
            <div className={styles.ring} ref={ringRef}>
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className={styles.ringDot}
                  style={{ "--i": i } as React.CSSProperties}
                />
              ))}
            </div>
            {/* Glow */}
            <div className={styles.glow} />
            {/* Photo */}
            <div className={styles.photo}>
              <Image
                src="/profile.png"
                alt="Darrell Rafa Alamsyah — Full Stack Developer"
                width={300}
                height={300}
                priority
                className={styles.photoImg}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsInner}>
            {stats.map((s, i) => (
              <div key={s.label} className={styles.stat}>
                {i > 0 && <div className={styles.statDivider} />}
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

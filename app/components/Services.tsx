"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Building fast, scalable, and responsive web applications using modern frameworks like React, Next.js, and Node.js with clean, maintainable code.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Designing intuitive user interfaces and seamless user experiences — from wireframes and prototypes to pixel-perfect, accessible final products.",
  },
  {
    num: "03",
    title: "Backend & APIs",
    desc: "Architecting robust RESTful and GraphQL APIs, database design, authentication systems, and cloud infrastructure using modern backend technologies.",
  },
  {
    num: "04",
    title: "Performance & SEO",
    desc: "Optimizing web performance, Core Web Vitals, and search engine ranking to ensure your product reaches the right audience at lightning speed.",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            My <span>Services</span>
          </h2>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`${styles.card} ${hovered === i ? styles.cardActive : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={styles.num}>{s.num}</div>
              <div className={styles.separator} />
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <div className={styles.arrow}>
                <ArrowRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

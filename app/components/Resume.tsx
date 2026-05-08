"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Code2, User } from "lucide-react";
import styles from "./Resume.module.css";

const tabs = [
  { label: "Experience", icon: Briefcase },
  { label: "Education", icon: GraduationCap },
  { label: "Skills", icon: Code2 },
  { label: "About Me", icon: User },
];

const experience = [
  {
    title: "Artificial Intelligence / Machine Learning Engineer Intern",
    company: "Syntecxhub",
    period: "05/2026 — Present",
    desc: "Working on AI Agent, building intelligent automation tools to streamline workflows and enhance user interactions.",
  },
  {
    title: "Web Developer Intern",
    company: "Syntecxhub",
    period: "03/2026 — 04/2026",
    desc: "Build website by order from office. Remote, India.",
  },
  {
    title: "Web Developer Intern",
    company: "Ministry of Communication and Digital INDONESIA",
    period: "11/2025 — 03/2026",
    desc: "Build a website portal for jobseeker. East Java, Indonesia.",
  },
  {
    title: "IT Support Technician",
    company: "PT Sansan Saudaratex Jaya",
    period: "01/2023 — 05/2023",
    desc: "Responsible for providing technical support and assistance. Troubleshoot hardware and software issues, manage IT systems. IT Hardware Support, Software Installation. Cimahi, Jawa Barat, Indonesia.",
  },
];

const education = [
  {
    title: "Candidate for Bachelor of Computer Science",
    company: "President University",
    period: "09/2024 — Present",
    desc: "GPA 3.57 / 4.00. Majoring in Informatics. Honors: Jababeka Scholarship Awardee (Rank-2) 2024 (Aug 2024 - Aug 2026).",
  },
  {
    title: "Vocational High School",
    company: "SMK Daarut Tauhiid",
    period: "08/2021 — 05/2024",
    desc: "Majoring in network engineering. Bandung.",
  },
];

const skills = [
  { name: "Backend Development", level: 90 },
  { name: "Web Development", level: 95 },
  { name: "Mobile Apps (Flutter)", level: 85 },
  { name: "AI / Machine Learning", level: 80 },
  { name: "Software Development", level: 85 },
  { name: "Python", level: 85 },
  { name: "Hardware Maintenance", level: 75 },
  { name: "Prompt Engineering", level: 80 },
];

const aboutInfo = [
  { label: "Name", value: "Darrell Rafa Alamsyah" },
  { label: "Nationality", value: "Indonesian" },
  { label: "Email", value: "darrell2645@gmail.com" },
  { label: "Location", value: "Jakarta, Indonesia" },
  { label: "Languages", value: "English, Indonesian" },
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">
            Why Hire <span>Me?</span>
          </h2>
          <div className="divider" />
        </div>

        <div className={styles.wrapper}>
          {/* Tab Buttons */}
          <div className={styles.tabs}>
            {tabs.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className={`${styles.tab} ${activeTab === label ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(label)}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={styles.content}>
            {/* Experience */}
            {activeTab === "Experience" && (
              <div className={styles.timeline}>
                {experience.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineCard}>
                      <div className={styles.timelineHeader}>
                        <div>
                          <h3 className={styles.itemTitle}>{item.title}</h3>
                          <p className={styles.itemCompany}>{item.company}</p>
                        </div>
                        <span className={styles.itemPeriod}>{item.period}</span>
                      </div>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {activeTab === "Education" && (
              <div className={styles.timeline}>
                {education.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineCard}>
                      <div className={styles.timelineHeader}>
                        <div>
                          <h3 className={styles.itemTitle}>{item.title}</h3>
                          <p className={styles.itemCompany}>{item.company}</p>
                        </div>
                        <span className={styles.itemPeriod}>{item.period}</span>
                      </div>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {activeTab === "Skills" && (
              <div className={styles.skills}>
                {skills.map((s) => (
                  <div key={s.name} className={styles.skillItem}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{s.name}</span>
                      <span className={styles.skillLevel}>{s.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillFill}
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* About Me */}
            {activeTab === "About Me" && (
              <div className={styles.aboutGrid}>
                {aboutInfo.map(({ label, value }) => (
                  <div key={label} className={styles.aboutItem}>
                    <span className={styles.aboutLabel}>{label}</span>
                    <span className={styles.aboutValue}>
                      {label === "Email" ? (
                        <a href={`mailto:${value}`} className={styles.aboutLink}>{value}</a>
                      ) : label === "Freelance" ? (
                        <span className={styles.available}>{value}</span>
                      ) : value}
                    </span>
                  </div>
                ))}
                <div className={`${styles.aboutItem} ${styles.aboutBio}`}>
                  <span className={styles.aboutLabel}>Bio</span>
                  <p className={styles.aboutValue}>
                    I am a Full-Stack Developer driven by the challenge of turning complex problems into intuitive,
                    user-centric solutions. With a strong foundation in modern web and mobile frameworks, I thrive at the intersection of
                    clean architecture and creative design. Outside of the IDE, I stay sharp by contributing to open-source projects, experimenting with emerging tech,
                    and finding fresh perspectives through outdoor adventures.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

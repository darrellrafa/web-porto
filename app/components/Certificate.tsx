"use client";

import { useState } from "react";
import { ExternalLink, Award, ChevronDown, ChevronUp } from "lucide-react";
import styles from "./Certificate.module.css";

const certificates = [
  {
    title: "Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    date: "2026",
    credentials: "2VX30542JXYQ",
    link: "https://www.dicoding.com/certificates/2VX30542JXYQ",
  },
  {
    title: "AI Praktis untuk Produktivitas",
    issuer: "Dicoding Indonesia",
    date: "2026",
    link: "https://www.dicoding.com/certificates/98XW05LK9XM3",
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM",
    date: "2026",
    credentials: "d4ce8aae-6e70-4376-bf70-d464a4d70953",
    link: "https://www.credly.com/earner/earned/badge/d4ce8aae-6e70-4376-bf70-d464a4d70953",
  },
  {
    title: "Data Literacy",
    issuer: "IBM",
    date: "2026",
    credentials: "253bb31a-e9e3-4776-8162-eca9c7969b72",
    link: "https://www.credly.com/earner/earned/badge/253bb31a-e9e3-4776-8162-eca9c7969b72",
  },
  {
    title: "AI Literacy",
    issuer: "IBM",
    date: "2026",
    credentials: "fba5b44b-1bc4-4ec3-b554-43417ab0dbac",
    link: "https://www.credly.com/earner/earned/badge/fba5b44b-1bc4-4ec3-b554-43417ab0dbac",
  },
  {
    title: "AI Ethics",
    issuer: "IBM",
    date: "2026",
    credentials: "ALM-COURSE_4058927",
    link: "https://skills.yourlearning.ibm.com/certificate/share/88eabacce9ewogICJvYmplY3RJZCIgOiAiQUxNLUNPVVJTRV80MDU4OTI3IiwKICAibGVhcm5lckNOVU0iIDogIjc1NDg4MDNSRUciLAogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIKfQ6432ef7d80-10",
  },
  {
    title: "Exploring Artificial Intelligence",
    issuer: "IBM",
    date: "2026",
    credentials: "ALM-COURSE_3825247",
    link: "https://skills.yourlearning.ibm.com/certificate/share/dd1a98b0eeewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgIm9iamVjdElkIiA6ICJBTE0tQ09VUlNFXzM4MjUyNDciLAogICJsZWFybmVyQ05VTSIgOiAiNzU0ODgwM1JFRyIKfQe8fc248f3b-10",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM",
    date: "2026",
    credentials: "ALM-COURSE_4058918",
    link: "https://skills.yourlearning.ibm.com/certificate/share/d99d063cdcewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICI3NTQ4ODAzUkVHIiwKICAib2JqZWN0SWQiIDogIkFMTS1DT1VSU0VfNDA1ODkxOCIKfQc7e52a716e-10",
  },
  {
    title: "Fundamental Data Processing",
    issuer: "Dicoding Indonesia",
    date: "2026",
    credentials: "N9ZONO2ORXG5",
    link: "https://www.dicoding.com/certificates/N9ZONO2ORXG5",
  },
  {
    title: "Building AI Gen Applications with Microsoft Azure",
    issuer: "Dicoding Indonesia",
    date: "2026",
    credentials: "1OP8RN22LZQK",
    link: "https://www.dicoding.com/certificates/1OP8RN22LZQK",
  },
  {
    title: "Implementing Data Science with Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    date: "2026",
    credentials: "QLZ9943QMZ5D",
    link: "https://www.dicoding.com/certificates/QLZ9943QMZ5D",
  },
  {
    title: "Machine Learning for Beginners",
    issuer: "Dicoding Indonesia",
    date: "2026",
    credentials: "6RPN7V1M9X2M",
    link: "https://www.dicoding.com/certificates/6RPN7V1M9X2M",
  },
  {
    title: "Programming with Python",
    issuer: "Dicoding Indonesia",
    date: "2026",
    credentials: "RVZK08R1OZD5",
    link: "https://www.dicoding.com/certificates/RVZK08R1OZD5",
  },
  {
    title: "Prompt Engineering for Software Developers",
    issuer: "Dicoding Indonesia",
    date: "2026",
    credentials: "MEPJOYEMLZ3V",
    link: "https://www.dicoding.com/certificates/MEPJOYEMLZ3V",
  },
  {
    title: "Learn AI Basics",
    issuer: "Dicoding Indonesia",
    date: "2026",
    credentials: "1RXYW056QZVM",
    link: "https://www.dicoding.com/certificates/1RXYW056QZVM",
  },
  {
    title: "Programming and Software Development - Junior Web Developer",
    issuer: "BNSP",
    date: "2026",
    credentials: "J.1389.01671.2025",
    link: "https://media.licdn.com/dms/image/v2/D562DAQHOc-Lp3CYv3Q/profile-treasury-image-shrink_1280_1280/B56ZxClDAVHAAQ-/0/1770643537916?e=1778850000&v=beta&t=udWey5eJHrotaCHGjUNfB2i2rtI1E0oAVETMo6A-XUc",
  },
  {
    title: "MTCRE",
    issuer: "MikroTik",
    date: "2023",
    credentials: "2301RE1653",
    link: "https://mikrotik.com/training/certificates/c251653c70fe235627da",
  },
  {
    title: "MTCNA",
    issuer: "MikroTik",
    date: "2022",
    credentials: "2210NA3409",
    link: "https://mikrotik.com/training/certificates/c243409ca2ca76afdaa8",
  },
  {
    title: "HTML Fundamentals course",
    issuer: "Sololearn",
    date: "2019",
    credentials: "CT-CL9XNUN8",
    link: "https://www.sololearn.com/Certificate/CT-CL9XNUN8/jpg",
  },
  {
    title: "Android Apps for Beginners",
    issuer: "Dicoding Indonesia",
    date: "2019",
    credentials: "RVZK18NKOPD5",
    link: "https://www.dicoding.com/certificates/RVZK18NKOPD5",
  },
  {
    title: "Web Programming Basics",
    issuer: "Dicoding Indonesia",
    date: "2019",
    credentials: "1OP8LN9L8ZQK",
    link: "https://dicoding.com/certificates/1OP8LN9L8ZQK",
  },
  // {
  //   title: "",
  //   issuer: "",
  //   date: "",
  //   credentials: "",
  //   link: "",
  // },
  // {
  //   title: "",
  //   issuer: "",
  //   date: "",
  //   credentials: "",
  //   link: "",
  // },
  // {
  //   title: "",
  //   issuer: "",
  //   date: "",
  //   credentials: "",
  //   link: "",
  // },
  // {
  //   title: "",
  //   issuer: "",
  //   date: "",
  //   credentials: "",
  //   link: "",
  // },
  // {
  //   title: "",
  //   issuer: "",
  //   date: "",
  //   credentials: "",
  //   link: "",
  // },
  // {
  //   title: "",
  //   issuer: "",
  //   date: "",
  //   credentials: "",
  //   link: "",
  // },
];

export default function Certificate() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter out any completely empty certificates that might have been added as placeholders
  const validCertificates = certificates.filter(cert => cert.title && cert.title.trim() !== "");

  const initialLimit = 6;
  const displayedCertificates = isExpanded ? validCertificates : validCertificates.slice(0, initialLimit);

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">
            My <span>Certificates</span>
          </h2>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {displayedCertificates.map((cert, i) => (
            <div key={i} className={styles.card}>
              <Award size={28} color="var(--accent)" style={{ marginBottom: '0.5rem' }} />
              <h3 className={styles.title}>{cert.title}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              <span className={styles.date}>{cert.date}</span>
              {cert.credentials && (
                <span className={styles.credential}>Credential ID: {cert.credentials}</span>
              )}
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View Certificate <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>

        {validCertificates.length > initialLimit && (
          <div className={styles.actionContainer}>
            <button
              className={styles.toggleBtn}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>Show Less <ChevronUp size={18} /></>
              ) : (
                <>Show All ({validCertificates.length}) <ChevronDown size={18} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

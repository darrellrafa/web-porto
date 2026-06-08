"use client";

import { useState } from "react";
import { Code2, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Work.module.css";

const categories = ["All", "Web App", "AI/ML", "Mobile"];

const projects = [
  {
    title: "Design Anything",
    categories: ["AI/ML", "Web App"],
    desc: "A platform for editing photos with AI features like background removal, style changes, and background replacement. Integrated AI models via API.",
    tech: ["Python", "AI API", "Backend"],
    github: "https://github.com/darrellrafa/DesignEverything",
    live: "https://github.com/darrellrafa/DesignEverything",
    color: "#6366f1",
    images: ["/projects/ds1.jpg", "/projects/ds2.jpg", "/projects/ds3.jpg",]
  },
  {
    title: "NutriBot",
    categories: ["AI/ML", "Web App"],
    desc: "A chatbot website for consulting about nutrition, diets, and daily meal prep to maintain daily calories. Built the database and fine-tuned the LLM model.",
    tech: ["LLM", "Database", "Backend"],
    github: "https://github.com/darrellrafa/Nutribot",
    live: "https://nutribot-testing.vercel.app/",
    color: "#00ff99",
    images: ["/projects/Nutribot-1.png", "/projects/Nutribot-2.png"],
  },
  {
    title: "Meet & Fight",
    categories: ["Mobile"],
    desc: "A platform to find martial arts sparring partners. Built mobile application with Flutter and connected database using Appwrite.",
    tech: ["Flutter", "Appwrite", "Mobile"],
    github: "https://github.com",
    live: "http://meetandfight.vercel.app/",
    color: "#6366f1",
    images: ["/projects/meet1.png", "/projects/meet2.png"],
  },
  {
    title: "E-Learning",
    categories: ["Web App", "AI/ML"],
    desc: "An interactive e-learning platform that transforms education into a gamified adventure for children. Built with Next.js and Appwrite, it features a linear node-based progression system, an unlockable virtual economy, and dynamic themes. The platform also integrates the Groq API to provide a personalized AI tutor that analyzes student performance and offers tailored feedback after every exam.",
    tech: ["Next.js", "Appwrite", "Groq API", "Web App"],
    github: "https://github.com/darrellrafa/e-learning",
    live: "https://e-learning-softeng-project.vercel.app/",
    color: "#ec4899",
    images: ["/projects/e-learning-1.png", "/projects/e-learning-2.png", "/projects/e-learning-3.png"],
  },
  {
    title: "Roadmap-AI",
    categories: ["Web App", "AI/ML"],
    desc: "An AI-powered learning path generator that helps users create personalized study roadmaps. Built with a Next.js frontend and a Python backend utilizing SQLite, it leverages artificial intelligence to customize career paths, milestones, and learning resources.",
    tech: ["Next.js", "Python", "Web App", "Sqlite"],
    github: "https://github.com/darrellrafa/Roadmap-ai",
    // live: "http://meetandfight.vercel.app/",
    color: "#ec4899",
    images: ["/projects/roadmap-1.png", "/projects/roadmap-2.png", "/projects/roadmap-3.png"],
  },
  {
    title: "Relity999",
    categories: ["Web App"],
    desc: "A company profile website of a clothing company brand named Relity999.",
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "https://github.com/darrellrafa/relity999",
    live: "https://relity999.netlify.app",
    color: "#be47c9",
    images: ["/projects/relity-1.png", "/projects/relity-2.png", "/projects/relity-3.png"]
  },
  {
    title: "ora-bwakal face",
    categories: ["AI/ML"],
    desc: "Just some fun random project using computer vision to detect or track face using ",
    tech: ["Python", "Computer Vision", "OpenCV"],
    github: "https://github.com/darrellrafa/ora-bwakal-face",
    // live: "https://relity999.netlify.app",
    color: "#be47c9",
    images: ["/projects/ora-bwakal-face.mp4"]
  },
  {
    title: "Final Exam DSA",
    categories: ["Web App"],
    desc: "Web page for find answers for final exam of Data Structure and Algorithms.",
    tech: ["Next.js", "Tailwind"],
    github: "https://github.com/darrellrafa/final-exam-dsa",
    live: "https://final-exam-dsa.vercel.app/",
    color: "#be47c9",
    images: ["/projects/dsa-1.png", "/projects/dsa-2.png", "/projects/dsa-3.png"]
  },
  {
    title: "emotion-face-detection",
    categories: ["AI/ML"],
    desc: "Just some fun random project using computer vision to detect or track face emotion",
    tech: ["Python", "Computer Vision", "OpenCV"],
    github: "https://github.com/darrellrafa/emotion-face",
    // live: "https://relity999.netlify.app",
    color: "#be47c9",
    images: ["/projects/emotion-face.mp4"]
  },
  {
    title: "ADA Property",
    categories: ["Web App"],
    desc: "ADA Property is a marketplace website that sells property ",
    tech: ["Laravel", "Next.js", "Database"],
    github: "https://github.com/darrellrafa/ADAProperty",
    live: "https://adaproindonesia.com/",
    color: "#be47c9",
    images: ["/projects/ada-property-1.png", "/projects/ada-property-2.png", "/projects/ada-property-3.png"]
  },

];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  const project = filtered[activeProject] ?? filtered[0];

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setActiveProject(0);
    setImgIndex(0);
  };

  const handleProject = (idx: number) => {
    setActiveProject(idx);
    setImgIndex(0);
  };

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            My <span>Work</span>
          </h2>
          <div className="divider" />
        </div>

        {/* Category Filter */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filter} ${activeCategory === cat ? styles.filterActive : ""}`}
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 && project && (
          <div className={styles.showcase}>
            {/* Left: Info */}
            <div className={styles.info}>
              {/* Project list */}
              <div className={styles.projectList}>
                {filtered.map((p, i) => (
                  <button
                    key={p.title}
                    className={`${styles.projectBtn} ${activeProject === i ? styles.projectBtnActive : ""}`}
                    onClick={() => handleProject(i)}
                  >
                    <span className={styles.projectNum}>0{i + 1}</span>
                    <span className={styles.projectBtnTitle}>{p.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Project Details */}
              <div className={styles.details}>
                <div className={styles.detailsTag} style={{ color: project.color }}>
                  {project.categories.join(", ")}
                </div>
                <h3 className={styles.detailsTitle}>{project.title}</h3>
                <p className={styles.detailsDesc}>{project.desc}</p>

                <div className={styles.techStack}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techBadge}>{t}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    <Code2 size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Image Showcase */}
            <div className={styles.imageArea}>
              <div
                className={styles.imagePlaceholder}
                style={{ borderColor: project.color + "40" }}
              >
                {/* Decorative project preview */}
                <div className={styles.mockBrowser}>
                  <div className={styles.mockBar}>
                    <span className={styles.mockDot} style={{ background: "#ff5f57" }} />
                    <span className={styles.mockDot} style={{ background: "#ffbd2e" }} />
                    <span className={styles.mockDot} style={{ background: "#28c840" }} />
                    <div className={styles.mockUrl}>
                      <span>{project.live}</span>
                    </div>
                  </div>
                  <div className={styles.projectImageContainer}>
                    {project.images[imgIndex].endsWith(".mp4") || project.images[imgIndex].endsWith(".webm") ? (
                      <video
                        src={project.images[imgIndex]}
                        className={styles.projectImage}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.images[imgIndex]}
                        alt={`${project.title} preview`}
                        className={styles.projectImage}
                      />
                    )}
                  </div>
                </div>

                {/* Image nav controls */}
                <div className={styles.imgControls}>
                  <button
                    className={styles.imgArrow}
                    onClick={() => setImgIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className={styles.imgDots}>
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        className={`${styles.imgDot} ${imgIndex === i ? styles.imgDotActive : ""}`}
                        onClick={() => setImgIndex(i)}
                        style={{ background: imgIndex === i ? project.color : undefined }}
                      />
                    ))}
                  </div>
                  <button
                    className={styles.imgArrow}
                    onClick={() => setImgIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

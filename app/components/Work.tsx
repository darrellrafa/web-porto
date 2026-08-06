"use client";

import { useState } from "react";
import { Code2, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Work.module.css";

const categories = ["All", "Web App", "AI/ML", "Mobile", "Game and 3D"];

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
    github: "https://github.com/darrellrafa/might",
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
  {
    title: "Industrial Escape: The Abandoned Factory",
    categories: ["Game and 3D"],
    desc: ["Trapped at night in an abandoned industrial factory controlled by a hostile presence, players must scavenge for components to manually repair the security system and unlock the main gate to escape. Features a fully playable 3D level implementing the 'Collect → Activate → Unlock' gameplay loop, utilizing Server/Client-side Lua scripts and a minimum of 10 custom 3D assets created in Blender."],
    tech: ["Roblox", "Blender", "C#"],
    live: "https://www.roblox.com/id/games/101945798277987/Final-Project#!/about",
    color: "#045535",
    images: [
      "/projects/roblox-1.png",
      "/projects/roblox-2.png",
      "/projects/roblox-3.png",
      "/projects/roblox-4.jpeg",
      "/projects/roblox-5.png",
      "/projects/roblox-6.png",
      "/projects/roblox-7.png",
      "/projects/roblox-8.png",
      "/projects/roblox-9.png",
      "/projects/roblox-10.png",
      "/projects/roblox-11.png",
      "/projects/roblox-12.png",
      "/projects/roblox-13.png",
      "/projects/roblox-14.png",
    ]
  },
  {
    title: "Camera AI – Dynamic Software",
    categories: ["Web App", "AI/ML"],
    desc: `This project was made during my bootcamp journey in collaboration with Astra Otoparts WINTEQ called VeriVision.

In modern smart manufacturing of Industry 4.0, traditional Automated Visual Inspection systems often suffer from a major bottleneck due to hardcoded configurations that require tedious source code updates for every new product line or customer change.

To solve this challenge, our team built VeriVision as a configuration driven, on premise AI visual inspection platform designed to transition deployment times from weeks to mere minutes.

Key Highlights and Architecture:

 - Configuration Driven Engine treats inspection logic as data through JSON templates enabling zero code setup for new inspection workflows via a clean web interface.

 - End to End AI Training Pipeline is powered by Ultralytics YOLOv8 for object detection and classification alongside MobileSAM for automated polygon annotation in our built in AI Studio allowing engineers to train and deploy models straight from the browser.

 - VeriAssist Chatbot acts as a hybrid heuristic and local LLM assistant using Ollama and Llama to provide natural language access to production history and insights.

 - Smart Alert Engine and Integrations handle proactive anomaly detection like burst defects and model drift with real time Webhook and MQTT event dispatches for PLC integration.
`,
    tech: ["Next.js", "Python", "Web App", "Sqlite", "React", "FastAPI", "SQLAlchemy", "Ultralytics YOLOv8", "MobileSAM", "Ollama"],
    github: "https://github.com/darrellrafa/Camera-AI-VeriVision",
    color: "#ec4899",
    images: [
      "/projects/camera-ai-1.jpg",
      "/projects/camera-ai-2.jpg",
      "/projects/camera-ai-3.jpg",
      "/projects/camera-ai-4.jpg",
      "/projects/camera-ai-5.jpg",
      "/projects/camera-ai-6.jpg",
      "/projects/camera-ai-7.jpg",
      "/projects/camera-ai-8.jpg",
      "/projects/camera-ai-9.jpg",
      "/projects/camera-ai-10.jpg",
    ],
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
    setActiveProject((prev) => (prev === idx ? -1 : idx));
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

        {filtered.length > 0 && (
          <div className={styles.projectList}>
            {filtered.map((p, i) => {
              const isActive = activeProject === i;
              const isRendered = isActive && project;
              
              return (
                <div key={p.title} className={styles.projectItemWrapper}>
                  <button
                    className={`${styles.projectBtn} ${isActive ? styles.projectBtnActive : ""}`}
                    onClick={() => handleProject(i)}
                  >
                    <span className={styles.projectNum}>0{i + 1}</span>
                    <span className={styles.projectBtnTitle}>{p.title}</span>
                  </button>

                  {isRendered && (
                    <div className={styles.showcase} style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                      {/* Left: Info */}
                      <div className={styles.info}>
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
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.linkBtn}
                              >
                                <Code2 size={16} />
                                GitHub
                              </a>
                            )}
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
                              >
                                <ExternalLink size={16} />
                                Live Demo
                              </a>
                            )}
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
                                <span>{project.live || project.github || "localhost:3000"}</span>
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
                              {project.images.map((_, idx) => (
                                <button
                                  key={idx}
                                  className={`${styles.imgDot} ${imgIndex === idx ? styles.imgDotActive : ""}`}
                                  onClick={() => setImgIndex(idx)}
                                  style={{ background: imgIndex === idx ? project.color : undefined }}
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
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

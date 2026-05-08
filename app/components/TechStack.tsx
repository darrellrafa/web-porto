"use client";

import styles from "./TechStack.module.css";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPython, SiExpress, SiLaravel,
  SiPostgresql, SiMongodb, SiMysql, SiAppwrite,
  SiGit, SiDocker, SiFigma
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const categories = [
  {
    label: "Frontend",
    techs: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Express", icon: SiExpress, color: "#888888" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    ],
  },
  {
    label: "Database",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Appwrite", icon: SiAppwrite, color: "#FD366E" },
    ],
  },
  {
    label: "Tools & DevOps",
    techs: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">My Arsenal</span>
          <h2 className="section-title">
            Tech <span>Stack</span>
          </h2>
          <div className="divider" />
        </div>

        <div className={styles.categories}>
          {categories.map((cat) => (
            <div key={cat.label} className={styles.category}>
              <h3 className={styles.categoryLabel}>{cat.label}</h3>
              <div className={styles.grid}>
                {cat.techs.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className={styles.card}
                    style={{ "--glow": color } as React.CSSProperties}
                  >
                    <div className={styles.icon}>
                      <Icon size={44} color={color} />
                    </div>
                    <span className={styles.name}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { stackGroups } from "@/data/portfolio";
import Image from "next/image";
import styles from "./Toolkit.module.css";

const toolLabels: Record<string, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  java: "Java",
  sql: "SQL",
  html5: "HTML",
  css: "CSS",
  react: "React",
  "next.js": "Next.js",
  tailwind: "Tailwind CSS",
  vite: "Vite",
  "radix-ui": "Radix UI",
  lucide: "Lucide React",
  motion: "Motion",
  "three.js": "Three.js",
  "react-markdown": "React Markdown",
  vercel: "Vercel",
  "node.js": "Node.js",
  express: "Express",
  "firebase-auth": "Firebase Authentication",
  "firebase-admin": "Firebase Admin SDK",
  postgresql: "PostgreSQL",
  firestore: "Cloud Firestore",
  "gemini-api": "Google Gemini API",
  jwt: "JWT",
  bcrypt: "bcrypt",
  "google-sheets": "Google Sheets",
  "google-apps-script": "Google Apps Script",
  selenium: "Selenium",
  gspread: "gspread",
  "looker-studio": "Looker Studio",
  git: "Git",
  github: "GitHub",
};

const toolIcons: Record<string, string[]> = {
  javascript: ["javascript"],
  typescript: ["typescript"],
  python: ["python"],
  java: ["openjdk"],
  html5: ["html5"],
  css: ["css"],
  react: ["react"],
  "next.js": ["nextdotjs"],
  tailwind: ["tailwindcss"],
  vite: ["vite"],
  "radix-ui": ["radixui"],
  lucide: ["lucide"],
  "three.js": ["threedotjs"],
  vercel: ["vercel"],
  "node.js": ["nodedotjs"],
  express: ["express"],
  "firebase-auth": ["firebase"],
  "firebase-admin": ["firebase"],
  postgresql: ["postgresql"],
  firestore: ["firebase"],
  "gemini-api": ["googlegemini"],
  "google-sheets": ["googlesheets"],
  "google-apps-script": ["googleappsscript"],
  selenium: ["selenium"],
  gspread: ["googlesheets"],
  "looker-studio": ["looker"],
  git: ["git"],
  github: ["github"],
};

const toolMonograms: Record<string, string> = {
  sql: "DB",
  jwt: "ID",
  bcrypt: "#",
  motion: "M",
  "react-markdown": "MD",
  npm: "npm",
};

export default function Toolkit() {
  return (
    <section className={styles.toolkit} id="toolkit">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className={`section-tag ${styles.sectionTag}`}>{"// Toolkit"}</span>
            <h2 className="section-title">Tecnologias e ferramentas</h2>
          </div>
          <p className={`section-note ${styles.sectionNote}`}>
            Da automação de processos internos à análise dos dados que ela
            gera.
          </p>
        </div>

        <div className={styles.stackGrid}>
          {stackGroups.map((group) => (
            <div className={styles.stackGroup} key={group.title}>
              <h3>{group.title}</h3>
              <div className={styles.chipRow}>
                {group.items.map((item) => (
                  <span className={styles.chip} key={item}>
                    <span className={styles.toolIcons} aria-hidden="true">
                      {toolIcons[item] ? (
                        toolIcons[item].map((icon) => (
                          <Image
                            key={icon}
                            src={`/tool-icons/${icon}.svg`}
                            alt=""
                            width={18}
                            height={18}
                          />
                        ))
                      ) : (
                        <span className={styles.toolMonogram}>
                          {toolMonograms[item]}
                        </span>
                      )}
                    </span>
                    <span>{toolLabels[item] ?? item}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use strict";

const stackItems = [
  ["JavaScript", "Linguagens", "javascript"],
  ["TypeScript", "Linguagens", "typescript"],
  ["Python", "Linguagens", "python"],
  ["Java", "Linguagens", "openjdk"],
  ["SQL", "Linguagens", "database"],
  ["HTML", "Frontend", "html5"],
  ["CSS", "Frontend", "css"],
  ["React", "Frontend", "react"],
  ["Next.js", "Frontend", "nextdotjs"],
  ["Tailwind CSS", "Frontend", "tailwindcss"],
  ["Vite", "Frontend", "vite"],
  ["Radix UI", "Frontend", "radixui"],
  ["Lucide React", "Frontend", "lucide"],
  ["Motion", "Frontend", "motion"],
  ["Three.js", "Frontend", "threedotjs"],
  ["React Markdown", "Frontend", "react-markdown"],
  ["Node.js", "Backend & APIs", "nodedotjs"],
  ["Express", "Backend & APIs", "express"],
  ["Firebase Authentication", "Backend & APIs", "firebase"],
  ["Firebase Admin SDK", "Backend & APIs", "firebase"],
  ["JWT", "Backend & APIs", "jwt"],
  ["bcrypt", "Backend & APIs", "bcrypt"],
  ["PostgreSQL", "Banco de dados", "postgresql"],
  ["Cloud Firestore", "Banco de dados", "firebase"],
  ["Google Gemini API", "Inteligência artificial", "googlegemini"],
  ["Google Sheets", "Automação & análise de dados", "googlesheets"],
  ["Google Apps Script", "Automação & análise de dados", "googleappsscript"],
  ["Selenium", "Automação & análise de dados", "selenium"],
  ["gspread", "Automação & análise de dados", "googlesheets"],
  ["Looker Studio", "Automação & análise de dados", "looker"],
  ["Vercel", "Ferramentas de desenvolvimento", "vercel"],
  ["npm", "Ferramentas de desenvolvimento", "npm"],
  ["Git", "Ferramentas de desenvolvimento", "git"],
  ["GitHub", "Ferramentas de desenvolvimento", "github"],
];

const toolMonograms = {
  database: "DB",
  motion: "M",
  "react-markdown": "MD",
  jwt: "ID",
  bcrypt: "#",
  npm: "npm",
};

function createStackChip([name, category, icon]) {
  const chip = document.createElement("span");
  chip.className = "stack-chip";
  chip.setAttribute("role", "listitem");

  if (toolMonograms[icon]) {
    const monogram = document.createElement("span");
    monogram.className = "tool-monogram";
    monogram.setAttribute("aria-hidden", "true");
    monogram.textContent = toolMonograms[icon];
    chip.append(monogram);
  } else {
    const image = document.createElement("img");
    image.src = `public/tool-icons/${icon}.svg`;
    image.alt = "";
    image.width = 20;
    image.height = 20;
    image.loading = "lazy";
    chip.append(image);
  }

  const copy = document.createElement("span");
  copy.className = "stack-chip-copy";
  const title = document.createElement("strong");
  title.textContent = name;
  const label = document.createElement("small");
  label.textContent = category;
  copy.append(title, label);
  chip.append(copy);
  return chip;
}

document.querySelectorAll("[data-stacks-marquee]").forEach((marquee) => {
  marquee.setAttribute("role", "list");
  const firstTrack = document.createElement("div");
  firstTrack.className = "stack-track";
  firstTrack.setAttribute("role", "presentation");

  const secondTrack = firstTrack.cloneNode(false);
  secondTrack.setAttribute("aria-hidden", "true");
  [firstTrack, secondTrack].forEach((track) => {
    [...stackItems, ...stackItems].forEach((item) => {
      track.append(createStackChip(item));
    });
  });
  marquee.append(firstTrack, secondTrack);
});

const stackGroups = document.querySelector("[data-stack-groups]");
if (stackGroups) {
  const groups = new Map();
  stackItems.forEach((item) => {
    const [name, category, icon] = item;
    if (!groups.has(category)) groups.set(category, []);

    const technology = document.createElement("li");
    technology.className = "technology-item";
    if (toolMonograms[icon]) {
      const monogram = document.createElement("span");
      monogram.className = "tool-monogram";
      monogram.setAttribute("aria-hidden", "true");
      monogram.textContent = toolMonograms[icon];
      technology.append(monogram);
    } else {
      const image = document.createElement("img");
      image.src = `public/tool-icons/${icon}.svg`;
      image.alt = "";
      image.width = 18;
      image.height = 18;
      image.loading = "lazy";
      technology.append(image);
    }
    const label = document.createElement("span");
    label.textContent = name;
    technology.append(label);
    groups.get(category).push(technology);
  });

  groups.forEach((technologies, category) => {
    const group = document.createElement("section");
    group.className = "technology-group";
    const heading = document.createElement("h3");
    heading.textContent = category;
    const list = document.createElement("ul");
    list.append(...technologies);
    group.append(heading, list);
    stackGroups.append(group);
  });
}

function updateLocalClocks() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(now);

  document.querySelectorAll("[data-local-clock]").forEach((clock) => {
    clock.dateTime = now.toISOString();
    clock.textContent = time;
    clock.setAttribute("aria-label", `Horário local: ${time}`);
  });
}
updateLocalClocks();
window.setInterval(updateLocalClocks, 30_000);

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");
if (menuToggle && navigation) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  document.addEventListener("click", (event) => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

const revealElements = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const sectionLinks = [...document.querySelectorAll('.portfolio-home .main-navigation a[href^="#"]')];
const linkedSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter((section) => section instanceof HTMLElement);

if ("IntersectionObserver" in window && linkedSections.length) {
  const sectionObserver = new IntersectionObserver(() => {
    const activationLine = window.innerHeight * 0.3;
    const current = linkedSections.reduce((active, section) => (
      section.getBoundingClientRect().top <= activationLine ? section : active
    ), linkedSections[0]);

    sectionLinks.forEach((link) => {
      const isCurrent = link.hash === `#${current.id}`;
      link.classList.toggle("active", isCurrent);
      if (isCurrent) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-20% 0px -65% 0px" });

  linkedSections.forEach((section) => sectionObserver.observe(section));
}

document.querySelectorAll("[data-go-top]").forEach((button) => {
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});

import type { Translation } from "./types";

export const en: Translation = {
  meta: {
    title: "Renzo Fernandes",
    description:
      "Professional front-end developer portfolio featuring projects, skills, and contact information.",
  },
  language: {
    label: "Select language",
    options: {
      "pt-BR": "Portuguese",
      en: "English",
      es: "Spanish",
    },
  },
  nav: {
    main: "Main navigation",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  menu: {
    open: "Open menu",
    close: "Close menu",
    label: "Mobile menu",
  },
  hero: {
    status: "Available • Junior",
    role: "Full Stack Software Engineer",
    summary:
      "I am looking for my first opportunity in technology, with an interest in development, data, and enterprise systems, applying technology to solve real-world problems.",
    viewProjects: "View Projects",
    contact: "Contact",
    locationLabel: "Location",
    location: "São Paulo",
    emailLabel: "E-mail",
    phoneLabel: "Phone",
    linksTitle: "Links",
    summaryTitle: "Summary",
    profileAlt: "Portrait of Renzo Fernandes",
    cardSummary:
      "Information Systems student (6th semester), with experience in development projects, an analytical profile, and a strong ability to learn quickly. Interested in full stack development, enterprise systems, and technology applied to business.",
  },
  sections: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    education: "Education and Courses",
    contact: "Contact",
  },
  about: {
    body: [
      "I am an Information Systems student, combining technology, data analysis, and strategic business vision to work on enterprise solutions, process automation, and scalable systems.",
      "I have experience building full stack projects, REST APIs, system integrations, database modeling, and web applications using technologies such as JavaScript, TypeScript, React, Node.js, C# (.NET), Java, SQL, and MySQL.",
      "I also work with data analysis and insight generation through Power BI, along with knowledge of IBM Mainframe environments (TSO/ZOWE) and enterprise technologies focused on ERP and business process integration, complemented by SAP Learning Hub training.",
      "I am interested in Artificial Intelligence applied to automation, process optimization, productivity, and performance gains, using AI as support for development, data analysis, and the creation of more efficient and intelligent solutions.",
      "I have an analytical profile, a problem-solving mindset, and the ability to connect technology with business needs, contributing to efficient, organized solutions with real impact. I aim to work in environments that value innovation, continuous learning, collaboration, and steady professional growth.",
    ],
    howTitle: "How I work",
    howText:
      "I work with organization, clarity, and a focus on continuous improvement. I value clean code, constant learning, and team collaboration to build efficient and scalable solutions.",
    goalTitle: "What I am looking for",
    goalText:
      "I am looking for my first opportunity in technology to gain practical experience, contribute to real projects, and grow professionally in an environment of innovation and continuous learning.",
  },
  skills: {
    categories: {
      frontend: "Front-end",
      backend: "Back-end & Languages",
      data: "Data & Databases",
      tools: "Tools",
      enterprise: "Enterprise Systems",
      automation: "Automation & AI",
    },
    names: {
      restApis: "REST APIs",
      dataModeling: "Data Modeling",
      dataAdministration: "Data Administration",
      automationPython: "Python Automation",
      generativeAi: "Generative AI",
    },
  },
  projects: {
    controls: {
      previous: "Previous projects",
      next: "Next projects",
      open: "Open Project",
      openProject: "Open project",
      navigation: "Projects navigation",
      page: (page) => `Go to page ${page} of projects`,
      imageAlt: (title) => `Image of the ${title} project`,
    },
    items: {
      processHub: {
        title: "ProcessHub",
        description:
          "Web platform for managing processes and subprocesses with a hierarchical structure, corporate Kanban pipeline, and operational organization for teams and departments.",
      },
      moraBeauty: {
        title: "Mora Beauty",
        description:
          "Web platform for a beauty studio in Santos, featuring service presentation, online scheduling, Pix payment confirmation, and appointment management.",
      },
      worldFilm: {
        title: "World Film",
        description:
          "Institutional website for a solar control film company, with a product catalog, film simulator, warranty system, and a dedicated area for new distributors.",
      },
      rotaGourmet: {
        title: "Rota Gourmet",
        description:
          "Web platform for requesting and managing gastronomic quotes, connecting clients and suppliers through an intuitive and organized digital experience.",
      },
      menuOnline: {
        title: "Online Menu",
        description:
          "Digital restaurant menu web application with category organization, responsive experience, and an interactive cart for placing orders.",
      },
    },
  },
  education: {
    formationTitle: "Education",
    certificationsTitle: "Certifications and Courses",
    languagesTitle: "Languages",
    showMore: "Show more",
    showLess: "Show less",
    degrees: [
      {
        name: "Bachelor's Degree in Information Systems",
        institution: "Santa Cecília University (UNISANTA)",
        period: "2024-Ongoing - Expected: Dec/2027 - 6th semester",
      },
    ],
    certifications: [
      { name: "Front-end Development", institution: "Unisanta • 2025" },
      { name: "Back-end Development", institution: "Unisanta • 2026" },
      { name: "Data Administration", institution: "Unisanta • 2026" },
    ],
    languages: [
      { name: "Portuguese", level: "native" },
      { name: "English", level: "intermediate" },
      { name: "Spanish", level: "intermediate" },
    ],
  },
  contact: {
    title: "Let's build the future.",
    text:
      "I am looking for my first opportunity in technology, focused on development, data engineering, and enterprise solutions, applying technology to solve real problems and create value through efficient, well-structured systems.",
    sendEmail: "Send e-mail",
    viewGithub: "View GitHub",
    openLinkedin: "Open LinkedIn",
    quickTitle: "Quick contact",
    emailLabel: "E-mail",
    phoneLabel: "Phone",
    locationLabel: "Location",
    location: "São Paulo",
    availability:
      "Available for opportunities (On-site, Hybrid, Remote).",
    whatsappMessage:
      "Hello Renzo, I saw your portfolio and would like to talk to you.",
  },
  footer: {
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

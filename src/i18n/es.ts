import type { Translation } from "./types";

export const es: Translation = {
  meta: {
    title: "Renzo Fernandes",
    description:
      "Portafolio profesional de desarrollador front-end, con proyectos, habilidades e información de contacto.",
  },
  language: {
    label: "Seleccionar idioma",
    options: {
      "pt-BR": "Portugués",
      en: "Inglés",
      es: "Español",
    },
  },
  nav: {
    main: "Navegación principal",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    education: "Formación",
    contact: "Contacto",
  },
  menu: {
    open: "Abrir menú",
    close: "Cerrar menú",
    label: "Menú móvil",
  },
  hero: {
    status: "Disponible • Pasantía / Junior",
    role: "Full Stack Software Engineer",
    summary:
      "Busco mi primera oportunidad en tecnología, con interés en desarrollo, datos y sistemas corporativos, aplicando la tecnología para resolver problemas reales.",
    viewProjects: "Ver Proyectos",
    contact: "Contacto",
    locationLabel: "Ubicación",
    location: "São Paulo",
    emailLabel: "E-mail",
    phoneLabel: "Teléfono",
    linksTitle: "Enlaces",
    summaryTitle: "Resumen",
    profileAlt: "Retrato de Renzo Fernandes",
    cardSummary:
      "Estudiante de Sistemas de Información (5.º semestre), con experiencia en proyectos de desarrollo, perfil analítico y gran capacidad de aprendizaje. Interés en desarrollo full stack, sistemas corporativos y tecnología aplicada a los negocios.",
  },
  sections: {
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    education: "Formación y Cursos",
    contact: "Contacto",
  },
  about: {
    body: [
      "Soy estudiante de Sistemas de Información, con una futura segunda formación en Ciencias Contables, integrando tecnología, análisis de datos y visión estratégica de negocios para trabajar en el desarrollo de soluciones corporativas, automatización de procesos y sistemas escalables.",
      "Tengo experiencia en el desarrollo de proyectos full stack, APIs REST, integraciones de sistemas, modelado de bases de datos y aplicaciones web, utilizando tecnologías como JavaScript, TypeScript, React, Node.js, C# (.NET), Java, SQL y MySQL.",
      "También trabajo con análisis de datos y generación de insights mediante Power BI, además de contar con conocimientos en entornos IBM Mainframe (TSO/ZOWE) y tecnologías corporativas orientadas a ERP e integración de procesos empresariales, con formación complementaria en SAP Learning Hub.",
      "Tengo un perfil analítico, foco en la resolución de problemas y facilidad para conectar la tecnología con las necesidades del negocio, contribuyendo al desarrollo de soluciones eficientes, organizadas y con impacto real. Busco trabajar en ambientes que valoren la innovación, el aprendizaje continuo, la colaboración y la evolución profesional constante.",
    ],
    howTitle: "Cómo trabajo",
    howText:
      "Trabajo con organización, claridad y foco en la mejora continua. Valoro el código limpio, el aprendizaje constante y la colaboración en equipo para desarrollar soluciones eficientes y escalables.",
    goalTitle: "Qué busco",
    goalText:
      "Busco mi primera oportunidad en tecnología para adquirir experiencia práctica, contribuir a proyectos reales y crecer profesionalmente en un ambiente de innovación y aprendizaje continuo.",
  },
  skills: {
    categories: {
      frontend: "Front-end",
      backend: "Back-end y Lenguajes",
      data: "Datos y Bases de Datos",
      tools: "Herramientas",
      enterprise: "Sistemas Corporativos",
      automation: "Automatización e IA",
    },
    names: {
      restApis: "APIs REST",
      dataModeling: "Modelado de Datos",
      dataAdministration: "Administración de Datos",
      automationPython: "Automatización con Python",
      generativeAi: "IA Generativa",
    },
  },
  projects: {
    controls: {
      previous: "Proyectos anteriores",
      next: "Próximos proyectos",
      open: "Abrir Proyecto",
      openProject: "Abrir proyecto",
      navigation: "Navegación de proyectos",
      page: (page) => `Ir a la página ${page} de proyectos`,
      imageAlt: (title) => `Imagen del proyecto ${title}`,
    },
    items: {
      processHub: {
        title: "ProcessHub",
        description:
          "Plataforma web para gestionar procesos y subprocesos con estructura jerárquica, pipeline Kanban corporativo y organización operativa para equipos y departamentos.",
      },
      moraBeauty: {
        title: "Mora Beauty",
        description:
          "Plataforma web para un estudio de belleza en Santos, con presentación de servicios, agenda online, confirmación de pago vía Pix y gestión de citas.",
      },
      worldFilm: {
        title: "World Film",
        description:
          "Sitio institucional para una empresa de películas de control solar, con catálogo de productos, simulador de películas, sistema de garantía y área dedicada a nuevos distribuidores.",
      },
      rotaGourmet: {
        title: "Rota Gourmet",
        description:
          "Plataforma web para solicitar y gestionar presupuestos gastronómicos, conectando clientes y proveedores en una experiencia digital intuitiva y organizada.",
      },
      menuOnline: {
        title: "Menú Online",
        description:
          "Aplicación web de menú digital para restaurantes, con organización por categorías, experiencia responsiva y carrito interactivo para realizar pedidos.",
      },
    },
  },
  education: {
    formationTitle: "Formación",
    certificationsTitle: "Certificaciones y Cursos",
    languagesTitle: "Idiomas",
    showMore: "Ver más",
    showLess: "Ver menos",
    degrees: [
      {
        name: "Licenciatura en Sistemas de Información",
        institution: "Universidad Santa Cecília (UNISANTA)",
        period: "2024-En curso - Previsión: Dic/2028 - 5.º semestre",
      },
      {
        name: "Licenciatura en Ciencias Contables",
        institution: "Universidad Santa Cecília (UNISANTA)",
        period: "2026-En curso - Previsión: Dic/2029 - 1.º semestre",
      },
    ],
    certifications: [
      { name: "Desarrollo Front-end", institution: "Unisanta • 2025" },
      { name: "Desarrollo Back-end", institution: "Unisanta • 2026" },
      { name: "Administración de Datos", institution: "Unisanta • 2026" },
    ],
    languages: [
      { name: "Portugués", level: "nativo" },
      { name: "Inglés", level: "intermedio" },
      { name: "Español", level: "intermedio" },
    ],
  },
  contact: {
    title: "Construyamos el futuro.",
    text:
      "Busco mi primera oportunidad en tecnología, con foco en desarrollo, ingeniería de datos y soluciones corporativas, aplicando tecnología para resolver problemas reales y generar valor mediante sistemas eficientes y bien estructurados.",
    sendEmail: "Enviar e-mail",
    viewGithub: "Ver GitHub",
    openLinkedin: "Abrir LinkedIn",
    quickTitle: "Contacto rápido",
    emailLabel: "E-mail",
    phoneLabel: "Teléfono",
    locationLabel: "Ubicación",
    location: "São Paulo",
    availability:
      "Disponible para oportunidades (Presencial, Híbrido, Remoto).",
    whatsappMessage:
      "Hola Renzo, vi tu portafolio y me gustaría hablar contigo.",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    backToTop: "Volver arriba",
  },
};

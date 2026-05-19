import type { Translation } from "./types";

export const ptBR: Translation = {
  meta: {
    title: "Renzo Fernandes",
    description:
      "Portfólio profissional de desenvolvedor front-end, com projetos, habilidades e contato.",
  },
  language: {
    label: "Selecionar idioma",
    options: {
      "pt-BR": "Português",
      en: "Inglês",
      es: "Espanhol",
    },
  },
  nav: {
    main: "Navegação principal",
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    education: "Formação",
    contact: "Contato",
  },
  menu: {
    open: "Abrir menu",
    close: "Fechar menu",
    label: "Menu mobile",
  },
  hero: {
    status: "Disponível • Estágio / Júnior",
    role: "Full Stack Software Engineer",
    summary:
      "Busco minha primeira oportunidade em tecnologia, com interesse em desenvolvimento, dados e sistemas corporativos, aplicando a tecnologia na solução de problemas reais.",
    viewProjects: "Ver Projetos",
    contact: "Contato",
    locationLabel: "Local",
    location: "São Paulo",
    emailLabel: "E-mail",
    phoneLabel: "Telefone",
    linksTitle: "Links",
    summaryTitle: "Resumo",
    profileAlt: "Retrato de Renzo Fernandes",
    cardSummary:
      "Profissional em formação em Sistemas de Informação (5º semestre), com experiência em projetos de desenvolvimento, perfil analítico e rápida capacidade de aprendizado. Interesse em desenvolvimento full stack, sistemas corporativos e tecnologia aplicada a negócios.",
  },
  sections: {
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    education: "Formação e Cursos",
    contact: "Contato",
  },
  about: {
    body: [
      "Profissional em formação em Sistemas de Informação, unindo tecnologia, análise de dados e visão estratégica de negócios para atuar no desenvolvimento de soluções corporativas, automação de processos e sistemas escaláveis.",
      "Possuo experiência no desenvolvimento de projetos full stack, APIs REST, integrações de sistemas, modelagem de bancos de dados e aplicações web, utilizando tecnologias como JavaScript, TypeScript, React, Node.js, C# (.NET), Java, SQL e MySQL.",
      "Atuo também com análise de dados e geração de insights através do Power BI, além de conhecimentos em ambientes Mainframe IBM (TSO/ZOWE), tecnologias corporativas voltadas a ERP e integração de processos empresariais, com formação complementar pelo SAP Learning Hub.",
      "Tenho interesse em Inteligência Artificial aplicada à automação, otimização de processos, produtividade e ganho de performance, utilizando IA como apoio no desenvolvimento, análise de dados e criação de soluções mais eficientes e inteligentes.",
      "Tenho perfil analítico, foco em resolução de problemas e facilidade em conectar tecnologia às necessidades do negócio, contribuindo para o desenvolvimento de soluções eficientes, organizadas e com impacto real. Busco atuar em ambientes que valorizem inovação, aprendizado contínuo, colaboração e evolução profissional constante.",
    ],
    howTitle: "Como trabalho",
    howText:
      "Atuo com organização, clareza e foco em melhoria contínua. Valorizo código limpo, aprendizado constante e colaboração em equipe para desenvolver soluções eficientes e escaláveis.",
    goalTitle: "O que busco",
    goalText:
      "Busco minha primeira oportunidade em tecnologia para adquirir experiência prática, contribuir com projetos reais e evoluir profissionalmente em um ambiente de inovação e aprendizado contínuo.",
  },
  skills: {
    categories: {
      frontend: "Front-end",
      backend: "Back-end & Linguagens",
      data: "Dados & Banco de Dados",
      tools: "Ferramentas",
      enterprise: "Sistemas Corporativos",
      automation: "Automação & IA",
    },
    names: {
      restApis: "APIs REST",
      dataModeling: "Modelagem de Dados",
      dataAdministration: "Administração de Dados",
      automationPython: "Automação com Python",
      generativeAi: "IA Generativa",
    },
  },
  projects: {
    controls: {
      previous: "Projetos anteriores",
      next: "Próximos projetos",
      open: "Abrir Projeto",
      openProject: "Abrir projeto",
      navigation: "Navegação dos projetos",
      page: (page) => `Ir para página ${page} dos projetos`,
      imageAlt: (title) => `Imagem do projeto ${title}`,
    },
    items: {
      processHub: {
        title: "ProcessHub",
        description:
          "Plataforma web de gerenciamento de processos e subprocessos com estrutura hierárquica, pipeline Kanban corporativo e organização operacional para equipes e departamentos.",
      },
      moraBeauty: {
        title: "Mora Beauty",
        description:
          "Plataforma web para estúdio de beleza em Santos, com apresentação de serviços, agendamento online, confirmação via Pix e gestão de agendamentos.",
      },
      worldFilm: {
        title: "World Film",
        description:
          "Site institucional para empresa de películas de controle solar, com catálogo de produtos, simulador de películas, sistema de garantia e área dedicada a novos distribuidores.",
      },
      rotaGourmet: {
        title: "Rota Gourmet",
        description:
          "Plataforma web para solicitação e gestão de orçamentos gastronômicos, conectando clientes e fornecedores em uma experiência digital intuitiva e organizada.",
      },
      menuOnline: {
        title: "Menu On-line",
        description:
          "Aplicação web de cardápio digital para restaurantes, com organização por categorias, experiência responsiva e carrinho interativo para realização de pedidos.",
      },
    },
  },
  education: {
    formationTitle: "Formação",
    certificationsTitle: "Certificações e Cursos",
    languagesTitle: "Idiomas",
    showMore: "Ver mais",
    showLess: "Ver menos",
    degrees: [
      {
        name: "Bacharelado em Sistemas de Informação",
        institution: "Universidade Santa Cecília (UNISANTA)",
        period: "2024-Cursando - Previsão: Dez/2027 - 5º semestre",
      },
    ],
    certifications: [
      { name: "Desenvolvimento Front-end", institution: "Unisanta • 2025" },
      { name: "Desenvolvimento Back-end", institution: "Unisanta • 2026" },
      { name: "Administração de Dados", institution: "Unisanta • 2026" },
    ],
    languages: [
      { name: "Português", level: "nativo" },
      { name: "Inglês", level: "intermediário" },
      { name: "Espanhol", level: "intermediário" },
    ],
  },
  contact: {
    title: "Vamos construir o futuro.",
    text: "Em busca da minha primeira oportunidade em tecnologia, com foco em desenvolvimento, engenharia de dados e soluções corporativas, aplicando tecnologia para resolver problemas reais e gerar valor através de sistemas eficientes e bem estruturados.",
    sendEmail: "Enviar e-mail",
    viewGithub: "Ver GitHub",
    openLinkedin: "Abrir LinkedIn",
    quickTitle: "Contato rápido",
    emailLabel: "E-mail",
    phoneLabel: "Telefone",
    locationLabel: "Local",
    location: "São Paulo",
    availability:
      "Disponível para oportunidades (Presencial, Híbrido, Remoto).",
    whatsappMessage:
      "Olá Renzo, vi seu portfólio e gostaria de falar com você.",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    backToTop: "Voltar ao topo",
  },
};

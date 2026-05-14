export type Language = "pt-BR" | "en" | "es";

export type Translation = {
  meta: {
    title: string;
    description: string;
  };
  language: {
    label: string;
    options: Record<Language, string>;
  };
  nav: {
    main: string;
    about: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
  };
  menu: {
    open: string;
    close: string;
    label: string;
  };
  hero: {
    status: string;
    role: string;
    summary: string;
    viewProjects: string;
    contact: string;
    locationLabel: string;
    location: string;
    emailLabel: string;
    phoneLabel: string;
    linksTitle: string;
    summaryTitle: string;
    profileAlt: string;
    cardSummary: string;
  };
  sections: {
    about: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
  };
  about: {
    body: string[];
    howTitle: string;
    howText: string;
    goalTitle: string;
    goalText: string;
  };
  skills: {
    categories: Record<string, string>;
    names: Record<string, string>;
  };
  projects: {
    controls: {
      previous: string;
      next: string;
      open: string;
      openProject: string;
      navigation: string;
      page: (page: number) => string;
      imageAlt: (title: string) => string;
    };
    items: Record<
      string,
      {
        title: string;
        description: string;
      }
    >;
  };
  education: {
    formationTitle: string;
    certificationsTitle: string;
    languagesTitle: string;
    showMore: string;
    showLess: string;
    degrees: Array<{
      name: string;
      institution: string;
      period: string;
    }>;
    certifications: Array<{
      name: string;
      institution: string;
    }>;
    languages: Array<{
      name: string;
      level: string;
    }>;
  };
  contact: {
    title: string;
    text: string;
    sendEmail: string;
    viewGithub: string;
    openLinkedin: string;
    quickTitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    location: string;
    availability: string;
    whatsappMessage: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
};

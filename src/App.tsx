import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { useCallback } from "react";
import type { IconType } from "react-icons";
import {
  SiAngular,
  SiCss,
  SiDbeaver,
  SiDbt,
  SiDocker,
  SiDotnet,
  SiErpnext,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRender,
  SiRobotframework,
  SiSap,
  SiSalesforce,
  SiServerless,
  SiSharp,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiOpenjdk,
  SiVercel,
} from "react-icons/si";
import fotoPerfil from "./assets/img/foto_perfil.jpeg";
import menuOnlineImage from "./assets/img/menu on-line.jpg";
import moraBeautyImage from "./assets/img/mora_beauty.png";
import rotaGourmetImage from "./assets/img/rota_gourmet.png";
import worldFilmImage from "./assets/img/world_film.png";
import processHubImage from "./assets/img/process_hub.png";

const headerStyles = {
  header:
    "border-white/5 bg-black/60 text-white shadow-sm backdrop-blur-2xl supports-[backdrop-filter]:bg-black/40",
  logo: "text-white tracking-tighter",
  nav: "text-zinc-400",
  navLink:
    "hover:text-white focus-visible:text-white transition-colors duration-300",
  menuButton:
    "border-white/10 bg-zinc-900/50 text-zinc-300 hover:border-white/20 hover:text-white backdrop-blur-md",
  menuPanel:
    "border-white/10 bg-zinc-950/95 text-zinc-300 backdrop-blur-xl shadow-2xl",
  menuNav: "text-zinc-300",
  menuLink: "hover:bg-white/5 hover:text-white",
};

const containerStyles = "mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16";
const titulo_cor_opacidade = "text-white tracking-tight";
const texto_cor_opacidade = "text-zinc-400";
const titulo_bloco_formacao = "text-zinc-200";
const hover_card_azul =
  "border-white/5 bg-[#0A0A0A] premium-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.05)] group";

type SkillItem = {
  nome: string;
  icone: IconType;
  cor?: string;
};

type SkillCategory = {
  titulo: string;
  itens: SkillItem[];
};

// EDITAR HABILIDADES - para acrescentar ou remover cards, altere apenas estas listas.
const habilidadesBlocos: SkillCategory[] = [
  {
    titulo: "Front-end",
    itens: [
      { nome: "HTML5", icone: SiHtml5, cor: "#e34f26" },
      { nome: "CSS3", icone: SiCss, cor: "#1572b6" },
      { nome: "JavaScript", icone: SiJavascript, cor: "#f7df1e" },
      { nome: "TypeScript", icone: SiTypescript, cor: "#3178c6" },
      { nome: "React", icone: SiReact, cor: "#61dafb" },
      { nome: "Next.js", icone: SiNextdotjs, cor: "#d8e6fd" },
      { nome: "Angular", icone: SiAngular, cor: "#dd0031" },
      { nome: "Tailwind CSS", icone: SiTailwindcss, cor: "#38bdf8" },
    ],
  },
  {
    titulo: "Back-end & Linguagens",
    itens: [
      { nome: "Node.js", icone: SiNodedotjs, cor: "#5fa04e" },
      { nome: "Express", icone: SiExpress, cor: "#d8e6fd" },
      { nome: "APIs REST", icone: SiOpenapiinitiative, cor: "#6ba539" },
      { nome: ".NET", icone: SiDotnet, cor: "#512bd4" },
      { nome: "C#", icone: SiSharp, cor: "#239120" },
      { nome: "Java", icone: SiOpenjdk, cor: "#f89820" },
      { nome: "Spring Boot", icone: SiSpringboot, cor: "#6db33f" },
      { nome: "Python", icone: SiPython, cor: "#3776ab" },
      { nome: "PHP", icone: SiPhp, cor: "#777bb4" },
    ],
  },
  {
    titulo: "Dados & Banco de Dados",
    itens: [
      { nome: "SQL", icone: SiMysql, cor: "#4479a1" },
      { nome: "NoSQL", icone: SiMongodb, cor: "#47a248" },
      { nome: "PostgreSQL", icone: SiPostgresql, cor: "#4169e1" },
      { nome: "Neon", icone: SiPostgresql, cor: "#00e599" },
      { nome: "MongoDB", icone: SiMongodb, cor: "#47a248" },
      { nome: "Modelagem de Dados", icone: SiDbt, cor: "#ff694b" },
      { nome: "Administração de Dados", icone: SiDbeaver, cor: "#38bdf8" },
    ],
  },
  {
    titulo: "Ferramentas",
    itens: [
      { nome: "Git", icone: SiGit, cor: "#f05032" },
      { nome: "GitHub", icone: SiGithub, cor: "#d8e6fd" },
      { nome: "GitHub Actions", icone: SiGithubactions, cor: "#2088ff" },
      { nome: "Docker", icone: SiDocker, cor: "#2496ed" },
      { nome: "Vercel", icone: SiVercel, cor: "#d8e6fd" },
      { nome: "Render", icone: SiRender, cor: "#46e3b7" },
    ],
  },
  {
    titulo: "Sistemas Corporativos",
    itens: [
      { nome: "SAP", icone: SiSap, cor: "#0faaff" },
      { nome: "ERP", icone: SiErpnext, cor: "#38bdf8" },
      { nome: "Mainframe", icone: SiServerless, cor: "#d8e6fd" },
      { nome: "Salesforce", icone: SiSalesforce, cor: "#00a1e0" },
    ],
  },
  {
    titulo: "Automação & IA",
    itens: [
      { nome: "Automação com Python", icone: SiRobotframework, cor: "#00c0b5" },
      { nome: "IA Generativa", icone: SiOpenai, cor: "#d8e6fd" },
    ],
  },
];

// EDITAR CERTIFICAÇÕES E CURSOS - adicione, remova ou altere nome e instituição.
const certificacoesCursos = [
  {
    nome: "Desenvolvimento Front-end",
    instituicao: "Unisanta • 2025",
  },
  {
    nome: "Desenvolvimento Back-end",
    instituicao: "Unisanta • 2026",
  },
  {
    nome: "Administração de Dados",
    instituicao: "Unisanta • 2026",
  },
];

function useCurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return year;
}

function getProjetosPorPagina() {
  if (typeof window === "undefined") {
    return 3;
  }

  if (window.innerWidth < 768) {
    return 1;
  }

  if (window.innerWidth < 1024) {
    return 2;
  }

  return 3;
}

type AccordionSectionProps = {
  id: string;
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

function AccordionSection({ title, action, children }: AccordionSectionProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12 reveal">
        <h2 className="text-3xl font-black tracking-tighter uppercase sm:text-4xl text-transparent bg-clip-text bg-[linear-gradient(110deg,#a1a1aa,45%,#ffffff,55%,#a1a1aa)] bg-[length:200%_100%] animate-[shimmer_4s_infinite]">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-zinc-700 to-transparent" />
        {action && <div>{action}</div>}
      </div>
      {children}
    </div>
  );
}

type MobileMenuProps = {
  links: Array<{ label: string; href: string }>;
};

function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (href: string) => {
    const target = document.querySelector(href);

    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsOpen(false);
  };

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${headerStyles.menuButton}`}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span
            className={`h-0.5 w-5 rounded bg-current transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 rounded bg-current transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-0.5 w-5 rounded bg-current transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </span>
      </button>

      <div
        id="mobile-menu-panel"
        className={`absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-xl border shadow-soft-xl backdrop-blur transition-all duration-200 ${headerStyles.menuPanel} ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <nav
          className={`flex flex-col p-2 text-sm ${headerStyles.menuNav}`}
          aria-label="Menu mobile"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 font-medium transition-colors ${headerStyles.menuLink}`}
              onClick={(event) => {
                event.preventDefault();
                handleNavigate(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let animationFrame = 0;
    const particles = Array.from({ length: 64 }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 1.6 + 0.4,
      speed: Math.random() * 0.18 + 0.05,
      opacity: Math.random() * 0.35 + 0.12,
    }));

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle) => {
        particle.y -= particle.speed / window.innerHeight;

        if (particle.y < -0.02) {
          particle.y = 1.02;
          particle.x = Math.random();
        }

        context.beginPath();
        context.arc(
          particle.x * window.innerWidth,
          particle.y * window.innerHeight,
          particle.radius,
          0,
          Math.PI * 2,
        );
        context.fillStyle = `rgba(103, 232, 249, ${particle.opacity})`;
        context.fill();
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#020202]">
      {/* 1. Camada de Glow (Ambient Light) - Unificada em variações de Cyan e Suavizada */}
      {/* Cyan Glow - Top Right */}
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-600/15 blur-[120px] animate-ambient-glow-1" />
      {/* Lighter Cyan Glow - Bottom Left */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-cyan-400/10 blur-[140px] animate-ambient-glow-2" />
      {/* Darker Cyan Glow - Center Right */}
      <div
        className="absolute top-[30%] right-[20%] w-[50%] h-[50%] rounded-full bg-cyan-700/15 blur-[120px] animate-ambient-glow-1"
        style={{ animationDelay: "2s" }}
      />

      {/* Feixes de Luz Volumétricos (Light Beams) - Mais Suaves e Variações de Cyan */}
      <div className="absolute top-[-10%] left-[-20%] w-[150%] h-[400px] bg-gradient-to-b from-cyan-300/15 via-cyan-500/5 to-transparent rotate-[-35deg] blur-[60px] pointer-events-none transform-gpu origin-top-left" />
      <div className="absolute top-[30%] right-[-30%] w-[150%] h-[400px] bg-gradient-to-b from-cyan-600/15 via-transparent to-transparent rotate-[45deg] blur-[60px] pointer-events-none transform-gpu origin-top-right" />

      {/* 2. Camada de Grid Tecnológico (Quase invisível, esmaecido nas bordas) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-70" />

      {/* 3. Camada de Partículas (Poeira Digital) */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />

      {/* Vignette effect para fechar as bordas um pouco mais escuras e focar no conteúdo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_150%)]" />
    </div>
  );
}

type SectionBackgroundProps = {
  variant?: "cyan" | "purple" | "emerald" | "blue";
  align?: "left" | "right" | "center";
};

function SectionBackground({ align = "center" }: SectionBackgroundProps) {
  // Ignoramos a prop variant para manter apenas a cor unificada (Cyan) com variações de intensidade
  const glowColor =
    align === "left"
      ? "bg-cyan-400/10"
      : align === "right"
        ? "bg-cyan-600/15"
        : "bg-cyan-500/15";

  const lampPosition =
    align === "left"
      ? "top-[10%] left-[-10%] w-[600px] h-[600px]"
      : align === "right"
        ? "top-[10%] right-[-10%] w-[600px] h-[600px]"
        : "top-[10%] left-[50%] -translate-x-1/2 w-[600px] h-[600px]";

  return (
    // Removido overflow-hidden para que as luzes se espalhem suavemente entre as seções sem corte reto
    <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
      {/* Massive Background Lamp - Mais suave e com mais blur */}
      <div
        className={`absolute ${lampPosition} rounded-full blur-[130px] animate-ambient-glow-1 ${glowColor}`}
      />

      {/* CSS Floating Particles (Cyan variations, muito suaves) */}
      <div
        className={`absolute top-[20%] left-[10%] w-1 h-1 rounded-full bg-cyan-300 animate-float-up opacity-30`}
      />
      <div
        className={`absolute top-[60%] right-[20%] w-[2px] h-[2px] rounded-full bg-cyan-500 animate-float-diagonal opacity-20`}
        style={{ animationDelay: "2s" }}
      />
      <div
        className={`absolute bottom-[30%] left-[30%] w-1.5 h-1.5 rounded-full bg-cyan-400 animate-float-up opacity-40`}
        style={{ animationDelay: "4s" }}
      />
      <div
        className={`absolute top-[40%] left-[80%] w-[2px] h-[2px] rounded-full bg-cyan-200 animate-float-diagonal opacity-20`}
        style={{ animationDelay: "1s" }}
      />
      <div
        className={`absolute bottom-[10%] right-[40%] w-1 h-1 rounded-full bg-cyan-500 animate-float-up opacity-30`}
        style={{ animationDelay: "5s" }}
      />
    </div>
  );
}

function App() {
  const year = useCurrentYear();
  const [mostrarTodasCertificacoes, setMostrarTodasCertificacoes] =
    useState(false);
  const [projetoAtivo, setProjetoAtivo] = useState(0);
  const [projetosPorPagina, setProjetosPorPagina] = useState(3);
  const projetosCarouselRef = useRef<HTMLDivElement | null>(null);
  const isDraggingProjetosRef = useRef(false);
  const draggedProjetosRef = useRef(false);
  const dragStartXProjetosRef = useRef(0);
  const dragScrollLeftProjetosRef = useRef(0);
  const projetosPorPaginaAnteriorRef = useRef(3);

  // Lógica para Animações de Scroll com MutationObserver
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    };
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observar elementos existentes
    const observeElements = () => {
      const revealElements = document.querySelectorAll(".reveal:not(.active)");
      revealElements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // MutationObserver para garantir que elementos dinâmicos (como dentro do map ou carregados tardiamente) sejam animados
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
  const temCertificacoesExtras = certificacoesCursos.length > 5;
  const certificacoesVisiveis =
    temCertificacoesExtras && !mostrarTodasCertificacoes
      ? certificacoesCursos.slice(0, 5)
      : certificacoesCursos;
  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Projetos", href: "#projetos" },
    { label: "Formação", href: "#formacao" },
    { label: "Contato", href: "#contato" },
  ];
  const projetos = [
    {
      title: "ProcessHub",
      description:
        "Plataforma web de gerenciamento de processos e subprocessos com estrutura hierárquica, pipeline Kanban corporativo e organização operacional para equipes e departamentos.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "Docker",
        "Tailwind CSS",
        "JWT",
        "REST API",
        "Vercel",
      ],
      image: processHubImage,
      projectUrl: "https://process-hub-peach.vercel.app/auth",
    },
    {
      title: "Mora Beauty",
      description:
        "Plataforma web para estúdio de beleza em Santos, com apresentação de serviços, agendamento online, confirmação via Pix e gestão de agendamentos.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "UX/UI"],
      image: moraBeautyImage,
      projectUrl: "https://www.morabeauty.com.br/",
    },
    {
      title: "World Film",
      description:
        "Site institucional para empresa de películas de controle solar, com catálogo de produtos, simulador de películas, sistema de garantia e área dedicada a novos distribuidores.",
      technologies: ["WordPress", "PHP", "JavaScript", "UX/UI"],
      image: worldFilmImage,
      projectUrl: "https://worldfilm.com.br/",
    },
    {
      title: "Rota Gourmet",
      description:
        "Plataforma web para solicitação e gestão de orçamentos gastronômicos, conectando clientes e fornecedores em uma experiência digital intuitiva e organizada.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      image: rotaGourmetImage,
      projectUrl: "https://rota-gourmet.vercel.app/",
    },
    {
      title: "Menu On-line",
      description:
        "Aplicação web de cardápio digital para restaurantes, com organização por categorias, experiência responsiva e carrinho interativo para realização de pedidos.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
      image: menuOnlineImage,
      projectUrl: "https://menu-on-line-mu.vercel.app/",
    },
  ];
  const totalPaginasProjetos = Math.max(
    1,
    Math.ceil(projetos.length / projetosPorPagina),
  );
  const paginaProjetoAtiva = Math.min(
    Math.floor(projetoAtivo / projetosPorPagina),
    totalPaginasProjetos - 1,
  );
  const scrollProjetos = (direction: "prev" | "next") => {
    const carousel = projetosCarouselRef.current;

    if (!carousel) {
      return;
    }

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const scrollAmount = carousel.clientWidth * 0.82;
    const isAtStart = carousel.scrollLeft <= 8;
    const isAtEnd = carousel.scrollLeft >= maxScrollLeft - 8;
    let nextScrollLeft =
      direction === "next"
        ? carousel.scrollLeft + scrollAmount
        : carousel.scrollLeft - scrollAmount;

    if (direction === "next" && isAtEnd) {
      nextScrollLeft = 0;
    }

    if (direction === "prev" && isAtStart) {
      nextScrollLeft = maxScrollLeft;
    }

    carousel.scrollTo({
      left: Math.max(0, Math.min(nextScrollLeft, maxScrollLeft)),
      behavior: "smooth",
    });
  };

  const atualizarProjetoAtivo = () => {
    const carousel = projetosCarouselRef.current;

    if (!carousel) {
      return;
    }

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    if (carousel.scrollLeft >= maxScrollLeft - 8) {
      const ultimoProjetoDaPagina = Math.min(
        (totalPaginasProjetos - 1) * projetosPorPagina,
        projetos.length - 1,
      );

      setProjetoAtivo((atual) =>
        atual === ultimoProjetoDaPagina ? atual : ultimoProjetoDaPagina,
      );
      return;
    }

    const slides = Array.from(carousel.children).filter(
      (slide): slide is HTMLElement => slide instanceof HTMLElement,
    );
    const projetoMaisProximo = slides.reduce((closestIndex, slide, index) => {
      const closestSlide = slides[closestIndex];
      const currentDistance = Math.abs(slide.offsetLeft - carousel.scrollLeft);
      const closestDistance = Math.abs(
        closestSlide.offsetLeft - carousel.scrollLeft,
      );

      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);
    const paginaAtual = Math.floor(projetoMaisProximo / projetosPorPagina);
    const projetoAtual = Math.min(
      paginaAtual * projetosPorPagina,
      projetos.length - 1,
    );

    setProjetoAtivo((atual) => (atual === projetoAtual ? atual : projetoAtual));
  };

  const irParaProjeto = useCallback((index: number) => {
    const carousel = projetosCarouselRef.current;

    if (!carousel) {
      return;
    }

    const slide = carousel.children[index];

    if (!(slide instanceof HTMLElement)) {
      return;
    }

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const scrollLeft = Math.min(slide.offsetLeft, maxScrollLeft);

    carousel.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setProjetoAtivo(index);
  }, []);

  const irParaPaginaProjetos = useCallback(
    (pagina: number) => {
      const index = Math.min(pagina * projetosPorPagina, projetos.length - 1);
      irParaProjeto(index);
    },
    [irParaProjeto, projetos.length, projetosPorPagina],
  );

  const handleProjetosPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (
      !projetosCarouselRef.current ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      return;
    }

    draggedProjetosRef.current = false;
    dragStartXProjetosRef.current = event.clientX;
    dragScrollLeftProjetosRef.current = projetosCarouselRef.current.scrollLeft;
    isDraggingProjetosRef.current = event.pointerType === "mouse";
  };

  const handleProjetosPointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!projetosCarouselRef.current) {
      return;
    }

    const dragDistance = event.clientX - dragStartXProjetosRef.current;
    draggedProjetosRef.current = Math.abs(dragDistance) > 8;

    if (!isDraggingProjetosRef.current || !draggedProjetosRef.current) {
      return;
    }

    event.preventDefault();

    if (!projetosCarouselRef.current.hasPointerCapture(event.pointerId)) {
      projetosCarouselRef.current.setPointerCapture(event.pointerId);
    }

    projetosCarouselRef.current.scrollLeft =
      dragScrollLeftProjetosRef.current - dragDistance;
  };

  const stopProjetosDrag = () => {
    isDraggingProjetosRef.current = false;
  };

  const handleProjetosClickCapture = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!draggedProjetosRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    draggedProjetosRef.current = false;
  };

  const abrirProjeto = (projectUrl: string) => {
    if (!projectUrl || projectUrl === "#") {
      return;
    }

    window.open(projectUrl, "_blank", "noopener,noreferrer");
  };

  const handleProjetoKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    projectUrl: string,
  ) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    abrirProjeto(projectUrl);
  };

  useEffect(() => {
    const updateProjetosPorPagina = () => {
      setProjetosPorPagina(getProjetosPorPagina());
    };

    updateProjetosPorPagina();
    window.addEventListener("resize", updateProjetosPorPagina);

    return () => {
      window.removeEventListener("resize", updateProjetosPorPagina);
    };
  }, []);

  useEffect(() => {
    if (projetosPorPaginaAnteriorRef.current === projetosPorPagina) {
      return;
    }

    projetosPorPaginaAnteriorRef.current = projetosPorPagina;

    const paginaAtual = Math.min(
      Math.floor(projetoAtivo / projetosPorPagina),
      totalPaginasProjetos - 1,
    );

    irParaPaginaProjetos(paginaAtual);
  }, [
    irParaPaginaProjetos,
    projetoAtivo,
    projetosPorPagina,
    totalPaginasProjetos,
  ]);

  return (
    <div className="flex flex-col min-h-screen overflow-clip text-zinc-300 relative bg-black selection:bg-zinc-800 selection:text-white">
      <ParticlesBackground />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerStyles.header}`}
      >
        <div
          className={`flex items-center justify-between gap-4 py-4 sm:py-5 ${containerStyles}`}
        >
          <a href="#hero" className="inline-flex min-w-0 items-center gap-2">
            <span
              className={`truncate text-sm font-bold uppercase tracking-[0.15em] sm:text-[0.95rem] ${headerStyles.logo}`}
            >
              Renzo Fernandes
            </span>
          </a>
          <div className="flex items-center gap-3 sm:gap-5">
            <nav
              className={`hidden items-center gap-7 text-sm font-medium sm:flex ${headerStyles.nav}`}
              aria-label="Navegação principal"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${headerStyles.navLink}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <MobileMenu links={navLinks} />
          </div>
        </div>
        <div
          className="h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0"
          aria-hidden="true"
        />
      </header>

      <main className="flex-grow pt-[4.625rem] sm:pt-[3.875rem]">
        {/* HERO */}
        <section id="hero" className="relative bg-transparent pt-4 pb-14">
          <SectionBackground variant="cyan" align="right" />
          <div className={`relative z-10 ${containerStyles}`}>
            <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)]">
              <div className="order-1 flex min-w-0 max-w-4xl flex-col items-start text-left">
                <div className="mb-6 inline-flex max-w-full items-center gap-3 reveal">
                  <div className="px-2 py-1 rounded border border-emerald-500/30 bg-emerald-500/10 text-[0.65rem] font-mono text-emerald-400 uppercase tracking-widest shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    Disponível • Estágio / Júnior
                  </div>
                </div>
                <h1
                  className="mb-6 leading-[1.08] reveal"
                  style={{ transitionDelay: "100ms" }}
                >
                  <span className="block text-6xl font-black tracking-tighter text-white sm:text-7xl md:text-[6rem] lg:text-[7rem] drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                    Renzo Fernandes
                  </span>
                  <span className="block mt-5 pb-1 text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl bg-[linear-gradient(110deg,#a1a1aa,45%,#ffffff,55%,#a1a1aa)] bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_4s_infinite]">
                    Full Stack <br /> Software Engineer
                  </span>
                </h1>
                {/* RESUMO PROFISSIONAL - edite o texto abaixo */}
                <p
                  className={`max-w-xl text-sm leading-relaxed sm:text-base reveal text-zinc-400 drop-shadow-md`}
                  style={{ transitionDelay: "100ms" }}
                >
                  Busco minha primeira oportunidade em tecnologia, com interesse
                  em desenvolvimento, dados e sistemas corporativos, aplicando a
                  tecnologia na solução de problemas reais.
                </p>
                {/* BOTÕES DE AÇÃO - Hero */}
                <div
                  className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row reveal"
                  style={{ transitionDelay: "100ms" }}
                >
                  <a
                    href="#projetos"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.13),rgba(113,113,122,0.08)_48%,rgba(255,255,255,0.06))] px-7 py-3 text-sm font-semibold text-zinc-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_0_24px_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/12 hover:text-white hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.24),0_0_30px_rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    Ver Projetos
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center rounded-lg border border-white/5 bg-[#111] px-7 py-3 text-sm font-medium text-zinc-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700/50 hover:bg-[#222] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
                  >
                    Contato
                  </a>
                </div>
                {/* CONTATO RÁPIDO - botões compridos no final da coluna esquerda */}
                <div className="mt-6 grid w-full max-w-[38rem] gap-3 lg:mt-auto lg:pt-10">
                  <div
                    className={`flex w-full flex-col items-start gap-1 rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 sm:grid sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:items-center ${hover_card_azul}`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Local
                    </span>
                    <span className="break-all text-slate-300 sm:col-start-2">
                      São Paulo
                    </span>
                  </div>
                  <a
                    href="mailto:renzoheikivf@gmail.com"
                    className={`flex w-full flex-col items-start gap-1 rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 sm:grid sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:items-center group-hover:text-cyan-400 ${hover_card_azul}`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      E-mail
                    </span>
                    <span className="break-all text-slate-300 sm:col-start-2">
                      renzoheikivf@gmail.com
                    </span>
                  </a>
                  <a
                    href="https://wa.me/5513997000096?text=Olá%20Renzo,%20vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20com%20você."
                    className={`flex w-full flex-col items-start gap-1 rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 sm:grid sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:items-center group-hover:text-cyan-400 ${hover_card_azul}`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Telefone
                    </span>
                    <span className="text-slate-300 sm:col-start-2">
                      (13) 99700-0096
                    </span>
                  </a>
                </div>
              </div>

              {/* FOTO DE PERFIL - para trocar, substitua o arquivo em src/assets/img/foto_perfil */}
              <div className="order-2 flex min-w-0 flex-col items-center lg:items-end">
                {/* INTERFACE CORE AVATAR - ADVANCED HUD */}
                <div className="flex w-full max-w-2xl justify-center reveal py-12">
                  <div className="relative isolate inline-flex w-56 h-56 sm:w-72 sm:h-72 items-center justify-center mt-12 lg:mt-8 group">
                    {/* Pulsing Core Aura */}
                    <div className="absolute inset-[-1.75rem] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.14),rgba(255,255,255,0.04)_34%,transparent_68%)] blur-2xl animate-avatar-ambient pointer-events-none" />
                    <div className="absolute inset-[-3rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.07),transparent_62%)] blur-[48px] pointer-events-none" />

                    {/* Outer Tech Rings */}
                    <div className="avatar-ring avatar-ring-outer absolute inset-[-1.5rem] rounded-full pointer-events-none" />
                    <div className="avatar-ring avatar-ring-inner absolute inset-[-0.85rem] rounded-full pointer-events-none" />
                    <div className="absolute inset-[-2.15rem] rounded-full border border-white/[0.04] border-dashed animate-avatar-orbit-slow pointer-events-none" />
                    <div className="absolute inset-[-2.65rem] rounded-full border border-cyan-400/[0.08] border-dashed animate-avatar-orbit-reverse pointer-events-none" />

                    {/* Targeting Brackets (Corners) */}
                    <div className="absolute inset-[-2rem] pointer-events-none">
                      <div className="avatar-corner avatar-corner-tl absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-400/35 rounded-tl-lg transition-all duration-700 group-hover:border-cyan-300/70 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                      <div className="avatar-corner avatar-corner-tr absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-400/35 rounded-tr-lg transition-all duration-700 group-hover:border-cyan-300/70 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <div className="avatar-corner avatar-corner-bl absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan-400/35 rounded-bl-lg transition-all duration-700 group-hover:border-cyan-300/70 group-hover:-translate-x-1 group-hover:translate-y-1" />
                      <div className="avatar-corner avatar-corner-br absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-400/35 rounded-br-lg transition-all duration-700 group-hover:border-cyan-300/70 group-hover:translate-x-1 group-hover:translate-y-1" />
                      <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full border border-cyan-300/30 bg-[#0A0A0A]/80 shadow-[0_0_12px_rgba(34,211,238,0.18)]" />
                      <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full border border-white/15 bg-[#0A0A0A]/80" />
                    </div>

                    {/* Rotating Radar Sweep */}
                    <div className="absolute inset-[-0.5rem] rounded-full animate-avatar-sweep pointer-events-none [background:conic-gradient(from_0deg,transparent_0_292deg,rgba(255,255,255,0.04)_326deg,rgba(34,211,238,0.28)_360deg)] [mask-image:radial-gradient(ellipse_at_center,transparent_68%,black_70%)]" />

                    {/* Avatar Container */}
                    <div className="relative w-full h-full rounded-full p-1.5 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(10,10,10,0.96)_30%,rgba(34,211,238,0.16)_62%,rgba(10,10,10,0.98))] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_50px_rgba(0,0,0,0.8),0_0_34px_rgba(34,211,238,0.08)] z-10 cursor-crosshair overflow-hidden group-hover:border-cyan-500/30 transition-colors duration-500">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 ring-1 ring-white/10">
                        {/* Imagem */}
                        <img
                          src={fotoPerfil}
                          alt="Renzo Fernandes Core"
                          className="w-full h-full object-cover filter contrast-[1.15] saturate-50 group-hover:scale-110 group-hover:saturate-100 transition-all duration-700"
                        />

                        {/* Overlay Shadow para profundidade */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-[#0A0A0A]/90 z-10 mix-blend-multiply pointer-events-none" />
                        <div className="absolute inset-0 z-20 rounded-full border border-white/[0.07] shadow-[inset_0_0_28px_rgba(34,211,238,0.08),inset_0_-34px_52px_rgba(0,0,0,0.36)] pointer-events-none" />
                        <div className="absolute inset-x-8 top-8 z-20 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60 pointer-events-none" />

                        {/* Holographic Scanner Beam */}
                        <div className="absolute inset-0 z-30 pointer-events-none animate-avatar-scan">
                          <div className="absolute left-[-18%] w-[136%] h-px bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent shadow-[0_0_14px_rgba(34,211,238,0.45)]" />
                          <div
                            className="absolute left-0 w-full h-20 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-70"
                            style={{ bottom: "100%" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* System Badges */}
                    <div className="absolute -right-8 top-12 sm:-right-12 sm:top-16 bg-[#0A0A0A]/80 border border-cyan-500/25 px-3 py-1.5 rounded text-[0.65rem] font-mono text-cyan-300/80 tracking-widest shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_15px_rgba(34,211,238,0.08)] z-20 backdrop-blur-md animate-avatar-float">
                      SYS.SYNC
                    </div>
                    <div className="absolute -left-4 bottom-12 sm:-left-8 sm:bottom-16 bg-[#0A0A0A]/80 border border-emerald-500/25 px-3 py-1.5 rounded text-[0.65rem] font-mono text-emerald-300/80 tracking-widest shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_15px_rgba(16,185,129,0.08)] z-20 backdrop-blur-md animate-avatar-float [animation-delay:1.4s]">
                      100%
                    </div>
                  </div>
                </div>

                {/* CARD DE LINKS E RESUMO - ajuste posição, tamanho e conteúdo aqui */}
                <aside className="mt-12 w-full max-w-2xl rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-left shadow-xl backdrop-blur-md lg:mt-auto">
                  <h2
                    className={`text-xs font-semibold uppercase tracking-[0.24em] ${titulo_cor_opacidade}`}
                  >
                    Links
                  </h2>
                  <div className="mt-3 grid gap-2 text-sm font-medium">
                    <a
                      href="https://www.linkedin.com/in/renzo-fernandes"
                      className={`cursor-pointer rounded-lg px-4 py-2.5 text-zinc-300 group-hover:text-cyan-400 ${hover_card_azul}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn: /renzo-fernandes
                    </a>
                    <a
                      href="https://github.com/RenzoFernandes"
                      className={`cursor-pointer rounded-lg px-4 py-2.5 text-zinc-300 group-hover:text-cyan-400 ${hover_card_azul}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub: /RenzoFernandes
                    </a>
                  </div>

                  <div className="my-6 h-px w-full bg-white/5" />

                  <h2
                    className={`text-xs font-semibold uppercase tracking-[0.24em] ${titulo_cor_opacidade}`}
                  >
                    Resumo
                  </h2>
                  <p
                    className={`mt-3 text-sm leading-6 ${texto_cor_opacidade}`}
                  >
                    Profissional em formação em Sistemas de Informação (5º
                    semestre), com experiência em projetos de desenvolvimento,
                    perfil analítico e rápida capacidade de aprendizado.
                    Interesse em desenvolvimento full stack, sistemas
                    corporativos e tecnologia aplicada a negócios.
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="relative pt-8 pb-12">
          <SectionBackground variant="blue" align="left" />
          <div className={`relative z-10 ${containerStyles}`}>
            <AccordionSection id="sobre" title="Sobre">
              <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)]">
                <div className={`space-y-4 text-sm ${texto_cor_opacidade}`}>
                  <p>
                    Profissional em formação em Sistemas de Informação, com
                    futura formação dupla em Ciências Contábeis, unindo
                    tecnologia, análise de dados e visão estratégica de negócios
                    para atuar no desenvolvimento de soluções corporativas,
                    automação de processos e sistemas escaláveis.
                    <br />
                    <br />
                    Possuo experiência no desenvolvimento de projetos full
                    stack, APIs REST, integrações de sistemas, modelagem de
                    bancos de dados e aplicações web, utilizando tecnologias
                    como JavaScript, TypeScript, React, Node.js, C# (.NET),
                    Java, SQL e MySQL.
                    <br />
                    <br />
                    Atuo também com análise de dados e geração de insights
                    através do Power BI, além de conhecimentos em ambientes
                    Mainframe IBM (TSO/ZOWE) e tecnologias corporativas voltadas
                    a ERP e integração de processos empresariais, com formação
                    complementar pelo SAP Learning Hub.
                    <br />
                    <br />
                    Tenho perfil analítico, foco em resolução de problemas e
                    facilidade em conectar tecnologia às necessidades do
                    negócio, contribuindo para o desenvolvimento de soluções
                    eficientes, organizadas e com impacto real. Busco atuar em
                    ambientes que valorizem inovação, aprendizado contínuo,
                    colaboração e evolução profissional constante.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/5 bg-[#0A0A0A] p-5 premium-card transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] group">
                    <h3
                      className={`mb-2 text-sm font-semibold transition-colors duration-300 group-hover:text-cyan-400 ${titulo_cor_opacidade}`}
                    >
                      Como trabalho
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${texto_cor_opacidade}`}
                    >
                      Atuo com organização, clareza e foco em melhoria contínua.
                      Valorizo código limpo, aprendizado constante e colaboração
                      em equipe para desenvolver soluções eficientes e
                      escaláveis.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#0A0A0A] p-5 premium-card transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] group">
                    <h3
                      className={`mb-2 text-sm font-semibold transition-colors duration-300 group-hover:text-cyan-400 ${titulo_cor_opacidade}`}
                    >
                      O que busco
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${texto_cor_opacidade}`}
                    >
                      Busco minha primeira oportunidade em tecnologia para
                      adquirir experiência prática, contribuir com projetos
                      reais e evoluir profissionalmente em um ambiente de
                      inovação e aprendizado contínuo.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionSection>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="relative pt-8 pb-12">
          <SectionBackground variant="emerald" align="right" />
          <div className={`relative z-10 ${containerStyles}`}>
            <AccordionSection id="habilidades" title="Habilidades">
              <div className="grid gap-5 md:grid-cols-2">
                {habilidadesBlocos.map((bloco) => (
                  <section key={bloco.titulo} className="min-w-0">
                    <h3
                      className={`mb-3 text-sm font-semibold ${titulo_bloco_formacao}`}
                    >
                      {bloco.titulo}
                    </h3>
                    <ul className="grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(9.5rem,9.5rem))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(10.5rem,10.5rem))] lg:grid-cols-[repeat(3,minmax(0,10.5rem))]">
                      {bloco.itens.map((item) => (
                        <li
                          key={item.nome}
                          className={`flex h-12 items-center gap-2.5 rounded-xl border px-2.5 py-1.5 backdrop-blur-sm reveal ${hover_card_azul}`}
                        >
                          <span
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-base"
                            style={{ color: item.cor }}
                            aria-hidden="true"
                          >
                            <item.icone />
                          </span>
                          <span
                            className={`min-w-0 text-sm ${texto_cor_opacidade}`}
                          >
                            {item.nome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </AccordionSection>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="relative pt-8 pb-12">
          <SectionBackground variant="purple" align="center" />
          <div className={`relative z-10 ${containerStyles}`}>
            <AccordionSection
              id="projetos"
              title="Projetos"
              action={
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-[#111] text-xl leading-none text-zinc-500 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-[#222] hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-label="Projetos anteriores"
                    onClick={() => scrollProjetos("prev")}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-[#111] text-xl leading-none text-zinc-500 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-[#222] hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-label="Próximos projetos"
                    onClick={() => scrollProjetos("next")}
                  >
                    ›
                  </button>
                </div>
              }
            >
              <div
                ref={projetosCarouselRef}
                className="projects-carousel flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden pt-4 pb-12 px-4 -mx-4 md:px-0 md:mx-0 md:pr-[16%] lg:pr-0"
                onPointerDown={handleProjetosPointerDown}
                onPointerMove={handleProjetosPointerMove}
                onPointerUp={stopProjetosDrag}
                onPointerCancel={stopProjetosDrag}
                onPointerLeave={stopProjetosDrag}
                onClickCapture={handleProjetosClickCapture}
                onScroll={atualizarProjetoAtivo}
              >
                {projetos.map((project, index) => (
                  <article
                    key={project.title}
                    className="group relative flex h-[34rem] w-[91%] flex-none cursor-pointer snap-start flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0A0A0A] premium-card transition-all duration-500 hover:-translate-y-2 hover:border-zinc-600/50 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:w-[calc((100%-1.25rem)/2.02)] lg:w-[calc((100%-2.5rem)/3.3)] reveal"
                    style={{ transitionDelay: `${index * 100}ms` }}
                    role="link"
                    tabIndex={0}
                    aria-label={`Abrir projeto ${project.title}`}
                    onClick={() => abrirProjeto(project.projectUrl)}
                    onKeyDown={(event) =>
                      handleProjetoKeyDown(event, project.projectUrl)
                    }
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20" />
                    <div className="relative h-44 w-full shrink-0 overflow-hidden border-b border-white/5 bg-[#080808]">
                      {project.image ? (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 opacity-80 transition-opacity duration-500 group-hover:opacity-40" />
                          <img
                            src={project.image}
                            alt={`Imagem do projeto ${project.title}`}
                            className="relative z-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 opacity-80 transition-opacity duration-500 group-hover:opacity-40" />
                      )}
                    </div>
                    <div className="relative z-10 flex flex-1 flex-col p-5">
                      <header className="flex min-h-[1.75rem] items-start">
                        <h3
                          className={`overflow-hidden text-base font-semibold leading-6 transition-colors duration-300 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] group-hover:text-white ${titulo_cor_opacidade}`}
                        >
                          {project.title}
                        </h3>
                      </header>
                      <p
                        className={`mt-2 text-sm leading-relaxed ${texto_cor_opacidade}`}
                      >
                        {project.description}
                      </p>
                      <div className="mt-auto pt-1">
                        <ul className="grid h-[6.5rem] grid-cols-3 content-start gap-2 overflow-hidden">
                          {project.technologies.map((technology) => (
                            <li
                              key={technology}
                              className="flex min-h-7 min-w-0 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] px-1.5 py-1 text-center text-[0.62rem] font-medium leading-tight text-zinc-400 transition-colors duration-300 group-hover:border-zinc-600/50 group-hover:text-zinc-200 sm:px-2 sm:text-[0.68rem]"
                              title={technology}
                            >
                              {technology}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2 flex min-h-[1.25rem] text-xs font-semibold tracking-wide text-zinc-500 transition-colors duration-300 group-hover:text-white uppercase">
                          <span className="relative pb-px">Abrir Projeto</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div
                className="mt-0 flex justify-center gap-2"
                aria-label="Navegação dos projetos"
              >
                {Array.from({ length: totalPaginasProjetos }).map(
                  (_, index) => (
                    <button
                      key={`projetos-pagina-${index + 1}`}
                      type="button"
                      className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020202] ${
                        paginaProjetoAtiva === index
                          ? "w-6 bg-zinc-300 opacity-100 shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                          : "w-2 bg-zinc-800 opacity-60 hover:bg-zinc-500 hover:opacity-100"
                      }`}
                      aria-label={`Ir para página ${index + 1} dos projetos`}
                      aria-current={
                        paginaProjetoAtiva === index ? "true" : undefined
                      }
                      onClick={() => irParaPaginaProjetos(index)}
                    />
                  ),
                )}
              </div>
            </AccordionSection>
          </div>
        </section>

        {/* FORMACAO & CERTIFICACOES */}
        <section id="formacao" className="relative pt-8 pb-12">
          <SectionBackground variant="cyan" align="left" />
          <div className={`relative z-10 ${containerStyles}`}>
            <AccordionSection id="formacao" title="Formação e Cursos">
              <div className="grid gap-5 md:grid-cols-3">
                {/* EDITAR FORMACAO - faculdade, curso, status e periodo */}
                <div
                  className={`rounded-2xl border p-4 shadow-sm backdrop-blur-sm reveal ${hover_card_azul}`}
                >
                  <h3
                    className={`mb-3 text-sm font-semibold ${titulo_bloco_formacao}`}
                  >
                    Formação
                  </h3>
                  <div className={`space-y-5 text-sm ${texto_cor_opacidade}`}>
                    <div>
                      <p className={`font-medium ${titulo_cor_opacidade}`}>
                        Bacharelado em Sistemas de Informação
                      </p>
                      <p className={texto_cor_opacidade}>
                        Universidade Santa Cecília (UNISANTA)
                      </p>
                      <p className={`text-xs ${texto_cor_opacidade}`}>
                        2024-Cursando - Previsão: Dez/2028 - 5º semestre
                      </p>
                    </div>
                    <div className="h-px w-full bg-white/5" />

                    <div>
                      <p className={`font-medium ${titulo_cor_opacidade}`}>
                        Bacharelado em Ciências Contábeis
                      </p>
                      <p className={texto_cor_opacidade}>
                        Universidade Santa Cecília (UNISANTA)
                      </p>
                      <p className={`text-xs ${texto_cor_opacidade}`}>
                        2026-Cursando - Previsão: Dez/2029 - 1º semestre
                      </p>
                    </div>
                  </div>
                </div>

                {/* EDITAR CERTIFICACOES - nome do curso e instituicao */}
                <div
                  className={`rounded-2xl border p-4 shadow-sm backdrop-blur-sm reveal ${hover_card_azul}`}
                >
                  <h3
                    className={`mb-3 text-sm font-semibold ${titulo_bloco_formacao}`}
                  >
                    Certificações e Cursos
                  </h3>
                  <ul className={`space-y-2 text-sm ${texto_cor_opacidade}`}>
                    {certificacoesVisiveis.map((curso) => (
                      <li key={`${curso.nome}-${curso.instituicao}`}>
                        <p className={texto_cor_opacidade}>
                          <span className="font-semibold">{curso.nome}</span>
                          <span> - {curso.instituicao}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                  {temCertificacoesExtras && (
                    <button
                      type="button"
                      className="mt-3 text-sm font-semibold text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                      onClick={() =>
                        setMostrarTodasCertificacoes((prev) => !prev)
                      }
                    >
                      {mostrarTodasCertificacoes ? "Ver menos" : "Ver mais"}
                    </button>
                  )}
                </div>

                {/* EDITAR IDIOMAS - idioma e nivel de proficiencia */}
                <div
                  className={`rounded-2xl border p-4 shadow-sm backdrop-blur-sm reveal ${hover_card_azul}`}
                >
                  <h3
                    className={`mb-3 text-sm font-semibold ${titulo_bloco_formacao}`}
                  >
                    Idiomas
                  </h3>
                  <ul className={`space-y-2 text-sm ${texto_cor_opacidade}`}>
                    <li>
                      <b>Português</b> - nativo
                    </li>
                    <li>
                      <b>Inglês</b> - intermediário
                    </li>
                    <li>
                      <b>Espanhol</b> - intermediário
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionSection>
          </div>
        </section>
        {/* CONTATO */}
        <section id="contato" className="relative pt-8 pb-12">
          <SectionBackground variant="blue" align="center" />
          <div className={`relative z-10 ${containerStyles}`}>
            <AccordionSection id="contato" title="Contato">
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0A0A0A] p-2.5 premium-card md:p-3">
                <div className="pointer-events-none absolute -left-18 -top-18 h-56 w-56 rounded-full bg-white/[0.02] blur-3xl" />
                <div className="pointer-events-none absolute -right-24 top-4 h-64 w-64 rounded-full bg-white/[0.02] blur-3xl" />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="relative grid min-h-[8rem] gap-5 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                  <div className="flex flex-col justify-start pt-2 pl-4">
                    <h2
                      className={`text-2xl font-bold tracking-tight ${titulo_cor_opacidade}`}
                    >
                      Vamos construir o futuro.
                    </h2>
                    <p
                      className={`mt-3 max-w-2xl text-sm leading-relaxed ${texto_cor_opacidade}`}
                    >
                      Em busca da minha primeira oportunidade em tecnologia, com
                      foco em desenvolvimento, engenharia de dados e soluções
                      corporativas, aplicando tecnologia para resolver problemas
                      reais e gerar valor através de sistemas eficientes e bem
                      estruturados.
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <a
                        href="mailto:renzoheikivf@gmail.com"
                        className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.13),rgba(113,113,122,0.08)_48%,rgba(255,255,255,0.06))] px-7 py-2.5 text-sm font-semibold text-zinc-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_0_24px_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/12 hover:text-white hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.24),0_0_30px_rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                      >
                        Enviar e-mail
                      </a>
                      <a
                        href="https://github.com/RenzoFernandes"
                        className="inline-flex items-center justify-center rounded-lg border border-white/5 bg-[#111] px-7 py-2.5 text-sm font-medium text-zinc-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#222] hover:text-white hover:border-zinc-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/renzo-fernandes"
                        className="inline-flex items-center justify-center rounded-lg border border-white/5 bg-[#111] px-7 py-2.5 text-sm font-medium text-zinc-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#222] hover:text-white hover:border-zinc-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Abrir LinkedIn
                      </a>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-[#111]/50 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-sm">
                    <h3
                      className={`text-sm font-semibold tracking-wide ${titulo_cor_opacidade}`}
                    >
                      Contato rápido
                    </h3>
                    <dl className="mt-4 text-sm">
                      <div className="grid gap-2 border-b border-white/5 py-3 text-sm font-medium text-zinc-300 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-center">
                        <dt className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-600">
                          E-mail
                        </dt>
                        <dd className="break-all sm:col-start-2">
                          <a
                            href="mailto:renzoheikivf@gmail.com"
                            className="text-zinc-300 transition-colors hover:text-white"
                          >
                            renzoheikivf@gmail.com
                          </a>
                        </dd>
                      </div>
                      <div className="grid gap-2 border-b border-white/5 py-3 text-sm font-medium text-zinc-300 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-center">
                        <dt className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-600">
                          Telefone
                        </dt>
                        <dd className="sm:col-start-2">
                          <a
                            href="https://wa.me/5513997000096?text=Ol%C3%A1%20Renzo%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20com%20voc%C3%AA."
                            className="text-zinc-300 transition-colors hover:text-white"
                            target="_blank"
                            rel="noreferrer"
                          >
                            (13) 99700-0096
                          </a>
                        </dd>
                      </div>
                      <div className="grid gap-2 border-b border-white/5 py-3 text-sm font-medium text-zinc-300 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-center">
                        <dt className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-600">
                          Local
                        </dt>
                        <dd className="text-zinc-300 sm:col-start-2">
                          São Paulo
                        </dd>
                      </div>
                    </dl>
                    <p className="mt-4 pt-2 text-xs font-medium text-zinc-500">
                      Disponível para oportunidades (Presencial, Híbrido,
                      Remoto).
                    </p>
                  </div>
                </div>
              </div>
            </AccordionSection>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-auto border-t border-white/5 bg-black/60 backdrop-blur-2xl supports-[backdrop-filter]:bg-black/40 py-8 text-sm text-zinc-500">
        <div
          className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${containerStyles}`}
        >
          <p>
            © {year ?? "____"} Renzo Fernandes. Todos os direitos reservados.
          </p>
          <a
            href="#hero"
            className="font-medium text-zinc-400 underline underline-offset-4 decoration-white/20 transition-all hover:text-cyan-400 hover:decoration-cyan-400/50"
          >
            Voltar ao topo
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

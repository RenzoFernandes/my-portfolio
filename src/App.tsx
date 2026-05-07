import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { IconType } from 'react-icons'
import {
  SiCss,
  SiDbeaver,
  SiDbt,
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
  SiNodedotjs,
  SiOpenapiinitiative,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRobotframework,
  SiSap,
  SiSalesforce,
  SiServerless,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
  SiOpenjdk,
  SiVercel,
} from 'react-icons/si'
import fotoPerfil from './assets/img/foto_perfil.jpeg'
import menuOnlineImage from './assets/img/menu on-line.jpg'

const headerStyles = {
  header: 'border-slate-700/70 bg-[#0f172a]/90 text-[#d8e6fd] shadow-[0_18px_55px_rgba(2,6,23,0.42)]',
  logo: 'text-slate-100',
  nav: 'text-slate-300',
  navLink: 'hover:text-cyan-200 focus-visible:text-cyan-200',
  menuButton:
    'border-slate-600/80 bg-slate-900/80 text-[#d8e6fd] hover:border-cyan-300/80 hover:text-cyan-100',
  menuPanel: 'border-slate-700/80 bg-[#0f172a]/95 text-[#d8e6fd]',
  menuNav: 'text-slate-200',
  menuLink: 'hover:bg-slate-800/90 hover:text-cyan-100',
}

const containerStyles = 'mx-auto w-full max-w-7xl px-8 sm:px-14 lg:px-20'
const titulo_cor_opacidade = 'text-slate-100'
const texto_cor_opacidade = 'text-slate-400/95'
const titulo_bloco_formacao = 'text-sky-300'
const hover_card_azul =
  'transition duration-200 hover:border-sky-300/70 hover:bg-slate-900 hover:shadow-[0_0_24px_rgba(56,189,248,0.16)]'

type SkillItem = {
  nome: string
  icone: IconType
  cor?: string
}

type SkillCategory = {
  titulo: string
  itens: SkillItem[]
}

// EDITAR HABILIDADES - para acrescentar ou remover cards, altere apenas estas listas.
const habilidadesBlocos: SkillCategory[] = [
  {
    titulo: 'Front-end',
    itens: [
      { nome: 'HTML5', icone: SiHtml5, cor: '#e34f26' },
      { nome: 'CSS3', icone: SiCss, cor: '#1572b6' },
      { nome: 'JavaScript', icone: SiJavascript, cor: '#f7df1e' },
      { nome: 'TypeScript', icone: SiTypescript, cor: '#3178c6' },
      { nome: 'React', icone: SiReact, cor: '#61dafb' },
      { nome: 'Tailwind CSS', icone: SiTailwindcss, cor: '#38bdf8' },
    ],
  },
  {
    titulo: 'Back-end & Linguagens',
    itens: [
      { nome: 'Node.js', icone: SiNodedotjs, cor: '#5fa04e' },
      { nome: 'Express', icone: SiExpress, cor: '#d8e6fd' },
      { nome: 'APIs REST', icone: SiOpenapiinitiative, cor: '#6ba539' },
      { nome: '.NET', icone: SiDotnet, cor: '#512bd4' },
      { nome: 'C#', icone: SiSharp, cor: '#239120' },
      { nome: 'Java', icone: SiOpenjdk, cor: '#f89820' },
      { nome: 'Python', icone: SiPython, cor: '#3776ab' },
    ],
  },
  {
    titulo: 'Dados & Banco de Dados',
    itens: [
      { nome: 'SQL', icone: SiMysql, cor: '#4479a1' },
      { nome: 'NoSQL', icone: SiMongodb, cor: '#47a248' },
      { nome: 'PostgreSQL', icone: SiPostgresql, cor: '#4169e1' },
      { nome: 'MongoDB', icone: SiMongodb, cor: '#47a248' },
      { nome: 'Modelagem de Dados', icone: SiDbt, cor: '#ff694b' },
      { nome: 'Administração de Dados', icone: SiDbeaver, cor: '#38bdf8' },
    ],
  },
  {
    titulo: 'Ferramentas',
    itens: [
      { nome: 'Git', icone: SiGit, cor: '#f05032' },
      { nome: 'GitHub', icone: SiGithub, cor: '#d8e6fd' },
      { nome: 'GitHub Actions', icone: SiGithubactions, cor: '#2088ff' },
      { nome: 'Vercel', icone: SiVercel, cor: '#d8e6fd' },
    ],
  },
  {
    titulo: 'Sistemas Corporativos',
    itens: [
      { nome: 'SAP', icone: SiSap, cor: '#0faaff' },
      { nome: 'ERP', icone: SiErpnext, cor: '#38bdf8' },
      { nome: 'Mainframe', icone: SiServerless, cor: '#d8e6fd' },
      { nome: 'Salesforce', icone: SiSalesforce, cor: '#00a1e0' },
    ],
  },
  {
    titulo: 'Automação & IA',
    itens: [
      { nome: 'Automação com Python', icone: SiRobotframework, cor: '#00c0b5' },
      { nome: 'IA Generativa', icone: SiOpenai, cor: '#d8e6fd' },
    ],
  },
]

// EDITAR CERTIFICAÇÕES E CURSOS - adicione, remova ou altere nome e instituição.
const certificacoesCursos = [
  {
    nome: 'Desenvolvimento Front-end',
    instituicao: 'Unisanta • 2025',
  },
  {
    nome: 'Desenvolvimento Back-end',
    instituicao: 'Unisanta • 2026',
  },
  {
    nome: 'Administração de Dados',
    instituicao: 'Unisanta • 2026',
  },
]



function useCurrentYear() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return year
}

type AccordionSectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

function AccordionSection({ children }: AccordionSectionProps) {
  return <>{children}</>
}

type MobileMenuProps = {
  links: Array<{ label: string; href: string }>
}

function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (href: string) => {
    const target = document.querySelector(href)

    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    setIsOpen(false)
  }

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${headerStyles.menuButton}`}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span className={`h-0.5 w-5 rounded bg-current transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 rounded bg-current transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`h-0.5 w-5 rounded bg-current transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </span>
      </button>

      <div
        id="mobile-menu-panel"
        className={`absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-xl border shadow-soft-xl backdrop-blur transition-all duration-200 ${headerStyles.menuPanel} ${
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        <nav className={`flex flex-col p-2 text-sm ${headerStyles.menuNav}`} aria-label="Menu mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 font-medium transition-colors ${headerStyles.menuLink}`}
              onClick={(event) => {
                event.preventDefault()
                handleNavigate(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

function App() {
  const year = useCurrentYear()
  const [mostrarTodasCertificacoes, setMostrarTodasCertificacoes] = useState(false)
  const [projetoAtivo, setProjetoAtivo] = useState(0)
  const projetosCarouselRef = useRef<HTMLDivElement | null>(null)
  const isDraggingProjetosRef = useRef(false)
  const draggedProjetosRef = useRef(false)
  const dragStartXProjetosRef = useRef(0)
  const dragScrollLeftProjetosRef = useRef(0)
  const temCertificacoesExtras = certificacoesCursos.length > 5
  const certificacoesVisiveis =
    temCertificacoesExtras && !mostrarTodasCertificacoes
      ? certificacoesCursos.slice(0, 5)
      : certificacoesCursos
  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Contato', href: '#contato' },
  ]
  const projetos = [
    {
      title: 'Menu On-line',
      description:
        'Aplicação web de cardápio digital para restaurante, com navegação por categorias, exibição dinâmica dos produtos e carrinho interativo.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'],
      image: menuOnlineImage,
      projectUrl: 'https://menu-on-line-mu.vercel.app/',
    },
    {
      title: 'Nome do Projeto 1',
      description:
        'Descreva o objetivo do projeto, principais funcionalidades e o impacto gerado para o cliente ou usuário final.',
      technologies: ['React', 'TypeScript', 'API REST'],
      projectUrl: '#',
    },
    {
      title: 'Nome do Projeto 2',
      description:
        'Destaque as decisões técnicas que você tomou, desafios enfrentados e como resolveu problemas específicos.',
      technologies: ['JavaScript', 'Charts', 'UX'],
      projectUrl: '#',
    },
    {
      title: 'Nome do Projeto 3',
      description:
        'Fale sobre performance, SEO, acessibilidade ou outros pontos relevantes que você trabalhou nesse projeto.',
      technologies: ['HTML', 'CSS', 'Otimização'],
      projectUrl: '#',
    },
    {
      title: 'Nome do Projeto 4',
      description:
        'Descreva aqui as principais funcionalidades, tecnologias utilizadas e o resultado entregue neste projeto.',
      technologies: ['React', 'JavaScript', 'CSS'],
      projectUrl: '#',
    },
    {
      title: 'Nome do Projeto 5',
      description:
        'Destaque os dados apresentados, interações disponíveis e decisões técnicas aplicadas no desenvolvimento.',
      technologies: ['TypeScript', 'API REST', 'UX'],
      projectUrl: '#',
    },
  ]
  const projetosPorPagina = 3
  const totalPaginasProjetos = Math.ceil(projetos.length / projetosPorPagina)
  const paginaProjetoAtiva = Math.min(
    Math.floor(projetoAtivo / projetosPorPagina),
    totalPaginasProjetos - 1,
  )

  const scrollProjetos = (direction: 'prev' | 'next') => {
    const nextPage =
      direction === 'next'
        ? (paginaProjetoAtiva + 1) % totalPaginasProjetos
        : (paginaProjetoAtiva - 1 + totalPaginasProjetos) % totalPaginasProjetos

    irParaPaginaProjetos(nextPage)
  }

  const atualizarProjetoAtivo = () => {
    const carousel = projetosCarouselRef.current

    if (!carousel) {
      return
    }

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth

    if (carousel.scrollLeft >= maxScrollLeft - 8) {
      const ultimoProjetoDaPagina = Math.min(
        (totalPaginasProjetos - 1) * projetosPorPagina,
        projetos.length - 1,
      )

      setProjetoAtivo((atual) => (atual === ultimoProjetoDaPagina ? atual : ultimoProjetoDaPagina))
      return
    }

    const slides = Array.from(carousel.children).filter(
      (slide): slide is HTMLElement => slide instanceof HTMLElement,
    )
    const projetoMaisProximo = slides.reduce(
      (closestIndex, slide, index) => {
        const closestSlide = slides[closestIndex]
        const currentDistance = Math.abs(slide.offsetLeft - carousel.scrollLeft)
        const closestDistance = Math.abs(closestSlide.offsetLeft - carousel.scrollLeft)

        return currentDistance < closestDistance ? index : closestIndex
      },
      0,
    )
    const paginaAtual = Math.floor(projetoMaisProximo / projetosPorPagina)
    const projetoAtual = Math.min(paginaAtual * projetosPorPagina, projetos.length - 1)

    setProjetoAtivo((atual) => (atual === projetoAtual ? atual : projetoAtual))
  }

  const irParaProjeto = (index: number) => {
    const carousel = projetosCarouselRef.current

    if (!carousel) {
      return
    }

    const slide = carousel.children[index]

    if (!(slide instanceof HTMLElement)) {
      return
    }

    carousel.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' })
    setProjetoAtivo(index)
  }

  const irParaPaginaProjetos = (pagina: number) => {
    const index = Math.min(pagina * projetosPorPagina, projetos.length - 1)
    irParaProjeto(index)
  }

  const handleProjetosPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || !projetosCarouselRef.current) {
      return
    }

    isDraggingProjetosRef.current = true
    draggedProjetosRef.current = false
    dragStartXProjetosRef.current = event.clientX
    dragScrollLeftProjetosRef.current = projetosCarouselRef.current.scrollLeft
  }

  const handleProjetosPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingProjetosRef.current || !projetosCarouselRef.current) {
      return
    }

    draggedProjetosRef.current = Math.abs(event.clientX - dragStartXProjetosRef.current) > 5

    if (!draggedProjetosRef.current) {
      return
    }

    event.preventDefault()

    if (!projetosCarouselRef.current.hasPointerCapture(event.pointerId)) {
      projetosCarouselRef.current.setPointerCapture(event.pointerId)
    }

    projetosCarouselRef.current.scrollLeft =
      dragScrollLeftProjetosRef.current - (event.clientX - dragStartXProjetosRef.current)
  }

  const stopProjetosDrag = () => {
    isDraggingProjetosRef.current = false
  }

  const handleProjetosClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!draggedProjetosRef.current) {
      return
    }

    event.preventDefault()
    event.stopPropagation()
    draggedProjetosRef.current = false
  }

  const abrirProjeto = (projectUrl: string) => {
    if (!projectUrl || projectUrl === '#') {
      return
    }

    window.open(projectUrl, '_blank', 'noopener,noreferrer')
  }

  const handleProjetoKeyDown = (event: KeyboardEvent<HTMLElement>, projectUrl: string) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return
    }

    event.preventDefault()
    abrirProjeto(projectUrl)
  }

  return (
    <div className="min-h-screen overflow-x-hidden text-[#d8e6fd]">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${headerStyles.header}`}
      >
        <div className={`flex items-center justify-between gap-4 py-4 sm:py-5 ${containerStyles}`}>
          <a href="#hero" className="inline-flex min-w-0 items-center gap-2">
            <span className={`truncate text-sm font-extrabold uppercase tracking-[0.2em] sm:text-[0.95rem] ${headerStyles.logo}`}>
              Renzo Fernandes
            </span>
          </a>
          <div className="flex items-center gap-3 sm:gap-5">
            <nav
              className={`hidden items-center gap-7 text-sm font-semibold sm:flex ${headerStyles.nav}`}
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
        <div className="h-px w-full bg-gradient-to-r from-blue-300/0 via-blue-500/80 to-blue-300/0" aria-hidden="true" />
      </header>

      <main className="pt-[4.625rem] sm:pt-[3.875rem]">
        {/* HERO */}
        <section
          id="hero"
          className="border-b border-slate-800/60 bg-gradient-to-b from-slate-950/20 to-slate-950/80 pt-12 pb-14"
        >
          <div className={containerStyles}>
            <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)]">
              <div className="order-1 flex min-w-0 max-w-4xl flex-col items-start text-left">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/25 bg-slate-900/80 px-3 py-1.5 text-[0.72rem] font-semibold text-cyan-100 shadow-[0_12px_35px_rgba(8,47,73,0.22)] ring-1 ring-white/5 backdrop-blur sm:text-xs">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.85)]" aria-hidden="true" />
                <span className="min-w-0 leading-relaxed">
                  Disponível para oportunidades • Estágio / Júnior
                </span>
              </div>
              <h1 className="mb-4 leading-tight">
                <span className={`block text-3xl font-semibold sm:text-4xl md:text-5xl ${titulo_cor_opacidade}`}>
                  Renzo Fernandes
                </span>
                <span className={`block text-3xl font-semibold sm:text-4xl md:text-5xl ${titulo_cor_opacidade}`}>
                  <span className="inline-block">
                    Estudante de Sistemas de Informação
                  </span>
                </span>
              </h1>
              {/* RESUMO PROFISSIONAL - edite o texto abaixo */}
              <p className={`max-w-xl text-sm leading-7 sm:text-base ${texto_cor_opacidade}`}>
                Busco minha primeira oportunidade em tecnologia, com interesse em desenvolvimento, dados e sistemas corporativos, aplicando a tecnologia na solução de problemas reais.
              </p>
              {/* BOTÕES DE AÇÃO - Hero */}
              <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center rounded-lg border border-cyan-200/50 bg-cyan-200/15 px-5 py-2.5 text-sm font-semibold text-cyan-100 shadow-[0_14px_35px_rgba(34,211,238,0.14)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-cyan-100/70 hover:bg-cyan-100/25 hover:text-white hover:shadow-[0_18px_45px_rgba(34,211,238,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Ver Projetos
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-lg border border-cyan-300/35 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/70 hover:bg-slate-800/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Contato
                </a>
              </div>
              {/* CONTATO RÁPIDO - botões compridos no final da coluna esquerda */}
              <div className="mt-6 grid w-full max-w-[38rem] gap-3 lg:mt-auto lg:pt-10">
                {/* EXTRA CONTACT BUTTON - remove this whole <a> if you do not want it */}
                <div
                  /* LINK - edit href here */
                  className="flex w-full flex-col items-start gap-1 rounded-lg border border-cyan-300/20 bg-slate-900/70 px-4 py-3 text-sm font-medium text-slate-200 shadow-[0_14px_35px_rgba(8,47,73,0.18)] ring-1 ring-white/5 backdrop-blur transition duration-200 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100 sm:grid sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:items-center"
                >
                  {/* TEXT - edit the label here */}
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 opacity-70">
                    Local
                  </span>
                  {/* TEXT - edit the value here */}
                  <span className="break-all text-[#d8e6fd] sm:col-start-2">
                    Santos - SP
                  </span>
                </div>
                <a
                  /* LINK - edit href here */
                  href="mailto:renzoheikivf@gmail.com"
                  className="flex w-full flex-col items-start gap-1 rounded-lg border border-cyan-300/20 bg-slate-900/70 px-4 py-3 text-sm font-medium text-slate-200 shadow-[0_14px_35px_rgba(8,47,73,0.18)] ring-1 ring-white/5 backdrop-blur transition duration-200 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100 sm:grid sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:items-center"
                >
                  {/* TEXT - edit the label here */}
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 opacity-70">
                    E-mail
                  </span>
                  {/* TEXT - edit the value here */}
                  <span className="break-all text-sky-300 underline underline-offset-4 sm:col-start-2">
                    renzoheikivf@gmail.com
                  </span>
                </a>
                <a
                  href="https://wa.me/5513997000096?text=Olá%20Renzo,%20vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20com%20você."
                  className="flex w-full flex-col items-start gap-1 rounded-lg border border-cyan-300/20 bg-slate-900/70 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-[0_14px_35px_rgba(8,47,73,0.18)] ring-1 ring-white/5 backdrop-blur transition duration-200 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100 sm:grid sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:items-center"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 opacity-70">
                    Telefone
                  </span>
                  <span className="text-sky-300 underline underline-offset-4 sm:col-start-2">
                    (13) 99700-0096
                  </span>
                </a>
              </div>
              </div>

              {/* FOTO DE PERFIL - para trocar, substitua o arquivo em src/assets/img/foto_perfil */}
              <div className="order-2 flex min-w-0 flex-col items-center lg:items-end">
                {/* BLOCO DA FOTO - ajuste posição e tamanho aqui */}
                <div className="flex w-full max-w-2xl justify-center">
                  <div className="relative isolate inline-flex rounded-full before:absolute before:inset-[-0.35rem] before:-z-10 before:rounded-full before:bg-[linear-gradient(135deg,rgba(0,212,255,0.38),rgba(123,97,255,0.3),rgba(0,212,255,0.12))] before:opacity-70 before:blur-[2px] after:absolute after:inset-[-1.2rem] after:-z-20 after:rounded-full after:bg-[radial-gradient(circle,rgba(0,212,255,0.2),rgba(123,97,255,0.13)_42%,transparent_70%)] after:opacity-80 after:blur-2xl after:animate-[avatar-glow_8s_ease-in-out_infinite]">
                    <img
                      src={fotoPerfil}
                      alt="Foto de perfil de Renzo Fernandes"
                      className="relative z-10 h-[8.75rem] w-[8.75rem] rounded-full border border-cyan-200/35 object-cover shadow-[0_0_45px_rgba(0,212,255,0.16)] ring-4 ring-sky-400/10 transition duration-300 hover:scale-[1.03] hover:border-cyan-100/60 hover:shadow-[0_0_60px_rgba(123,97,255,0.22)] sm:h-[10.75rem] sm:w-[10.75rem] lg:h-[12.5rem] lg:w-[12.5rem]"
                    />
                  </div>
                </div>

                {/* CARD DE LINKS E RESUMO - ajuste posição, tamanho e conteúdo aqui */}
                <aside className="mt-12 w-full max-w-2xl rounded-2xl border border-cyan-300/20 bg-slate-900/75 p-5 text-left shadow-[0_20px_55px_rgba(8,47,73,0.22)] ring-1 ring-emerald-300/10 backdrop-blur lg:mt-auto">
                  <h2 className={`text-xs font-semibold uppercase tracking-[0.24em] ${titulo_cor_opacidade}`}>
                    Links
                  </h2>
                  <div className="mt-3 grid gap-2 text-sm font-medium">
                    <a
                      href="https://www.linkedin.com/in/renzo-fernandes"
                      className="cursor-pointer rounded-lg border border-slate-700/70 bg-slate-950/40 px-3 py-2 text-sky-300 underline underline-offset-4 transition duration-200 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-200"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn: /renzo-fernandes
                    </a>
                    <a
                      href="https://github.com/RenzoFernandes"
                      className="cursor-pointer rounded-lg border border-slate-700/70 bg-slate-950/40 px-3 py-2 text-sky-300 underline underline-offset-4 transition duration-200 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-200"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub: /RenzoFernandes
                    </a>
                  </div>

                  <div className="my-5 h-px w-full bg-gradient-to-r from-cyan-300/10 via-cyan-200/70 to-cyan-300/10 shadow-[0_0_14px_rgba(34,211,238,0.28)]" />

                  <h2 className={`text-xs font-semibold uppercase tracking-[0.24em] ${titulo_cor_opacidade}`}>
                    Resumo
                  </h2>
                  <p className={`mt-3 text-sm leading-6 ${texto_cor_opacidade}`}>
                    Estudante de Sistemas de Informação (5º semestre), com experiência em projetos e perfil analítico. Facilidade de aprendizado e adaptação a diferentes áreas da tecnologia.
                  </p>
                </aside>
              </div>
            </div>

          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="border-b border-slate-800/60 py-14">
          <div className={containerStyles}>
            <AccordionSection id="sobre" title="Sobre">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className={`flex items-center gap-3 text-xl font-semibold ${titulo_cor_opacidade}`}>
                    <span
                      className="h-6 w-[3px] rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      aria-hidden="true"
                    />
                    <span>Sobre mim</span>
                  </h2>
                </div>
              </div>
              <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)]">
                <div className={`space-y-4 text-sm ${texto_cor_opacidade}`}>
                  <p>
                    Sou estudante de Sistemas de Informação e também de Ciências Contábeis, com interesse em desenvolvimento de software, dados e sistemas corporativos.<br /><br />Desenvolvo projetos próprios com foco em resolver problemas reais, atuando tanto no front-end quanto no back-end, com integração de sistemas e manipulação de dados.<br /><br />Tenho experiência com tecnologias como JavaScript, React, Node.js, C#, .NET e Java, aplicando conceitos de desenvolvimento de aplicações, lógica de sistemas e integração com bancos de dados relacionais e não relacionais.<br /><br />Minha formação combinada em tecnologia e negócios me proporciona uma visão mais completa sobre sistemas corporativos, processos empresariais e análise de dados, especialmente em contextos que envolvem ERP e SAP.<br /><br />Busco minha primeira oportunidade em tecnologia como estagiário, com o objetivo de aprender na prática, contribuir com soluções que gerem valor real e evoluir profissionalmente.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-cyan-400/35 bg-slate-900/70 p-4">
                    <h3 className={`mb-1 text-sm font-semibold ${titulo_cor_opacidade}`}>Como trabalho</h3>
                    <p className={`text-sm ${texto_cor_opacidade}`}>
                      Organização, clareza e foco em evolução constante. Busco escrever código limpo, aprender rápido e colaborar com o time para entregar soluções eficientes.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/35 bg-slate-900/70 p-4">
                    <h3 className={`mb-1 text-sm font-semibold ${titulo_cor_opacidade}`}>O que busco</h3>
                    <p className={`text-sm ${texto_cor_opacidade}`}>
                      Minha primeira oportunidade em tecnologia, em um ambiente onde eu possa aprender na prática, contribuir com o time e evoluir profissionalmente.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionSection>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="border-y border-slate-800/60 py-14">
          <div className={containerStyles}>
            <AccordionSection id="habilidades" title="Habilidades">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className={`flex items-center gap-3 text-xl font-semibold ${titulo_cor_opacidade}`}>
                    <span
                      className="h-6 w-[3px] rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      aria-hidden="true"
                    />
                    <span>Habilidades</span>
                  </h2>
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {habilidadesBlocos.map((bloco) => (
                  <section key={bloco.titulo} className="min-w-0">
                    <h3 className={`mb-3 text-sm font-semibold ${titulo_bloco_formacao}`}>{bloco.titulo}</h3>
                    <ul className="grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(9.5rem,9.5rem))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(10.5rem,10.5rem))] lg:grid-cols-[repeat(3,minmax(0,10.5rem))]">
                      {bloco.itens.map((item) => (
                        <li
                          key={item.nome}
                          className={`flex h-12 items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/80 px-2.5 py-1.5 ${hover_card_azul}`}
                        >
                          <span
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sky-300/30 bg-slate-950/70 text-base text-sky-300"
                            style={{ color: item.cor }}
                            aria-hidden="true"
                          >
                            <item.icone />
                          </span>
                          <span className={`min-w-0 text-sm ${texto_cor_opacidade}`}>{item.nome}</span>
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
        <section id="projetos" className="py-14">
          <div className={containerStyles}>
            <AccordionSection id="projetos" title="Projetos">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className={`flex items-center gap-3 text-xl font-semibold ${titulo_cor_opacidade}`}>
                    <span
                      className="h-6 w-[3px] rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      aria-hidden="true"
                    />
                    <span>Projetos</span>
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-xl leading-none text-sky-300 transition duration-200 hover:border-sky-300/70 hover:bg-slate-800 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    aria-label="Projetos anteriores"
                    onClick={() => scrollProjetos('prev')}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-xl leading-none text-sky-300 transition duration-200 hover:border-sky-300/70 hover:bg-slate-800 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    aria-label="Próximos projetos"
                    onClick={() => scrollProjetos('next')}
                  >
                    ›
                  </button>
                </div>
              </div>
              <div
                ref={projetosCarouselRef}
                className="projects-carousel flex snap-x snap-mandatory gap-5 overflow-x-auto pt-2 pb-3"
                onPointerDown={handleProjetosPointerDown}
                onPointerMove={handleProjetosPointerMove}
                onPointerUp={stopProjetosDrag}
                onPointerCancel={stopProjetosDrag}
                onPointerLeave={stopProjetosDrag}
                onClickCapture={handleProjetosClickCapture}
                onScroll={atualizarProjetoAtivo}
              >
                {projetos.map((project) => (
                  <article
                    key={project.title}
                    className="group relative flex min-h-[28.5rem] w-[75%] flex-none cursor-pointer snap-start self-stretch flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 shadow-soft-xl transition duration-200 hover:-translate-y-1 hover:border-sky-300/70 hover:bg-slate-950 hover:shadow-[0_0_24px_rgba(56,189,248,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-[18.75rem] md:w-[calc((100%-1.25rem)/2.45)] lg:w-[calc((100%-2.5rem)/3.5)]"
                    role="link"
                    tabIndex={0}
                    aria-label={`Abrir projeto ${project.title}`}
                    onClick={() => abrirProjeto(project.projectUrl)}
                    onKeyDown={(event) => handleProjetoKeyDown(event, project.projectUrl)}
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-400/10 via-indigo-500/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    {project.image && (
                      <img
                        src={project.image}
                        alt={`Imagem do projeto ${project.title}`}
                        className="relative z-10 h-40 w-full object-cover"
                      />
                    )}
                    <div className="relative z-10 flex flex-1 flex-col p-4">
                      <header>
                        <h3 className={`text-sm font-semibold ${titulo_cor_opacidade}`}>{project.title}</h3>
                      </header>
                      <p className={`mt-3 min-h-[5rem] text-sm leading-relaxed ${texto_cor_opacidade}`}>
                        {project.description}
                      </p>
                      <ul className="mt-auto flex min-h-[4.75rem] max-h-[4.75rem] flex-wrap content-start gap-2 overflow-hidden pt-4">
                        {project.technologies.map((technology) => (
                          <li
                            key={technology}
                            className="rounded-full border border-slate-700/80 bg-slate-900/90 px-2.5 py-0.5 text-[0.7rem] text-slate-300"
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex min-h-[1.25rem] text-xs text-sky-300">
                        <span className="relative pb-px group-hover:text-sky-200">
                          Abrir projeto
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-6 flex justify-center gap-2" aria-label="Navegação dos projetos">
                {Array.from({ length: totalPaginasProjetos }).map((_, index) => (
                  <button
                    key={`projetos-pagina-${index + 1}`}
                    type="button"
                    className={`h-1.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                      paginaProjetoAtiva === index
                        ? 'w-6 bg-sky-300 opacity-100 shadow-[0_0_12px_rgba(125,211,252,0.55)]'
                        : 'w-2 bg-slate-600/80 opacity-60 hover:bg-sky-300/70 hover:opacity-90'
                    }`}
                    aria-label={`Ir para página ${index + 1} dos projetos`}
                    aria-current={paginaProjetoAtiva === index ? 'true' : undefined}
                    onClick={() => irParaPaginaProjetos(index)}
                  />
                ))}
              </div>
            </AccordionSection>
          </div>
        </section>

        {/* FORMACAO & CERTIFICACOES */}
        <section id="formacao" className="border-y border-slate-800/60 py-14">
          <div className={containerStyles}>
            <AccordionSection id="formacao" title="Formação e Cursos">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className={`flex items-center gap-3 text-xl font-semibold ${titulo_cor_opacidade}`}>
                    <span
                      className="h-6 w-[3px] rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      aria-hidden="true"
                    />
                    <span>Formação e Cursos</span>
                  </h2>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {/* EDITAR FORMACAO - faculdade, curso, status e periodo */}
                <div className={`rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-soft-xl ${hover_card_azul}`}>
                  <h3 className={`mb-3 text-sm font-semibold ${titulo_bloco_formacao}`}>Formação</h3>
                  <div className={`space-y-5 text-sm ${texto_cor_opacidade}`}>
                    <div>
                      <p className={`font-medium ${titulo_cor_opacidade}`}>
                        Bacharelado em Sistemas de Informação
                      </p>
                      <p className={texto_cor_opacidade}>
                        Universidade Santa Cecília (UNISANTA)
                      </p>
                      <p className={`text-xs ${texto_cor_opacidade}`}>
                        2024-2027 - Previsão: Dez/2027 - 5º semestre
                      </p>
                    </div>
                    <div className="h-px w-full bg-slate-800/80" />

                    <div>
                      <p className={`font-medium ${titulo_cor_opacidade}`}>
                        Bacharelado em Ciências Contábeis
                      </p>
                      <p className={texto_cor_opacidade}>
                        Universidade Santa Cecília (UNISANTA)
                      </p>
                      <p className={`text-xs ${texto_cor_opacidade}`}>
                        2026-2029 - Previsão: Dez/2029 - 1º semestre
                      </p>
                    </div>
                  </div>
                </div>

                {/* EDITAR CERTIFICACOES - nome do curso e instituicao */}
                <div className={`rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-soft-xl ${hover_card_azul}`}>
                  <h3 className={`mb-3 text-sm font-semibold ${titulo_bloco_formacao}`}>Certificações e Cursos</h3>
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
                      className="mt-3 text-sm font-semibold text-sky-300 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      onClick={() => setMostrarTodasCertificacoes((prev) => !prev)}
                    >
                      {mostrarTodasCertificacoes ? 'Ver menos' : 'Ver mais'}
                    </button>
                  )}
                </div>

                {/* EDITAR IDIOMAS - idioma e nivel de proficiencia */}
                <div className={`rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-soft-xl ${hover_card_azul}`}>
                  <h3 className={`mb-3 text-sm font-semibold ${titulo_bloco_formacao}`}>Idiomas</h3>
                  <ul className={`space-y-2 text-sm ${texto_cor_opacidade}`}>
                    <li><b>Português</b> - nativo</li>
                    <li><b>Inglês</b> - intermediário</li>
                    <li><b>Espanhol</b> - intermediário</li>
                  </ul>
                </div>
              </div>
            </AccordionSection>
          </div>
        </section>
        {/* CONTATO */}
        <section id="contato" className="py-14">
          <div className={containerStyles}>
            <AccordionSection id="contato" title="Contato">
              <div className="relative overflow-hidden rounded-2xl border border-cyan-400/35 bg-slate-950/80 p-2.5 shadow-[0_0_0_1px_rgba(56,189,248,0.08),0_0_32px_rgba(14,165,233,0.14)] ring-1 ring-sky-300/10 md:p-3">
                <div className="pointer-events-none absolute -left-18 -top-18 h-56 w-56 rounded-full bg-sky-400/24 blur-3xl" />
                <div className="pointer-events-none absolute -right-24 top-4 h-64 w-64 rounded-full bg-sky-500/28 blur-3xl" />
                <div className="pointer-events-none absolute right-1/4 top-10 h-36 w-52 rounded-full bg-cyan-300/16 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 left-1/4 h-52 w-64 rounded-full bg-cyan-400/18 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-18 -right-12 h-48 w-48 rounded-full bg-blue-500/24 blur-3xl" />
                <div className="pointer-events-none absolute bottom-8 right-1/3 h-28 w-44 rounded-full bg-blue-400/12 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_62%_82%,rgba(34,211,238,0.12),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.42),rgba(2,6,23,0.18))]" />
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                <div className="pointer-events-none absolute bottom-6 left-8 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl" />
                <div className="pointer-events-none absolute right-8 top-8 h-16 w-28 rounded-full bg-sky-500/10 blur-2xl" />
                <div className="relative grid min-h-[8rem] gap-5 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                  <div className="flex flex-col justify-start pt-2 pl-4">
                    <h2 className={`text-xl font-semibold ${titulo_cor_opacidade}`}>Vamos conversar?</h2>
                    <p className={`mt-2 max-w-2xl text-xs leading-relaxed sm:text-sm ${texto_cor_opacidade}`}>
                      Estou em busca da minha primeira oportunidade em tecnologia. Tenho interesse em desenvolvimento, dados e sistemas corporativos, com foco em aprender rápido, contribuir com o time e evoluir constantemente.
                    </p>
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                      <a
                        href="mailto:renzoheikivf@gmail.com"
                        className="inline-flex items-center justify-center rounded-lg border border-cyan-200/50 bg-cyan-200/15 px-5 py-2.5 text-sm font-semibold text-cyan-100 shadow-[0_14px_35px_rgba(34,211,238,0.14)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-cyan-100/70 hover:bg-cyan-100/25 hover:text-white hover:shadow-[0_18px_45px_rgba(34,211,238,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      >
                        Enviar e-mail
                      </a>
                      <a
                        href="https://github.com/RenzoFernandes"
                        className="inline-flex items-center justify-center rounded-lg border border-cyan-300/35 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/70 hover:bg-slate-800/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/renzo-fernandes"
                        className="inline-flex items-center justify-center rounded-lg border border-cyan-300/35 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200/70 hover:bg-slate-800/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Abrir LinkedIn
                      </a>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/35 p-3">
                    <h3 className={`text-sm font-semibold ${titulo_cor_opacidade}`}>Contato rápido</h3>
                    <dl className="mt-2.5 text-xs sm:text-sm">
                      <div className="grid gap-1 border-b border-cyan-400/15 py-2 text-sm font-medium text-slate-200 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-center">
                        <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-400 opacity-70">
                          E-mail
                        </dt>
                        <dd className="break-all sm:col-start-2">
                          <a
                            href="mailto:renzoheikivf@gmail.com"
                            className="text-sky-300 underline underline-offset-4 transition-colors hover:text-cyan-100"
                          >
                            renzoheikivf@gmail.com
                          </a>
                        </dd>
                      </div>
                      <div className="grid gap-1 border-b border-cyan-400/15 py-2 text-sm font-medium text-slate-200 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-center">
                        <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-400 opacity-70">
                          Telefone
                        </dt>
                        <dd className="sm:col-start-2">
                          <a
                            href="https://wa.me/5513997000096?text=Ol%C3%A1%20Renzo%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20com%20voc%C3%AA."
                            className="text-sky-300 underline underline-offset-4 transition-colors hover:text-cyan-100"
                            target="_blank"
                            rel="noreferrer"
                          >
                            (13) 99700-0096
                          </a>
                        </dd>
                      </div>
                      <div className="grid gap-1 border-b border-cyan-400/15 py-2 text-sm font-medium text-slate-200 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-center">
                        <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-400 opacity-70">
                          Local
                        </dt>
                        <dd className="text-sky-300 sm:col-start-2">Santos - SP</dd>
                      </div>
                    </dl>
                    <p className="mt-3 border-t border-cyan-400/15 pt-2.5 text-[0.7rem] text-slate-400">
                      Aberto a oportunidades em tecnologia (presencial, híbrido ou remoto)
                    </p>
                  </div>
                </div>
              </div>
            </AccordionSection>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60 bg-slate-950/95 py-6 text-sm text-slate-500">
        <div className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${containerStyles}`}>
          <p>
            © {year ?? '____'} Renzo Fernandes. Todos os direitos reservados.
          </p>
          <a
            href="#hero"
            className="font-medium text-cyan-200 underline underline-offset-4 transition-colors hover:text-cyan-100"
          >
            Voltar ao topo
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App


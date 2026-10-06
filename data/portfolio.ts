export type Project = {
  num: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  date: string;
  role: string;
  org: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  bullets: string[];
};

export const heroStats = [
  { value: "7+", label: "sistemas em produção" },
  { value: "100%", label: "stack própria, do banco ao front" },
];

export const aboutParagraphs: string[] = [
  "Atuo com suporte técnico na Secretaria de Turismo de Belém (SETUR) e como analista de dados na SEDUC-PA, onde contribuo para o diagnóstico e a resolução de problemas técnicos e automatizo tarefas das unidades de tecnologia (CISEB) no Pará.",
  "Além da rotina formal, transformo esse trabalho em sistemas completos: interfaces em React e Next.js, bancos de dados relacionais e dashboards que organizam informação bruta em algo que vira decisão. Curso Sistemas de Informação, com formação complementar em análise de dados (SENAI CEDAM) e Python (Bootcamp DIO).",
  "Gosto de resolver o mesmo problema duas vezes: primeiro fazendo funcionar, depois fazendo funcionar bem — com documentação, tratamento de erro e um processo que qualquer pessoa da equipe consiga entender.",
];

export const stackGroups: StackGroup[] = [
  {
    title: "Linguagens",
    items: ["javascript", "typescript", "python", "java", "sql"],
  },
  {
    title: "Frontend",
    items: [
      "html5",
      "css",
      "react",
      "next.js",
      "tailwind",
      "vite",
      "radix-ui",
      "lucide",
      "motion",
      "three.js",
      "react-markdown",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "node.js",
      "express",
      "firebase-auth",
      "firebase-admin",
      "jwt",
      "bcrypt",
    ],
  },
  {
    title: "Banco de dados",
    items: ["postgresql", "firestore"],
  },
  {
    title: "Inteligência artificial",
    items: ["gemini-api"],
  },
  {
    title: "Automação & análise de dados",
    items: [
      "google-sheets",
      "google-apps-script",
      "selenium",
      "gspread",
      "looker-studio",
    ],
  },
  {
    title: "Ferramentas de desenvolvimento",
    items: ["vercel", "npm", "git", "github"],
  },
];

export const projects: Project[] = [
  {
    num: "01",
    title: "Plataforma Feira de Ciências — SEDUC-PA",
    description:
      "Sistema completo de inscrição e divulgação de projetos científicos da rede estadual do Pará. Arquitetura MVC no backend, autenticação JWT, validação em duas camadas e frontend em Next.js com fluxo de cadastro em etapas.",
    stack: ["next.js", "express", "postgresql", "typescript"],
    link: "#",
  },
  {
    num: "02",
    title: "Central de Chamados CISEB",
    description:
      "Helpdesk completo rodando 100% em Google Workspace — perfis de usuário/técnico/admin, categorias com SLA, notificações por e-mail e anexos via Drive.",
    stack: ["apps script", "sheets", "gmail api"],
    link: "#",
  },
  {
    num: "03",
    title: "Bot de Verificação de Agenda",
    description:
      "Automação em Python que monitora o Google Calendar em intervalos programados, autenticando via OAuth2 e preparando disparo de avisos automáticos.",
    stack: ["python", "google calendar api", "oauth2"],
    link: "#",
  },
  {
    num: "04",
    title: "Automação de Convocação — CISEB",
    description:
      "Script que lê uma planilha de matrículas selecionadas e dispara convocações automáticas, controlando status de envio e evitando duplicidade de contato por aluno.",
    stack: ["python", "gspread", "selenium"],
    link: "#",
  },
  {
    num: "05",
    title: "Totem CISEB — Check-in QR Code",
    description:
      "Kiosk de presença via QR Code em Next.js integrado a Google Sheets, com arquitetura modular e camada de API própria.",
    stack: ["next.js", "react", "sheets api"],
    link: "#",
  },
];

export const experience: ExperienceItem[] = [
  {
    date: "2026 — Presente",
    role: "Suporte Técnico",
    org: "Secretaria Municipal de Turismo de Belém — SETUR",
    logo: {
      src: "/institution-logos/setur-stacked.png",
      alt: "Logo da Prefeitura de Belém, com Turismo abaixo do símbolo",
      width: 1246,
      height: 563,
    },
    bullets: [
      "Atendimento a usuários, orientação sobre recursos de TI e acompanhamento de chamados",
      "Diagnóstico e resolução de problemas em computadores, programas e periféricos",
      "Instalação, configuração e atualização de sistemas e equipamentos",
      "Suporte a impressoras, contas de usuário, acessos e conectividade de rede",
      "Registro das soluções e encaminhamento de casos mais complexos às equipes responsáveis",
    ],
  },
  {
    date: "2025 — Presente",
    role: "Desenvolvedor · Infraestrutura de Educação Digital",
    org: "SEDUC-PA (Secretaria de Educação do Pará) — CISEB",
    logo: {
      src: "/institution-logos/seduc-pa-dark.png",
      alt: "Logo da Secretaria de Educação e do Governo do Estado do Pará",
      width: 720,
      height: 243,
    },
    bullets: [
      "Desenvolvimento e manutenção de sistemas internos para 16 unidades CISEB no Pará",
      "Automação de processos com Google Apps Script (frequência, agendamento, chamados)",
      "Construção de dashboards em Looker Studio para gestão e tomada de decisão",
      "Modelagem de banco de dados e APIs para plataformas de gestão educacional",
    ],
  },
    {
    date: "2024 — 2026",
    role: "Assistente de TI · Infraestrutura de Redes & Manutenção de Sistemas",
    org: "TRAMONTINA BELÉM S/A",
    logo: {
      src: "/institution-logos/tramontina.svg",
      alt: "Tramontina",
      width: 734,
      height: 111,
    },
    bullets: [
      "Suporte técnico e manutenção de sistemas internos da empresa",
      "envio de relatórios e análise de dados para otimização de processos",
      "Construção de dashboards em Looker Studio para gestão e tomada de decisão",
    ],
  },
];

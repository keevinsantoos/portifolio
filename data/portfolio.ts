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
  bullets: string[];
};

export const heroStats = [
  { value: "7+", label: "sistemas em produção" },
  { value: "100%", label: "stack própria, do banco ao front" },
];

export const aboutParagraphs: string[] = [
  "Sou desenvolvedor com atuação em infraestrutura de educação digital na SEDUC-PA, onde construo ferramentas internas e sistemas de gestão para unidades de tecnologia (CISEB) espalhadas pelo estado do Pará.",
  "Minha atuação vai do backend — APIs, bancos relacionais, automações — ao frontend, com interfaces limpas em React e Next.js. Também trabalho com análise de dados, transformando planilhas e registros brutos em dashboards que viram decisão.",
  "Gosto de resolver o mesmo problema duas vezes: primeiro fazendo funcionar, depois fazendo funcionar bem — com documentação, tratamento de erro e um processo que qualquer pessoa da equipe consiga entender.",
];

export const stackGroups: StackGroup[] = [
  {
    title: "Linguagens",
    items: ["javascript", "typescript", "python", "apps-script", "sql", "html-css"],
  },
  {
    title: "Frontend",
    items: ["react", "next.js", "tailwind"],
  },
  {
    title: "Backend & bancos",
    items: ["node.js", "express", "postgresql", "jwt", "bcrypt", "google-sheets"],
  },
  {
    title: "Automação & dados",
    items: ["google-apps-script", "selenium", "gspread", "looker-studio", "git-github"],
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
    role: "Desenvolvedor · Infraestrutura de Educação Digital",
    org: "SEDUC-PA (Secretaria de Educação do Pará) — CISEB",
    bullets: [
      "Desenvolvimento e manutenção de sistemas internos para 16 unidades CISEB no Pará",
      "Automação de processos com Google Apps Script (frequência, agendamento, chamados)",
      "Construção de dashboards em Looker Studio para gestão e tomada de decisão",
      "Modelagem de banco de dados e APIs para plataformas de gestão educacional",
    ],
  },
    {
    date: "2024 — 2026",
    role: "Assistente de TI · Infraestrutura de Educação Digital",
    org: "TRAMONTINA BELÉM S/A",
    bullets: [
      "Suporte técnico e manutenção de sistemas internos da empresa",
      "envio de relatórios e análise de dados para otimização de processos",
      "Construção de dashboards em Looker Studio para gestão e tomada de decisão",
    ],
  },
];

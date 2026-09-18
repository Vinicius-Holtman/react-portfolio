import { L10n } from "../i18n";
import certAbapCloud from "../assets/certificates/SAP_ABAP_Cloud_2026.png";
import certFioriDeveloper from "../assets/certificates/SAP_Fiori_App_Developer_2024.png";

/* ------------------------------------------------------------------ */
/*  Navegação                                                          */
/* ------------------------------------------------------------------ */

export const navLinks: { id: string; label: L10n<string> }[] = [
  { id: "home", label: { pt: "Início", en: "Home" } },
  { id: "about", label: { pt: "Sobre", en: "About" } },
  { id: "skills", label: { pt: "Competências", en: "Skills" } },
  { id: "projects", label: { pt: "Projetos", en: "Projects" } },
  { id: "certificates", label: { pt: "Certificações", en: "Certifications" } },
  { id: "journey", label: { pt: "Trajetória", en: "Journey" } },
  { id: "contact", label: { pt: "Contato", en: "Contact" } },
];

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const hero = {
  greeting: { pt: "Olá, seja bem-vindo. Eu sou o", en: "Hello, welcome. I'm" },
  name: "Vinicius Holtman",
  roles: [
    { pt: "Consultor SAP ABAP Cloud", en: "SAP ABAP Cloud Consultant" },
    { pt: "Desenvolvedor SAP Fiori / RAP", en: "SAP Fiori / RAP Developer" },
    { pt: "Integrações em SAP BTP e CPI", en: "SAP BTP & CPI Integrations" },
    { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },
  ],
  summary: {
    pt: "Mais de cinco anos construindo sobre a plataforma SAP. Atuação de ponta a ponta em implementações S/4HANA — do back-end em ABAP e ABAP RAP às aplicações Fiori e às integrações no SAP BTP com o Integration Suite.",
    en: "Over five years building on the SAP platform. End-to-end work on S/4HANA implementations — from ABAP and ABAP RAP back-ends to Fiori apps and SAP BTP integrations with the Integration Suite.",
  },
  ctaCv: { pt: "Baixar currículo", en: "Download résumé" },
  ctaContact: { pt: "Falar comigo", en: "Get in touch" },
  scroll: { pt: "Role para ver", en: "Scroll down" },
  keywords: [
    "ABAP Cloud",
    "SAP RAP",
    "CDS Views",
    "Fiori Elements",
    "SAP BTP",
    "CPI",
    "PP/DS",
    "Clean Core",
    "OData V4",
  ],
};

/* ------------------------------------------------------------------ */
/*  Sobre                                                              */
/* ------------------------------------------------------------------ */

export const about = {
  title: { pt: "Sobre mim", en: "About me" },
  kicker: {
    pt: "Quem está do outro lado do código",
    en: "Who's behind the code",
  },
  stats: [
    {
      value: 5,
      suffix: "+",
      label: { pt: "anos na plataforma SAP", en: "years on the SAP platform" },
    },
    {
      value: 10,
      suffix: "+",
      label: { pt: "projetos S/4HANA", en: "S/4HANA projects" },
    },
    {
      value: 2,
      suffix: "",
      label: {
        pt: "certificações oficiais SAP",
        en: "official SAP certifications",
      },
    },
  ],
  paragraphs: {
    pt: [
      "Entrei na programação em 2018, no curso técnico do SENAI, com PHP, JavaScript e SQL. O gosto por montar aplicação inteira me levou para o full-stack e, de lá, para o ecossistema SAP — onde estou desde 2020.",
      "Hoje trabalho de ponta a ponta em implementações de SAP S/4HANA: modelo de dados em CDS Views, back-end em ABAP e ABAP RAP, aplicações Fiori Elements e Freestyle, e integrações no SAP BTP com o Integration Suite (CPI). Sou certificado em ABAP Cloud (C_ABAPD_2601) e em SAP Fiori Application Developer (C_FIORD_2404).",
      "Passei por agronegócio, indústria de bens de consumo e Oil & Gas, sempre com desenvolvimento aderente aos princípios de Clean Core. O background full-stack em React, Node.js e TypeScript ajuda a conversar tanto com time técnico quanto com quem entende do negócio.",
    ],
    en: [
      "I started coding in 2018 during a technical course at SENAI, with PHP, JavaScript and SQL. Wanting to build whole applications pulled me into full-stack and, from there, into the SAP ecosystem — where I have been since 2020.",
      "Today I work end to end on SAP S/4HANA implementations: data modelling in CDS Views, back-ends in ABAP and ABAP RAP, Fiori Elements and Freestyle apps, and SAP BTP integrations with the Integration Suite (CPI). I'm certified in ABAP Cloud (C_ABAPD_2601) and as an SAP Fiori Application Developer (C_FIORD_2404).",
      "I've worked across agribusiness, consumer goods manufacturing and Oil & Gas, always building in line with Clean Core principles. The full-stack background in React, Node.js and TypeScript helps me talk to engineers and business people alike.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Competências                                                       */
/* ------------------------------------------------------------------ */

export interface SkillGroup {
  id: string;
  title: L10n<string>;
  caption: L10n<string>;
  icon: string;
  featured?: boolean;
  items: string[];
}

export const skillsSection = {
  title: { pt: "Competências técnicas", en: "Technical skills" },
  kicker: {
    pt: "O que eu uso no dia a dia",
    en: "What I work with day to day",
  },
};

export const skillGroups: SkillGroup[] = [
  {
    id: "sap-backend",
    title: { pt: "SAP — Back-end", en: "SAP — Back-end" },
    caption: {
      pt: "Onde passo a maior parte do tempo",
      en: "Where I spend most of my time",
    },
    icon: "storage",
    featured: true,
    items: [
      "ABAP",
      "ABAP Cloud",
      "SAP RAP",
      "CDS Views",
      "AMDP",
      "SAP BOPF",
      "BAPIs",
      "Batch Input (BDC)",
      "BAdI / User Exit",
      "OData V2 / V4",
      "SAP Gateway (SEGW)",
      "Clean Core",
    ],
  },
  {
    id: "sap-frontend",
    title: { pt: "SAP — Front-end e Cloud", en: "SAP — Front-end & Cloud" },
    caption: {
      pt: "Da tela do usuário à integração",
      en: "From the user's screen to the integration layer",
    },
    icon: "cloud",
    featured: true,
    items: [
      "SAP Fiori Elements",
      "SAP Fiori Freestyle",
      "SAPUI5",
      "SAP CAP",
      "SAP BTP",
      "SAP BAS",
      "Integration Suite (CPI)",
      "SAP HANA",
      "SAP MDK",
      "Fiori Extensibility",
    ],
  },
  {
    id: "sap-modules",
    title: { pt: "Módulos e processos", en: "Modules & processes" },
    caption: {
      pt: "Negócio por trás do código",
      en: "The business behind the code",
    },
    icon: "factory",
    featured: true,
    items: ["PP", "PP/DS", "TM", "MM", "FI"],
  },
  {
    id: "fullstack",
    title: { pt: "Full-stack", en: "Full-stack" },
    caption: {
      pt: "De onde eu vim — e ainda uso",
      en: "Where I came from — and still use",
    },
    icon: "code",
    items: [
      "TypeScript",
      "JavaScript",
      "ReactJS",
      "NextJS",
      "NodeJS",
      "NestJS",
      "GraphQL",
      "Prisma",
      "TypeORM",
      "PostgreSQL",
      "MySQL",
      "Docker",
    ],
  },
  {
    id: "tools",
    title: { pt: "Ferramentas", en: "Tools" },
    caption: { pt: "O resto da bancada", en: "The rest of the bench" },
    icon: "tools",
    items: [
      "Git / GitHub",
      "Eclipse ADT",
      "VS Code",
      "SAP Logon",
      "Postman",
      "Insomnia",
      "Jest",
      "Scrum",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Projetos SAP                                                       */
/* ------------------------------------------------------------------ */

export interface SapProject {
  id: string;
  client: string;
  sector: L10n<string>;
  title: L10n<string>;
  description: L10n<string>;
  tags: string[];
}

export const projectsSection = {
  title: { pt: "Projetos SAP", en: "SAP projects" },
  kicker: {
    pt: "Implementações S/4HANA em que atuei",
    en: "S/4HANA implementations I worked on",
  },
  reposCta: { pt: "Ver repositórios", en: "Browse repositories" },
  githubCta: { pt: "GitHub", en: "GitHub" },
  reposNote: {
    pt: "Projetos pessoais e experimentos ficam no GitHub.",
    en: "Personal projects and experiments live on GitHub.",
  },
};

export const sapProjects: SapProject[] = [
  {
    id: "potencial-agro",
    client: "Grupo Potencial",
    sector: { pt: "Agronegócio", en: "Agribusiness" },
    title: {
      pt: "Controle de produção da esmagadora",
      en: "Crushing plant production control",
    },
    description: {
      pt: "Aplicação de PP para o controle da cadeia produtiva: ordens de produção, planos de produção e gestão de recursos, com leitura de sensores do chão de fábrica confrontada com os registros no SAP para identificar desvios entre o processo físico e o apontado.",
      en: "A PP application for the production chain: production orders, production plans and resource management, reading shop-floor sensor data and comparing it against SAP records to spot gaps between the physical process and what was reported.",
    },
    tags: ["SAP RAP", "CDS Views", "Fiori Elements", "OData V4", "SAP PP"],
  },
  {
    id: "potencial-oil",
    client: "Grupo Potencial",
    sector: { pt: "Oil & Gas", en: "Oil & Gas" },
    title: {
      pt: "Implementação S/4HANA sobre Clean Core",
      en: "S/4HANA implementation on Clean Core",
    },
    description: {
      pt: "Desenvolvimento de aplicações seguindo o conceito de clean core, com extensões desacopladas do core e publicação de serviços OData para consumo pelas áreas de negócio.",
      en: "Application development following clean core principles, with extensions decoupled from the core and OData services published for the business areas.",
    },
    tags: ["SAP RAP", "CDS Views", "ABAP", "Fiori Freestyle", "OData V2 / V4"],
  },
  {
    id: "ype",
    client: "Ypê",
    sector: { pt: "Bens de consumo", en: "Consumer goods" },
    title: {
      pt: "PP/DS e planejamento de produção",
      en: "PP/DS and production planning",
    },
    description: {
      pt: "Implantação do PP/DS em indústria de produtos de limpeza e higiene. Desenho técnico e construção dos aplicativos Fiori e programas ABAP que sustentam o planejamento da fábrica, da demanda comercial até a ordem de processo no chão de fábrica.",
      en: "PP/DS rollout at a cleaning and hygiene products manufacturer. Technical design and build of the Fiori apps and ABAP programs behind factory planning, from commercial demand down to the process order on the shop floor.",
    },
    tags: ["SAP RAP", "CDS Views", "ABAP Cloud", "Fiori Elements", "PP/DS"],
  },
  {
    id: "fiagril",
    client: "Fiagril",
    sector: { pt: "Agronegócio", en: "Agribusiness" },
    title: {
      pt: "Desenvolvimento e integrações no BTP",
      en: "Development and BTP integrations",
    },
    description: {
      pt: "Desenvolvimento ABAP e aplicações Fiori sobre CDS Views e RAP, com integrações construídas no SAP BTP usando o Integration Suite (CPI) para conectar o S/4HANA a sistemas satélites e parceiros externos.",
      en: "ABAP development and Fiori apps on top of CDS Views and RAP, plus integrations built on SAP BTP with the Integration Suite (CPI), connecting S/4HANA to satellite systems and external partners.",
    },
    tags: ["ABAP", "SAP RAP", "Fiori", "SAP BTP", "SAP CPI"],
  },
  {
    id: "vale",
    client: "Vale",
    sector: { pt: "Mineração", en: "Mining" },
    title: {
      pt: "PTS Digital — Permissão de Trabalho Seguro",
      en: "PTS Digital — Safe Work Permit",
    },
    description: {
      pt: "Aplicativo e portal para a gestão das Permissões de Trabalho Seguro nas operações de mineração. O sistema conduz os questionários de segurança e a análise de riscos, valida os treinamentos e qualificações dos envolvidos e controla o ciclo da permissão, da emissão ao encerramento, com registro de assinaturas e evidências.",
      en: "App and portal for managing Safe Work Permits across mining operations. The system runs the safety questionnaires and risk assessment, validates the training and qualifications of everyone involved, and controls the permit lifecycle from issue to closure, recording signatures and supporting evidence.",
    },
    tags: [
      "SAP CAP",
      "SAP BTP",
      "Build Work Zone",
      "SAP CPI",
      "SAP MDK",
      "SAPUI5",
    ],
  },
  {
    id: "larco",
    client: "Larco",
    sector: { pt: "Oil & Gas", en: "Oil & Gas" },
    title: {
      pt: "Distribuição e gestão de combustíveis",
      en: "Fuel distribution and management",
    },
    description: {
      pt: "Demandas de geração de boletos bancários, aplicações para distribuição e gestão de combustíveis e emissão de notas fiscais.",
      en: "Bank slip generation, applications for fuel distribution and management, and invoice issuing.",
    },
    tags: ["SAP RAP", "SAP CAP", "CDS Views", "ABAP", "Fiori"],
  },
  {
    id: "sipal",
    client: "Sipal",
    sector: { pt: "Indústria", en: "Manufacturing" },
    title: {
      pt: "Implementação SAP S/4HANA",
      en: "SAP S/4HANA implementation",
    },
    description: {
      pt: "Atuação na implementação do S/4HANA com as principais tecnologias da plataforma, incluindo integrações via SAP CPI.",
      en: "S/4HANA implementation using the platform's core technologies, including integrations through SAP CPI.",
    },
    tags: ["SAP RAP", "CDS Views", "ABAP", "Fiori", "SAP CPI"],
  },
  {
    id: "ssa",
    client: "São Salvador Alimentos",
    sector: { pt: "Alimentos", en: "Food industry" },
    title: {
      pt: "Cadeia produtiva ponta a ponta",
      en: "End-to-end production chain",
    },
    description: {
      pt: "Manutenção, desenvolvimento e suporte dos aplicativos que administram toda a cadeia produtiva, da criação da ave até a venda do produto final.",
      en: "Maintenance, development and support of the applications running the whole production chain, from raising the birds to selling the finished product.",
    },
    tags: ["Fiori Elements", "CDS Views", "SAP RAP", "SAP MDK", "OData V2"],
  },
  {
    id: "brf-migracao",
    client: "BRF",
    sector: { pt: "Alimentos", en: "Food industry" },
    title: {
      pt: "Migração do App Grãos para Cloud Foundry",
      en: "App Grãos migration to Cloud Foundry",
    },
    description: {
      pt: "Migração do App Grãos do ambiente SAP NEO para o Cloud Foundry, com upgrade de HANA 1.0 para 2.0 e adaptação dos componentes SAPUI5 para a arquitetura CAP, mantendo o aplicativo integralmente funcional.",
      en: "Migration of App Grãos from SAP NEO to Cloud Foundry, upgrading HANA 1.0 to 2.0 and adapting the SAPUI5 components to the CAP architecture while keeping the app fully working.",
    },
    tags: ["SAP CAP", "SAP BTP", "SAP HANA", "SAPUI5"],
  },
  {
    id: "brf-graos",
    client: "BRF",
    sector: { pt: "Alimentos", en: "Food industry" },
    title: { pt: "App Grãos", en: "App Grãos" },
    description: {
      pt: "Desenvolvimento e manutenção do aplicativo usado na gestão dos processos de safras e grãos.",
      en: "Development and maintenance of the app used to manage harvest and grain processes.",
    },
    tags: ["Fiori Freestyle", "SAP HANA Studio", "JavaScript", "OData V2"],
  },
  {
    id: "coonagro",
    client: "Coonagro",
    sector: { pt: "Agronegócio", en: "Agribusiness" },
    title: {
      pt: "Implementação SAP S/4HANA",
      en: "SAP S/4HANA implementation",
    },
    description: {
      pt: "Implementação do S/4HANA para o setor do agronegócio, com responsabilidade pelo desenvolvimento e manutenção dos aplicativos Fiori.",
      en: "S/4HANA implementation for agribusiness, owning the development and maintenance of the Fiori applications.",
    },
    tags: ["Fiori Freestyle", "SAP RAP", "SAP BTP", "SEGW", "OData V2"],
  },
];

/* ------------------------------------------------------------------ */
/*  Certificações                                                      */
/* ------------------------------------------------------------------ */

export const certificatesSection = {
  title: { pt: "Certificações", en: "Certifications" },
  kicker: {
    pt: "Certificações oficiais SAP",
    en: "Official SAP certifications",
  },
  featuredLabel: { pt: "Certificação oficial", en: "Official certification" },
  othersTitle: { pt: "Outros certificados", en: "Other certificates" },
  othersKicker: {
    pt: "Cursos e trilhas concluídas",
    en: "Completed courses and learning tracks",
  },
  verify: { pt: "Ver certificado", en: "View certificate" },
  issued: { pt: "Emitida em", en: "Issued" },
  validUntil: { pt: "válida até", en: "valid until" },
  noExpiry: { pt: "sem data de expiração", en: "no expiration date" },
  credential: { pt: "Código da credencial", en: "Credential code" },
};

export interface FeaturedCertificate {
  code: string;
  name: L10n<string>;
  issuer: string;
  issued: L10n<string>;
  expires?: L10n<string>;
  /** Imagem aberta no lightbox ao clicar em "Ver certificado". */
  image: string;
  /** Link opcional da credencial oficial, mostrado dentro do lightbox. */
  url?: string;
  accent: string;
  blurb: L10n<string>;
}

export const featuredCertificates: FeaturedCertificate[] = [
  {
    code: "C_ABAPD_2601",
    name: {
      pt: "SAP Certified — Back-End Developer: ABAP Cloud",
      en: "SAP Certified — Back-End Developer: ABAP Cloud",
    },
    issuer: "SAP",
    issued: { pt: "Set 2026", en: "Sep 2026" },
    expires: { pt: "Set 2027", en: "Sep 2027" },
    image: certAbapCloud,
    url: "https://www.credly.com/badges/eb7524d2-0d78-4964-b9b0-dd4d9fb08f24",
    accent: "#0A6ED1",
    blurb: {
      pt: "ABAP RESTful Application Programming Model, ABAP Cloud e os princípios de Clean Core para extensões no S/4HANA.",
      en: "ABAP RESTful Application Programming Model, ABAP Cloud and Clean Core principles for S/4HANA extensions.",
    },
  },
  {
    code: "C_FIORD_2404",
    name: {
      pt: "SAP Certified Application Associate — SAP Fiori Application Developer",
      en: "SAP Certified Application Associate — SAP Fiori Application Developer",
    },
    issuer: "SAP",
    issued: { pt: "Out 2024", en: "Oct 2024" },
    image: certFioriDeveloper,
    accent: "#00B37E",
    blurb: {
      pt: "Desenvolvimento de aplicações SAP Fiori com SAPUI5, Fiori Elements, OData e extensibilidade.",
      en: "Building SAP Fiori applications with SAPUI5, Fiori Elements, OData and extensibility.",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Trajetória                                                         */
/* ------------------------------------------------------------------ */

export const journeySection = {
  title: { pt: "Trajetória", en: "Journey" },
  kicker: { pt: "Formação e experiência", en: "Education and experience" },
  tabExperience: { pt: "Experiência", en: "Experience" },
  tabEducation: { pt: "Formação", en: "Education" },
};

export interface TimelineEntry {
  primary: L10n<string>;
  secondary: L10n<string>;
  date: L10n<string>;
  bullets?: L10n<string[]>;
}

export const experienceTimeline: TimelineEntry[] = [
  {
    primary: {
      pt: "Consultor SAP Fiori / ABAP / BTP",
      en: "SAP Fiori / ABAP / BTP Consultant",
    },
    secondary: { pt: "Stefanini Group", en: "Stefanini Group" },
    date: { pt: "Out 2024 — Atualmente", en: "Oct 2024 — Present" },
    bullets: {
      pt: [
        "Soluções S/4HANA para bens de consumo, agronegócio e Oil & Gas.",
        "Aplicações Fiori sobre ABAP RAP e CDS Views, integrações e extensões no SAP BTP.",
        "Desenho da solução com o time funcional, desenvolvimento, testes e suporte ao go-live.",
      ],
      en: [
        "S/4HANA solutions for consumer goods, agribusiness and Oil & Gas.",
        "Fiori apps on ABAP RAP and CDS Views, plus SAP BTP integrations and extensions.",
        "Solution design with the functional team, development, testing and go-live support.",
      ],
    },
  },
  {
    primary: {
      pt: "Consultor SAP Fiori / CDS Views / ABAP",
      en: "SAP Fiori / CDS Views / ABAP Consultant",
    },
    secondary: { pt: "SPRO IT Solutions", en: "SPRO IT Solutions" },
    date: { pt: "Fev 2023 — Out 2024", en: "Feb 2023 — Oct 2024" },
    bullets: {
      pt: [
        "Soluções para o agronegócio usando os serviços da plataforma SAP.",
        "Implementações de S/4HANA e migrações do SAP NEO para o Cloud Foundry.",
      ],
      en: [
        "Agribusiness solutions built on SAP platform services.",
        "S/4HANA implementations and SAP NEO to Cloud Foundry migrations.",
      ],
    },
  },
  {
    primary: {
      pt: "Analista Desenvolvedor Full-Stack",
      en: "Full-Stack Developer",
    },
    secondary: {
      pt: "MM Tecnologia da Informação",
      en: "MM Tecnologia da Informação",
    },
    date: { pt: "Out 2021 — Fev 2023", en: "Oct 2021 — Feb 2023" },
    bullets: {
      pt: ["Desenvolvimento e manutenção de aplicações web de ponta a ponta."],
      en: ["End-to-end development and maintenance of web applications."],
    },
  },
  {
    primary: {
      pt: "Analista Desenvolvedor Full-Stack",
      en: "Full-Stack Developer",
    },
    secondary: { pt: "ZT Consulting — Freelance", en: "ZT Consulting — Freelance" },
    date: { pt: "Mai 2020 — Jun 2021", en: "May 2020 — Jun 2021" },
    bullets: {
      pt: ["Aplicações full-stack integradas ao ecossistema SAP."],
      en: ["Full-stack applications integrated with the SAP ecosystem."],
    },
  },
];

export const educationTimeline: TimelineEntry[] = [
  {
    primary: {
      pt: "Análise e Desenvolvimento de Sistemas",
      en: "Systems Analysis and Development",
    },
    secondary: {
      pt: "Faculdade Estácio — São José dos Pinhais",
      en: "Estácio University — São José dos Pinhais",
    },
    date: { pt: "Jun 2024 — Dez 2026", en: "Jun 2024 — Dec 2026" },
  },
  {
    primary: {
      pt: "Bacharelado em Sistemas de Informação",
      en: "Bachelor's in Information Systems",
    },
    secondary: {
      pt: "Faculdade da Indústria — São José dos Pinhais",
      en: "Faculdade da Indústria — São José dos Pinhais",
    },
    date: { pt: "2020 — 2023 (interrompido)", en: "2020 — 2023 (interrupted)" },
  },
  {
    primary: {
      pt: "Técnico em Desenvolvimento de Sistemas",
      en: "Technical Degree in Systems Development",
    },
    secondary: { pt: "SENAI", en: "SENAI" },
    date: { pt: "Fev 2018 — Jul 2019", en: "Feb 2018 — Jul 2019" },
  },
];

/* ------------------------------------------------------------------ */
/*  Contato                                                            */
/* ------------------------------------------------------------------ */

export const contactSection = {
  title: { pt: "Vamos conversar", en: "Let's talk" },
  kicker: {
    pt: "Escolha o canal que preferir — respondo o quanto antes",
    en: "Pick whichever channel you prefer — I'll reply as soon as I can",
  },
  formTitle: { pt: "Mande uma mensagem", en: "Send me a message" },
  name: { pt: "Seu nome", en: "Your name" },
  email: { pt: "Seu e-mail", en: "Your email" },
  message: { pt: "Mensagem", en: "Message" },
  send: { pt: "Enviar", en: "Send" },
  sending: { pt: "Enviando...", en: "Sending..." },
  incomplete: {
    pt: "Preencha todos os campos antes de enviar.",
    en: "Please fill in every field before sending.",
  },
  success: {
    pt: "Mensagem enviada. Obrigado pelo contato!",
    en: "Message sent. Thanks for reaching out!",
  },
  error: {
    pt: "Não consegui enviar agora. Tente novamente mais tarde.",
    en: "Couldn't send it right now. Please try again later.",
  },
  location: { pt: "São José dos Pinhais — PR, Brasil", en: "São José dos Pinhais — PR, Brazil" },
};

export const contactChannels = {
  phone: "+55 (41) 99199-6195",
  email: "vinicius.holtman.rs@gmail.com",
  github: "https://github.com/Vinicius-Holtman",
  linkedin: "https://www.linkedin.com/in/vinicius-holtman-9b014a208/",
  rocketseat: "https://app.rocketseat.com.br/me/vinicius-holtman",
};

export const footer = {
  rights: {
    pt: "Feito com React, TypeScript e um bom café.",
    en: "Built with React, TypeScript and a decent coffee.",
  },
};

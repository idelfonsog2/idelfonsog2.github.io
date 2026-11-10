// All site copy, in English and Spanish. Source of truth: SITE-CONTENT.md.
// Non-translatable data (logos, URLs) lives in `media` / `links` below.

export const links = {
  email: 'idelfonsog2@gmail.com',
  linkedin: 'https://www.linkedin.com/in/idelfonsog/',
  github: 'https://github.com/idelfonsog2',
  site: 'https://idelfonso.com',
}

export const media = {
  avatar: '/img/circular-shot.png',
  nm: '/img/nm-logo.png',
  ulta: '/img/ultabeauty.png',
  growit: '/img/growit.png',
  kinkarta: '/img/kinkarta.png',
  yellowpepper: '/img/yellowpepper.png',
  ally: '/img/ally_logo.png',
} as const

export type MediaKey = keyof typeof media

export interface Feature {
  tag: string
  title: string
  description: string
  bullets: string[]
  stats: { value: string; label: string }[]
}

export interface Role {
  id: MediaKey
  company: string
  badge: string
  location: string
  title: string
  dates: string
  summary: string
  highlights: string[]
  features?: Feature[]
  result?: { headline: string; line: string; minis: string[] }
}

export interface Content {
  meta: { title: string; description: string; locale: string }
  skip: string
  header: { themeToDark: string; themeToLight: string; switchLanguage: string; langCode: string }
  hero: {
    greeting: string
    avatarAlt: string
    headlinePrefix: string
    rotating: string[]
    fullHeadline: string
    storyLabel: string
    superpower: string
    story: string
    counter: { value: string; label: string }
    cta: string
    navLabel: string
    nav: { label: string; href: string; icon: string }[]
  }
  workedAt: { title: string; industries: string }
  experience: {
    heading: string
    intro: string
    capabilities: { title: string; description: string; icon: string }[]
    roles: Role[]
    clientsHeading: string
    clients: { id: MediaKey; name: string; title: string }[]
  }
  projects: {
    heading: string
    githubLabel: string
    items: {
      name: string
      status: string
      description: string
      tags: string[]
      link?: { label: string; href: string }
    }[]
    styleTitle: string
    styleBullets: string[]
  }
  education: {
    heading: string
    items: { period?: string; school: string; program: string }[]
    certHeading: string
    certs: { name: string; issuer: string }[]
  }
  skills: {
    heading: string
    languagesHeading: string
    languages: { name: string; level: string }[]
    softHeading: string
    soft: { name: string; line: string }[]
    stackHeading: string
    stack: { group: string; items: string[] }[]
  }
  faq: { heading: string; items: { question: string; answer: string }[] }
  contact: {
    heading: string
    text: string
    email: string
    linkedin: string
    github: string
  }
  chat: {
    launcherLabel: string
    launcher: string
    title: string
    subtitle: string
    greeting: string
    prompt: string
    allDone: string
    close: string
    restart: string
    email: string
    linkedin: string
    items: { id: string; question: string; answer: string; contact?: boolean }[]
  }
  footer: { copyright: string }
}

const mail = `<a href="mailto:${links.email}">${links.email}</a>`

export const en: Content = {
  meta: {
    title: 'Idelfonso Gutierrez — Software Engineer',
    description:
      'Senior engineer across iOS, backend platforms and healthcare interoperability (FHIR, Epic). Based in Chicago.',
    locale: 'en_US',
  },
  skip: 'Skip to content',
  header: {
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    switchLanguage: 'Cambiar a español',
    langCode: 'ES',
  },
  hero: {
    greeting: "Hola, I'm Idelfonso Gutierrez 🙋‍♂️",
    avatarAlt: 'Portrait of Idelfonso Gutierrez',
    headlinePrefix: 'Senior engineer across',
    rotating: ['iOS', 'backend platforms', 'healthcare interoperability', 'cloud platforms'],
    fullHeadline:
      'Senior engineer across iOS, backend platforms, healthcare interoperability and cloud platforms',
    storyLabel: 'Currently:',
    superpower:
      'I find the real problem before anyone opens a code editor — then build the full stack to prove it: iOS, backend, infra, CI/CD, App Store.',
    story:
      'At Northwestern Medicine I co-own the FHIR integration platform for 9+ external vendors. At ULTA I solo-built the curbside pickup app during the pandemic with no playbook. At GrowIt! I replaced a broken moderation workflow with an on-device ML model nobody asked for but everyone needed.',
    counter: { value: '8+', label: 'years building iOS, backend and healthcare platforms' },
    cta: 'Get in touch',
    navLabel: 'Primary',
    nav: [
      { label: 'Experience', href: '#experience', icon: 'mdi-briefcase-outline' },
      { label: 'Projects', href: '#projects', icon: 'mdi-code-braces' },
      { label: 'Skills', href: '#skills', icon: 'mdi-lightning-bolt' },
      { label: 'Contact', href: '#contact', icon: 'mdi-email-outline' },
    ],
  },
  workedAt: {
    title: 'Worked @',
    industries:
      'Enterprise / Healthcare / Retail / Agriculture / Financing / Outsourcing / Startup / Ecommerce',
  },
  experience: {
    heading: 'Experience',
    intro:
      'Full-stack ownership from discovery to production: mobile, API, infrastructure, CI/CD and release, with the domain depth to work in regulated systems.',
    capabilities: [
      {
        title: 'Problem Discovery',
        description: 'Finds the real problem before anyone opens a code editor',
        icon: 'mdi-magnify',
      },
      {
        title: 'Full-Stack Ownership',
        description: 'iOS → backend → infra → CI/CD → App Store → production',
        icon: 'mdi-layers',
      },
      {
        title: 'Secure Integration & API Governance',
        description: 'Designs multi-vendor API platforms with auth, access control and data masking for regulated environments',
        icon: 'mdi-shield-lock-outline',
      },
      {
        title: 'Platform Thinking',
        description: 'Builds systems other teams depend on: event schemas, SDKs, integration layers',
        icon: 'mdi-sitemap',
      },
      {
        title: 'Stakeholder Bridge',
        description: 'Translates between clinical/business stakeholders and engineering',
        icon: 'mdi-account-group',
      },
      {
        title: 'AI-Augmented Execution',
        description: 'Uses AI to accelerate delivery while keeping judgment, taste and discovery human',
        icon: 'mdi-robot',
      },
    ],
    roles: [
      {
        id: 'nm',
        company: 'Northwestern Medicine',
        badge: 'Healthcare',
        location: 'Chicago, IL',
        title: 'Senior Software Engineer',
        dates: 'Oct 2021 – Present',
        summary:
          'Co-own the platform that governs how 9+ external vendors access Epic clinical data, plus the iOS apps clinicians use daily.',
        highlights: [
          'Built and shipped patient-facing and internal iOS apps used daily by nurses and clinicians (SwiftUI, UIKit, TCA, Swift Concurrency, gRPC)',
          'Developed a BFF (backend-for-frontend) for the employee iOS app and created pipelines using the AppSync APIs; the app is built with The Composable Architecture (TCA)',
          'Took part in migrating the iOS apps from Objective-C to Swift and adopting Swift Package Manager',
          'Co-own a multi-vendor FHIR R4/DSTU3 integration platform (team of 4) serving 9+ vendors',
          'Designed an event-driven integration (SmartRecruiters → Azure Service Bus), 1,000+ events/day; authored the canonical event schema adopted org-wide',
          'Built an internal observability platform (metrics UI + client SDK); fixed a production query-performance crisis with partitioning, hot/cold archiving, indexing and caching',
          'Led the on-prem → Azure migration; evolved CI/CD (automated dependency PRs, semantic versioning, Argo Rollouts)',
          'Run Kubernetes clusters (APIs, workers, cron jobs, web UIs) via ArgoCD + Terraform, with daily production releases',
        ],
        features: [
          {
            tag: 'Regulated APIs',
            title: 'Multi-vendor API Integration Platform',
            description:
              'A reusable integration layer between a core clinical system and external vendors: a platform, not a one-off integration.',
            bullets: [
              'Exposes standards-based data resources to authorized vendors',
              'API gateway validates tokens and request criteria',
              'Custom auth layer checks resource permissions, project assignments and vendor access profiles',
              'Vendor client and permission management',
              'Field-level masking of sensitive data for de-identification',
              'Admin app lets staff configure which resources each vendor can access',
            ],
            stats: [
              { value: '9+', label: 'vendors' },
              { value: '4', label: 'engineers' },
              { value: '3 yrs', label: 'POC to production' },
            ],
          },
          {
            tag: 'Platform',
            title: 'SmartRecruiters Webhub',
            description:
              'ATS API integrated with Azure Service Bus; every account change is published as a structured event for teams across the organization.',
            bullets: [
              'Canonical event schema in one shared model class',
              'Adopted by teams outside my own',
              'Built on .NET and Azure Service Bus',
            ],
            stats: [{ value: '1,000+', label: 'events / day' }],
          },
        ],
      },
      {
        id: 'ulta',
        company: 'ULTA Beauty',
        badge: 'Retail',
        location: 'Chicago, IL',
        title: 'Software Engineer, Mobile',
        dates: 'Mar 2020 – Sep 2021',
        summary: 'Solo-built the curbside pickup app during the pandemic and worked on two more ULTA apps.',
        highlights: [
          "Solo planned, designed, built and maintained the consumer curbside-pickup iOS app for ULTA's Midwest stores during the pandemic (2021); pickups were faster",
          'Navigated APNS rate limits in production by adjusting notification batching and delivery',
          'Worked as part of a team on the in-store inventory management iOS app, including the VMware Workspace ONE MDM integration that manages the store device fleet',
          'Fixed production incidents in the consumer retail iOS app while onboarding, building familiarity with the codebase',
        ],
        features: [
          {
            tag: 'Solo project',
            title: 'Curbside Pickup App',
            description:
              'Consumer iOS app for in-store pickup, built during the pandemic. Planned, designed, built and maintained solo.',
            bullets: [
              'Owned end to end: planning, design, implementation and long-term maintenance',
              "Rolled out to ULTA's Midwest stores in 2021; pickups were faster",
              'Push notifications over APNS, including working through APNS rate limits in production',
              'View model + views architecture',
            ],
            stats: [
              { value: 'Solo', label: 'plan to maintenance' },
              { value: '2021', label: 'pandemic launch' },
              { value: 'Midwest', label: 'ULTA stores' },
            ],
          },
        ],
      },
      {
        id: 'growit',
        company: 'GrowIt!',
        badge: 'Consumer / Startup',
        location: 'Chicago, IL',
        title: 'Software Engineer, iOS',
        dates: 'Feb 2018 – Feb 2020',
        summary: 'The only iOS developer: built and shipped the features that grew the customer base and automated moderation and releases.',
        highlights: [
          'Sole iOS owner and developer: drove the UI/UX and the migration',
          "Grew the customer base 25% with a location-aware iBeacon experience in partnership with Chicago's Lurie Garden",
          'Built an on-device CoreML model that flags inappropriate posts in real time, replacing a manual scroll-and-flag workflow and extending coverage beyond one city',
          'Automated the full release pipeline (tests, QA builds, App Store submission) with CircleCI and Fastlane',
        ],
        features: [
          {
            tag: 'CoreML',
            title: 'On-Device Image Moderation',
            description:
              'Image recognition that screens user-posted photos for inappropriate or off-topic content as they are submitted, and flags them for the moderation team.',
            bullets: [
              "Runs entirely on-device with CoreML (no backend pipeline), using a model trained on the app's plant database",
              'Analyzes photos in real time as users post them',
              'Sends behind-the-scenes alerts to the moderation team for review',
              'Replaced a manual scroll-and-flag workflow and extended coverage beyond the Chicago feed',
            ],
            stats: [
              { value: 'On-device', label: 'no backend pipeline' },
              { value: 'Real-time', label: 'as photos are posted' },
              { value: 'Beyond Chicago', label: 'moderation coverage' },
            ],
          },
        ],
        result: {
          headline: '+25% customer growth',
          line: 'iBeacon partnership with Lurie Garden drove a seasonal user-acquisition campaign.',
          minis: [
            'iBeacon content per garden section',
            'Map overlays and data visualization',
            'On-device CoreML moderation',
            'Automated releases (CircleCI + Fastlane)',
          ],
        },
      },
    ],
    clientsHeading: 'Also worked with',
    clients: [
      { id: 'kinkarta', name: 'KIN+KARTA', title: 'Software Developer' },
      { id: 'yellowpepper', name: 'YellowPepper', title: 'Software Developer' },
      { id: 'ally', name: "Ally's Flower", title: 'Software Developer' },
    ],
  },
  projects: {
    heading: 'Projects',
    githubLabel: 'More on GitHub',
    items: [
      {
        name: 'Stranded at an Airport',
        status: 'App Store',
        description:
          'Designed and built the full stack solo: SwiftUI app (redux-like TCA pattern), Vapor REST API, Postgres, APNS push notifications, Sign in with Apple. Containerized with Docker and shipped through GitHub Actions CI/CD.',
        tags: ['SwiftUI', 'TCA', 'Vapor', 'Postgres', 'APNS', 'Docker', 'GitHub Actions', 'Swift Package Manager'],
        link: { label: 'View on GitHub', href: links.github },
      },
      {
        name: 'Push Notification Lambda Service',
        status: 'Article',
        description:
          'A Swift AWS Lambda custom runtime deployed with the Serverless Framework and CloudFormation, least-privilege IAM policies, and automated container image deployment through GitHub Actions.',
        tags: ['Swift', 'AWS Lambda', 'Serverless Framework', 'CloudFormation', 'IAM', 'GitHub Actions'],
      },
      {
        name: 'This portfolio',
        status: 'Live',
        description: 'Personal site on Vue 3 + Vuetify, deployed as a Cloudflare Worker.',
        tags: ['Vue 3', 'Vuetify', 'TypeScript', 'Vite', 'Cloudflare Workers'],
        link: { label: 'idelfonso.com', href: links.site },
      },
    ],
    styleTitle: 'How I work',
    styleBullets: [
      'Curiosity: asks "should this exist?" before writing code',
      'Empathy: designs for both sides of the screen (clinicians and patients)',
      'Ownership: from the Swift model to the Kubernetes deployment',
    ],
  },
  education: {
    heading: 'Education',
    items: [
      {
        period: '2012 – 2016',
        school: 'Florida International University',
        program: 'B.S. Information Systems / Software Development',
      },
      { school: 'Udacity', program: 'iOS Developer Nanodegree' },
      { school: 'Udacity', program: 'Data Engineer Nanodegree' },
    ],
    certHeading: 'Certifications',
    certs: [
      { name: 'Mobile Device Management (MDM) Workspace ONE Unified Certification', issuer: 'VMware' },
    ],
  },
  skills: {
    heading: 'Skills',
    languagesHeading: 'Languages',
    languages: [
      { name: 'English', level: 'Fluent' },
      { name: 'Spanish', level: 'Fluent' },
    ],
    softHeading: 'Soft skills',
    soft: [
      { name: 'Curiosity', line: 'asks "should this exist?"' },
      { name: 'Empathy', line: 'designs for both sides of the screen' },
      { name: 'Communication', line: 'translates between clinicians and engineers' },
      { name: 'Creativity', line: 'on-device CoreML instead of a backend pipeline' },
      { name: 'Courage', line: 'solo-built a pandemic-era curbside pickup app with no playbook' },
      { name: 'Resilience', line: 'fixed a production DB crisis that staging never showed' },
    ],
    stackHeading: 'Technical stack',
    stack: [
      {
        group: 'Mobile',
        items: ['Swift', 'Objective-C (migration to Swift)', 'SwiftUI', 'UIKit', 'TCA', 'Swift Concurrency', 'gRPC', 'APNS', 'Sign in with Apple', 'Swift Package Manager', 'Fastlane', 'Xcode'],
      },
      {
        group: 'Backend',
        items: ['Vapor (Swift)', 'REST APIs', 'BFF design', 'AppSync APIs', '.NET', 'Blazor', 'Postgres', 'SQL', 'AWS Lambda', 'Serverless Framework', 'CloudFormation', 'Docker'],
      },
      {
        group: 'Cloud & Infrastructure',
        items: ['Azure', 'AWS', 'Kubernetes', 'ArgoCD', 'Argo Rollouts', 'Terraform', 'GitHub Actions', 'CircleCI', 'Azure Service Bus', 'APIM'],
      },
      {
        group: 'Healthcare & Interoperability',
        items: ['FHIR R4', 'FHIR DSTU3', 'HL7', 'Epic SMART on FHIR', 'EHR integration', 'HIPAA compliance', 'PHI de-identification', 'Multi-vendor API governance'],
      },
      {
        group: 'Practices',
        items: ['CI/CD', 'DevOps', 'Agile/Scrum', 'Event-driven architecture', 'Semantic versioning', 'MDM (VMware Workspace ONE)', 'CoreML', 'iBeacon', 'IAM'],
      },
    ],
  },
  faq: {
    heading: 'FAQ',
    items: [
      {
        question: 'Are you open to new opportunities?',
        answer:
          "Yes — I'm open to a conversation and exploring what you're working on. No pressure either way; if it's a good fit for both of us, great, and if not, no worries.",
      },
      {
        question: 'What kind of work arrangements do you consider?',
        answer:
          "Contract, contract-to-hire, or full-time. I'm flexible on structure as long as the work and team are a good fit.",
      },
      {
        question: 'Do you work remotely? What timezone are you in?',
        answer:
          "I'm fully remote, based in US Central Time (CST/CDT). I have a strong overlap with US timezones and am comfortable working with distributed teams across other regions.",
      },
      {
        question: 'What are your rates?',
        answer:
          "It depends on the scope, duration, and type of engagement — let's talk and figure out what makes sense for both sides.",
      },
      {
        question: 'What does your tech stack look like?',
        answer:
          "iOS/Swift for mobile, cloud platforms like AWS and Cloudflare for infrastructure and deployment automation, and Vue/TypeScript for web. I'm comfortable picking up new tools when the project calls for it.",
      },
      {
        question: 'What kind of projects or roles are you a good fit for?',
        answer:
          'Mobile (iOS) development, cloud infrastructure and deployment automation, feature development, and general full-stack work — from new concepts to optimizing existing systems.',
      },
      {
        question: 'How do I get in touch?',
        answer: `Email me at ${mail} — happy to set up a call to discuss further.`,
      },
    ],
  },
  contact: {
    heading: "Let's talk",
    text: "Open to contract, contract-to-hire or full-time work, fully remote on US Central Time. If you're building something in healthcare, mobile or platform engineering, write to me.",
    email: 'Email me',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  chat: {
    launcherLabel: 'Ask me',
    launcher: 'Open quick answers',
    title: 'Quick answers',
    subtitle: 'Pre-written answers to common questions',
    greeting: "Hi, I'm Idelfonso. Pick a question below and I'll answer it.",
    prompt: 'Suggested questions',
    allDone: "That's everything I have pre-written. For anything else, let's talk.",
    close: 'Close quick answers',
    restart: 'Start over',
    email: 'Email me',
    linkedin: 'LinkedIn',
    items: [
      {
        id: 'problem',
        question: 'What problem can you solve for us?',
        answer:
          "I'm strongest where mobile, backend and platform work meet: shipping iOS apps, building the APIs and integration layers behind them, and automating how they are released. I start by finding the real problem before writing code, then own the build through to production.",
      },
      {
        id: 'ownership',
        question: 'Can you own a project end to end?',
        answer:
          "Yes. I planned, designed, built and maintained a consumer iOS app on my own at ULTA Beauty, and I was the sole iOS owner and developer at GrowIt!. I'm comfortable across mobile, API, infrastructure, CI/CD and release.",
      },
      {
        id: 'availability',
        question: 'Are you available, and how can we work together?',
        answer:
          "Yes, I'm open to a conversation about what you're building. Contract, contract-to-hire or full-time: I'm flexible on structure as long as the work and the team are a good fit.",
      },
      {
        id: 'rates',
        question: 'What are your rates?',
        answer:
          "It depends on the scope, duration and type of engagement. Let's talk and figure out what makes sense for both sides.",
      },
      {
        id: 'contact',
        question: 'How do I get in touch?',
        answer: "Email is best, and I'm happy to set up a call. You can also reach me on LinkedIn.",
        contact: true,
      },
      {
        id: 'regulated',
        question: 'Have you worked in regulated environments?',
        answer:
          'Yes, in healthcare, where security, access control and data masking are requirements rather than extras: multi-vendor API access, permission checks and de-identification of sensitive data.',
      },
      {
        id: 'stakeholders',
        question: 'How do you work with non-technical stakeholders?',
        answer:
          'I translate between the business or clinical side and engineering: I ask what outcome they need, question whether a feature should exist, and explain trade-offs in plain language.',
      },
      {
        id: 'hard-problem',
        question: 'Tell me about a hard production problem you solved.',
        answer:
          'A metrics screen kept dropping database connections under real production volume, something staging never showed. I fixed it in layers: table partitioning, queries aimed at the recent partition, hot/cold archiving, targeted indexes and caching.',
      },
      {
        id: 'ai',
        question: 'How do you use AI in your work?',
        answer:
          "AI makes me faster at execution, but it doesn't replace curiosity or judgment. I use it to speed up building and review, and I still own discovery, design decisions and quality.",
      },
      {
        id: 'remote',
        question: 'Do you work remotely? What timezone are you in?',
        answer:
          "I'm fully remote, based in US Central Time (CST/CDT), with strong overlap with US timezones, and comfortable working with distributed teams.",
      },
    ],
  },
  footer: { copyright: '© 2026 Idelfonso Gutierrez' },
}

export const es: Content = {
  meta: {
    title: 'Idelfonso Gutierrez — Ingeniero de Software',
    description:
      'Ingeniero senior en iOS, plataformas backend e interoperabilidad en salud (FHIR, Epic). Radicado en Chicago.',
    locale: 'es_ES',
  },
  skip: 'Saltar al contenido',
  header: {
    themeToDark: 'Cambiar a tema oscuro',
    themeToLight: 'Cambiar a tema claro',
    switchLanguage: 'Switch to English',
    langCode: 'EN',
  },
  hero: {
    greeting: 'Hola, soy Idelfonso Gutierrez 🙋‍♂️',
    avatarAlt: 'Retrato de Idelfonso Gutierrez',
    headlinePrefix: 'Ingeniero senior en',
    rotating: ['iOS', 'plataformas backend', 'interoperabilidad en salud', 'plataformas cloud'],
    fullHeadline:
      'Ingeniero senior en iOS, plataformas backend, interoperabilidad en salud y plataformas cloud',
    storyLabel: 'Actualmente:',
    superpower:
      'Encuentro el problema real antes de que nadie abra un editor de código — y luego construyo el stack completo para demostrarlo: iOS, backend, infraestructura, CI/CD, App Store.',
    story:
      'En Northwestern Medicine co-lidero la plataforma de integración FHIR para más de 9 proveedores externos. En ULTA construí en solitario la app de recogida en tienda durante la pandemia, sin manual de instrucciones. En GrowIt! reemplacé un flujo de moderación roto con un modelo de ML en el dispositivo que nadie pidió pero todos necesitaban.',
    counter: { value: '8+', label: 'años construyendo plataformas iOS, backend y de salud' },
    cta: 'Escríbeme',
    navLabel: 'Principal',
    nav: [
      { label: 'Experiencia', href: '#experience', icon: 'mdi-briefcase-outline' },
      { label: 'Proyectos', href: '#projects', icon: 'mdi-code-braces' },
      { label: 'Habilidades', href: '#skills', icon: 'mdi-lightning-bolt' },
      { label: 'Contacto', href: '#contact', icon: 'mdi-email-outline' },
    ],
  },
  workedAt: {
    title: 'Trabajé en',
    industries:
      'Empresa / Salud / Retail / Agricultura / Financiero / Outsourcing / Startup / Ecommerce',
  },
  experience: {
    heading: 'Experiencia',
    intro:
      'Responsabilidad de punta a punta, del descubrimiento a producción: móvil, API, infraestructura, CI/CD y lanzamiento, con la profundidad de dominio para trabajar en sistemas regulados.',
    capabilities: [
      {
        title: 'Descubrimiento de problemas',
        description: 'Encuentra el problema real antes de que nadie abra un editor de código',
        icon: 'mdi-magnify',
      },
      {
        title: 'Propiedad full-stack',
        description: 'iOS → backend → infra → CI/CD → App Store → producción',
        icon: 'mdi-layers',
      },
      {
        title: 'Integración segura y gobierno de APIs',
        description: 'Diseña plataformas de APIs multi-proveedor con autenticación, control de acceso y enmascaramiento de datos para entornos regulados',
        icon: 'mdi-shield-lock-outline',
      },
      {
        title: 'Pensamiento de plataforma',
        description: 'Construye sistemas de los que dependen otros equipos: esquemas de eventos, SDKs, capas de integración',
        icon: 'mdi-sitemap',
      },
      {
        title: 'Puente con stakeholders',
        description: 'Traduce entre stakeholders clínicos/de negocio e ingeniería',
        icon: 'mdi-account-group',
      },
      {
        title: 'Ejecución aumentada con IA',
        description: 'Usa IA para acelerar la entrega, manteniendo el criterio, el gusto y el descubrimiento en manos humanas',
        icon: 'mdi-robot',
      },
    ],
    roles: [
      {
        id: 'nm',
        company: 'Northwestern Medicine',
        badge: 'Salud',
        location: 'Chicago, IL',
        title: 'Ingeniero de Software Senior',
        dates: 'oct 2021 – Presente',
        summary:
          'Co-lidero la plataforma que gobierna cómo más de 9 proveedores externos acceden a los datos clínicos de Epic, además de las apps iOS que usan los clínicos a diario.',
        highlights: [
          'Construí y lancé apps iOS para pacientes y uso interno, usadas a diario por enfermeras y clínicos (SwiftUI, UIKit, TCA, Swift Concurrency, gRPC)',
          'Desarrollé un BFF (backend-for-frontend) para la app iOS de empleados y creé pipelines con las APIs de AppSync; la app está construida con The Composable Architecture (TCA)',
          'Participé en la migración de las apps iOS de Objective-C a Swift y en la adopción de Swift Package Manager',
          'Co-lidero una plataforma de integración FHIR R4/DSTU3 multi-proveedor (equipo de 4) que atiende a más de 9 proveedores',
          'Diseñé una integración orientada a eventos (SmartRecruiters → Azure Service Bus), más de 1,000 eventos/día; escribí el esquema canónico de eventos adoptado en toda la organización',
          'Construí una plataforma interna de observabilidad (UI de métricas + SDK cliente); resolví una crisis de rendimiento de consultas en producción con particionado, archivado hot/cold, índices y caché',
          'Lideré la migración de on-prem a Azure; evolucioné el CI/CD (PRs automáticos de dependencias, versionado semántico, Argo Rollouts)',
          'Opero clústeres de Kubernetes (APIs, workers, cron jobs, UIs web) con ArgoCD + Terraform, con lanzamientos diarios a producción',
        ],
        features: [
          {
            tag: 'APIs reguladas',
            title: 'Plataforma de integración de APIs multi-proveedor',
            description:
              'Una capa de integración reutilizable entre un sistema clínico central y proveedores externos: una plataforma, no una integración puntual.',
            bullets: [
              'Expone recursos de datos basados en estándares a proveedores autorizados',
              'El gateway de APIs valida tokens y criterios de las solicitudes',
              'Una capa de autenticación personalizada verifica permisos de recursos, asignaciones de proyecto y perfiles de acceso por proveedor',
              'Gestión de clientes y permisos de proveedores',
              'Enmascaramiento a nivel de campo de datos sensibles para la desidentificación',
              'Una app de administración permite configurar a qué recursos accede cada proveedor',
            ],
            stats: [
              { value: '9+', label: 'proveedores' },
              { value: '4', label: 'ingenieros' },
              { value: '3 años', label: 'del POC a producción' },
            ],
          },
          {
            tag: 'Plataforma',
            title: 'SmartRecruiters Webhub',
            description:
              'API de ATS integrada con Azure Service Bus; cada cambio de cuenta se publica como un evento estructurado para equipos de toda la organización.',
            bullets: [
              'Esquema canónico de eventos en una sola clase de modelo compartida',
              'Adoptado por equipos ajenos al mío',
              'Construido con .NET y Azure Service Bus',
            ],
            stats: [{ value: '1,000+', label: 'eventos / día' }],
          },
        ],
      },
      {
        id: 'ulta',
        company: 'ULTA Beauty',
        badge: 'Retail',
        location: 'Chicago, IL',
        title: 'Ingeniero de Software, Mobile',
        dates: 'mar 2020 – sep 2021',
        summary: 'Construí en solitario la app de recogida en tienda (curbside) durante la pandemia y trabajé en otras dos apps de ULTA.',
        highlights: [
          'Planifiqué, diseñé, construí y mantuve en solitario la app iOS de recogida en tienda para consumidores en las tiendas ULTA del Medio Oeste durante la pandemia (2021); las recogidas fueron más rápidas',
          'Resolví los límites de tasa de APNS en producción ajustando el agrupamiento y la entrega de notificaciones',
          'Trabajé en equipo en la app iOS de gestión de inventario en tiendas, incluida la integración con VMware Workspace ONE MDM que administra la flota de dispositivos',
          'Corregí incidentes de producción en la app iOS de retail para consumidores durante mi incorporación, conociendo a fondo el código',
        ],
        features: [
          {
            tag: 'Proyecto en solitario',
            title: 'App de recogida en tienda (curbside)',
            description:
              'App iOS para consumidores para recoger pedidos en tienda, construida durante la pandemia. Planificada, diseñada, construida y mantenida en solitario.',
            bullets: [
              'Responsable de punta a punta: planificación, diseño, implementación y mantenimiento a largo plazo',
              'Desplegada en las tiendas ULTA del Medio Oeste en 2021; las recogidas fueron más rápidas',
              'Notificaciones push con APNS, incluido resolver los límites de tasa de APNS en producción',
              'Arquitectura de view model + vistas',
            ],
            stats: [
              { value: 'En solitario', label: 'del plan al mantenimiento' },
              { value: '2021', label: 'lanzamiento en pandemia' },
              { value: 'Medio Oeste', label: 'tiendas ULTA' },
            ],
          },
        ],
      },
      {
        id: 'growit',
        company: 'GrowIt!',
        badge: 'Consumo / Startup',
        location: 'Chicago, IL',
        title: 'Ingeniero de Software, iOS',
        dates: 'feb 2018 – feb 2020',
        summary: 'El único desarrollador de iOS: construí y lancé las funciones que hicieron crecer la base de clientes y automaticé la moderación y los lanzamientos.',
        highlights: [
          'Único responsable y desarrollador de iOS: lideré el UI/UX y la migración',
          'Aumenté la base de clientes un 25% con una experiencia iBeacon basada en ubicación, en alianza con el Lurie Garden de Chicago',
          'Construí un modelo CoreML en el dispositivo que marca publicaciones inapropiadas en tiempo real, reemplazando un flujo manual de revisión y ampliando la cobertura más allá de una ciudad',
          'Automaticé todo el pipeline de lanzamiento (pruebas, builds de QA, envío al App Store) con CircleCI y Fastlane',
        ],
        features: [
          {
            tag: 'CoreML',
            title: 'Moderación de imágenes en el dispositivo',
            description:
              'Reconocimiento de imágenes que revisa las fotos publicadas por los usuarios en busca de contenido inapropiado o fuera de tema al momento de enviarlas, y las marca para el equipo de moderación.',
            bullets: [
              'Se ejecuta por completo en el dispositivo con CoreML (sin pipeline en backend), con un modelo entrenado con la base de datos de plantas de la app',
              'Analiza las fotos en tiempo real mientras los usuarios las publican',
              'Envía alertas en segundo plano al equipo de moderación para su revisión',
              'Reemplazó un flujo manual de revisión y amplió la cobertura más allá del feed de Chicago',
            ],
            stats: [
              { value: 'En el dispositivo', label: 'sin pipeline en backend' },
              { value: 'Tiempo real', label: 'al publicar las fotos' },
              { value: 'Más allá de Chicago', label: 'cobertura de moderación' },
            ],
          },
        ],
        result: {
          headline: '+25% de crecimiento de clientes',
          line: 'La alianza iBeacon con Lurie Garden impulsó una campaña de adquisición de usuarios por temporada.',
          minis: [
            'Contenido iBeacon por sección del jardín',
            'Mapas superpuestos y visualización de datos',
            'Moderación CoreML en el dispositivo',
            'Lanzamientos automatizados (CircleCI + Fastlane)',
          ],
        },
      },
    ],
    clientsHeading: 'También trabajé con',
    clients: [
      { id: 'kinkarta', name: 'KIN+KARTA', title: 'Desarrollador de Software' },
      { id: 'yellowpepper', name: 'YellowPepper', title: 'Desarrollador de Software' },
      { id: 'ally', name: "Ally's Flower", title: 'Desarrollador de Software' },
    ],
  },
  projects: {
    heading: 'Proyectos',
    githubLabel: 'Más en GitHub',
    items: [
      {
        name: 'Stranded at an Airport',
        status: 'App Store',
        description:
          'Diseñé y construí el stack completo en solitario: app SwiftUI (patrón TCA tipo redux), API REST con Vapor, Postgres, notificaciones push con APNS, Sign in with Apple. Contenedorizada con Docker y entregada con CI/CD en GitHub Actions.',
        tags: ['SwiftUI', 'TCA', 'Vapor', 'Postgres', 'APNS', 'Docker', 'GitHub Actions', 'Swift Package Manager'],
        link: { label: 'Ver en GitHub', href: links.github },
      },
      {
        name: 'Push Notification Lambda Service',
        status: 'Artículo',
        description:
          'Un runtime personalizado de Swift en AWS Lambda desplegado con Serverless Framework y CloudFormation, políticas IAM de mínimo privilegio y despliegue automatizado de imágenes de contenedor con GitHub Actions.',
        tags: ['Swift', 'AWS Lambda', 'Serverless Framework', 'CloudFormation', 'IAM', 'GitHub Actions'],
      },
      {
        name: 'Este portafolio',
        status: 'En línea',
        description: 'Sitio personal en Vue 3 + Vuetify, desplegado como un Cloudflare Worker.',
        tags: ['Vue 3', 'Vuetify', 'TypeScript', 'Vite', 'Cloudflare Workers'],
        link: { label: 'idelfonso.com', href: links.site },
      },
    ],
    styleTitle: 'Cómo trabajo',
    styleBullets: [
      'Curiosidad: se pregunta "¿debería existir esto?" antes de escribir código',
      'Empatía: diseña para ambos lados de la pantalla (clínicos y pacientes)',
      'Responsabilidad: del modelo en Swift al despliegue en Kubernetes',
    ],
  },
  education: {
    heading: 'Formación',
    items: [
      {
        period: '2012 – 2016',
        school: 'Florida International University',
        program: 'B.S. en Sistemas de Información / Desarrollo de Software',
      },
      { school: 'Udacity', program: 'Nanodegree de Desarrollador iOS' },
      { school: 'Udacity', program: 'Nanodegree de Ingeniero de Datos' },
    ],
    certHeading: 'Certificaciones',
    certs: [
      { name: 'Mobile Device Management (MDM) Workspace ONE Unified Certification', issuer: 'VMware' },
    ],
  },
  skills: {
    heading: 'Habilidades',
    languagesHeading: 'Idiomas',
    languages: [
      { name: 'Inglés', level: 'Fluido' },
      { name: 'Español', level: 'Fluido' },
    ],
    softHeading: 'Habilidades blandas',
    soft: [
      { name: 'Curiosidad', line: 'se pregunta "¿debería existir esto?"' },
      { name: 'Empatía', line: 'diseña para ambos lados de la pantalla' },
      { name: 'Comunicación', line: 'traduce entre clínicos e ingenieros' },
      { name: 'Creatividad', line: 'CoreML en el dispositivo en lugar de un pipeline backend' },
      { name: 'Valentía', line: 'construyó en solitario una app de recogida en tienda en plena pandemia, sin manual' },
      { name: 'Resiliencia', line: 'resolvió una crisis de base de datos en producción que staging nunca mostró' },
    ],
    stackHeading: 'Stack técnico',
    stack: [
      {
        group: 'Mobile',
        items: ['Swift', 'Objective-C (migración a Swift)', 'SwiftUI', 'UIKit', 'TCA', 'Swift Concurrency', 'gRPC', 'APNS', 'Sign in with Apple', 'Swift Package Manager', 'Fastlane', 'Xcode'],
      },
      {
        group: 'Backend',
        items: ['Vapor (Swift)', 'APIs REST', 'Diseño de BFF', 'APIs de AppSync', '.NET', 'Blazor', 'Postgres', 'SQL', 'AWS Lambda', 'Serverless Framework', 'CloudFormation', 'Docker'],
      },
      {
        group: 'Cloud e infraestructura',
        items: ['Azure', 'AWS', 'Kubernetes', 'ArgoCD', 'Argo Rollouts', 'Terraform', 'GitHub Actions', 'CircleCI', 'Azure Service Bus', 'APIM'],
      },
      {
        group: 'Salud e interoperabilidad',
        items: ['FHIR R4', 'FHIR DSTU3', 'HL7', 'Epic SMART on FHIR', 'Integración de EHR', 'Cumplimiento HIPAA', 'Desidentificación de PHI', 'Gobierno de APIs multi-proveedor'],
      },
      {
        group: 'Prácticas',
        items: ['CI/CD', 'DevOps', 'Agile/Scrum', 'Arquitectura orientada a eventos', 'Versionado semántico', 'MDM (VMware Workspace ONE)', 'CoreML', 'iBeacon', 'IAM'],
      },
    ],
  },
  faq: {
    heading: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Estás abierto a nuevas oportunidades?',
        answer:
          'Sí — estoy abierto a conversar y conocer en qué estás trabajando. Sin presión en ningún sentido; si encaja para ambos, genial, y si no, sin problema.',
      },
      {
        question: '¿Qué tipo de modalidades de trabajo consideras?',
        answer:
          'Contrato, contrato con opción a planta o tiempo completo. Soy flexible con la estructura mientras el trabajo y el equipo encajen.',
      },
      {
        question: '¿Trabajas en remoto? ¿En qué zona horaria estás?',
        answer:
          'Trabajo 100% en remoto, en hora central de EE. UU. (CST/CDT). Tengo buen solapamiento con las zonas horarias de EE. UU. y estoy cómodo trabajando con equipos distribuidos en otras regiones.',
      },
      {
        question: '¿Cuáles son tus tarifas?',
        answer:
          'Depende del alcance, la duración y el tipo de contratación — hablemos y veamos qué tiene sentido para ambas partes.',
      },
      {
        question: '¿Cómo es tu stack tecnológico?',
        answer:
          'iOS/Swift para móvil, plataformas cloud como AWS y Cloudflare para infraestructura y automatización de despliegues, y Vue/TypeScript para web. Me siento cómodo aprendiendo herramientas nuevas cuando el proyecto lo requiere.',
      },
      {
        question: '¿Para qué tipo de proyectos o roles eres buen candidato?',
        answer:
          'Desarrollo móvil (iOS), infraestructura cloud y automatización de despliegues, desarrollo de funcionalidades y trabajo full-stack en general — desde conceptos nuevos hasta la optimización de sistemas existentes.',
      },
      {
        question: '¿Cómo me pongo en contacto?',
        answer: `Escríbeme a ${mail} — con gusto agendamos una llamada para conversar más.`,
      },
    ],
  },
  contact: {
    heading: 'Hablemos',
    text: 'Abierto a trabajo por contrato, contrato con opción a planta o tiempo completo, 100% remoto en hora central de EE. UU. Si estás construyendo algo en salud, móvil o ingeniería de plataformas, escríbeme.',
    email: 'Escríbeme',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  chat: {
    launcherLabel: 'Pregúntame',
    launcher: 'Abrir respuestas rápidas',
    title: 'Respuestas rápidas',
    subtitle: 'Respuestas escritas de antemano a preguntas frecuentes',
    greeting: 'Hola, soy Idelfonso. Elige una pregunta y te la respondo.',
    prompt: 'Preguntas sugeridas',
    allDone: 'Eso es todo lo que tengo escrito. Para cualquier otra cosa, hablemos.',
    close: 'Cerrar respuestas rápidas',
    restart: 'Empezar de nuevo',
    email: 'Escríbeme',
    linkedin: 'LinkedIn',
    items: [
      {
        id: 'problem',
        question: '¿Qué problema puedes resolvernos?',
        answer:
          'Soy más fuerte donde se encuentran el móvil, el backend y las plataformas: lanzar apps iOS, construir las APIs y capas de integración que las respaldan, y automatizar cómo se publican. Empiezo por encontrar el problema real antes de escribir código y luego me hago cargo de la construcción hasta producción.',
      },
      {
        id: 'ownership',
        question: '¿Puedes hacerte cargo de un proyecto de punta a punta?',
        answer:
          'Sí. Planifiqué, diseñé, construí y mantuve por mi cuenta una app iOS para consumidores en ULTA Beauty, y fui el único responsable y desarrollador de iOS en GrowIt!. Me muevo con soltura entre móvil, API, infraestructura, CI/CD y lanzamiento.',
      },
      {
        id: 'availability',
        question: '¿Estás disponible y cómo podemos trabajar juntos?',
        answer:
          'Sí, estoy abierto a conversar sobre lo que estás construyendo. Contrato, contrato con opción a planta o tiempo completo: soy flexible con la estructura mientras el trabajo y el equipo encajen.',
      },
      {
        id: 'rates',
        question: '¿Cuáles son tus tarifas?',
        answer:
          'Depende del alcance, la duración y el tipo de contratación. Hablemos y veamos qué tiene sentido para ambas partes.',
      },
      {
        id: 'contact',
        question: '¿Cómo me pongo en contacto?',
        answer: 'Lo mejor es el correo, y con gusto agendamos una llamada. También puedes escribirme por LinkedIn.',
        contact: true,
      },
      {
        id: 'regulated',
        question: '¿Has trabajado en entornos regulados?',
        answer:
          'Sí, en salud, donde la seguridad, el control de acceso y el enmascaramiento de datos son requisitos y no extras: acceso de APIs multi-proveedor, verificación de permisos y desidentificación de datos sensibles.',
      },
      {
        id: 'stakeholders',
        question: '¿Cómo trabajas con personas no técnicas?',
        answer:
          'Traduzco entre el lado de negocio o clínico y la ingeniería: pregunto qué resultado necesitan, cuestiono si una funcionalidad debería existir y explico los compromisos en lenguaje claro.',
      },
      {
        id: 'hard-problem',
        question: 'Cuéntame de un problema difícil en producción que hayas resuelto.',
        answer:
          'Una pantalla de métricas perdía conexiones a la base de datos con el volumen real de producción, algo que staging nunca mostró. Lo resolví por capas: particionado de tablas, consultas dirigidas a la partición reciente, archivado hot/cold, índices específicos y caché.',
      },
      {
        id: 'ai',
        question: '¿Cómo usas la IA en tu trabajo?',
        answer:
          'La IA me hace más rápido en la ejecución, pero no reemplaza la curiosidad ni el criterio. La uso para acelerar la construcción y la revisión, y sigo siendo responsable del descubrimiento, las decisiones de diseño y la calidad.',
      },
      {
        id: 'remote',
        question: '¿Trabajas en remoto? ¿En qué zona horaria estás?',
        answer:
          'Trabajo 100% en remoto, en hora central de EE. UU. (CST/CDT), con buen solapamiento con las zonas horarias de EE. UU. y cómodo con equipos distribuidos.',
      },
    ],
  },
  footer: { copyright: '© 2026 Idelfonso Gutierrez' },
}

export const content = { en, es }

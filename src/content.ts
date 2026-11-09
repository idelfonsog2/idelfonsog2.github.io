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
  langLabel: string
  hero: {
    greeting: string
    avatarAlt: string
    headlinePrefix: string
    rotating: string[]
    fullHeadline: string
    subhead: string
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
  langLabel: 'Language',
  hero: {
    greeting: "Hola, I'm Idelfonso Gutierrez 🙋‍♂️",
    avatarAlt: 'Portrait of Idelfonso Gutierrez',
    headlinePrefix: 'Senior engineer across',
    rotating: ['iOS', 'backend platforms', 'healthcare interoperability', 'cloud platforms'],
    fullHeadline:
      'Senior engineer across iOS, backend platforms, healthcare interoperability and cloud platforms',
    subhead:
      "Co-owner of the FHIR integration platform that governs how 9+ vendors access Epic clinical data at Northwestern Medicine.",
    superpower:
      'I find the real problem before anyone opens a code editor — then build the full stack to prove it: iOS, backend, infra, CI/CD, App Store.',
    story:
      'At Northwestern Medicine I co-own the FHIR integration platform for 9+ external vendors. At ULTA I shipped two iOS apps during a pandemic with no playbook. At GrowIt! I replaced a broken moderation workflow with an on-device ML model nobody asked for but everyone needed.',
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
        title: 'Healthcare Interoperability',
        description: 'FHIR R4/DSTU3, Epic SMART on FHIR, HIPAA de-identification, multi-vendor API governance',
        icon: 'mdi-hospital-box',
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
          'Co-own a multi-vendor FHIR R4/DSTU3 integration platform (team of 4) serving 9+ vendors',
          'Designed an event-driven integration (SmartRecruiters → Azure Service Bus), 1,000+ events/day; authored the canonical event schema adopted org-wide',
          'Built an internal observability platform (metrics UI + client SDK); fixed a production query-performance crisis with partitioning, hot/cold archiving, indexing and caching',
          'Led the on-prem → Azure migration; evolved CI/CD (automated dependency PRs, semantic versioning, Argo Rollouts)',
          'Run Kubernetes clusters (APIs, workers, cron jobs, web UIs) via ArgoCD + Terraform, with daily production releases',
        ],
        features: [
          {
            tag: 'FHIR R4 / DSTU3',
            title: 'Multi-vendor Healthcare Interoperability Platform',
            description:
              "The layer between Northwestern Medicine's Epic EHR and external vendors: a reusable platform, not a one-off integration.",
            bullets: [
              'Exposes Patient, Observation, Appointment, Encounter and MedicationRequest resources',
              'APIM gateway validates tokens and request criteria',
              'Azure AD custom auth checks resource permissions, project assignments and vendor access profiles',
              'Epic SMART on FHIR client management',
              'Field-level masking of PII for HIPAA de-identification',
              'Cohort app lets evangelists configure which resources each vendor can access',
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
        summary: 'Shipped the curbside pickup apps nationwide under a pandemic timeline.',
        highlights: [
          'Designed and shipped two iOS apps for curbside pickup (consumer + in-store associate) across stores nationwide on a compressed timeline',
          'Built an inventory management iOS app for store associates',
          'Navigated APNS rate limits in production by adjusting notification batching and delivery',
          'Integrated VMware Workspace ONE MDM to manage the store device fleet',
          'Designed end-to-end system architecture and led technical decisions',
        ],
      },
      {
        id: 'growit',
        company: 'GrowIt!',
        badge: 'Consumer / Startup',
        location: 'Chicago, IL',
        title: 'Software Engineer, iOS',
        dates: 'Feb 2018 – Feb 2020',
        summary: 'Built iOS features that drove growth and automated moderation and releases.',
        highlights: [
          "Grew the customer base 25% with a location-aware iBeacon experience in partnership with Chicago's Lurie Garden",
          'Built an on-device CoreML model that flags inappropriate posts in real time, replacing a manual scroll-and-flag workflow and extending coverage beyond one city',
          'Automated the full release pipeline (tests, QA builds, App Store submission) with CircleCI and Fastlane',
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
      'Empathy: designs for both sides of the screen (customer and associate, nurse and patient)',
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
      { name: 'Courage', line: 'shipped pandemic-timeline apps with no playbook' },
      { name: 'Resilience', line: 'fixed a production DB crisis that staging never showed' },
    ],
    stackHeading: 'Technical stack',
    stack: [
      {
        group: 'Mobile',
        items: ['Swift', 'SwiftUI', 'UIKit', 'TCA', 'Swift Concurrency', 'gRPC', 'APNS', 'Sign in with Apple', 'Swift Package Manager', 'Fastlane', 'Xcode'],
      },
      {
        group: 'Backend',
        items: ['Vapor (Swift)', 'REST APIs', '.NET', 'Blazor', 'Postgres', 'SQL', 'AWS Lambda', 'Serverless Framework', 'CloudFormation', 'Docker'],
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
  langLabel: 'Idioma',
  hero: {
    greeting: 'Hola, soy Idelfonso Gutierrez 🙋‍♂️',
    avatarAlt: 'Retrato de Idelfonso Gutierrez',
    headlinePrefix: 'Ingeniero senior en',
    rotating: ['iOS', 'plataformas backend', 'interoperabilidad en salud', 'plataformas cloud'],
    fullHeadline:
      'Ingeniero senior en iOS, plataformas backend, interoperabilidad en salud y plataformas cloud',
    subhead:
      'Co-responsable de la plataforma de integración FHIR que gobierna cómo más de 9 proveedores acceden a los datos clínicos de Epic en Northwestern Medicine.',
    superpower:
      'Encuentro el problema real antes de que nadie abra un editor de código — y luego construyo el stack completo para demostrarlo: iOS, backend, infraestructura, CI/CD, App Store.',
    story:
      'En Northwestern Medicine co-lidero la plataforma de integración FHIR para más de 9 proveedores externos. En ULTA lancé dos apps iOS durante una pandemia sin manual de instrucciones. En GrowIt! reemplacé un flujo de moderación roto con un modelo de ML en el dispositivo que nadie pidió pero todos necesitaban.',
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
        title: 'Interoperabilidad en salud',
        description: 'FHIR R4/DSTU3, Epic SMART on FHIR, desidentificación HIPAA, gobierno de APIs multi-proveedor',
        icon: 'mdi-hospital-box',
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
          'Co-lidero una plataforma de integración FHIR R4/DSTU3 multi-proveedor (equipo de 4) que atiende a más de 9 proveedores',
          'Diseñé una integración orientada a eventos (SmartRecruiters → Azure Service Bus), más de 1,000 eventos/día; escribí el esquema canónico de eventos adoptado en toda la organización',
          'Construí una plataforma interna de observabilidad (UI de métricas + SDK cliente); resolví una crisis de rendimiento de consultas en producción con particionado, archivado hot/cold, índices y caché',
          'Lideré la migración de on-prem a Azure; evolucioné el CI/CD (PRs automáticos de dependencias, versionado semántico, Argo Rollouts)',
          'Opero clústeres de Kubernetes (APIs, workers, cron jobs, UIs web) con ArgoCD + Terraform, con lanzamientos diarios a producción',
        ],
        features: [
          {
            tag: 'FHIR R4 / DSTU3',
            title: 'Plataforma de interoperabilidad en salud multi-proveedor',
            description:
              'La capa entre el EHR Epic de Northwestern Medicine y los proveedores externos: una plataforma reutilizable, no una integración puntual.',
            bullets: [
              'Expone los recursos Patient, Observation, Appointment, Encounter y MedicationRequest',
              'El gateway APIM valida tokens y criterios de las solicitudes',
              'La autenticación personalizada con Azure AD verifica permisos de recursos, asignaciones de proyecto y perfiles de acceso por proveedor',
              'Gestión de clientes con Epic SMART on FHIR',
              'Enmascaramiento a nivel de campo de datos personales para la desidentificación HIPAA',
              'La app de cohortes permite a los evangelistas configurar a qué recursos accede cada proveedor',
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
        summary: 'Lancé las apps de recogida en tienda (curbside) a nivel nacional con un calendario de pandemia.',
        highlights: [
          'Diseñé y lancé dos apps iOS para la recogida en tienda (consumidor + asociado en tienda) en todo el país con un calendario comprimido',
          'Construí una app iOS de gestión de inventario para los asociados de tienda',
          'Resolví los límites de tasa de APNS en producción ajustando el agrupamiento y la entrega de notificaciones',
          'Integré VMware Workspace ONE MDM para administrar la flota de dispositivos de las tiendas',
          'Diseñé la arquitectura de sistema de punta a punta y lideré las decisiones técnicas',
        ],
      },
      {
        id: 'growit',
        company: 'GrowIt!',
        badge: 'Consumo / Startup',
        location: 'Chicago, IL',
        title: 'Ingeniero de Software, iOS',
        dates: 'feb 2018 – feb 2020',
        summary: 'Construí funciones iOS que impulsaron el crecimiento y automaticé la moderación y los lanzamientos.',
        highlights: [
          'Aumenté la base de clientes un 25% con una experiencia iBeacon basada en ubicación, en alianza con el Lurie Garden de Chicago',
          'Construí un modelo CoreML en el dispositivo que marca publicaciones inapropiadas en tiempo real, reemplazando un flujo manual de revisión y ampliando la cobertura más allá de una ciudad',
          'Automaticé todo el pipeline de lanzamiento (pruebas, builds de QA, envío al App Store) con CircleCI y Fastlane',
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
      'Empatía: diseña para ambos lados de la pantalla (cliente y asociado, enfermera y paciente)',
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
      { name: 'Valentía', line: 'lanzó apps con calendario de pandemia sin manual' },
      { name: 'Resiliencia', line: 'resolvió una crisis de base de datos en producción que staging nunca mostró' },
    ],
    stackHeading: 'Stack técnico',
    stack: [
      {
        group: 'Mobile',
        items: ['Swift', 'SwiftUI', 'UIKit', 'TCA', 'Swift Concurrency', 'gRPC', 'APNS', 'Sign in with Apple', 'Swift Package Manager', 'Fastlane', 'Xcode'],
      },
      {
        group: 'Backend',
        items: ['Vapor (Swift)', 'APIs REST', '.NET', 'Blazor', 'Postgres', 'SQL', 'AWS Lambda', 'Serverless Framework', 'CloudFormation', 'Docker'],
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
  footer: { copyright: '© 2026 Idelfonso Gutierrez' },
}

export const content = { en, es }

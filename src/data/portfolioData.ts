import { PortfolioData } from '../types';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: "Ainhoa Castillo Garay",
    pronouns: "she/her",
    role: "QA Trainee & Software Engineering Student",
    headline: "QA Trainee en Mandü (Grupo Visma) y estudiante de 8vo ciclo de Ingeniería de Software (Décimo Superior en UPC). Especializada en aseguramiento de calidad, automatización de pruebas y desarrollo multiplataforma.",
    location: "Lima, Perú",
    availability: "Disponible para oportunidades en Software Engineering",
    email: "ainhoa.c.garay@gmail.com",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bioParagraphs: [
      "Estudiante de 8vo ciclo de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC), perteneciente al Décimo Superior, actualmente desempeñándome como QA Trainee en Mandü (empresa del grupo Visma).",
      "En mi día a día combino el control de calidad, diseñando y ejecutando casos de prueba manuales y automatizados con Cypress y Selenium, y gestionando incidencias en Jira, con experiencia previa como desarrolladora. Trabajé con Vue.js, Angular y Flutter en frontend, y con C#, Java y Node.js en backend, aplicando siempre principios de SOLID, DDD y metodologías ágiles como Scrum.",
      "Este perfil híbrido entre desarrollo y calidad me permite comprender el ciclo de vida completo del software y aportar una mirada crítica, analítica y orientada al detalle en cada etapa del testing.",
      "Paralelo a mis estudios, trabajé como Barista de Especialidad, donde desarrollé precisión técnica, capacidad de análisis bajo presión y comunicación efectiva con equipos diversos. Son habilidades que hoy aplico directamente al testing de software y al trabajo colaborativo en entornos multidisciplinarios."
    ],
    coreValues: [
      {
        title: "Aseguramiento & Rigor QA",
        description: "Diseño y ejecución de casos de prueba manuales y automatización con Cypress y Selenium para garantizar software libre de defectos y regresiones.",
        icon: "ShieldCheck"
      },
      {
        title: "Desarrollo Multiplataforma",
        description: "Construcción de interfaces móviles y web con Flutter, Jetpack Compose, Vue y Angular siguiendo Clean Architecture y buenas prácticas.",
        icon: "Sparkles"
      },
      {
        title: "Visión Híbrida Dev + QA",
        description: "Comprensión integral de todo el ciclo de vida de desarrollo de software (SDLC) para anticipar anomalías y asegurar la máxima calidad técnica.",
        icon: "Cpu"
      },
      {
        title: "Comunicación & Trabajo Ágil",
        description: "Facilitación de colaboración como puente entre equipos técnicos y de negocio bajo metodologías ágiles Scrum.",
        icon: "Users"
      }
    ],
    stats: [
      {
        label: "8vo Ciclo · Décimo Superior",
        value: "Top 10%",
        sublabel: "Ingeniería de Software UPC"
      },
      {
        label: "Especializaciones",
        value: "8+",
        sublabel: "Scrum Master, GCP & Python"
      },
      {
        label: "Proyectos Clave",
        value: "5+",
        sublabel: "Grotix, Livria, VolunTrack, Raves, y más"
      },
      {
        label: "Idiomas",
        value: "3",
        sublabel: "Español, Inglés, Francés"
      }
    ],
    socialLinks: [
      {
        id: "linkedin",
        platform: "linkedin",
        label: "LinkedIn",
        username: "linkedin.com/in/ainhoa-castillo-garay",
        url: "https://www.linkedin.com/in/ainhoa-castillo-garay",
        description: "Perfil profesional, trayectoria en QA y red de contactos en ingeniería de software.",
        featured: true
      },
      {
        id: "github-personal",
        platform: "github",
        label: "GitHub · noaa01100001",
        username: "github.com/noaa01100001",
        url: "https://github.com/noaa01100001",
        description: "Perfil principal en GitHub con repositorios de proyectos, código abierto y organizaciones de desarrollo.",
        featured: true
      },
      {
        id: "email",
        platform: "email",
        label: "Email",
        username: "ainhoa.c.garay@gmail.com",
        url: "mailto:ainhoa.c.garay@gmail.com",
        description: "Canal directo para oportunidades laborales, consultas técnicas y colaboraciones.",
        featured: true
      },
      {
        id: "phone",
        platform: "phone",
        label: "Teléfono / Contacto",
        username: "+51 933 908 835 (Lima, Perú)",
        url: "tel:+51933908835",
        description: "Contacto telefónico directo y mensajería profesional.",
        featured: true
      }
    ]
  },
  projects: [
    {
      id: "project-celevigrotix-fullstack",
      title: "Grotix — Plataforma Agrotech & Ecosistema IoT",
      tagline: "Ecosistema inteligente para monitoreo y automatización de cultivos con telemetría IoT, sensores y arquitectura distribuida.",
      description: "Plataforma Agrotech integral para la monitorización de cultivos e invernaderos en tiempo real, gestión de microclimas y optimización de recursos mediante IoT y analítica.",
      longDescription: "Grotix fue diseñado como una solución tecnológica agropecuaria para el monitoreo y control automatizado de cultivos. Desarrollado con una arquitectura limpia y modular, procesa telemetría en tiempo real de sensores (humedad de suelo, temperatura, pH y radiación lumínica), coordina actuadores de riego inteligente y expone APIs REST seguras para paneles analíticos y aplicaciones multiplataforma.",
      category: "fullstack",
      tags: ["Agrotech & IoT", "Clean Architecture", "Telemetry & Sensors", "Full-Stack", "REST APIs", "Automation", "Quality Assurance", "Git & CI/CD"],
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      year: "2025",
      impactMetric: "Monitoreo en tiempo real de cultivos y arquitectura modular distribuida",
      liveUrl: "https://celevigrotix.github.io/Grotix_LandingPage/",
      githubUrl: "https://github.com/CeleviGrotix",
      architectureHighlights: [
        "Ingesta y procesamiento de telemetría de sensores IoT (humedad de suelo, temperatura, pH y radiación) en tiempo real",
        "Arquitectura de backend modular bajo Clean Architecture y desacoplamiento estricto de capas",
        "Control automatizado de actuadores de riego y alertas predictivas ante anomalías en microclimas",
        "Validación exhaustiva de flujos y suites de pruebas para asegurar alta disponibilidad"
      ],
      keyFeatures: [
        "Dashboard de analítica agrícola con gráficas de variables ambientales en tiempo real",
        "Sistema de alertas tempranas configurables para prevención de estrés hídrico y plagas",
        "Control automatizado y remoto de válvulas de riego y dosificación de nutrientes",
        "Gestión multizona para parcelas agrícolas e invernaderos tecnificados"
      ],
      challengesSolved: "Diseño de un modelo de datos tolerante a intermitencias de conectividad en campo y estandarización de contratos de API para sincronizar hardware de sensores con el panel analítico."
    },
    {
      id: "project-celevigrotix-landing",
      title: "Grotix Landing Page — Portal Agrotech",
      tagline: "Landing page oficial de Grotix para la presentación del ecosistema Agrotech, captación y showcase de sensores IoT.",
      description: "Portal web de alta conversión y diseño responsivo para exponer la propuesta tecnológica de Grotix: monitoreo inteligente de cultivos, hardware IoT y planes para productores.",
      longDescription: "Desarrollo frontend de la landing page institucional de Grotix (https://celevigrotix.github.io/Grotix_LandingPage/), implementando un sistema de diseño moderno con identidad 'Agro-Tech', navegación intuitiva, presentación interactiva de funcionalidades y optimización exhaustiva de rendimiento 'mobile-first'.",
      category: "frontend",
      tags: ["Landing Page", "Agrotech UI", "UI/UX Design", "Responsive Web", "TypeScript", "Tailwind CSS", "Mobile-First"],
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      year: "2025",
      impactMetric: "Portal institucional Agrotech de alto rendimiento y diseño responsivo",
      liveUrl: "https://celevigrotix.github.io/Grotix_LandingPage/",
      githubUrl: "https://github.com/CeleviGrotix/Grotix_LandingPage",
      architectureHighlights: [
        "Estructura semántica optimizada para conversión, accesibilidad y posicionamiento web",
        "Componentes modulares estilizados con Tailwind CSS y microinteracciones fluidas",
        "Showcase interactivo de los módulos de hardware, sensores y dashboard de la plataforma",
        "Rendimiento óptimo con puntuación sobresaliente en Core Web Vitals"
      ],
      keyFeatures: [
        "Sección interactiva de características: monitoreo de suelo, clima y riego inteligente",
        "Comparativa de planes de suscripción y calculadora de ahorro hídrico para agricultores",
        "Galería de capturas de la plataforma y formulario de contacto para demostraciones",
        "Diseño adaptable con soporte multiplataforma para smartphones, tablets y pantallas de escritorio"
      ],
      challengesSolved: "Comunicación clara y atractiva de tecnología IoT compleja para un público agronómico, logrando una experiencia de usuario rápida y memorable."
    },
    {
      id: "project-1-fullstack",
      title: "Livria — Ecosistema Digital de Libros (Full-Stack & Web)",
      tagline: "Ecosistema multiplataforma con aplicación web en Vue 3/Vite, app móvil Flutter, panel Jetpack Compose y backend .NET (C#).",
      description: "Ecosistema full-stack integral diseñado para la gestión, catálogo y adquisición de libros con Clean Architecture, servicios REST documentados en OpenAPI/Swagger y validación funcional exhaustiva.",
      longDescription: "Livria fue desarrollado como un ecosistema multiplataforma modular para conectar lectores y distribuidores. Integra una aplicación web completa con Vue 3 y Vite, una app móvil nativa en Flutter para usuarios finales y un panel administrativo en Jetpack Compose para moderación, todo respaldado por una API robusta en C# (.NET).",
      category: "fullstack",
      tags: ["Vue.js", "Vite", "Flutter", "Jetpack Compose", "C# (.NET)", "OpenAPI/Swagger", "Clean Architecture", "REST APIs"],
      image: "https://images.unsplash.com/photo-1507842229451-7f01be85ab4d?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      year: "2025",
      impactMetric: "Ecosistema full-stack multiplataforma (Web, Mobile & Admin) con Clean Architecture",
      liveUrl: "https://livriaorg.github.io/LivriaLanding",
      githubUrl: "https://github.com/livriaorg",
      architectureHighlights: [
        "Plataforma web en Vue 3 + Vite, app móvil nativa en Flutter y panel de administración en Jetpack Compose",
        "Servicios backend en C# (.NET) estructurados bajo Clean Architecture con documentación OpenAPI/Swagger",
        "Pruebas exhaustivas de endpoints, validación funcional y diseño centrado en la experiencia de usuario (UX)",
        "Separación modular de capas garantizando escalabilidad, desacoplamiento y alta mantenibilidad"
      ],
      keyFeatures: [
        "Aplicación web y catálogo interactivo de libros con filtrado dinámico y búsqueda en tiempo real",
        "Panel administrativo para gestión de stock, adquisiciones y moderación",
        "Sincronización multi-cliente para smartphones, tablets y pantallas de escritorio",
        "Documentación interactiva y estandarizada de endpoints mediante Swagger UI"
      ],
      challengesSolved: "Se implementó Clean Architecture para desacoplar la lógica de negocio de los clientes multiplataforma, logrando una integración sincronizada y confiable entre Flutter, Jetpack Compose y Vue con la API en .NET."
    },
    {
      id: "project-1-landing",
      title: "Livria Landing Page — Portal de Lanzamiento",
      tagline: "Landing page oficial de Livria diseñada en Vue 3 y Vite para la presentación de la plataforma.",
      description: "Landing page moderna y responsiva orientada a la presentación de funcionalidades de Livria, atracción de lectores y enlace a descargas multiplataforma.",
      longDescription: "Diseño y desarrollo de la landing page de Livria, enfocada en la conversión de usuarios, exhibición del catálogo editorial y demostración de las aplicaciones móviles y web.",
      category: "frontend",
      tags: ["Vue.js", "Vite", "Landing Page", "Tailwind CSS", "UI/UX Design", "Responsive Web"],
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      year: "2025",
      impactMetric: "Landing page responsiva de alto rendimiento con animaciones y UX optimizada",
      liveUrl: "https://livriaorg.github.io/LivriaLanding",
      githubUrl: "https://github.com/livriaorg/LivriaLanding",
      architectureHighlights: [
        "Landing page construida con Vue 3 y Vite para carga instantánea y máxima interactividad",
        "Diseño estético y adaptable con layouts responsivos y tipografía cuidada",
        "Integración de secciones de showcase, testimonios y llamadas a la acción (CTA)"
      ],
      keyFeatures: [
        "Showcase visual interactivo de la app móvil y catálogo web",
        "Sección de previsualización de funcionalidades clave y suscripción",
        "Optimización 'mobile-first' y tiempos de respuesta ultra rápidos"
      ],
      challengesSolved: "Diseño de microinteracciones visuales fluidas y optimización de recursos gráficos para lograr tiempos de carga por debajo de 1 segundo."
    },
    {
      id: "project-2",
      title: "VolunTrack — Gestión de Voluntariado en ONGs",
      tagline: "Plataforma integral para coordinación y seguimiento de voluntariado con frontend en Angular, backend en Java y DDD.",
      description: "Plataforma completa orientada a ONGs para la coordinación, postulación, seguimiento y medición del impacto social generado por voluntarios y programas comunitarios.",
      longDescription: "VolunTrack resuelve los desafíos de administración y trazabilidad en organizaciones sin fines de lucro. Desarrollado con frontend reactivo en Angular y backend estructurado en Java bajo principios de Domain-Driven Design (DDD), permitiendo documentar flujos de trabajo con Swagger y gestionar métricas de impacto.",
      category: "fullstack",
      tags: ["Angular", "Java", "Spring Boot", "Domain-Driven Design (DDD)", "Swagger", "REST APIs", "SQL"],
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      year: "2024",
      impactMetric: "Arquitectura DDD para trazabilidad y medición de impacto social",
      liveUrl: "https://wasi-masi.github.io/Voluntrack-LandingPage",
      githubUrl: "https://github.com/wasi-masi/Voluntrack-LandingPage",
      architectureHighlights: [
        "Frontend modular y reactivo en Angular con control estricto de componentes y validaciones de usuario",
        "Lógica de negocio en Java implementando Domain-Driven Design (DDD) y principios SOLID",
        "Servicios RESTful estandarizados, versionados y documentados en Swagger",
        "Manejo de flujos de datos para seguimiento analítico y cálculo de métricas de impacto social"
      ],
      keyFeatures: [
        "Registro, postulación y asignación inteligente de voluntarios a programas sociales",
        "Dashboard para ONGs con control de horas comunitarias y reportes de alcance",
        "Validación de datos en tiempo real y endpoints seguros para consultas complejas",
        "Portal accesible con experiencia de usuario intuitiva"
      ],
      challengesSolved: "Modelado de dominios complejos de voluntariado mediante bounded contexts en DDD, aislando la lógica de negocio en Java de la capa de persistencia y transporte."
    },
    {
      id: "project-3",
      title: "Raves Landing Page — Descubrimiento Musical",
      tagline: "Landing page y plataforma interactiva para exploración de música, tendencias y conexión comunitaria.",
      description: "Aplicación web responsiva con diseño de alto impacto visual orientada a la exploración de tendencias musicales, artistas emergentes y comunidades sonoras.",
      longDescription: "Raves fue creada para ofrecer una experiencia estética y de navegación instantánea para los amantes de la música. Con un diseño 'mobile-first' contemporáneo, microinteracciones dinámicas y componentes optimizados para fluidez visual.",
      category: "frontend",
      tags: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript / TypeScript", "UI/UX Design", "Responsive Web", "Landing Page"],
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      featured: true,
      year: "2024",
      impactMetric: "Diseño interactivo de alto rendimiento y Core Web Vitals optimizados",
      liveUrl: "https://kistoo.github.io/Raves-challenge",
      githubUrl: "https://github.com/kistoo/Raves-challenge",
      architectureHighlights: [
        "Diseño visual inmersivo con animaciones fluidas y microinteracciones de alta precisión",
        "Estructura semántica HTML5 con optimización de accesibilidad y buenas prácticas SEO",
        "Renderizado adaptativo 'mobile-first' compatible con múltiples dispositivos y resoluciones",
        "Arquitectura de componentes limpia para escalabilidad y consumo de APIs multimedia"
      ],
      keyFeatures: [
        "Explorador interactivo de géneros, playlists y artistas en tendencia",
        "Componentes visuales con estados activos/hover enriquecidos",
        "Interfaz visual moderna optimizada para eventos y cultura musical",
        "Navegación instantánea y rendimiento sobresaliente en navegadores modernos"
      ],
      challengesSolved: "Optimización de assets multimedia y transiciones visuales asegurando tiempos de carga menores a 1 segundo y puntuación máxima en accesibilidad."
    },
    {
      id: "project-4",
      title: "QA Test Automation & Verification — Mandü (Visma)",
      tagline: "Estrategias de aseguramiento de calidad con pruebas manuales y automatizadas con Cypress y Selenium.",
      description: "Validación funcional, diseño de matrices de prueba, automatización E2E y gestión de defectos en Jira para plataformas empresariales de gestión de talento.",
      longDescription: "Como QA Trainee en Mandü (empresa del grupo Visma), participo en todo el ciclo de vida de aseguramiento de calidad de software: desde el diseño y documentación de casos de prueba hasta la automatización con Cypress y Selenium y el seguimiento de incidencias con Scrum.",
      category: "fullstack",
      tags: ["Cypress", "Selenium", "Jira", "Scrum", "Manual Testing", "Test Automation", "Regression Testing", "Bug Tracking"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      featured: false,
      year: "2026",
      impactMetric: "Reducción de tiempos de validación y aumento de cobertura de regresión",
      liveUrl: "https://manduet.com",
      githubUrl: "https://github.com",
      architectureHighlights: [
        "Diseño y documentación exhaustiva de casos de prueba para validación previa a despliegues en producción",
        "Desarrollo y mantenimiento de pruebas automatizadas con Cypress y Selenium para cobertura de regresión",
        "Gestión y seguimiento del ciclo de vida de bugs en Jira colaborando con desarrolladores y product owners",
        "Participación integral en ceremonias Scrum: sprint planning, refinamientos y retrospectivas"
      ],
      keyFeatures: [
        "Planes de prueba estructurados y matrices de cobertura funcional",
        "Suites de regresión automatizadas para validación ágil",
        "Reportes detallados de incidencias con evidencia técnica y pasos reproducibles",
        "Verificación rigurosa de correcciones y testing exploratorio"
      ],
      challengesSolved: "Integración de validaciones automatizadas en flujos críticos para detectar defectos de manera temprana y acelerar los ciclos de entrega continua."
    }
  ],
  skillCategories: [
    {
      id: "qa-testing",
      title: "QA & Test Automation",
      description: "Aseguramiento de calidad, automatización de pruebas, gestión de incidencias y metodologías de testing.",
      iconName: "ShieldCheck",
      skills: [
        { name: "Cypress", category: "QA & Testing", level: "Expert", years: "1+ yrs", featured: true },
        { name: "Selenium", category: "QA & Testing", level: "Expert", years: "1+ yrs", featured: true },
        { name: "Diseño de Casos de Prueba", category: "QA & Testing", level: "Expert", years: "2 yrs", featured: true },
        { name: "Pruebas Manuales & Exploratorias", category: "QA & Testing", level: "Expert", years: "2 yrs", featured: true },
        { name: "Testing de Regresión", category: "QA & Testing", level: "Expert", years: "1+ yrs", featured: true },
        { name: "Gestión de Bugs en Jira", category: "QA & Testing", level: "Expert", years: "1+ yrs", featured: true },
        { name: "Validación de APIs & Swagger", category: "QA & Testing", level: "Advanced", years: "2 yrs", featured: true },
        { name: "Reporte Estructurado de Incidencias", category: "QA & Testing", level: "Expert", years: "2 yrs", featured: false }
      ]
    },
    {
      id: "frontend-multiplatform",
      title: "Frontend & Multiplatform",
      description: "Desarrollo multiplataforma móvil y web con frameworks modernos y diseño centrado en el usuario.",
      iconName: "Layout",
      skills: [
        { name: "Flutter", category: "Frontend", level: "Expert", years: "2 yrs", featured: true },
        { name: "Vue.js & Vite", category: "Frontend", level: "Expert", years: "2 yrs", featured: true },
        { name: "Jetpack Compose", category: "Frontend", level: "Advanced", years: "1+ yrs", featured: true },
        { name: "Angular", category: "Frontend", level: "Advanced", years: "2 yrs", featured: true },
        { name: "React", category: "Frontend", level: "Proficient", years: "2 yrs", featured: true },
        { name: "HTML5 & Semantic Web", category: "Frontend", level: "Expert", years: "3 yrs", featured: false },
        { name: "CSS3 & Tailwind CSS", category: "Frontend", level: "Expert", years: "3 yrs", featured: true },
        { name: "Diseño UX & Responsive Web", category: "Frontend", level: "Expert", years: "3 yrs", featured: false }
      ]
    },
    {
      id: "backend-apis",
      title: "Backend & Arquitectura",
      description: "Construcción de APIs REST, arquitectura limpia y lógica de negocio orientada al dominio.",
      iconName: "Server",
      skills: [
        { name: "C# (.NET)", category: "Backend", level: "Advanced", years: "2 yrs", featured: true },
        { name: "Java (Spring Boot)", category: "Backend", level: "Advanced", years: "2 yrs", featured: true },
        { name: "Node.js & Express", category: "Backend", level: "Advanced", years: "2 yrs", featured: true },
        { name: "NestJS", category: "Backend", level: "Advanced", years: "1+ yrs", featured: false },
        { name: "OpenAPI / Swagger", category: "Backend", level: "Expert", years: "2 yrs", featured: true },
        { name: "Clean Architecture", category: "Backend", level: "Expert", years: "2 yrs", featured: true },
        { name: "Domain-Driven Design (DDD)", category: "Backend", level: "Expert", years: "2 yrs", featured: true },
        { name: "Principios SOLID", category: "Backend", level: "Expert", years: "2 yrs", featured: false }
      ]
    },
    {
      id: "languages",
      title: "Lenguajes de Programación",
      description: "Lenguajes utilizados en desarrollo multiplataforma, backend, scripts de testing y automatización.",
      iconName: "Code2",
      skills: [
        { name: "Dart", category: "Languages", level: "Expert", years: "2 yrs", featured: true },
        { name: "JavaScript (ES6+)", category: "Languages", level: "Expert", years: "3 yrs", featured: true },
        { name: "Kotlin", category: "Languages", level: "Advanced", years: "1+ yrs", featured: true },
        { name: "TypeScript", category: "Languages", level: "Advanced", years: "2 yrs", featured: true },
        { name: "Java", category: "Languages", level: "Advanced", years: "2 yrs", featured: true },
        { name: "C#", category: "Languages", level: "Advanced", years: "2 yrs", featured: true },
        { name: "Python", category: "Languages", level: "Advanced", years: "2 yrs", featured: true },
        { name: "C++", category: "Languages", level: "Expert", years: "2+ yrs", featured: true }
      ]
    },
    {
      id: "databases",
      title: "Bases de Datos & Persistencia",
      description: "Modelado relacional y no relacional, ORMs y optimización de consultas.",
      iconName: "Database",
      skills: [
        { name: "MongoDB", category: "Databases", level: "Advanced", years: "2 yrs", featured: true },
        { name: "SQL Server", category: "Databases", level: "Advanced", years: "2 yrs", featured: true },
        { name: "MySQL", category: "Databases", level: "Advanced", years: "2 yrs", featured: true },
        { name: "TypeORM", category: "Databases", level: "Advanced", years: "1+ yrs", featured: false },
        { name: "Modelado de Datos Relacional", category: "Databases", level: "Advanced", years: "2 yrs", featured: false }
      ]
    },
    {
      id: "tools-methods",
      title: "Herramientas, R&D & Idiomas",
      description: "Control de versiones, metodologías ágiles certificadas, R&D emergente y dominio de idiomas.",
      iconName: "Cpu",
      skills: [
        { name: "Scrum (Scrum Master Certified)", category: "Tools", level: "Expert", years: "2 yrs", featured: true },
        { name: "Git & GitHub", category: "Tools", level: "Expert", years: "3 yrs", featured: true },
        { name: "Machine Learning (Google Cloud)", category: "Tools", level: "Advanced", years: "1 yr", featured: false },
        { name: "Sistemas RAG", category: "R&D", level: "Exploring", years: "Activo", featured: true },
        { name: "Modelos LLM & GenAI", category: "R&D", level: "Exploring", years: "Activo", featured: true },
        { name: "Blockchain & Web3", category: "R&D", level: "Exploring", years: "Activo", featured: true },
        { name: "Español (Nativo)", category: "Idiomas", level: "Expert", years: "Nativo", featured: true },
        { name: "Inglés (Avanzado)", category: "Idiomas", level: "Advanced", years: "Fluido", featured: true },
        { name: "Francés (Básico)", category: "Idiomas", level: "Proficient", years: "Básico", featured: false },
        { name: "Comunicación & Liderazgo de Equipos", category: "Habilidades", level: "Expert", years: "3 yrs", featured: true }
      ]
    }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "QA Trainee",
      company: "Mandü (Grupo Visma)",
      location: "Lima, Perú",
      period: "2026 — Actualidad",
      current: true,
      description: "Aseguramiento de calidad en plataforma empresarial de clima laboral y gestión de talento, combinando testing manual y automatización.",
      achievements: [
        "Diseño, documentación y ejecución de casos de prueba manuales para validar funcionalidades y detectar defectos antes del despliegue a producción.",
        "Desarrollo y mantenimiento de pruebas automatizadas con Cypress y Selenium, contribuyendo a la cobertura de regresión y a la reducción de tiempos de validación.",
        "Gestión y seguimiento de incidencias (bugs) en Jira, colaborando estrechamente con equipos de desarrollo bajo metodologías ágiles Scrum.",
        "Participación activa en el ciclo completo de QA: planificación de pruebas, ejecución, reporte estructurado de resultados y verificación de correcciones."
      ],
      technologies: ["Cypress", "Selenium", "Jira", "Scrum", "Manual Testing", "Test Automation", "Regression Testing", "Bug Tracking"],
      companyUrl: "https://manduet.com"
    },
    {
      id: "exp-2",
      role: "Barista de Especialidad",
      company: "Balicafé · Lumocafé · Alanya Repostería",
      location: "Lima, Perú",
      period: "Dic 2023 — Mar 2026",
      current: false,
      description: "Responsable de la calibración técnica de maquinaria y el análisis de variables físico-químicas bajo altos estándares de precisión.",
      achievements: [
        "Calibración técnica de maquinaria y análisis riguroso de variables (ratios, temperatura y tiempos) para garantizar la excelencia en el producto final.",
        "Desarrollo de competencias de resolución de problemas bajo alta presión, atención minuciosa al detalle y comunicación efectiva con clientes y equipo.",
        "Transferencia de metodologías de precisión técnica, consistencia en procesos y control de calidad hacia el aseguramiento y testing de software."
      ],
      technologies: ["Control de Calidad", "Atención al Detalle", "Resolución de Problemas", "Gestión de Variables", "Comunicación Asertiva"],
      companyUrl: "https://instagram.com"
    }
  ],
  educations: [
    {
      id: "edu-1",
      degree: "Ingeniería de Software (8vo Ciclo en curso)",
      institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
      location: "Lima, Perú",
      period: "2023 — 2028 (8vo ciclo en curso)",
      honors: "Perteneciente al Décimo Superior (Top 10%)",
      details: [
        "Estudiante de 8vo ciclo con formación integral en desarrollo de software multiplataforma, ingeniería de requerimientos, aseguramiento de la calidad, arquitecturas de software y metodologías ágiles.",
        "Enfoque en Clean Architecture, Domain-Driven Design (DDD), principios SOLID y desarrollo centrado en el usuario."
      ]
    },
    {
      id: "edu-2",
      degree: "Scrum Master Certification (Specialization)",
      institution: "LearnQuest",
      location: "Online",
      period: "2025",
      details: [
        "Especialización en liderazgo de equipos ágiles, ceremonias Scrum, facilitación y mejora continua del flujo de trabajo."
      ]
    },
    {
      id: "edu-3",
      degree: "Machine Learning on Google Cloud (Specialization)",
      institution: "Google Cloud",
      location: "Online",
      period: "2025",
      details: [
        "Fundamentos e implementación de modelos de aprendizaje automático y pipelines en la nube de Google Cloud."
      ]
    },
    {
      id: "edu-4",
      degree: "Python for Everybody & Using Databases with Python",
      institution: "University of Michigan",
      location: "Online",
      period: "2025",
      details: [
        "Estructuras de datos en Python, persistencia en bases de datos relacionales y análisis de datos."
      ]
    },
    {
      id: "edu-5",
      degree: "Survey Data Collection and Analytics (Specialization)",
      institution: "University of Maryland & University of Michigan",
      location: "Online",
      period: "2026",
      details: [
        "Metodología estadística de recolección de datos, análisis analítico y toma de decisiones basada en métricas."
      ]
    },
    {
      id: "edu-6",
      degree: "Culture-Driven Team Building & Good with Words",
      institution: "University of Pennsylvania & University of Michigan",
      location: "Online",
      period: "2024 — 2025",
      details: [
        "Construcción de equipos de alto rendimiento y redacción técnica profesional para comunicación asertiva."
      ]
    },
    {
      id: "edu-7",
      degree: "Introduction to MongoDB",
      institution: "MongoDB University",
      location: "Online",
      period: "2024",
      details: [
        "Modelado de datos en documentos NoSQL, indexación y operaciones de consulta agregadas."
      ]
    }
  ]
};

import { PortfolioData, Language } from '../types';
import { initialPortfolioData } from '../data/portfolioData';

export interface TranslationStrings {
  nav: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
    resume: string;
    customize: string;
    availableStatus: string;
    switchTheme: string;
    language: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    role: string;
    bioLead: string;
    exploreProjects: string;
    viewResume: string;
    getInTouch: string;
    techDossier: string;
    availableBadge: string;
    location: string;
    stats: {
      academicsLabel: string;
      academicsValue: string;
      academicsSub: string;
      specializationsLabel: string;
      specializationsValue: string;
      specializationsSub: string;
      projectsLabel: string;
      projectsValue: string;
      projectsSub: string;
      languagesLabel: string;
      languagesValue: string;
      languagesSub: string;
    };
  };
  about: {
    sectionTag: string;
    title1: string;
    title2: string;
    subtitle: string;
    foundationalPillars: string;
    systemManifest: string;
    kernelStatus: string;
    testsPassing: string;
    keyCredentialsTitle: string;
    credentials: string[];
    pillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  projects: {
    sectionTag: string;
    title1: string;
    title2: string;
    subtitle: string;
    filterAll: string;
    filterFullstack: string;
    filterAi: string;
    filterCloud: string;
    filterFrontend: string;
    filterOpensource: string;
    searchPlaceholder: string;
    projectCount: string;
    featuredTag: string;
    viewDossier: string;
    liveDemo: string;
    sourceCode: string;
    noResults: string;
    resetFilters: string;
  };
  skills: {
    sectionTag: string;
    title1: string;
    title2: string;
    domainCompetencies: string;
    systemsArch: string;
    filterAll: string;
    searchPlaceholder: string;
    readiness: string;
    verified: string;
    exploringTag: string;
    exploringTitle: string;
    exploringDesc: string;
    levels: {
      expert: string;
      advanced: string;
      proficient: string;
      exploring: string;
    };
  };
  experience: {
    sectionTag: string;
    title1: string;
    title2: string;
    subtitle: string;
    operationalEngagements: string;
    activeBadge: string;
    keyDeliverables: string;
    academicFoundation: string;
    continuousMasteryTitle: string;
    continuousMasteryDesc: string;
  };
  profiles: {
    sectionTag: string;
    title1: string;
    title2: string;
    subtitle: string;
    verifiedIdentities: string;
    primaryContact: string;
    copyEmail: string;
    copied: string;
    directDispatch: string;
    secureDispatch: string;
    transmissionRecorded: string;
    messageLogged: string;
    senderIdentifier: string;
    senderPlaceholder: string;
    returnAddress: string;
    returnPlaceholder: string;
    dispatchSubject: string;
    subjects: {
      consulting: string;
      fullTime: string;
      openSource: string;
      speaking: string;
      general: string;
    };
    messageBody: string;
    messagePlaceholder: string;
    dispatchBtn: string;
    transmitting: string;
  };
  footer: {
    archiveTitle: string;
    roleDesc: string;
    resumeSpec: string;
    customize: string;
    top: string;
    rightsReserved: string;
  };
  projectModal: {
    dossierTag: string;
    specYear: string;
    launchDeployment: string;
    inspectSourceRepo: string;
    archOverview: string;
    archHighlights: string;
    capabilitySpec: string;
    engineeringChallenge: string;
    stackComponents: string;
    dismiss: string;
    closeAria: string;
  };
  resumeModal: {
    specCv: string;
    printPdf: string;
    exportJson: string;
    executiveSummary: string;
    operationalRecord: string;
    academicRecord: string;
    technicalCompetencies: string;
    stackLabel: string;
  };
  customizerModal: {
    title: string;
    subtitle: string;
    resetBtn: string;
    dismissBtn: string;
    tabs: {
      profile: string;
      social: string;
      projects: string;
    };
    profileForm: {
      fullName: string;
      pronouns: string;
      role: string;
      location: string;
      availability: string;
      email: string;
      avatarUrl: string;
      headline: string;
      bio1: string;
      saveBtn: string;
    };
    socialForm: {
      desc: string;
      handle: string;
      url: string;
      saveBtn: string;
    };
    projectsForm: {
      addTitle: string;
      projTitle: string;
      category: string;
      tagline: string;
      description: string;
      techTags: string;
      impactMetric: string;
      liveUrl: string;
      githubUrl: string;
      addBtn: string;
      currentProjects: string;
    };
  };
  toasts: {
    emailCopied: string;
    formSuccess: string;
    formError: string;
    projectAdded: string;
    projectUpdated: string;
    projectRemoved: string;
    profileSaved: string;
    socialSaved: string;
    resetDone: string;
    resumeDownloaded: string;
  };
}

export const translations: Record<Language, TranslationStrings> = {
  es: {
    nav: {
      about: "01 // BIO",
      projects: "02 // PROYECTOS",
      skills: "03 // STACK",
      experience: "04 // TRAYECTORIA",
      contact: "05 // CONTACTO",
      resume: "CV / RESUME",
      customize: "CONFIGURAR",
      availableStatus: "Disponible para oportunidades en Software Engineering",
      switchTheme: "Alternar modo claro / oscuro",
      language: "Idioma",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú"
    },
    hero: {
      eyebrow: "SPEC // QA & SOFTWARE ENGINEERING",
      title1: "CALIDAD, ARQUITECTURA",
      title2: "& DESARROLLO DE SOFTWARE",
      role: "QA Trainee en Mandü (Grupo Visma) · Estudiante de 8vo ciclo UPC (Décimo Superior)",
      bioLead: "Aseguramiento riguroso de calidad mediante pruebas manuales y automatización con Cypress & Selenium, respaldado por experiencia sólida en desarrollo frontend y backend con Clean Architecture y DDD.",
      exploreProjects: "EXPLORAR PROYECTOS",
      viewResume: "VER CURRÍCULUM",
      getInTouch: "CONTACTAR DIRECTO",
      techDossier: "DOSSIER TÉCNICO",
      availableBadge: "DISPONIBLE",
      location: "LIMA, PERÚ · UTC-5",
      stats: {
        academicsLabel: "8vo Ciclo · Décimo Superior",
        academicsValue: "Top 10%",
        academicsSub: "Ingeniería de Software UPC",
        specializationsLabel: "Especializaciones",
        specializationsValue: "8+",
        specializationsSub: "Scrum Master, GCP & Python",
        projectsLabel: "Proyectos Clave",
        projectsValue: "5+",
        projectsSub: "Grotix, Livria, VolunTrack, Raves, y más",
        languagesLabel: "Idiomas",
        languagesValue: "3",
        languagesSub: "Español, Inglés, Francés"
      }
    },
    about: {
      sectionTag: "01 // BIOGRAFÍA & FILOSOFÍA",
      title1: "Disciplina Arquitectónica",
      title2: "& Criterio Técnico",
      subtitle: "[EL MANIFIESTO & VISIÓN PROFESIONAL]",
      foundationalPillars: "PILARES FUNDAMENTALES //",
      systemManifest: "system_manifest.json",
      kernelStatus: "● QA KERNEL OK",
      testsPassing: "PRUEBAS APROBADAS: 100%",
      keyCredentialsTitle: "CREDENTIALS & DESTACADOS",
      credentials: [
        "QA Trainee en Mandü (Grupo Visma): diseño de casos de prueba y automatización con Cypress & Selenium.",
        "Estudiante de 8vo ciclo y Décimo Superior (Top 10%) en Ingeniería de Software — Universidad Peruana de Ciencias Aplicadas (UPC).",
        "Desarrolladora multiplataforma en Flutter, Jetpack Compose, Vue 3 y Angular bajo Clean Architecture & DDD.",
        "Certificaciones y especializaciones en Scrum Master (LearnQuest), Machine Learning on Google Cloud, Python y Gestión Ágil."
      ],
      pillars: [
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
      ]
    },
    projects: {
      sectionTag: "02 // ARTEFACTOS & SISTEMAS",
      title1: "Proyectos Clave",
      title2: "& Arquitecturas Desplegadas",
      subtitle: "[DOSSIER DE DESARROLLO & VERIFICACIÓN]",
      filterAll: "TODOS",
      filterFullstack: "FULL-STACK",
      filterAi: "AI & IOT",
      filterCloud: "CLOUD & QA",
      filterFrontend: "FRONTEND",
      filterOpensource: "OPEN SOURCE",
      searchPlaceholder: "FILTRAR POR TECNOLOGÍA O NOMBRE...",
      projectCount: "TOTAL ARTEFACTOS",
      featuredTag: "DESTACADO",
      viewDossier: "VER DETALLES",
      liveDemo: "VER EN VIVO",
      sourceCode: "CÓDIGO FUENTE",
      noResults: "No se encontraron proyectos con los filtros seleccionados.",
      resetFilters: "REINICIAR FILTROS"
    },
    skills: {
      sectionTag: "03 // STACK TÉCNICO & DISCIPLINAS",
      title1: "Competencias de Dominio",
      title2: "& Arquitectura de Sistemas",
      domainCompetencies: "Competencias de Dominio",
      systemsArch: "& Arquitectura de Sistemas",
      filterAll: "TODOS",
      searchPlaceholder: "BUSCAR ESPECIFICACIÓN //",
      readiness: "PREPARACIÓN PARA PRODUCCIÓN",
      verified: "VERIFICADO 100%",
      exploringTag: "INICIATIVAS DE I+D & EXPLORACIÓN //",
      exploringTitle: "Blockchain, LLMs & Sistemas RAG",
      exploringDesc: "Investigación activa en arquitecturas descentralizadas con Blockchain, integración de modelos de lenguaje masivo (LLMs) y pipelines de generación aumentada por recuperación (Sistemas RAG).",
      levels: {
        expert: "Experto",
        advanced: "Avanzado",
        proficient: "Competente",
        exploring: "Explorando"
      }
    },
    experience: {
      sectionTag: "04 // CRONOLOGÍA & REGISTRO",
      title1: "Trayectoria Profesional",
      title2: "& Liderazgo Técnico",
      subtitle: "[HISTORIAL DE EXPERIENCIA & EDUCACIÓN]",
      operationalEngagements: "EXPERIENCIA OPERATIVA //",
      activeBadge: "ACTIVO",
      keyDeliverables: "ENTREGABLES CLAVE & LOGROS",
      academicFoundation: "FORMACIÓN ACADÉMICA //",
      continuousMasteryTitle: "APRENDIZAJE CONTINUO //",
      continuousMasteryDesc: "Revisión activa de publicaciones sobre testing automatizado, arquitecturas de software, participación en conferencias y aportes a comunidades de ingeniería de software."
    },
    profiles: {
      sectionTag: "05 // CANALES & COMUNICACIONES",
      title1: "Canales de Red",
      title2: "& Contacto Directo",
      subtitle: "[TERMINAL DE COMUNICACIÓN & ALCANCE]",
      verifiedIdentities: "IDENTIDADES VERIFICADAS //",
      primaryContact: "CONTACTO PRINCIPAL",
      copyEmail: "COPIAR CORREO",
      copied: "COPIADO",
      directDispatch: "ENVÍO DIRECTO //",
      secureDispatch: "COMUNICACIÓN SEGURA",
      transmissionRecorded: "Transmisión Registrada",
      messageLogged: "Mensaje registrado en bandeja de entrada. Tiempo estimado de respuesta: 24–48 horas.",
      senderIdentifier: "Nombre / Remitente *",
      senderPlaceholder: "TU NOMBRE O EMPRESA",
      returnAddress: "Correo Electrónico *",
      returnPlaceholder: "CORREO@DOMINIO.COM",
      dispatchSubject: "Asunto de la Consulta",
      subjects: {
        consulting: "Oportunidad de Software Engineering / QA",
        fullTime: "Posición Full-Time / Trainee / Junior",
        openSource: "Colaboración en Proyectos / Open Source",
        speaking: "Mentoría Técnica / Consultas",
        general: "Consulta General"
      },
      messageBody: "Cuerpo del Mensaje *",
      messagePlaceholder: "ESCRIBE TU MENSAJE AQUÍ...",
      dispatchBtn: "ENVIAR MENSAJE",
      transmitting: "TRANSMITIENDO..."
    },
    footer: {
      archiveTitle: "ARCHIVO",
      roleDesc: "Ingeniería de software con atención minuciosa al detalle, rigor de calidad y diseño sistemático.",
      resumeSpec: "CURRÍCULUM",
      customize: "PERSONALIZAR",
      top: "SUBIR",
      rightsReserved: "TODOS LOS DERECHOS RESERVADOS."
    },
    projectModal: {
      dossierTag: "DOSSIER DEL PROYECTO //",
      specYear: "AÑO SPEC //",
      launchDeployment: "LANZAR DESPLIEGUE",
      inspectSourceRepo: "INSPECCIONAR REPOSITORIO",
      archOverview: "RESUMEN ARQUITECTÓNICO & PROPÓSITO //",
      archHighlights: "DESTACADOS ARQUITECTÓNICOS",
      capabilitySpec: "ESPECIFICACIÓN DE CAPACIDADES",
      engineeringChallenge: "DESAFÍO TÉCNICO & RESOLUCIÓN",
      stackComponents: "COMPONENTES DEL STACK",
      dismiss: "CERRAR DOSSIER",
      closeAria: "Cerrar ventana modal"
    },
    resumeModal: {
      specCv: "ESPECIFICACIÓN // CV",
      printPdf: "IMPRIMIR / PDF",
      exportJson: "EXPORTAR JSON",
      executiveSummary: "01 // RESUMEN EJECUTIVO",
      operationalRecord: "02 // REGISTRO OPERATIVO",
      academicRecord: "03 // REGISTRO ACADÉMICO",
      technicalCompetencies: "04 // COMPETENCIAS TÉCNICAS",
      stackLabel: "STACK:"
    },
    customizerModal: {
      title: "PERSONALIZADOR DE PORTAFOLIO //",
      subtitle: "Personaliza nombre, biografía, enlaces y proyectos",
      resetBtn: "REINICIAR",
      dismissBtn: "CERRAR",
      tabs: {
        profile: "Perfil & Bio",
        social: "Canales Sociales",
        projects: "Proyectos"
      },
      profileForm: {
        fullName: "Nombre Completo",
        pronouns: "Pronombres",
        role: "Rol Profesional / Título",
        location: "Ubicación",
        availability: "Estado de Disponibilidad",
        email: "Correo Electrónico",
        avatarUrl: "URL de Foto de Perfil",
        headline: "Titular / Resumen de Impacto",
        bio1: "Biografía (Párrafo 1)",
        saveBtn: "GUARDAR PERFIL"
      },
      socialForm: {
        desc: "Actualiza tus perfiles de GitHub, LinkedIn y enlaces de contacto.",
        handle: "Usuario / Identificador",
        url: "URL de Destino",
        saveBtn: "GUARDAR ENLACES"
      },
      projectsForm: {
        addTitle: "AGREGAR PROYECTO AL DOSSIER",
        projTitle: "Título del Proyecto *",
        category: "Categoría",
        tagline: "Resumen Corto *",
        description: "Descripción *",
        techTags: "Etiquetas Técnicas (separadas por coma)",
        impactMetric: "Métrica de Impacto",
        liveUrl: "URL del Despliegue en Vivo",
        githubUrl: "URL del Repositorio GitHub",
        addBtn: "AGREGAR AL DOSSIER",
        currentProjects: "ARTEFACTOS ACTUALES EN EL DOSSIER"
      }
    },
    toasts: {
      emailCopied: "Dirección de correo copiada al portapapeles",
      formSuccess: "¡Mensaje enviado con éxito! Gracias por contactarme.",
      formError: "Por favor completa todos los campos requeridos.",
      projectAdded: "Proyecto agregado al portafolio",
      projectUpdated: "Proyecto actualizado",
      projectRemoved: "Proyecto eliminado",
      profileSaved: "Información de perfil actualizada",
      socialSaved: "Canales de contacto actualizados",
      resetDone: "Portafolio restablecido a valores iniciales",
      resumeDownloaded: "Datos del currículum exportados en formato JSON"
    }
  },

  en: {
    nav: {
      about: "01 // BIO",
      projects: "02 // PROJECTS",
      skills: "03 // STACK",
      experience: "04 // TIMELINE",
      contact: "05 // CONTACT",
      resume: "RESUME / CV",
      customize: "CUSTOMIZE",
      availableStatus: "Available for Software Engineering opportunities",
      switchTheme: "Toggle light / dark mode",
      language: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    hero: {
      eyebrow: "SPEC // QA & SOFTWARE ENGINEERING",
      title1: "QUALITY, ARCHITECTURE",
      title2: "& SOFTWARE DEVELOPMENT",
      role: "QA Trainee at Mandü (Visma Group) · 8th Semester Software Engineering Student (Top 10% at UPC)",
      bioLead: "Rigorous quality assurance combining manual testing & automation with Cypress and Selenium, backed by prior experience as a frontend and backend developer applying Clean Architecture, SOLID, and DDD.",
      exploreProjects: "EXPLORE PROJECTS",
      viewResume: "VIEW RESUME",
      getInTouch: "DIRECT INQUIRY",
      techDossier: "TECHNICAL DOSSIER",
      availableBadge: "AVAILABLE",
      location: "LIMA, PERU · UTC-5",
      stats: {
        academicsLabel: "8th Semester · Top 10%",
        academicsValue: "Top 10%",
        academicsSub: "UPC Software Engineering",
        specializationsLabel: "Specializations",
        specializationsValue: "8+",
        specializationsSub: "Scrum Master, GCP & Python",
        projectsLabel: "Key Projects",
        projectsValue: "5+",
        projectsSub: "Grotix, Livria, VolunTrack, Raves, & more",
        languagesLabel: "Languages",
        languagesValue: "3",
        languagesSub: "Spanish, English, French"
      }
    },
    about: {
      sectionTag: "01 // BIOGRAPHY & ETHOS",
      title1: "Architectural Discipline",
      title2: "& Technical Craft",
      subtitle: "[THE MANIFESTO & PROFESSIONAL PHILOSOPHY]",
      foundationalPillars: "FOUNDATIONAL PILLARS //",
      systemManifest: "system_manifest.json",
      kernelStatus: "● QA KERNEL OK",
      testsPassing: "TESTS PASSING: 100%",
      keyCredentialsTitle: "KEY CREDENTIALS & HIGHLIGHTS",
      credentials: [
        "QA Trainee at Mandü (Visma Group): manual test case design, execution, and test automation with Cypress & Selenium.",
        "8th-semester Software Engineering student ranked in the Top 10% (Décimo Superior) at Universidad Peruana de Ciencias Aplicadas (UPC).",
        "Multiplatform developer with Flutter, Jetpack Compose, Vue 3, and Angular adhering to Clean Architecture & DDD.",
        "Certifications in Scrum Master (LearnQuest), Machine Learning on Google Cloud, Python, and Agile Project Management."
      ],
      pillars: [
        {
          title: "QA Rigor & Quality Assurance",
          description: "Designing and executing comprehensive test cases, regression suites, and automated testing with Cypress and Selenium to ensure defect-free software.",
          icon: "ShieldCheck"
        },
        {
          title: "Multiplatform Engineering",
          description: "Building responsive web and mobile interfaces using Flutter, Jetpack Compose, Vue 3, and Angular backed by Clean Architecture.",
          icon: "Sparkles"
        },
        {
          title: "Hybrid Dev + QA Perspective",
          description: "Deep end-to-end understanding of the entire Software Development Life Cycle (SDLC) to proactively prevent anomalies and guarantee reliability.",
          icon: "Cpu"
        },
        {
          title: "Agile Leadership & Communication",
          description: "Bridging engineering and business requirements effectively within cross-functional teams under Scrum methodologies.",
          icon: "Users"
        }
      ]
    },
    projects: {
      sectionTag: "02 // ARTIFACTS & SYSTEMS",
      title1: "Key Projects",
      title2: "& Deployed Architectures",
      subtitle: "[DEVELOPMENT & VERIFICATION DOSSIER]",
      filterAll: "ALL",
      filterFullstack: "FULL-STACK",
      filterAi: "AI & IOT",
      filterCloud: "CLOUD & QA",
      filterFrontend: "FRONTEND",
      filterOpensource: "OPEN SOURCE",
      searchPlaceholder: "FILTER BY TECH OR NAME...",
      projectCount: "TOTAL ARTIFACTS",
      featuredTag: "FEATURED",
      viewDossier: "VIEW DOSSIER",
      liveDemo: "LIVE DEMO",
      sourceCode: "SOURCE CODE",
      noResults: "No projects match the selected filters.",
      resetFilters: "RESET FILTERS"
    },
    skills: {
      sectionTag: "03 // TECHNICAL STACK & DISCIPLINES",
      title1: "Domain Competencies",
      title2: "& Systems Architecture",
      domainCompetencies: "Domain Competencies",
      systemsArch: "& Systems Architecture",
      filterAll: "ALL",
      searchPlaceholder: "FILTER SPECS //",
      readiness: "PRODUCTION READINESS",
      verified: "VERIFIED 100%",
      exploringTag: "R&D INITIATIVES & EXPLORATION //",
      exploringTitle: "Blockchain, LLMs & RAG Systems",
      exploringDesc: "Active research in decentralized blockchain architectures, Large Language Model (LLM) integrations, and Retrieval-Augmented Generation (RAG) pipelines.",
      levels: {
        expert: "Expert",
        advanced: "Advanced",
        proficient: "Proficient",
        exploring: "Exploring"
      }
    },
    experience: {
      sectionTag: "04 // CHRONOLOGY & RECORD",
      title1: "Professional Trajectory",
      title2: "& Technical Leadership",
      subtitle: "[EXPERIENCE & EDUCATION TIMELINE]",
      operationalEngagements: "OPERATIONAL ENGAGEMENTS //",
      activeBadge: "ACTIVE",
      keyDeliverables: "KEY DELIVERABLES & BENCHMARKS",
      academicFoundation: "ACADEMIC FOUNDATION //",
      continuousMasteryTitle: "CONTINUOUS MASTERY //",
      continuousMasteryDesc: "Active review of research on automated testing, software architecture, ACM conference participation, and engineering community contributions."
    },
    profiles: {
      sectionTag: "05 // DISPATCH & COMMUNICATIONS",
      title1: "Network Channels",
      title2: "& Direct Inquiries",
      subtitle: "[TRANSMISSION TERMINAL & DIRECT REACH]",
      verifiedIdentities: "VERIFIED IDENTITIES //",
      primaryContact: "PRIMARY CONTACT",
      copyEmail: "COPY EMAIL",
      copied: "COPIED",
      directDispatch: "DIRECT DISPATCH //",
      secureDispatch: "SECURE DISPATCH",
      transmissionRecorded: "Transmission Recorded",
      messageLogged: "Message logged to inbox. Standard turnaround window: 24–48 hours.",
      senderIdentifier: "Sender Identifier *",
      senderPlaceholder: "NAME / ORG",
      returnAddress: "Return Address *",
      returnPlaceholder: "EMAIL@DOMAIN.COM",
      dispatchSubject: "Dispatch Subject",
      subjects: {
        consulting: "Software Engineering / QA Opportunity",
        fullTime: "Full-Time / Junior / Trainee Role",
        openSource: "Open Source Collaboration",
        speaking: "Technical Mentorship / Inquiry",
        general: "General Inquiry"
      },
      messageBody: "Message Body *",
      messagePlaceholder: "ENTER COMMUNICATION TEXT...",
      dispatchBtn: "DISPATCH MESSAGE",
      transmitting: "TRANSMITTING..."
    },
    footer: {
      archiveTitle: "ARCHIVE",
      roleDesc: "Software engineering built with deliberate typographic rhythm, hairline grids, and deterministic systems design.",
      resumeSpec: "RESUME SPEC",
      customize: "CUSTOMIZE",
      top: "TOP",
      rightsReserved: "ALL RIGHTS RESERVED."
    },
    projectModal: {
      dossierTag: "PROJECT DOSSIER //",
      specYear: "SPEC YEAR //",
      launchDeployment: "LAUNCH DEPLOYMENT",
      inspectSourceRepo: "INSPECT SOURCE REPO",
      archOverview: "ARCHITECTURAL OVERVIEW & PURPOSE //",
      archHighlights: "ARCHITECTURE HIGHLIGHTS",
      capabilitySpec: "CAPABILITY SPECIFICATION",
      engineeringChallenge: "ENGINEERING CHALLENGE & RESOLUTION",
      stackComponents: "STACK COMPONENTS",
      dismiss: "DISMISS DOSSIER",
      closeAria: "Close modal"
    },
    resumeModal: {
      specCv: "SPECIFICATION // CV",
      printPdf: "PRINT / PDF",
      exportJson: "EXPORT JSON",
      executiveSummary: "01 // EXECUTIVE SUMMARY",
      operationalRecord: "02 // OPERATIONAL RECORD",
      academicRecord: "03 // ACADEMIC RECORD",
      technicalCompetencies: "04 // TECHNICAL COMPETENCIES",
      stackLabel: "STACK:"
    },
    customizerModal: {
      title: "PORTFOLIO PERSONALIZER //",
      subtitle: "Customize your name, links, bio, and projects",
      resetBtn: "RESET",
      dismissBtn: "DISMISS",
      tabs: {
        profile: "Profile & Bio",
        social: "Social Channels",
        projects: "Projects"
      },
      profileForm: {
        fullName: "Your Full Name",
        pronouns: "Pronouns (e.g. she/her)",
        role: "Professional Role / Title",
        location: "Location",
        availability: "Availability Status",
        email: "Contact Email Address",
        avatarUrl: "Avatar Image URL",
        headline: "Elevator Pitch / Headline",
        bio1: "Biography (Paragraph 1)",
        saveBtn: "SAVE PROFILE SPECS"
      },
      socialForm: {
        desc: "Update URLs for your GitHub, LinkedIn, and social profiles.",
        handle: "Handle / Username",
        url: "Destination URL",
        saveBtn: "SAVE SOCIAL CHANNELS"
      },
      projectsForm: {
        addTitle: "ADD DOSSIER ITEM",
        projTitle: "Project Title *",
        category: "Category",
        tagline: "Tagline / Short Summary *",
        description: "Description *",
        techTags: "Tech Tags (comma-separated)",
        impactMetric: "Impact Metric Badge",
        liveUrl: "Live Demo URL",
        githubUrl: "GitHub Source Code URL",
        addBtn: "ADD TO DOSSIER",
        currentProjects: "CURRENT DOSSIER ITEMS"
      }
    },
    toasts: {
      emailCopied: "Email address copied to clipboard",
      formSuccess: "Message sent! Thank you for reaching out.",
      formError: "Please fill out all required fields.",
      projectAdded: "Project added to portfolio",
      projectUpdated: "Project updated",
      projectRemoved: "Project removed",
      profileSaved: "Profile specifications saved",
      socialSaved: "Social channels saved",
      resetDone: "Portfolio reset to default template data",
      resumeDownloaded: "Resume exported as JSON"
    }
  },

  fr: {
    nav: {
      about: "01 // BIO",
      projects: "02 // PROJETS",
      skills: "03 // STACK",
      experience: "04 // PARCOURS",
      contact: "05 // CONTACT",
      resume: "CV / RÉSUMÉ",
      customize: "PERSONNALISER",
      availableStatus: "Disponible pour des opportunités en génie logiciel",
      switchTheme: "Basculer mode clair / sombre",
      language: "Langue",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu"
    },
    hero: {
      eyebrow: "SPÉCIFICATION // QA & GÉNIE LOGICIEL",
      title1: "QUALITÉ, ARCHITECTURE",
      title2: "& DÉVELOPPEMENT LOGICIEL",
      role: "QA Trainee chez Mandü (Groupe Visma) · Étudiante en 8e cycle UPC (Top 10% Décimo Superior)",
      bioLead: "Assurance qualité rigoureuse alliant tests manuels et automatisation avec Cypress & Selenium, étayée par une solide expérience en développement frontend et backend sous Clean Architecture et DDD.",
      exploreProjects: "EXPLORER LES PROJETS",
      viewResume: "VOIR LE CV",
      getInTouch: "CONTACT DIRECT",
      techDossier: "DOSSIER TECHNIQUE",
      availableBadge: "DISPONIBLE",
      location: "LIMA, PÉROU · UTC-5",
      stats: {
        academicsLabel: "8e Semestre · Top 10%",
        academicsValue: "Top 10%",
        academicsSub: "Génie Logiciel UPC",
        specializationsLabel: "Spécialisations",
        specializationsValue: "8+",
        specializationsSub: "Scrum Master, GCP & Python",
        projectsLabel: "Projets Clés",
        projectsValue: "5+",
        projectsSub: "Grotix, Livria, VolunTrack, Raves, etc.",
        languagesLabel: "Langues",
        languagesValue: "3",
        languagesSub: "Espagnol, Anglais, Français"
      }
    },
    about: {
      sectionTag: "01 // BIOGRAPHIE & ÉTHOS",
      title1: "Discipline Architecturale",
      title2: "& Rigueur Technique",
      subtitle: "[LE MANIFESTE & LA PHILOSOPHIE PROFESSIONNELLE]",
      foundationalPillars: "PILIERS FONDAMENTAUX //",
      systemManifest: "system_manifest.json",
      kernelStatus: "● QA KERNEL OK",
      testsPassing: "TESTS VALIDÉS : 100%",
      keyCredentialsTitle: "QUALIFICATIONS & POINTS FORTS",
      credentials: [
        "QA Trainee chez Mandü (Groupe Visma) : conception de cas de test et automatisation avec Cypress & Selenium.",
        "Étudiante en 8e cycle classée dans le Top 10% (Décimo Superior) en Génie Logiciel — Universidad Peruana de Ciencias Aplicadas (UPC).",
        "Développeuse multiplateforme en Flutter, Jetpack Compose, Vue 3 et Angular sous Clean Architecture & DDD.",
        "Certifications et spécialisations en Scrum Master (LearnQuest), Machine Learning sur Google Cloud, Python et gestion agile."
      ],
      pillars: [
        {
          title: "Assurance Qualité & Rigueur QA",
          description: "Conception et exécution de cas de tests manuels et automatisés avec Cypress et Selenium pour garantir un logiciel sans défauts ni régressions.",
          icon: "ShieldCheck"
        },
        {
          title: "Développement Multiplateforme",
          description: "Construction d'interfaces mobiles et web avec Flutter, Jetpack Compose, Vue 3 et Angular selon les principes de Clean Architecture.",
          icon: "Sparkles"
        },
        {
          title: "Vision Hybride Dev + QA",
          description: "Compréhension approfondie de l'ensemble du cycle de développement logiciel (SDLC) afin d'anticiper les anomalies et garantir la fiabilité.",
          icon: "Cpu"
        },
        {
          title: "Communication & Méthodes Agiles",
          description: "Facilitation de la collaboration entre équipes techniques et métier dans le cadre de méthodologies agiles Scrum.",
          icon: "Users"
        }
      ]
    },
    projects: {
      sectionTag: "02 // ARTEFACTS & SYSTÈMES",
      title1: "Projets Clés",
      title2: "& Architectures Déployées",
      subtitle: "[DOSSIER DE DÉVELOPPEMENT & VÉRIFICATION]",
      filterAll: "TOUS",
      filterFullstack: "FULL-STACK",
      filterAi: "IA & IOT",
      filterCloud: "CLOUD & QA",
      filterFrontend: "FRONTEND",
      filterOpensource: "OPEN SOURCE",
      searchPlaceholder: "FILTRER PAR TECH OU NOM...",
      projectCount: "TOTAL ARTEFACTS",
      featuredTag: "EN VEDETTE",
      viewDossier: "VOIR LE DOSSIER",
      liveDemo: "DÉMO EN LIGNE",
      sourceCode: "CODE SOURCE",
      noResults: "Aucun projet ne correspond aux filtres sélectionnés.",
      resetFilters: "RÉINITIALISER LES FILTRES"
    },
    skills: {
      sectionTag: "03 // STACK TECHNIQUE & DISCIPLINES",
      title1: "Compétences de Domaine",
      title2: "& Architecture Système",
      domainCompetencies: "Compétences de Domaine",
      systemsArch: "& Architecture Système",
      filterAll: "TOUS",
      searchPlaceholder: "RECHERCHER SPÉCIFICATION //",
      readiness: "PRÊT POUR LA PRODUCTION",
      verified: "VÉRIFIÉ 100%",
      exploringTag: "INITIATIVES R&D & EXPLORATION //",
      exploringTitle: "Blockchain, LLMs & Systèmes RAG",
      exploringDesc: "Recherche active sur les architectures décentralisées avec Blockchain, l'intégration de modèles de langage (LLMs) et les pipelines de génération augmentée par récupération (Systèmes RAG).",
      levels: {
        expert: "Expert",
        advanced: "Avancé",
        proficient: "Compétent",
        exploring: "En exploration"
      }
    },
    experience: {
      sectionTag: "04 // CHRONOLOGIE & HISTORIQUE",
      title1: "Parcours Professionnel",
      title2: "& Leadership Technique",
      subtitle: "[HISTORIQUE D'EXPÉRIENCE ET D'ÉDUCATION]",
      operationalEngagements: "EXPÉRIENCE OPÉRATIONNELLE //",
      activeBadge: "ACTIF",
      keyDeliverables: "LIVRABLES CLÉS & OBJECTIFS",
      academicFoundation: "FONDATION ACADÉMIQUE //",
      continuousMasteryTitle: "APPRENTISSAGE CONTINU //",
      continuousMasteryDesc: "Revue active de publications sur les tests automatisés, l'architecture logicielle, participation aux conférences et contributions communautaires."
    },
    profiles: {
      sectionTag: "05 // COMMUNICATIONS & RÉSEAU",
      title1: "Canaux Réseau",
      title2: "& Prise de Contact Directe",
      subtitle: "[TERMINAL DE COMMUNICATION & CONTACT]",
      verifiedIdentities: "IDENTITÉS VÉRIFIÉES //",
      primaryContact: "CONTACT PRINCIPAL",
      copyEmail: "COPIER L'E-MAIL",
      copied: "COPIÉ",
      directDispatch: "ENVOI DIRECT //",
      secureDispatch: "COMMUNICATION SÉCURISÉE",
      transmissionRecorded: "Transmission Enregistrée",
      messageLogged: "Message enregistré dans la boîte de réception. Délai moyen de réponse : 24 à 48 heures.",
      senderIdentifier: "Identifiant / Expéditeur *",
      senderPlaceholder: "VOTRE NOM OU ENTREPRISE",
      returnAddress: "Adresse E-mail *",
      returnPlaceholder: "EMAIL@DOMAINE.COM",
      dispatchSubject: "Objet de la Demande",
      subjects: {
        consulting: "Opportunité en Génie Logiciel / QA",
        fullTime: "Poste Temps Plein / Trainee / Junior",
        openSource: "Collaboration Open Source",
        speaking: "Mentorat Technique / Question",
        general: "Demande Générale"
      },
      messageBody: "Corps du Message *",
      messagePlaceholder: "SAISISSEZ VOTRE MESSAGE ICI...",
      dispatchBtn: "ENVOYER LE MESSAGE",
      transmitting: "TRANSMISSION..."
    },
    footer: {
      archiveTitle: "ARCHIVES",
      roleDesc: "Génie logiciel conçu avec un rythme typographique soigné, une rigueur de qualité et une architecture robuste.",
      resumeSpec: "SPÉCIFICATION CV",
      customize: "PERSONNALISER",
      top: "HAUT",
      rightsReserved: "TOUS DROITS RÉSERVÉS."
    },
    projectModal: {
      dossierTag: "DOSSIER DU PROJET //",
      specYear: "ANNÉE SPÉC //",
      launchDeployment: "LANCER LE DÉPLOIEMENT",
      inspectSourceRepo: "INSPECTER LE CODE SOURCE",
      archOverview: "APERÇU ARCHITECTURAL & OBJECTIF //",
      archHighlights: "POINTS FORTS ARCHITECTURAUX",
      capabilitySpec: "SPÉCIFICATION DES CAPACITÉS",
      engineeringChallenge: "DÉFI TECHNIQUE & RÉSOLUTION",
      stackComponents: "COMPOSANTS DU STACK",
      dismiss: "FERMER LE DOSSIER",
      closeAria: "Fermer la fenêtre modale"
    },
    resumeModal: {
      specCv: "SPÉCIFICATION // CV",
      printPdf: "IMPRIMER / PDF",
      exportJson: "EXPORTER JSON",
      executiveSummary: "01 // RÉSUMÉ EXÉCUTIF",
      operationalRecord: "02 // HISTORIQUE OPÉRATIONNEL",
      academicRecord: "03 // HISTORIQUE ACADÉMIQUE",
      technicalCompetencies: "04 // COMPÉTENCES TECHNIQUES",
      stackLabel: "STACK :"
    },
    customizerModal: {
      title: "PERSONNALISATEUR DE PORTFOLIO //",
      subtitle: "Personnalisez votre nom, vos liens, votre bio et vos projets",
      resetBtn: "RÉINITIALISER",
      dismissBtn: "FERMER",
      tabs: {
        profile: "Profil & Bio",
        social: "Réseaux Sociaux",
        projects: "Projets"
      },
      profileForm: {
        fullName: "Nom Complet",
        pronouns: "Pronoms (ex. elle)",
        role: "Rôle Professionnel / Titre",
        location: "Localisation",
        availability: "Statut de Disponibilité",
        email: "Adresse E-mail de Contact",
        avatarUrl: "URL de la Photo de Profil",
        headline: "Accroche / Résumé d'Impact",
        bio1: "Biographie (Paragraphe 1)",
        saveBtn: "ENREGISTRER LE PROFIL"
      },
      socialForm: {
        desc: "Mettez à jour les liens vers vos profils GitHub, LinkedIn et canaux de communication.",
        handle: "Nom d'utilisateur / Identifiant",
        url: "URL de Destination",
        saveBtn: "ENREGISTRER LES RÉSEAUX"
      },
      projectsForm: {
        addTitle: "AJOUTER UN ÉLÉMENT AU DOSSIER",
        projTitle: "Titre du Projet *",
        category: "Catégorie",
        tagline: "Résumé Court *",
        description: "Description *",
        techTags: "Tags Techniques (séparés par des virgules)",
        impactMetric: "Badge de Métrique d'Impact",
        liveUrl: "URL de la Démo en Ligne",
        githubUrl: "URL du Dépôt GitHub",
        addBtn: "AJOUTER AU DOSSIER",
        currentProjects: "ÉLÉMENTS ACTUELS DANS LE DOSSIER"
      }
    },
    toasts: {
      emailCopied: "Adresse e-mail copiée dans le presse-papiers",
      formSuccess: "Message envoyé ! Merci pour votre prise de contact.",
      formError: "Veuillez remplir tous les champs obligatoires.",
      projectAdded: "Projet ajouté au portfolio",
      projectUpdated: "Projet mis à jour",
      projectRemoved: "Projet supprimé",
      profileSaved: "Spécifications du profil enregistrées",
      socialSaved: "Canaux de communication enregistrés",
      resetDone: "Portfolio réinitialisé aux valeurs par défaut",
      resumeDownloaded: "CV exporté au format JSON"
    }
  }
};

// Full translated data sets for each language
export const localizedPortfolioData: Record<Language, PortfolioData> = {
  es: initialPortfolioData,

  en: {
    profile: {
      name: "Ainhoa Castillo Garay",
      pronouns: "she/her",
      role: "QA Trainee & Software Engineering Student",
      headline: "QA Trainee at Mandü (Visma Group) and 8th-semester Software Engineering student (Top 10% at UPC). Specializing in quality assurance, test automation, and multiplatform software engineering.",
      location: "Lima, Peru",
      availability: "Available for Software Engineering opportunities",
      email: "ainhoa.c.garay@gmail.com",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      bioParagraphs: [
        "8th-semester Software Engineering student at Universidad Peruana de Ciencias Aplicadas (UPC), ranked in the Top 10% (Décimo Superior), currently working as a QA Trainee at Mandü (a Visma group company).",
        "In my day-to-day work, I combine quality assurance—designing and executing manual and automated test cases with Cypress and Selenium, and managing defects in Jira—with previous experience as a developer. I worked with Vue.js, Angular, and Flutter on frontend, and with C#, Java, and Node.js on backend, always applying SOLID principles, DDD, and agile methodologies like Scrum.",
        "This hybrid profile between development and quality enables me to understand the complete software development lifecycle and contribute a critical, analytical, detail-oriented perspective across every stage of testing.",
        "Parallel to my studies, I worked as a Specialty Barista, where I honed technical precision, analytical reasoning under pressure, and effective communication with diverse teams. These are skills I directly apply today to software testing and collaborative problem-solving in multidisciplinary environments."
      ],
      coreValues: [
        {
          title: "QA Rigor & Quality Assurance",
          description: "Designing and executing manual and automated test suites with Cypress and Selenium to guarantee defect-free software without regressions.",
          icon: "ShieldCheck"
        },
        {
          title: "Multiplatform Engineering",
          description: "Building responsive web and mobile interfaces using Flutter, Jetpack Compose, Vue, and Angular adhering to Clean Architecture.",
          icon: "Sparkles"
        },
        {
          title: "Hybrid Dev + QA Perspective",
          description: "Comprehensive understanding of the full Software Development Life Cycle (SDLC) to anticipate edge cases and maximize system reliability.",
          icon: "Cpu"
        },
        {
          title: "Agile Leadership & Communication",
          description: "Facilitating effective collaboration between engineering and business stakeholders under Scrum agile frameworks.",
          icon: "Users"
        }
      ],
      stats: [
        {
          label: "8th Semester · Top 10%",
          value: "Top 10%",
          sublabel: "UPC Software Engineering"
        },
        {
          label: "Specializations",
          value: "8+",
          sublabel: "Scrum Master, GCP & Python"
        },
        {
          label: "Key Projects",
          value: "5+",
          sublabel: "Grotix, Livria, VolunTrack, Raves, & more"
        },
        {
          label: "Languages",
          value: "3",
          sublabel: "Spanish, English, French"
        }
      ],
      socialLinks: initialPortfolioData.profile.socialLinks
    },
    projects: [
      {
        id: "project-celevigrotix-fullstack",
        title: "Grotix — Agrotech Platform & IoT Ecosystem",
        tagline: "Intelligent ecosystem for crop monitoring and automated irrigation with IoT telemetry, sensors, and distributed architecture.",
        description: "Comprehensive Agrotech platform for real-time greenhouse and crop monitoring, microclimate management, and resource optimization through IoT analytics.",
        longDescription: "Grotix was engineered as an agricultural technology solution for automated crop monitoring and control. Built with a clean and modular architecture, it ingests real-time sensor telemetry (soil moisture, temperature, pH, and light radiation), coordinates smart irrigation actuators, and exposes secure REST APIs for analytical dashboards and multiplatform clients.",
        category: "fullstack",
        tags: ["Agrotech & IoT", "Clean Architecture", "Telemetry & Sensors", "Full-Stack", "REST APIs", "Automation", "Quality Assurance", "Git & CI/CD"],
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80",
        featured: true,
        year: "2025",
        impactMetric: "Real-time crop telemetry and modular distributed architecture",
        liveUrl: "https://celevigrotix.github.io/Grotix_LandingPage/",
        githubUrl: "https://github.com/CeleviGrotix",
        architectureHighlights: [
          "Real-time ingestion and processing of IoT sensor telemetry (soil moisture, temperature, pH, and radiation)",
          "Modular backend architecture built under Clean Architecture principles with strict layer decoupling",
          "Automated irrigation actuator control and predictive alerting for microclimate anomalies",
          "Exhaustive test suite validation ensuring high availability and system resilience"
        ],
        keyFeatures: [
          "Agricultural analytics dashboard with real-time environmental variable graphs",
          "Configurable early warning system to prevent hydric stress and pest outbreaks",
          "Automated and remote control of irrigation valves and nutrient dosage",
          "Multi-zone management for agricultural plots and automated greenhouses"
        ],
        challengesSolved: "Designed a fault-tolerant data model for intermittent connectivity in remote fields and standardized API contracts to sync sensor hardware with analytical dashboards."
      },
      {
        id: "project-celevigrotix-landing",
        title: "Grotix Landing Page — Agrotech Portal",
        tagline: "Official Grotix landing page showcasing the Agrotech ecosystem, IoT sensor hardware, and grower solutions.",
        description: "High-converting, responsive web portal introducing Grotix's value proposition: smart crop monitoring, IoT hardware, and custom plans for producers.",
        longDescription: "Frontend engineering for the official Grotix portal (https://celevigrotix.github.io/Grotix_LandingPage/), implementing a modern 'Agro-Tech' design system, intuitive navigation, interactive feature showcases, and comprehensive mobile-first performance optimizations.",
        category: "frontend",
        tags: ["Landing Page", "Agrotech UI", "UI/UX Design", "Responsive Web", "TypeScript", "Tailwind CSS", "Mobile-First"],
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80",
        featured: false,
        year: "2025",
        impactMetric: "High-performance Agrotech portal with responsive interactive design",
        liveUrl: "https://celevigrotix.github.io/Grotix_LandingPage/",
        githubUrl: "https://github.com/CeleviGrotix/Grotix_LandingPage",
        architectureHighlights: [
          "Semantic HTML5 structure optimized for conversion, web accessibility, and search ranking",
          "Modular components styled with Tailwind CSS and fluid micro-interactions",
          "Interactive showcase of hardware modules, telemetry sensors, and live dashboard previews",
          "Optimal performance scoring outstanding Core Web Vitals marks"
        ],
        keyFeatures: [
          "Interactive feature exploration: soil, climate, and smart irrigation telemetry",
          "Subscription tier comparison and water savings calculator for farmers",
          "Platform screenshot gallery and inquiry booking form for live demonstrations",
          "Adaptive layout with full support across smartphones, tablets, and high-DPI desktop screens"
        ],
        challengesSolved: "Communicating complex IoT concepts simply to agronomic stakeholders while achieving lightning-fast load times under 1 second."
      },
      {
        id: "project-1-fullstack",
        title: "Livria — Digital Book Ecosystem (Full-Stack & Web)",
        tagline: "Multiplatform ecosystem featuring a Vue 3/Vite web app, Flutter mobile app, Jetpack Compose admin panel, and C# (.NET) backend.",
        description: "Full-stack ecosystem designed for book catalog management and community discovery with Clean Architecture, OpenAPI/Swagger contracts, and thorough QA.",
        longDescription: "Livria was engineered as a modular multiplatform ecosystem connecting readers and book distributors. It brings together a responsive web app built in Vue 3 and Vite, a native mobile app in Flutter for end-users, and a Jetpack Compose administrative panel for moderation, all powered by a robust C# (.NET) backend API.",
        category: "fullstack",
        tags: ["Vue.js", "Vite", "Flutter", "Jetpack Compose", "C# (.NET)", "OpenAPI/Swagger", "Clean Architecture", "REST APIs"],
        image: "https://images.unsplash.com/photo-1507842229451-7f01be85ab4d?auto=format&fit=crop&w=1200&q=80",
        featured: true,
        year: "2025",
        impactMetric: "Multiplatform full-stack ecosystem (Web, Mobile & Admin) with Clean Architecture",
        liveUrl: "https://livriaorg.github.io/LivriaLanding",
        githubUrl: "https://github.com/livriaorg",
        architectureHighlights: [
          "Web portal in Vue 3 + Vite, native mobile app in Flutter, and admin dashboard in Jetpack Compose",
          "Backend micro-services in C# (.NET) structured under Clean Architecture with OpenAPI documentation",
          "Exhaustive endpoint testing, functional validation, and UX-centric interface design",
          "Strict layer decoupling ensuring high scalability, testability, and maintainability"
        ],
        keyFeatures: [
          "Interactive book catalog with dynamic filtering and real-time search indexing",
          "Administrative back-office for stock control, acquisitions, and community moderation",
          "Multi-client data synchronization across smartphones, tablets, and desktops",
          "Standardized, interactive endpoint testing documentation through Swagger UI"
        ],
        challengesSolved: "Implemented Clean Architecture to decouple core business logic from client frameworks, achieving reliable and synchronized communication across Flutter, Jetpack Compose, and Vue with the .NET backend."
      },
      {
        id: "project-1-landing",
        title: "Livria Landing Page — Launch Portal",
        tagline: "Official Livria landing page engineered with Vue 3 and Vite for public presentation.",
        description: "Modern, responsive landing page showcasing Livria's features, driving reader conversion, and providing multiplatform download access.",
        longDescription: "Design and frontend development for Livria's launch portal, focused on user acquisition, catalog showcases, and mobile app download promotion.",
        category: "frontend",
        tags: ["Vue.js", "Vite", "Landing Page", "Tailwind CSS", "UI/UX Design", "Responsive Web"],
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
        featured: false,
        year: "2025",
        impactMetric: "High-performance responsive landing page with fluid animations and optimized UX",
        liveUrl: "https://livriaorg.github.io/LivriaLanding",
        githubUrl: "https://github.com/livriaorg/LivriaLanding",
        architectureHighlights: [
          "Built with Vue 3 and Vite for instant load and fluid interactivity",
          "Aesthetic and adaptive layouts with refined typography and spacing",
          "Integrated showcase sections, user testimonials, and clear call-to-actions (CTA)"
        ],
        keyFeatures: [
          "Interactive visual showcase of the mobile app and digital catalog",
          "Feature preview section and subscription lead generation",
          "Mobile-first optimization with ultra-fast page load times"
        ],
        challengesSolved: "Crafted delicate visual micro-interactions and compressed graphic assets to guarantee sub-second initial page load times."
      },
      {
        id: "project-2",
        title: "VolunTrack — NGO Volunteer Management",
        tagline: "Comprehensive platform for volunteer coordination and social impact tracking with Angular frontend, Java backend, and DDD.",
        description: "Full-stack platform empowering non-profits to coordinate volunteers, manage applications, and measure the community impact of social programs.",
        longDescription: "VolunTrack addresses administration and traceability challenges in non-profit organizations. Built with a reactive Angular frontend and a robust Java backend following Domain-Driven Design (DDD) principles, standardizing workflows with Swagger and logging impact metrics.",
        category: "fullstack",
        tags: ["Angular", "Java", "Spring Boot", "Domain-Driven Design (DDD)", "Swagger", "REST APIs", "SQL"],
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
        featured: true,
        year: "2024",
        impactMetric: "DDD architecture for complete traceability and social impact analytics",
        liveUrl: "https://wasi-masi.github.io/Voluntrack-LandingPage",
        githubUrl: "https://github.com/wasi-masi/Voluntrack-LandingPage",
        architectureHighlights: [
          "Modular, reactive Angular frontend with robust state handling and client-side validations",
          "Core business logic in Java applying Domain-Driven Design (DDD) and SOLID principles",
          "Standardized, versioned RESTful APIs documented in Swagger",
          "Data pipelines for social impact analytics and community engagement tracking"
        ],
        keyFeatures: [
          "Volunteer registration, application vetting, and smart program matching",
          "NGO dashboard with community hours logging and impact reporting",
          "Real-time data validation and secure endpoints for complex aggregation queries",
          "Accessible user interface with intuitive navigation"
        ],
        challengesSolved: "Modeled complex volunteering domain requirements using bounded contexts in DDD, isolating Java business logic completely from persistence and transport layers."
      },
      {
        id: "project-3",
        title: "Raves Landing Page — Music Discovery",
        tagline: "Interactive landing page and exploratory web experience for electronic music trends and community connection.",
        description: "High-impact responsive web application tailored for electronic music discovery, emerging artists, and sound community engagement.",
        longDescription: "Raves was designed to deliver an engaging, visually distinct experience for electronic music enthusiasts. Featuring a modern mobile-first design, fluid micro-interactions, and optimized components.",
        category: "frontend",
        tags: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript / TypeScript", "UI/UX Design", "Responsive Web", "Landing Page"],
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
        featured: true,
        year: "2024",
        impactMetric: "High-performance interactive design with optimized Core Web Vitals",
        liveUrl: "https://kistoo.github.io/Raves-challenge",
        githubUrl: "https://github.com/kistoo/Raves-challenge",
        architectureHighlights: [
          "Immersive visual layout with smooth transitions and high-precision micro-interactions",
          "Semantic HTML5 structure optimized for web accessibility and SEO best practices",
          "Adaptive mobile-first rendering compatible across devices and resolutions",
          "Clean component architecture ready for multimedia API consumption"
        ],
        keyFeatures: [
          "Interactive genre, playlist, and trending artist explorer",
          "Rich interactive components with active and hover states",
          "Modern visual aesthetic optimized for electronic music culture",
          "Instant navigation and high performance across modern browsers"
        ],
        challengesSolved: "Optimized multimedia assets and animation pipelines, ensuring page load times under 1 second and maximum accessibility compliance."
      },
      {
        id: "project-4",
        title: "QA Test Automation & Verification — Mandü (Visma)",
        tagline: "Quality assurance strategies combining manual and automated testing with Cypress & Selenium.",
        description: "Functional validation, test matrix design, E2E automation, and defect tracking in Jira for enterprise talent management platforms.",
        longDescription: "As a QA Trainee at Mandü (Visma group company), I participate across the full software quality assurance lifecycle: from test case design and documentation to automated test execution with Cypress and Selenium and Scrum defect management.",
        category: "fullstack",
        tags: ["Cypress", "Selenium", "Jira", "Scrum", "Manual Testing", "Test Automation", "Regression Testing", "Bug Tracking"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        featured: false,
        year: "2026",
        impactMetric: "Reduced validation turnaround time and expanded regression test coverage",
        liveUrl: "https://manduet.com",
        githubUrl: "https://github.com",
        architectureHighlights: [
          "Design and thorough documentation of test cases prior to production releases",
          "Development and maintenance of automated tests with Cypress and Selenium for regression coverage",
          "Defect lifecycle tracking in Jira in close collaboration with developers and product managers",
          "Active involvement in all Scrum ceremonies: sprint planning, refinements, and retrospectives"
        ],
        keyFeatures: [
          "Structured test plans and functional coverage matrices",
          "Automated regression suites for rapid agile validation",
          "Detailed defect reports with technical evidence and reproducible steps",
          "Rigorous fix verification and exploratory testing"
        ],
        challengesSolved: "Integrated automated test validations into critical user journeys to detect defects early and speed up continuous delivery cycles."
      }
    ],
    skillCategories: initialPortfolioData.skillCategories,
    experiences: [
      {
        id: "exp-1",
        role: "QA Trainee",
        company: "Mandü (Visma Group)",
        location: "Lima, Peru",
        period: "2026 — Present",
        current: true,
        description: "Software quality assurance in an enterprise workplace climate and talent management platform, combining manual testing and test automation.",
        achievements: [
          "Designed, documented, and executed manual test cases to validate new features and catch defects before production deployments.",
          "Developed and maintained automated testing suites using Cypress and Selenium, boosting regression coverage and slashing validation time.",
          "Tracked and managed bug lifecycles in Jira, collaborating closely with development teams in fast-paced Scrum sprints.",
          "Actively participated in the full QA lifecycle: test planning, execution, structured reporting, and fix verification."
        ],
        technologies: ["Cypress", "Selenium", "Jira", "Scrum", "Manual Testing", "Test Automation", "Regression Testing", "Bug Tracking"],
        companyUrl: "https://manduet.com"
      },
      {
        id: "exp-2",
        role: "Specialty Barista",
        company: "Balicafé · Lumocafé · Alanya Repostería",
        location: "Lima, Peru",
        period: "Dec 2023 — Mar 2026",
        current: false,
        description: "Responsible for technical machine calibration and analytical evaluation of physical-chemical variables under strict precision standards.",
        achievements: [
          "Calibrated espresso machinery and rigorously controlled variables (ratios, temperature, extraction time) to ensure product consistency.",
          "Cultivated high-pressure problem solving, sharp attention to detail, and proactive communication with diverse teams and customers.",
          "Transferred methodologies of technical precision, process consistency, and quality control directly into software testing and QA."
        ],
        technologies: ["Quality Control", "Attention to Detail", "Problem Solving", "Process Consistency", "Clear Communication"],
        companyUrl: "https://instagram.com"
      }
    ],
    educations: [
      {
        id: "edu-1",
        degree: "B.S. in Software Engineering (8th Semester in progress)",
        institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
        location: "Lima, Peru",
        period: "2023 — 2028 (8th semester in progress)",
        honors: "Ranked in the Top 10% (Décimo Superior)",
        details: [
          "8th-semester student with comprehensive coursework in multiplatform software development, requirements engineering, quality assurance, software architectures, and agile methodologies.",
          "Core focus on Clean Architecture, Domain-Driven Design (DDD), SOLID principles, and user-centric systems design."
        ]
      },
      {
        id: "edu-2",
        degree: "Scrum Master Certification (Specialization)",
        institution: "LearnQuest",
        location: "Online",
        period: "2025",
        details: [
          "Specialization in agile team facilitation, Scrum ceremonies, continuous improvement, and workflow optimization."
        ]
      },
      {
        id: "edu-3",
        degree: "Machine Learning on Google Cloud (Specialization)",
        institution: "Google Cloud",
        location: "Online",
        period: "2025",
        details: [
          "Foundations and deployment of machine learning models and cloud data pipelines on Google Cloud."
        ]
      },
      {
        id: "edu-4",
        degree: "Python for Everybody & Using Databases with Python",
        institution: "University of Michigan",
        location: "Online",
        period: "2025",
        details: [
          "Data structures in Python, relational database persistence, and analytical scripting."
        ]
      },
      {
        id: "edu-5",
        degree: "Survey Data Collection and Analytics (Specialization)",
        institution: "University of Maryland & University of Michigan",
        location: "Online",
        period: "2026",
        details: [
          "Statistical data collection methods, analytical metrics, and data-driven decision making."
        ]
      },
      {
        id: "edu-6",
        degree: "Culture-Driven Team Building & Good with Words",
        institution: "University of Pennsylvania & University of Michigan",
        location: "Online",
        period: "2024 — 2025",
        details: [
          "High-performance team dynamics and professional technical writing for concise, assertive communication."
        ]
      },
      {
        id: "edu-7",
        degree: "Introduction to MongoDB",
        institution: "MongoDB University",
        location: "Online",
        period: "2024",
        details: [
          "NoSQL document data modeling, indexing strategies, and aggregation pipeline queries."
        ]
      }
    ]
  },

  fr: {
    profile: {
      name: "Ainhoa Castillo Garay",
      pronouns: "elle",
      role: "QA Trainee & Étudiante en Génie Logiciel",
      headline: "QA Trainee chez Mandü (Groupe Visma) et étudiante en 8e cycle de Génie Logiciel (Top 10% Décimo Superior à l'UPC). Spécialisée en assurance qualité, automatisation de tests et développement logiciel multiplateforme.",
      location: "Lima, Pérou",
      availability: "Disponible pour des opportunités en génie logiciel",
      email: "ainhoa.c.garay@gmail.com",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      bioParagraphs: [
        "Étudiante en 8ème cycle de Génie Logiciel à l'Universidad Peruana de Ciencias Aplicadas (UPC), classée dans le Décimo Superior (Top 10%), occupant actuellement le poste de QA Trainee chez Mandü (société du groupe Visma).",
        "Au quotidien, je combine le contrôle qualité—conception et exécution de cas de tests manuels et automatisés avec Cypress et Selenium, et gestion des anomalies sur Jira—avec une expérience préalable de développeuse. J'ai travaillé avec Vue.js, Angular et Flutter en frontend, et avec C#, Java et Node.js en backend, en appliquant rigoureusement les principes SOLID, le DDD et les méthodes agiles comme Scrum.",
        "Ce profil hybride entre développement et qualité me permet de comprendre l'intégralité du cycle de vie logiciel (SDLC) et d'apporter un regard critique, analytique et soucieux du détail à chaque étape des tests.",
        "Parallèlement à mes études, j'ai exercé comme Barista de Spécialité, où j'ai développé une grande précision technique, une capacité d'analyse sous pression et une communication efficace avec des équipes variées. Ce sont des compétences que j'applique aujourd'hui directement aux tests logiciels et au travail collaboratif dans des contextes pluridisciplinaires."
      ],
      coreValues: [
        {
          title: "Assurance Qualité & Rigueur QA",
          description: "Conception et exécution de plans de tests manuels et automatisés avec Cypress et Selenium pour garantir un logiciel fiable et sans régressions.",
          icon: "ShieldCheck"
        },
        {
          title: "Ingénierie Multiplateforme",
          description: "Développement d'interfaces mobiles et web avec Flutter, Jetpack Compose, Vue et Angular sous les principes de Clean Architecture.",
          icon: "Sparkles"
        },
        {
          title: "Vision Hybride Dev + QA",
          description: "Compréhension globale du cycle de développement (SDLC) pour anticiper les anomalies et optimiser la robustesse technique.",
          icon: "Cpu"
        },
        {
          title: "Leadership Agile & Communication",
          description: "Facilitation d'une collaboration fluide entre les équipes techniques et les parties prenantes sous la méthodologie Scrum.",
          icon: "Users"
        }
      ],
      stats: [
        {
          label: "8e Semestre · Top 10%",
          value: "Top 10%",
          sublabel: "Génie Logiciel UPC"
        },
        {
          label: "Spécialisations",
          value: "8+",
          sublabel: "Scrum Master, GCP & Python"
        },
        {
          label: "Projets Clés",
          value: "5+",
          sublabel: "Grotix, Livria, VolunTrack, Raves, etc."
        },
        {
          label: "Langues",
          value: "3",
          sublabel: "Espagnol, Anglais, Français"
        }
      ],
      socialLinks: initialPortfolioData.profile.socialLinks
    },
    projects: [
      {
        id: "project-celevigrotix-fullstack",
        title: "Grotix — Plateforme Agrotech & Écosystème IoT",
        tagline: "Écosystème intelligent pour la surveillance et l'automatisation des cultures avec télémétrie IoT, capteurs et architecture distribuée.",
        description: "Plateforme Agrotech complète pour le suivi en temps réel des serres et cultures, gestion des microclimats et optimisation des ressources via l'IoT et l'analytique.",
        longDescription: "Grotix a été conçu comme une solution technologique agricole dédiée au contrôle et à l'automatisation des cultures. Développé selon une architecture propre et modulaire, il traite la télémétrie des capteurs en temps réel (humidité du sol, température, pH et rayonnement), contrôle les vannes d'irrigation intelligente et expose des APIs REST sécurisées.",
        category: "fullstack",
        tags: ["Agrotech & IoT", "Clean Architecture", "Telemetry & Sensors", "Full-Stack", "REST APIs", "Automation", "Quality Assurance", "Git & CI/CD"],
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80",
        featured: true,
        year: "2025",
        impactMetric: "Télémétrie agricole en temps réel et architecture distribuée modulaire",
        liveUrl: "https://celevigrotix.github.io/Grotix_LandingPage/",
        githubUrl: "https://github.com/CeleviGrotix",
        architectureHighlights: [
          "Ingestion et traitement en direct de la télémétrie des capteurs IoT (humidité du sol, température, pH et rayonnement)",
          "Architecture backend modulaire sous Clean Architecture garantissant un découplage rigoureux",
          "Contrôle automatisé des actionneurs d'irrigation et alertes prédictives des anomalies microclimatiques",
          "Suites de validation et de tests approfondies pour assurer une haute disponibilité"
        ],
        keyFeatures: [
          "Tableau de bord d'analyse agricole avec graphiques des variables en temps réel",
          "Système d'alerte précoce pour prévenir le stress hydrique et les maladies des cultures",
          "Contrôle à distance et automatisé de l'irrigation et du dosage des nutriments",
          "Gestion multizone pour parcelles agricoles et serres automatisées"
        ],
        challengesSolved: "Conception d'un modèle de données tolérant aux coupures de réseau sur le terrain et standardisation des contrats d'API entre le matériel et le tableau de bord."
      },
      {
        id: "project-celevigrotix-landing",
        title: "Grotix Landing Page — Portail Agrotech",
        tagline: "Page de présentation officielle de l'écosystème Grotix, des capteurs IoT et des solutions pour agriculteurs.",
        description: "Portail web réactif et à fort taux de conversion présentant les solutions Grotix : suivi intelligent des cultures, matériel IoT et forfaits producteurs.",
        longDescription: "Développement frontend de la landing page officielle de Grotix (https://celevigrotix.github.io/Grotix_LandingPage/), avec une charte graphique 'Agro-Tech' moderne, une navigation intuitive et une optimisation mobile-first poussée.",
        category: "frontend",
        tags: ["Landing Page", "Agrotech UI", "UI/UX Design", "Responsive Web", "TypeScript", "Tailwind CSS", "Mobile-First"],
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80",
        featured: false,
        year: "2025",
        impactMetric: "Portail Agrotech haute performance avec design réactif et interactif",
        liveUrl: "https://celevigrotix.github.io/Grotix_LandingPage/",
        githubUrl: "https://github.com/CeleviGrotix/Grotix_LandingPage",
        architectureHighlights: [
          "Structure HTML5 sémantique optimisée pour la conversion, l'accessibilité et le référencement",
          "Composants modulaires stylisés avec Tailwind CSS et micro-interactions fluides",
          "Présentation interactive des modules matériels, capteurs et aperçus de la plateforme",
          "Performances optimales validées par d'excellents scores Core Web Vitals"
        ],
        keyFeatures: [
          "Présentation interactive des fonctionnalités : télémétrie du sol, climat et irrigation intelligente",
          "Comparateur d'abonnements et simulateur d'économies d'eau pour les producteurs",
          "Galerie de captures d'écran de l'application et formulaire de demande de démonstration",
          "Conception adaptative pour smartphones, tablettes et ordinateurs de bureau"
        ],
        challengesSolved: "Vulgariser avec clarté des technologies IoT complexes pour un public agricole tout en maintenant un temps de chargement inférieur à une seconde."
      },
      {
        id: "project-1-fullstack",
        title: "Livria — Écosystème Numérique du Livre (Full-Stack & Web)",
        tagline: "Écosystème multiplateforme comprenant une application web en Vue 3/Vite, une app mobile Flutter, un panneau Jetpack Compose et une API C# (.NET).",
        description: "Écosystème complet dédié à la gestion et au catalogue de livres avec Clean Architecture, services REST documentés OpenAPI/Swagger et validation QA rigoureuse.",
        longDescription: "Livria a été conçu comme un écosystème modulaire reliant lecteurs et distributeurs. Il intègre une application web complète en Vue 3 + Vite, une application mobile en Flutter pour les utilisateurs finaux, et un panneau d'administration en Jetpack Compose, le tout soutenu par une API C# (.NET).",
        category: "fullstack",
        tags: ["Vue.js", "Vite", "Flutter", "Jetpack Compose", "C# (.NET)", "OpenAPI/Swagger", "Clean Architecture", "REST APIs"],
        image: "https://images.unsplash.com/photo-1507842229451-7f01be85ab4d?auto=format&fit=crop&w=1200&q=80",
        featured: true,
        year: "2025",
        impactMetric: "Écosystème multiplateforme complet (Web, Mobile & Admin) sous Clean Architecture",
        liveUrl: "https://livriaorg.github.io/LivriaLanding",
        githubUrl: "https://github.com/livriaorg",
        architectureHighlights: [
          "Application web en Vue 3 + Vite, application native Flutter et panneau Jetpack Compose",
          "Services backend en C# (.NET) organisés sous Clean Architecture avec documentation OpenAPI/Swagger",
          "Tests d'API approfondis, validation fonctionnelle et conception centrée sur l'expérience utilisateur",
          "Découplage strict des couches pour garantir l'évolutivité et la maintenabilité"
        ],
        keyFeatures: [
          "Catalogue interactif de livres avec recherche en temps réel et filtres dynamiques",
          "Panneau d'administration pour la gestion des stocks, acquisitions et modération",
          "Synchronisation fluide multi-appareils (mobiles, tablettes et ordinateurs)",
          "Documentation interactive standardisée des endpoints via Swagger UI"
        ],
        challengesSolved: "Mise en œuvre de Clean Architecture pour découpler la logique métier des différentes interfaces clientes (Flutter, Jetpack Compose, Vue 3)."
      },
      {
        id: "project-1-landing",
        title: "Livria Landing Page — Portail de Lancement",
        tagline: "Page de lancement officielle de Livria développée en Vue 3 et Vite pour la présentation de la plateforme.",
        description: "Landing page moderne et réactive pour présenter les fonctionnalités de Livria et inciter au téléchargement des applications multiplateformes.",
        longDescription: "Conception et développement de la landing page de Livria, axée sur l'acquisition d'utilisateurs, la découverte du catalogue et la mise en valeur des applications mobiles.",
        category: "frontend",
        tags: ["Vue.js", "Vite", "Landing Page", "Tailwind CSS", "UI/UX Design", "Responsive Web"],
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
        featured: false,
        year: "2025",
        impactMetric: "Landing page réactive haute performance avec micro-animations et UX soignée",
        liveUrl: "https://livriaorg.github.io/LivriaLanding",
        githubUrl: "https://github.com/livriaorg/LivriaLanding",
        architectureHighlights: [
          "Conçue avec Vue 3 et Vite pour un chargement instantané et une grande fluidité",
          "Mise en page esthétique et réactive avec typographie et espacements soignés",
          "Sections de vitrine produit, avis et appels à l'action (CTA) intégrés"
        ],
        keyFeatures: [
          "Aperçu visuel interactif de l'application mobile et du catalogue",
          "Présentation claire des atouts de la plateforme et inscription",
          "Optimisation mobile-first et temps de réponse ultra-rapides"
        ],
        challengesSolved: "Conception de micro-interactions fluides et optimisation des ressources graphiques pour maintenir un chargement inférieur à 1 seconde."
      },
      {
        id: "project-2",
        title: "VolunTrack — Gestion du Bénévolat pour ONGs",
        tagline: "Plateforme intégrale de coordination et de suivi du bénévolat avec frontend Angular, backend Java et principes DDD.",
        description: "Plateforme complète pour les associations et ONGs afin de coordonner les volontaires, traiter les candidatures et mesurer l'impact social.",
        longDescription: "VolunTrack répond aux défis de gestion et de traçabilité des organisations à but non lucratif. Développée avec un frontend Angular réactif et un backend Java sous Domain-Driven Design (DDD), permettant de documenter les flux avec Swagger.",
        category: "fullstack",
        tags: ["Angular", "Java", "Spring Boot", "Domain-Driven Design (DDD)", "Swagger", "REST APIs", "SQL"],
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
        featured: true,
        year: "2024",
        impactMetric: "Architecture DDD pour la traçabilité et l'analyse de l'impact social",
        liveUrl: "https://wasi-masi.github.io/Voluntrack-LandingPage",
        githubUrl: "https://github.com/wasi-masi/Voluntrack-LandingPage",
        architectureHighlights: [
          "Frontend modulaire et réactif en Angular avec validation rigoureuse des données",
          "Logique métier en Java appliquant le Domain-Driven Design (DDD) et SOLID",
          "APIs RESTful standardisées et documentées sur Swagger",
          "Suivi analytique des heures d'engagement et des indicateurs d'impact communautaire"
        ],
        keyFeatures: [
          "Inscription, candidature et attribution intelligente des bénévoles aux programmes",
          "Tableau de bord ONG avec suivi des heures et rapports d'impact",
          "Validation des données en temps réel et points de terminaison sécurisés",
          "Interface accessible et expérience utilisateur ergonomique"
        ],
        challengesSolved: "Modélisation des domaines complexes du bénévolat via des contextes délimités (bounded contexts) en DDD, isolant la logique Java des couches de transport."
      },
      {
        id: "project-3",
        title: "Raves Landing Page — Découverte Musicale",
        tagline: "Landing page interactive pour l'exploration musicale, les tendances électroniques et les communautés.",
        description: "Application web réactive avec une identité visuelle immersive dédiée aux tendances musicales électroniques et aux artistes émergents.",
        longDescription: "Raves a été développée pour proposer une expérience visuelle moderne et une navigation instantanée aux passionnés de musique, avec une conception mobile-first et des micro-interactions fluides.",
        category: "frontend",
        tags: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript / TypeScript", "UI/UX Design", "Responsive Web", "Landing Page"],
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
        featured: true,
        year: "2024",
        impactMetric: "Design interactif performant avec scores Core Web Vitals optimisés",
        liveUrl: "https://kistoo.github.io/Raves-challenge",
        githubUrl: "https://github.com/kistoo/Raves-challenge",
        architectureHighlights: [
          "Design immersif avec transitions fluides et micro-interactions soignées",
          "Structure sémantique HTML5 optimisée pour l'accessibilité et le SEO",
          "Rendu adaptatif mobile-first compatible sur tous les écrans",
          "Architecture de composants claire prête pour l'intégration d'APIs multimédia"
        ],
        keyFeatures: [
          "Exploration interactive des genres, playlists et artistes en vogue",
          "Composants visuels enrichis d'états dynamiques au survol",
          "Esthétique moderne adaptée à la culture musicale",
          "Navigation instantanée et excellente fluidité sur tous les navigateurs récents"
        ],
        challengesSolved: "Optimisation poussée des médias et des transitions visuelles, garantissant des temps de chargement inférieurs à 1 seconde."
      },
      {
        id: "project-4",
        title: "QA Test Automation & Verification — Mandü (Visma)",
        tagline: "Stratégies d'assurance qualité avec tests manuels et automatisation sous Cypress & Selenium.",
        description: "Validation fonctionnelle, conception de matrices de tests, automatisation E2E et suivi des anomalies sous Jira pour plateforme RH d'entreprise.",
        longDescription: "En tant que QA Trainee chez Mandü (société du groupe Visma), je participe à l'ensemble du cycle d'assurance qualité logicielle : conception et documentation des cas de test, automatisation avec Cypress et Selenium et gestion agile des anomalies.",
        category: "fullstack",
        tags: ["Cypress", "Selenium", "Jira", "Scrum", "Manual Testing", "Test Automation", "Regression Testing", "Bug Tracking"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        featured: false,
        year: "2026",
        impactMetric: "Réduction des temps de validation et couverture accrue des tests de non-régression",
        liveUrl: "https://manduet.com",
        githubUrl: "https://github.com",
        architectureHighlights: [
          "Conception et documentation rigoureuse des cas de test avant les déploiements en production",
          "Développement et maintenance de tests automatisés avec Cypress et Selenium pour la couverture de non-régression",
          "Suivi du cycle de vie des anomalies sur Jira en collaboration étroite avec les développeurs et POs",
          "Participation active aux cérémonies Scrum : planification, affinages et rétrospectives"
        ],
        keyFeatures: [
          "Plans de test structurés et matrices de couverture fonctionnelle",
          "Suites de non-régression automatisées pour validation agile continue",
          "Rapports détaillés d'anomalies avec preuves techniques et étapes reproductibles",
          "Vérification rigoureuse des correctifs et tests exploratoires"
        ],
        challengesSolved: "Intégration de tests automatisés dans les parcours critiques afin de détecter les anomalies au plus tôt et d'accélérer les cycles de livraison continue."
      }
    ],
    skillCategories: initialPortfolioData.skillCategories,
    experiences: [
      {
        id: "exp-1",
        role: "QA Trainee",
        company: "Mandü (Groupe Visma)",
        location: "Lima, Pérou",
        period: "2026 — Présent",
        current: true,
        description: "Assurance qualité sur une plateforme d'entreprise d'engagement et de gestion des talents, alliant tests manuels et automatisation.",
        achievements: [
          "Conception, documentation et exécution de cas de tests manuels pour valider les fonctionnalités et détecter les anomalies avant la mise en production.",
          "Développement et maintenance de tests automatisés avec Cypress et Selenium, augmentant la couverture de non-régression et réduisant les délais de validation.",
          "Gestion et suivi des anomalies (bugs) sur Jira en étroite collaboration avec les équipes de développement dans un cadre Scrum.",
          "Participation active à l'ensemble du cycle QA : planification, exécution, rapports d'anomalies et vérification des correctifs."
        ],
        technologies: ["Cypress", "Selenium", "Jira", "Scrum", "Manual Testing", "Test Automation", "Regression Testing", "Bug Tracking"],
        companyUrl: "https://manduet.com"
      },
      {
        id: "exp-2",
        role: "Barista de Spécialité",
        company: "Balicafé · Lumocafé · Alanya Repostería",
        location: "Lima, Pérou",
        period: "Déc 2023 — Mar 2026",
        current: false,
        description: "Responsable de l'étalonnage technique des machines et de l'analyse des variables physico-chimiques selon des critères stricts de précision.",
        achievements: [
          "Calibrage minutieux des équipements et suivi précis des variables (ratios, température, temps d'extraction) pour garantir l'excellence produit.",
          "Développement de solides compétences en résolution de problèmes sous pression, attention rigoureuse aux détails et communication bienveillante.",
          "Transposition directe de la rigueur technique, de la constance opérationnelle et du contrôle qualité vers l'assurance qualité et les tests logiciels."
        ],
        technologies: ["Contrôle Qualité", "Sens du Détail", "Résolution de Problèmes", "Gestion des Variables", "Communication Efficace"],
        companyUrl: "https://instagram.com"
      }
    ],
    educations: [
      {
        id: "edu-1",
        degree: "Licence en Génie Logiciel (8e cycle en cours)",
        institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
        location: "Lima, Pérou",
        period: "2023 — 2028 (8e cycle en cours)",
        honors: "Classée dans le Top 10% (Décimo Superior)",
        details: [
          "Étudiante en 8e cycle avec formation approfondie en ingénierie logicielle multiplateforme, recueil des exigences, assurance qualité, architectures logicielles et méthodes agiles.",
          "Spécialisation en Clean Architecture, Domain-Driven Design (DDD), principes SOLID et ergonomie logicielle."
        ]
      },
      {
        id: "edu-2",
        degree: "Scrum Master Certification (Specialization)",
        institution: "LearnQuest",
        location: "En ligne",
        period: "2025",
        details: [
          "Spécialisation dans l'animation d'équipes agiles, les cérémonies Scrum et l'amélioration continue des processus."
        ]
      },
      {
        id: "edu-3",
        degree: "Machine Learning on Google Cloud (Specialization)",
        institution: "Google Cloud",
        location: "En ligne",
        period: "2025",
        details: [
          "Fondamentaux et déploiement de modèles d'apprentissage automatique et de pipelines de données sur Google Cloud."
        ]
      },
      {
        id: "edu-4",
        degree: "Python for Everybody & Using Databases with Python",
        institution: "University of Michigan",
        location: "En ligne",
        period: "2025",
        details: [
          "Structures de données en Python, gestion des bases de données relationnelles et scripts d'analyse."
        ]
      },
      {
        id: "edu-5",
        degree: "Survey Data Collection and Analytics (Specialization)",
        institution: "University of Maryland & University of Michigan",
        location: "En ligne",
        period: "2026",
        details: [
          "Méthodes statistiques de collecte de données, indicateurs d'analyse et prise de décision basée sur les métriques."
        ]
      },
      {
        id: "edu-6",
        degree: "Culture-Driven Team Building & Good with Words",
        institution: "University of Pennsylvania & University of Michigan",
        location: "En ligne",
        period: "2024 — 2025",
        details: [
          "Dynamique d'équipes performantes et rédaction technique professionnelle pour une communication claire et assertive."
        ]
      },
      {
        id: "edu-7",
        degree: "Introduction to MongoDB",
        institution: "MongoDB University",
        location: "En ligne",
        period: "2024",
        details: [
          "Modélisation NoSQL orientée documents, indexation et requêtes d'agrégation."
        ]
      }
    ]
  }
};

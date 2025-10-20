"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem("preferred-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("preferred-language", lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Akonkwa Ushindi Isaac",
      title: "Fullstack & Mobile Developer",
      subtitle: "Building secure, scalable, and human-centered digital solutions",
      cta: {
        projects: "View My Work",
        contact: "Get In Touch",
      },
    },
    about: {
      preview: {
        title: "About Me",
        subtitle: "Passionate Developer & Problem Solver",
        description:
          "I'm a fullstack and mobile developer with a passion for creating innovative solutions that make a real impact. With expertise in web and mobile development, AI integration, and cybersecurity, I build applications that are not only functional but also secure and user-friendly.",
        cta: "Learn More About Me",
      },
      intro: {
        title: "Who I Am",
        subtitle: "Developer, Innovator, Problem Solver",
        description1:
          "I'm Akonkwa Ushindi Isaac, a passionate Fullstack & Mobile Developer based in the Democratic Republic of Congo. My journey in tech began with a curiosity about how things work and evolved into a mission to build solutions that make a difference.",
        description2:
          "With expertise spanning web development, mobile applications, AI integration, and cybersecurity, I specialize in creating scalable, secure, and user-centered digital experiences. I believe technology should empower people and solve real-world problems.",
        description3:
          "When I'm not coding, you'll find me exploring new technologies, mentoring aspiring developers, or contributing to open-source projects. I'm always eager to learn, collaborate, and push the boundaries of what's possible.",
      },
      skills: {
        title: "Skills & Expertise",
        subtitle: "Technologies I Work With",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          mobile: "Mobile",
          database: "Database",
          cloud: "Cloud & DevOps",
          ai: "AI & ML",
          security: "Security",
          tools: "Tools",
        },
      },
      timeline: {
        title: "Experience & Education",
        subtitle: "My Professional Journey",
        experience: "Experience",
        education: "Education",
      },
      philosophy: {
        title: "My Philosophy",
        subtitle: "What Drives Me",
        values: {
          impact: {
            title: "Impact-Driven",
            description: "I build solutions that solve real problems and create meaningful change in people's lives.",
          },
          quality: {
            title: "Quality First",
            description:
              "Every line of code matters. I'm committed to writing clean, maintainable, and efficient code.",
          },
          learning: {
            title: "Continuous Learning",
            description: "Technology evolves rapidly. I stay curious and constantly expand my knowledge and skills.",
          },
          collaboration: {
            title: "Collaboration",
            description: "Great products are built by great teams. I value open communication and knowledge sharing.",
          },
        },
      },
    },
    projects: {
      title: "My Projects",
      subtitle: "Explore my work and case studies",
      filter: {
        all: "All",
        web: "Web",
        mobile: "Mobile",
        ai: "AI",
        security: "Security",
      },
      cta: "View Case Study",
      detail: {
        overview: "Project Overview",
        problem: "Problem & Objective",
        role: "My Role",
        techStack: "Tech Stack",
        gallery: "Project Gallery",
        results: "Results & Impact",
        nextProject: "Next Project",
        prevProject: "Previous Project",
        backToProjects: "Back to Projects",
      },
    },
    blog: {
      title: "Blog & Insights",
      subtitle: "Thoughts on tech, development, and innovation",
      readMore: "Read More",
      readTime: "min read",
      backToBlog: "Back to Blog",
      relatedArticles: "Related Articles",
      shareArticle: "Share this article",
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Have a project in mind? Let's discuss how I can help bring your ideas to life.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        subject: "Subject",
        subjectPlaceholder: "Project inquiry",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! I'll get back to you soon.",
        error: "Failed to send message. Please try again.",
        validation: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Please enter a valid email",
          messageRequired: "Message is required",
          messageMin: "Message must be at least 50 characters",
        },
      },
      info: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        location: "Location",
        availability: "Availability",
        availabilityStatus: "Available for freelance projects",
      },
      social: {
        title: "Connect With Me",
      },
      schedule: {
        title: "Schedule a Meeting",
        description: "Prefer to talk? Schedule a call at your convenience.",
        cta: "Book a Call",
      },
    },
    footer: {
      tagline: "Building the future, one line of code at a time.",
      rights: "All rights reserved.",
      links: {
        title: "Quick Links",
      },
      social: {
        title: "Follow Me",
      },
    },
    testimonials: {
      title: "What People Say",
      subtitle: "Feedback from clients and collaborators",
    },
    contactBanner: {
      title: "Ready to Start Your Project?",
      subtitle: "Let's collaborate and build something amazing together",
      cta: "Get In Touch",
    },
    notFound: {
      title: "Page Not Found",
      description: "Sorry, the page you're looking for doesn't exist or has been moved.",
      cta: "Go Back Home",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      projects: "Projets",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Salut, je suis",
      name: "Akonkwa Ushindi Isaac",
      title: "Développeur Fullstack & Mobile",
      subtitle: "Création de solutions numériques sécurisées, évolutives et centrées sur l'humain",
      cta: {
        projects: "Voir Mes Projets",
        contact: "Me Contacter",
      },
    },
    about: {
      preview: {
        title: "À Propos de Moi",
        subtitle: "Développeur Passionné & Résolveur de Problèmes",
        description:
          "Je suis un développeur fullstack et mobile passionné par la création de solutions innovantes qui ont un réel impact. Avec une expertise en développement web et mobile, intégration IA et cybersécurité, je construis des applications non seulement fonctionnelles mais aussi sécurisées et conviviales.",
        cta: "En Savoir Plus",
      },
      intro: {
        title: "Qui Je Suis",
        subtitle: "Développeur, Innovateur, Résolveur de Problèmes",
        description1:
          "Je suis Akonkwa Ushindi Isaac, un développeur Fullstack & Mobile passionné basé en République Démocratique du Congo. Mon parcours dans la tech a commencé par une curiosité sur le fonctionnement des choses et a évolué en une mission de construire des solutions qui font la différence.",
        description2:
          "Avec une expertise couvrant le développement web, les applications mobiles, l'intégration IA et la cybersécurité, je me spécialise dans la création d'expériences numériques évolutives, sécurisées et centrées sur l'utilisateur. Je crois que la technologie doit autonomiser les gens et résoudre des problèmes réels.",
        description3:
          "Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles technologies, de mentorer des développeurs en herbe ou de contribuer à des projets open-source. Je suis toujours avide d'apprendre, de collaborer et de repousser les limites du possible.",
      },
      skills: {
        title: "Compétences & Expertise",
        subtitle: "Technologies Que J'Utilise",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          mobile: "Mobile",
          database: "Base de Données",
          cloud: "Cloud & DevOps",
          ai: "IA & ML",
          security: "Sécurité",
          tools: "Outils",
        },
      },
      timeline: {
        title: "Expérience & Formation",
        subtitle: "Mon Parcours Professionnel",
        experience: "Expérience",
        education: "Formation",
      },
      philosophy: {
        title: "Ma Philosophie",
        subtitle: "Ce Qui Me Motive",
        values: {
          impact: {
            title: "Axé sur l'Impact",
            description:
              "Je construis des solutions qui résolvent de vrais problèmes et créent un changement significatif dans la vie des gens.",
          },
          quality: {
            title: "Qualité d'Abord",
            description: "Chaque ligne de code compte. Je m'engage à écrire du code propre, maintenable et efficace.",
          },
          learning: {
            title: "Apprentissage Continu",
            description:
              "La technologie évolue rapidement. Je reste curieux et j'élargis constamment mes connaissances et compétences.",
          },
          collaboration: {
            title: "Collaboration",
            description:
              "Les grands produits sont construits par de grandes équipes. Je valorise la communication ouverte et le partage des connaissances.",
          },
        },
      },
    },
    projects: {
      title: "Mes Projets",
      subtitle: "Explorez mon travail et mes études de cas",
      filter: {
        all: "Tous",
        web: "Web",
        mobile: "Mobile",
        ai: "IA",
        security: "Sécurité",
      },
      cta: "Voir l'Étude de Cas",
      detail: {
        overview: "Aperçu du Projet",
        problem: "Problème & Objectif",
        role: "Mon Rôle",
        techStack: "Stack Technique",
        gallery: "Galerie du Projet",
        results: "Résultats & Impact",
        nextProject: "Projet Suivant",
        prevProject: "Projet Précédent",
        backToProjects: "Retour aux Projets",
      },
    },
    blog: {
      title: "Blog & Réflexions",
      subtitle: "Réflexions sur la tech, le développement et l'innovation",
      readMore: "Lire Plus",
      readTime: "min de lecture",
      backToBlog: "Retour au Blog",
      relatedArticles: "Articles Connexes",
      shareArticle: "Partager cet article",
    },
    contact: {
      title: "Travaillons Ensemble",
      subtitle: "Vous avez un projet en tête ? Discutons de la façon dont je peux vous aider à concrétiser vos idées.",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre.email@exemple.com",
        subject: "Sujet",
        subjectPlaceholder: "Demande de projet",
        message: "Message",
        messagePlaceholder: "Parlez-moi de votre projet...",
        submit: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
        error: "Échec de l'envoi du message. Veuillez réessayer.",
        validation: {
          nameRequired: "Le nom est requis",
          emailRequired: "L'email est requis",
          emailInvalid: "Veuillez entrer un email valide",
          messageRequired: "Le message est requis",
          messageMin: "Le message doit contenir au moins 50 caractères",
        },
      },
      info: {
        title: "Informations de Contact",
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
        availability: "Disponibilité",
        availabilityStatus: "Disponible pour des projets freelance",
      },
      social: {
        title: "Connectez-vous avec Moi",
      },
      schedule: {
        title: "Planifier une Réunion",
        description: "Vous préférez parler ? Planifiez un appel à votre convenance.",
        cta: "Réserver un Appel",
      },
    },
    footer: {
      tagline: "Construire l'avenir, une ligne de code à la fois.",
      rights: "Tous droits réservés.",
      links: {
        title: "Liens Rapides",
      },
      social: {
        title: "Suivez-moi",
      },
    },
    testimonials: {
      title: "Ce Que Disent Les Gens",
      subtitle: "Retours de clients et collaborateurs",
    },
    contactBanner: {
      title: "Prêt à Démarrer Votre Projet ?",
      subtitle: "Collaborons et construisons quelque chose d'incroyable ensemble",
      cta: "Me Contacter",
    },
    notFound: {
      title: "Page Non Trouvée",
      description: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
      cta: "Retour à l'Accueil",
    },
  },
}


/* "use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "en" || savedLang === "fr")) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Akonkwa Ushindi Isaac",
      title: "Fullstack & Mobile Developer",
      subtitle: "Building scalable, secure, and human-centered digital solutions",
      cta: {
        projects: "View My Work",
        contact: "Get In Touch",
      },
    },
    about: {
      title: "About Me",
      subtitle: "Get to know me better",
      intro: {
        title: "Who I Am",
        description:
          "I'm a passionate Fullstack & Mobile Developer with a strong focus on creating secure, scalable, and user-centered digital solutions. My journey in tech is driven by curiosity and a commitment to continuous learning.",
      },
      skills: {
        title: "Skills & Expertise",
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        ai: "AI & Data",
        cloud: "Cloud & DevOps",
        security: "Security",
      },
      timeline: {
        title: "Experience & Education",
        experience: "Experience",
        education: "Education",
      },
      philosophy: {
        title: "My Philosophy",
        values: {
          innovation: {
            title: "Innovation",
            description: "Constantly exploring new technologies and approaches",
          },
          quality: {
            title: "Quality",
            description: "Writing clean, maintainable, and efficient code",
          },
          impact: {
            title: "Impact",
            description: "Building solutions that make a real difference",
          },
          learning: {
            title: "Learning",
            description: "Committed to continuous growth and improvement",
          },
        },
      },
    },
    projects: {
      title: "My Projects",
      subtitle: "Explore my work",
      filter: {
        all: "All",
        web: "Web",
        mobile: "Mobile",
        ai: "AI",
        security: "Security",
      },
      viewProject: "View Project",
      viewLive: "View Live",
      viewCode: "View Code",
    },
    projectDetail: {
      overview: "Overview",
      problem: "Problem & Objective",
      role: "My Role",
      techStack: "Tech Stack",
      gallery: "Gallery",
      results: "Results & Impact",
      navigation: {
        previous: "Previous Project",
        next: "Next Project",
      },
    },
    blog: {
      title: "Blog",
      subtitle: "Thoughts, tutorials, and insights",
      readMore: "Read More",
      readTime: "min read",
      backToBlog: "Back to Blog",
      shareArticle: "Share this article",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's work together",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your.email@example.com",
        subject: "Subject",
        subjectPlaceholder: "What's this about?",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
      },
      info: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        location: "Location",
        availability: "Availability",
        availabilityStatus: "Available for freelance projects",
      },
      social: {
        title: "Connect With Me",
      },
      schedule: {
        title: "Schedule a Meeting",
        description: "Prefer to talk? Schedule a call with me",
        button: "Book a Call",
      },
    },
    footer: {
      tagline: "Building the future, one line of code at a time.",
      quickLinks: "Quick Links",
      connect: "Connect",
      rights: "All rights reserved.",
    },
    common: {
      loading: "Loading...",
      error: "Error",
      notFound: "Not Found",
      backHome: "Back to Home",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      projects: "Projets",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Salut, je suis",
      name: "Akonkwa Ushindi Isaac",
      title: "Développeur Fullstack & Mobile",
      subtitle: "Création de solutions numériques évolutives, sécurisées et centrées sur l'humain",
      cta: {
        projects: "Voir Mon Travail",
        contact: "Me Contacter",
      },
    },
    about: {
      title: "À Propos de Moi",
      subtitle: "Apprenez à me connaître",
      intro: {
        title: "Qui Je Suis",
        description:
          "Je suis un développeur Fullstack & Mobile passionné avec un fort accent sur la création de solutions numériques sécurisées, évolutives et centrées sur l'utilisateur. Mon parcours dans la tech est guidé par la curiosité et un engagement envers l'apprentissage continu.",
      },
      skills: {
        title: "Compétences & Expertise",
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        ai: "IA & Données",
        cloud: "Cloud & DevOps",
        security: "Sécurité",
      },
      timeline: {
        title: "Expérience & Formation",
        experience: "Expérience",
        education: "Formation",
      },
      philosophy: {
        title: "Ma Philosophie",
        values: {
          innovation: {
            title: "Innovation",
            description: "Explorer constamment de nouvelles technologies et approches",
          },
          quality: {
            title: "Qualité",
            description: "Écrire du code propre, maintenable et efficace",
          },
          impact: {
            title: "Impact",
            description: "Construire des solutions qui font une vraie différence",
          },
          learning: {
            title: "Apprentissage",
            description: "Engagé dans la croissance et l'amélioration continues",
          },
        },
      },
    },
    projects: {
      title: "Mes Projets",
      subtitle: "Explorez mon travail",
      filter: {
        all: "Tous",
        web: "Web",
        mobile: "Mobile",
        ai: "IA",
        security: "Sécurité",
      },
      viewProject: "Voir le Projet",
      viewLive: "Voir en Direct",
      viewCode: "Voir le Code",
    },
    projectDetail: {
      overview: "Aperçu",
      problem: "Problème & Objectif",
      role: "Mon Rôle",
      techStack: "Stack Technique",
      gallery: "Galerie",
      results: "Résultats & Impact",
      navigation: {
        previous: "Projet Précédent",
        next: "Projet Suivant",
      },
    },
    blog: {
      title: "Blog",
      subtitle: "Réflexions, tutoriels et insights",
      readMore: "Lire Plus",
      readTime: "min de lecture",
      backToBlog: "Retour au Blog",
      shareArticle: "Partager cet article",
    },
    contact: {
      title: "Contactez-Moi",
      subtitle: "Travaillons ensemble",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre.email@exemple.com",
        subject: "Sujet",
        subjectPlaceholder: "De quoi s'agit-il ?",
        message: "Message",
        messagePlaceholder: "Parlez-moi de votre projet...",
        send: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès !",
        error: "Échec de l'envoi du message. Veuillez réessayer.",
      },
      info: {
        title: "Informations de Contact",
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
        availability: "Disponibilité",
        availabilityStatus: "Disponible pour des projets freelance",
      },
      social: {
        title: "Connectez-Vous Avec Moi",
      },
      schedule: {
        title: "Planifier une Réunion",
        description: "Vous préférez parler ? Planifiez un appel avec moi",
        button: "Réserver un Appel",
      },
    },
    footer: {
      tagline: "Construire l'avenir, une ligne de code à la fois.",
      quickLinks: "Liens Rapides",
      connect: "Connecter",
      rights: "Tous droits réservés.",
    },
    common: {
      loading: "Chargement...",
      error: "Erreur",
      notFound: "Non Trouvé",
      backHome: "Retour à l'Accueil",
    },
  },
}
 */
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

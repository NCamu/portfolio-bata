"use client";
import React, { useState, useEffect } from "react";
import GlitchName from "./components/GlitchName";
import About from "./components/About";
import Skills from "./components/Skills";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Smartphone,
  Server,
  Database,
  FlagIcon,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "accueil",
        "projets",
        "apropos",
        "competences",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  {
    /* About Section */
  }

  const projects = [
    {
      title: "TAMAGOCHI- Virtual pet",
      description:
        "Application web de simulation d'un animal virtuel avec gestion de l'alimentation, de la santé, du bien-être et des interactions.",
      tech: ["java"],
      role: "developpeur fullstack",
      challenge: "approfondir les connaissances en java, et la POO",
      solution: " ",
      github: "https://github.com/NCamu/pTamago",
      demo: "#",
    },

    //ORANGE x {Epitech}
    {
      title: "ORANGE x {Epitech} - outil de gestion de projet",
      description:
        "outil Agent IA de gestion de projet capable de planifier des taches de maintenance en fonction d'un reseau client defini par un achitecte (prend en parametre different type de documents, .xlsx .pdf) et modulable selon ses besoins, et renvoint des rapports de maintenance necessaire et un plan d'action detaillé pour les techniciens.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Groq"],
      role: "developpeur du prompt, et du front end",
      challenge:
        "utilisation de Groq pour la partie RAG, et integration dans une application web",
      solution: " ",
      github: "#",
      demo: "https://www.canva.com/design/DAHAubUAyFI/VFR5FS5gSJPGDVTQ5jAWqQ/edit ",
    },

    //  MSN MESSAGER
    {
      title: "MSN messager - clone de Discode",
      description:
        "clone de Discord en React avec authentification, salons de discussion.",
      tech: ["React", "Node.js", "Express", "MongoDB", "websockets"],
      role: "developpeur fullstack",
      challenge: "Première integration d'un web socket.",
      solution: " ",
      github: "https://github.com/EpitechMscProPromo2028/T-JSF-600-NCE_2",
      demo: "# ",
    },
    //  CONCIERGE IA
    {
      title: "CONCIERGE IA - Application web",
      description:
        "Conception d'une IA de conciergerie hôtelière avec RAG (LlamaIndex) : Q&A clients, réservation services, informations géolocalisées, API météo temps réel et système de recommandation basé sur les préférences utilisateur.",
      tech: ["Python", "OpenAI", "LlamaIndex"],
      role: "Product Owner, SCRUM Master - RAG & Embeddings vectoriels",
      challenge:
        "Première immersion LLM : intégration, coûts API, performances.",
      solution:
        "Architecture LlamaIndex avec cache local et synchronisation intelligente.",
      github: "#",
      demo: "https://conciergerie-ai.base44.app/",
    },

    //  ZELDAMAN
    {
      title: "ZELDAMAN - Jeu 2D Java",
      description:
        "Hybride Zelda/Bomberman : collisions AABB, animations sprites, inputs réactifs, rendu tilemap optimisé.",
      tech: ["Java", "JavaFX"],
      role: "Développeur graphismes & OOP",
      challenge:
        "Apprendre Java/OOP, JavaFX, collisions, animations, inputs utilisateur.",
      solution: "Architecture modulaire OOP avec GameLoop 60fps.",
      github: "https://github.com/EpitechMscProPromo2028/T-JAV-501-NCE_1.git",
      demo: "#",
    },

    //  JOBBOARD
    {
      title: "JobBoard - Site recherche d'emploi",
      description:
        "Plateforme fullstack : recherche offres, sessions utilisateur, CRUD sécurisé.",
      tech: ["HTML/CSS", "JavaScript", "PHP", "SQL"],
      role: "Développeur interface utilisateur",
      challenge:
        "Apprendre PHP/SQL, interface intuitive, sessions, formulaires sécurisés.",
      solution: "Backend PHP/MySQL avec validation/sanitisation données.",
      github: "#",
      demo: "#",
    },

    //  HANGMAN
    {
      title: "Hangman 'Telles no Tailes' - Python",
      description:
        "Jeu du pendu terminal avec rendu ASCII art et dictionnaire embarqué.",
      tech: ["Python"],
      role: "Développeur fullstack",
      challenge:
        "Interface terminal, dictionnaire mots, fallback sans import externe.",
      solution:
        "Système résilient avec dictionnaire intégré + ASCII rendering.",
      github: "#",
      demo: "/hangman.py",
    },

    //  MOOVEIT
    {
      title: "MooveIt (team de 5) - App Mobile",
      description:
        "Suivi activité physique gamifié : défis amis, accompagnement vidéo, matching préférences.",
      tech: ["React Native", "TypeScript", "Node.js", "MongoDB"],
      role: "Développeur Fullstack",
      challenge: "App mobile gamifiée performante + matching utilisateurs.",
      solution: "Algo recommandation + streaming vidéo optimisé.",
      github: "#",
      demo: "https://www.canva.com/design/DAGpR9fl2Z0/hKisGn1_0uwIG0P1lPLXzA/edit",
    },

    //  FACEUP
    {
      title: "FaceUp - instagrame Lite",
      description:
        "Partage photos temps réel : caméra, Cloudinary, WebSockets.",
      tech: ["React Native", "Expo", "Cloudinary", "Express", "MongoDB"],
      role: "Développeur Fullstack",
      challenge: "Synchronisation données temps réel multi-utilisateurs.",
      solution: "WebSockets + gestion conflits/permissions avancées.",
      github: "#",
      demo: "#",
    },

    //  LOCAPIC
    {
      title: "Locapic - App géolocalisation",
      description:
        "Gestion favoris lieux : maps, recherche, authentification sécurisée.",
      tech: ["React Native", "Express", "Mongoose", "Bcrypt"],
      role: "Développeur Backend",
      challenge: "Authentification robuste et sécurisée.",
      solution: "Middleware tokens + refresh tokens + hashage Bcrypt.",
      github: "#",
      demo: "#",
    },

    //  HACKATWEET
    {
      title: "Hackatweet (hackathon) - Clone Twitter",
      description:
        "Publication tweets, follow, messagerie instantanée (72h hackathon).",
      tech: ["React", "Express", "MongoDB", "Mongoose"],
      role: "Développeur Frontend",
      challenge: "Site fonctionnel UX/UI en 72h.",
      solution: "Stack MERN optimisée deadlines courtes.",
      github: "#",
      demo: "#",
    },

    //  MORNINGNEWS
    {
      title: "MorningNews - Agrégateur news",
      description:
        "Articles personnalisés : filtres catégories/sources, API externes.",
      tech: ["React", "Express", "MongoDB"],
      role: "Développeur Fullstack",
      challenge: "Fetch/affichage dynamique données externes.",
      solution: "Props typées + optimisation rendu React.",
      github: "#",
      demo: "#",
    },

    //  MYMOOVIZ
    {
      title: "myMOOVIZ - Recommandation films",
      description:
        "Plateforme films : recherche, recommandations API externe, UI moderne.",
      tech: ["React", "Express", "MongoDB"],
      role: "Développeur Fullstack",
      challenge: "Intégration API externe recommandations.",
      solution: "Cache intelligent + lazy loading.",
      github: "#",
      demo: "#",
    },

    //  TICKETHACK
    {
      title: "Tickethack (hackathon) - Clone SNCF",
      description: "Recherche trains, réservation, paiement (72h hackathon).",
      tech: ["HTML/CSS", "JavaScript", "Express", "MongoDB"],
      role: "Développeur Frontend",
      challenge: "Composants flexibles/performants réutilisables.",
      solution: "Design system modulaire.",
      github: "#",
      demo: "#",
    },

    //  WEATHERAPP
    {
      title: "WeatherApp - App météo",
      description: "Interface météo dynamique : API temps réel, prévisions.",
      tech: ["React", "API Météo", "CSS"],
      role: "Développeur Frontend",
      challenge: "Parser/afficher API météo dynamiquement.",
      solution: "Fetch optimisé + rendu conditionnel.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-800">Portfolio</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["accueil", "projets", "apropos", "competences", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors ${
                      activeSection === item
                        ? "text-blue-600 font-semibold"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {item === "apropos"
                      ? "À propos"
                      : item === "competences"
                        ? "Compétences"
                        : item}
                  </button>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {["accueil", "projets", "competences", "apropos", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize text-slate-600 hover:bg-slate-50 rounded"
                  >
                    {item === "apropos"
                      ? "À propos"
                      : item === "competences"
                        ? "Compétences"
                        : item}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section id="accueil" className="my-5 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlitchName />

          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            Développeur Fullstack applications Web & Mobile
          </p>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            En cours de validation de mon diplôme à Epitech pour un Master of
            Science Architecte de Systèmes d’Information (RNCP niveau 7), je
            suis également développeur d’applications web et mobile full-stack
            en freelance (RNCP niveau 6). Très curieux et intéressé par les
            nouvelles technologies et le développement, je suis à la recherche
            d’une alternance afin de continuer à développer mes compétences au
            sein d’une équipe dynamique.{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projets")}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Voir mes projets
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center justify-center gap-2">
              <a
                href="/cv.pdf"
                download
                className="px-8 py-3 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Télécharger mon CV
              </a>
            </button>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      {/*
      <section id="projets" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-black opacity-30"
          style={{
            backgroundImage: `url(/me.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Mes Projets
          </h2>

        </div>
      </section>
      */}
      <section
        id="projets"
        className="py-20 bg-white px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(/me.png)`, // img de moi en bg
          backgroundSize: "auto 60%",
          backgroundPosition: "top",
          backgroundRepeat: "repeat", //repeat pour le moment avant de changé vers un suivie de l'image sur toute la section projet
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white/95 text-4xl font-bold text-slate-900 mb-12 text-center">
            Mes Projets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br 
    from-slate-50/20 
    via-gray-100/20 
    to-cyan-50/20 
    hover:from-fuchsia-100/25 
    hover:to-slate-50/25 
    backdrop-blur-md
    border border-white/10
    rounded-xl 
    p-6 
    hover:shadow-lg 
    transition-all
    duration-700"
              >
                <h3 className="text-white/95 text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-white/95 text-slate-600 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm text-white/95 font-semibold text-slate-700 mb-2">
                    Technologies :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100/60 backdrop-blur-sm text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-white/95 text-sm font-semibold text-slate-700 mb-1">
                    Rôle :
                  </p>
                  <p className="text-white/95 text-slate-600 text-sm">
                    {project.role}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-white/95 text-sm font-semibold text-slate-700 mb-1">
                    Défi :
                  </p>
                  <p className="text-white/95 text-slate-600 text-sm">
                    {project.challenge}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-white/95 text-sm font-semibold text-slate-700 mb-1">
                    Solution :
                  </p>
                  <p className="text-white/95 text-slate-600 text-sm">
                    {project.solution}
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    className="text-white/95 flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-white/95 text-sm font-semibold">
                      Code
                    </span>
                  </a>
                  <a
                    href={project.demo}
                    className="text-white/95 flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-white/95 text-sm font-semibold">
                      Démo
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="apropos" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <About />
      </section>
      ;{/* Skills Section */}
      <section id="competences" className="py-20 px-4 sm:px-6 lg:px-8">
        <Skills />
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Contact</h2>
          <p className="text-lg text-slate-600 mb-10">
            Envie d’échanger autour d’un projet ou d’une opportunité
            professionnelle ? N’hésitez pas à me contacter.{" "}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:nicolas.camuzard@epitech.eu"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-camuzard-alexandre-epitech-developpeur-web-mobile/"
              target="_blank"
              rel="linkedin.com/in/nicolas-camuzard-alexandre-epitech-developpeur-web-mobile/"
              className="flex items-center gap-3 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/NCamu"
              target="_blank"
              rel="github.com/NCamu"
              className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-black transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400">
            © 2025 CAMUZARD-Nicolas - Tous droits réservés
          </p>
          <div className="flex gap-7">
            <a
              href="https://github.com/NCamu"
              target="_blank"
              rel="github.com/NCamu"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-camuzard-alexandre-epitech-developpeur-web-mobile/"
              target="_blank"
              rel="linkedin.com/in/nicolas-camuzard-alexandre-epitech-developpeur-web-mobile/"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

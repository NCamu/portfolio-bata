import React, { useState, useEffect } from "react";
import TechPieChart from "./TechPieChart";
import { Github, ExternalLink } from "lucide-react";

const CardProject = () => {
  // État pour stocker l'offset du scroll
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Passive: true améliore les performances de scroll sur mobile
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    // DISCORD CLONE
    {
      title: "RTC DISCORD ",
      description: "Clone de Discord ",
      tech: [
        "React",
        "TypeScript",
        "web-socket",
        "Node.js",
        "tailwind",
        "docker",
        "MongoDB",
      ],
      role: "developpeur fullstack",
      challenge:
        "en React avec authentification, salons de discussion, et intégration Web-SOCKET pour la communication en temps réel.multi channels, messages privés, gestion utilisateurs, et une interface utilisateur moderne et responsive.",
      solution: " ",
      github: "https://github.com/EpitechMscProPromo2028/T-JSF-600-NCE_2",
      demo: "#",
    },

    // FAMILYPLAN
    {
      title: "FAMILYPLAN",
      description: "Application web de gestion de planification familiale, ",
      tech: ["React", "TypeScript", "NestJS", "CSS", "tailwind", "Prisma"],
      role: "developpeur fullstack",
      challenge:
        "creation d'une application de gestion de planification familiale, apprendre a utilisé prisma, et approfondir les connaissances en NestJS",
      solution: " ",
      github: "https://github.com/NCamu/familyPlan",
      demo: "#",
    },

    // MONITORINGCLUB
    {
      title: "MONITORINGCLUB",
      description:
        "Application web de monitoring/gestion des performances de joueurs d'une equipe de football, ",
      tech: ["React", "TypeScript", "NestJS", "CSS"],
      role: "developpeur fullstack",
      challenge: "apprendre NestJS, et approfondir les connaissances en React",
      solution: " ",
      github: "https://github.com/NCamu/monitoringClub",
      demo: "#",
    },
    // TAMAGOCHI
    {
      title: "TAMAGOCHI- Virtual pet",
      description:
        "Application web de simulation d'un animal virtuel avec gestion de l'alimentation, de la santé, du bien-être et des interactions.",
      tech: ["Java"],
      role: "developpeur software orienté objet",
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
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Groq",
        "CSS",
        "JavaScript",
      ],
      role: "developpeur du prompt, et du front end",
      challenge:
        "utilisation de Groq pour la partie RAG, et integration dans une application web",
      solution: " ",
      github: "#",
      demo: "https://www.canva.com/design/DAHAubUAyFI/VFR5FS5gSJPGDVTQ5jAWqQ/edit ",
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
      tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
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
      tech: ["React Native", "TypeScript", "Node.js", "MongoDB", "CSS", "API"],
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
      tech: [
        "React Native",
        "Expo",
        "Cloudinary",
        "Express",
        "MongoDB",
        "CSS",
        "API",
        "JavaScript",
      ],
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
      tech: [
        "React Native",
        "Express",
        "Mongoose",
        "Bcrypt",
        "CSS",
        "API",
        "JavaScript",
      ],
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
      tech: [
        "React",
        "Express",
        "MongoDB",
        "Mongoose",
        "CSS",
        "API",
        "JavaScript",
      ],
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
      tech: ["React", "Express", "MongoDB", "CSS", "JavaScript", "API"],
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
      tech: ["React", "Express", "MongoDB", "CSS", "API", "JavaScript"],
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
      tech: ["HTML", "CSS", "JavaScript", "Express", "MongoDB"],
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
      tech: ["React", "API", "CSS", "JavaScript"],
      role: "Développeur Frontend",
      challenge: "Parser/afficher API météo dynamiquement.",
      solution: "Fetch optimisé + rendu conditionnel.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <>
      <section
        id="projets"
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `url(/me1.jpeg)`,
          /* 1. Fixed est crucial ici : l'image reste immobile par rapport à la fenêtre */
          backgroundAttachment: "fixed",
          /* 2. On centre l'image horizontalement */
          backgroundPosition: "center center",
          /* 3. Cover assure que l'image remplit tout l'espace de la section, peu importe sa longueur */
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay pour la lisibilité - Correction du z-index pour être derrière le texte mais devant l'image */}
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px] z-0" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-white text-5xl font-bold mb-12 text-center">
            Mes Projets
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-500 group"
              >
                {/* ... (le reste de ton code de carte reste identique) ... */}
                <h3 className="text-white text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-200 mb-4 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-300 mb-2">
                    Technologies :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-500/20 text-blue-100 border border-blue-500/30 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-300 mb-1">
                    Défi :
                  </p>
                  <p className="text-slate-300 text-xs italic line-clamp-2">
                    "{project.challenge}"
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-semibold">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-semibold">Démo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Graphique */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TechPieChart projects={projects} />
        </div>
      </div>
    </>
  );
};

export default CardProject;

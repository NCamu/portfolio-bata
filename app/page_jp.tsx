"use client";
import React, { useState, useEffect } from "react";
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
  const [glitchActive, setGlitchActive] = useState(false);

  const normalName = "CAMUZARD Nicolas";
  const japName = "カミュザール 二コラ";
  const twName = "卡穆扎爾 尼可拉";

  // Mapping direct des segments
  const nameSegments = [
    { normal: "CA", glitchTw: "卡", glitchJp: "カ" },
    { normal: "MU", glitchTw: "穆", glitchJp: "ミュ" },
    { normal: "ZA", glitchTw: "扎", glitchJp: "ザ" },
    { normal: "RD", glitchTw: "爾", glitchJp: "ール" },
    { normal: " ", glitchTw: " ", glitchJp: " " },
    { normal: "Ni", glitchTw: "尼", glitchJp: "二" },
    { normal: "co", glitchTw: "可", glitchJp: "コ" },
    { normal: "las", glitchTw: "拉", glitchJp: "ラ" },
  ];
  const glitchText = () => {
    return nameSegments
      .map((segment) => {
        const rand = Math.random();
        if (rand < 0.4) return segment.glitchJp;
        if (rand < 0.7) return segment.glitchTw;
        return segment.normal;
      })
      .join("");
  };

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);
  {
    /*}
  const glitchText = () => {
    return nameSegments
      .map((segment) => {
        return Math.random() < 0.7 ? segment.glitch : segment.normal;
      })
      .join("");
  };

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);
*/
  }
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "accueil",
        "projets",
        "competences",
        "apropos",
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  {
    /* About Section */
  }

  const projects = [
    {
      title: "CONCIERGE IA - Application web",
      description:
        "creation d'une IA de conciergerie pour les hotels, capable de repondre aux questions des clients, de les aider a reserver des services et de leur fournir des informations sur l'hotel et les environs, couplé a une api meteo, et un algorythme de recommandation d'activité suivant les preference client ",
      tech: ["python", "open ai", "llama2"],
      role: "SCRUM Master et en charge du developpement du RAG et de l'embedding",
      challenge:
        "ce fut la premiere fois que je travaillais avec des modeles de langage, il a fallu apprendre a les integrer, a gerer les couts d'appel aux api, et a optimiser les performances tout en minimisant les couts",
      solution:
        "Mise en place d'une architecture optimisée avec llama_index gestion du cache local et synchronisation intelligente",
      github: "#",
      demo: "https://conciergerie-ai.base44.app/",
    },
    {
      title: "ZELDAMAN - jeux 2D en java",
      description:
        "creation d'un jeux 2D en java inspiré de zelda et Bomberman, avec gestion des collisions, des animations, des inputs utilisateur et de l'affichage a l'ecran",
      tech: ["java", "javafx"],
      role: "Développement d'asset graphique,et d'Objets (OOP)",
      challenge:
        "apprendre le java et le OOP, apprendre javafx, gerer les collisions, les animations, les inputs utilisateur et l'affichage a l'ecran",
      solution:
        "Mise en place d'une architecture optimisée avec gestion du cache local et synchronisation intelligente",
      github: "#",
      demo: "#",
    },
    {
      title: "JobBoard - site web de recherche d'emploi",
      description: " ",
      tech: ["HTML+CSS", "JavaScript", "PHP", "SQL"],
      role: "Développement d'asset graphique",
      challenge:
        "apprendre le php et le SQL, faire une interface utilisateur, gerer les sessions utilisateurs, les formulaires et la securité des donnees",
      solution:
        "Mise en place d'une architecture optimisée avec gestion du cache local et synchronisation intelligente",
      github: "#",
      demo: "#",
    },

    {
      title: "Hangman Telles no teles - phython pure",
      description:
        "jeux du pendu en ligne de commande et representation graphique en ascii art",
      tech: ["python"],
      role: "Développeur Fullstack",
      challenge:
        "apprendre le python,faire une interface dans le terminal, importé un dictionnaire de mot et l'utilisé,et prevoir le bon fonctionnement du jeux meme sans import",
      solution:
        "Mise en place d'une architecture optimisée avec gestion du cache local et synchronisation intelligente",
      github: "#",
      demo: "#",
    },
    {
      title: "MooveIt (dans une team de 5)- Application Mobile",
      description:
        "Application gamifiée de suivi d'activité physique avec défis entre amis",
      tech: ["React-Native", "TypeScript", "Node.js", "MongoDB"],
      role: "Développeur Fullstack",
      challenge:
        "cree  une aplication mobile gamifié et performante pour monitoré l'évolutions des utilisateurs, avec un accompagnement video. et mise en relation (suivant leurs preferences) des utilisateurs",
      solution:
        "Mise en place d'une architecture optimisée avec gestion du cache local et synchronisation intelligente",
      github: "#",
      demo: "#",
    },
    {
      title: "FaceUp - Application Mobile ",
      description: "Réseau social mobile avec partage de photos,",
      tech: ["React", "Express", "MongoDB"],
      role: "Développeur FullStack",
      challenge:
        "Assurer la cohérence des données entre utilisateurs en temps réel",
      solution:
        "Implémentation de WebSockets avec gestion des conflits et système de permissions",
      github: "#",
      demo: "#",
    },
    {
      title: "FaceUp - Application Mobile ",
      description: "Réseau social mobile avec partage de photos,",
      tech: [
        "React-Native",
        "Expo Go",
        "Expo Camera",
        "Cloudinary",
        "tokenify",
        "Express",
        "MongoDB",
      ],
      role: "Développeur FullStack",
      challenge:
        "Assurer la cohérence des données entre utilisateurs en temps réel",
      solution:
        "Implémentation de WebSockets avec gestion des conflits et système de permissions",
      github: "#",
      demo: "#",
    },

    {
      title: "Locapic - application Mobile",
      description:
        "application de geolocalisation et de gestion de favoris de lieux",
      tech: ["React-Native", "Express", "Mongoose", "Bcrypt"],
      role: "Développeur Backend",
      challenge: "Créer un système d'authentification robuste et sécurisé",
      solution:
        "Architecture middleware avec validation des tokens, refresh tokens et hashage bcrypt",
      github: "#",
      demo: "#",
    },
    {
      title: "Hackatweet (hackathon en équipe) - clone de Twitter",
      description:
        "création d'un clone de twitter avec fonctionnalités de base telles que la publication de tweets, le suivi d'utilisateurs et la messagerie instantanée",
      tech: ["React", "mongoose", "MongoDB", "tokenify", "Express"],
      role: "Développeur frontend",
      challenge: "créer en 72h un site fonctionnel avec une bonne UX/UI",
      solution: "#",
      github: "#",
      demo: "#",
    },
    {
      title: "MorningNews",
      description:
        "agrégateur d'articles de presse personnalisés avec filtres par catégorie et source",
      tech: ["React", "mongoose", "MongoDB", "tokenify", "Express"],
      role: "Développeur fullStack",
      challenge:
        "fetcher et afficher dynamiquement des données externes via une API",
      solution:
        "Architecture modulaire avec props typées et optimisation du rendu",
      github: "#",
      demo: "#",
    },

    {
      title: "myMOOVIZ - application web de recommandation de films",
      description:
        "création d'un clone de twitter avec fonctionnalités de base telles que la publication de tweets, le suivi d'utilisateurs et la messagerie instantanée",
      tech: ["React", "mongoose", "MongoDB", "tokenify", "Express"],
      role: "Développeur fullStack",
      challenge: "utiliser une API externe pour les recommandations de films",
      solution: "#",
      github: "#",
      demo: "#",
    },
    {
      title:
        "Tickethack (hackathon en équipe) - clone d'un site de vente de billets SNCF",
      description:
        "Creation d'un clone d'un site de vente de billets SNCF avec fonctionnalités de recherche, réservation et paiement",
      tech: [
        "HTML+CSS",
        "mongoose",
        "MongoDB",
        "tokenify",
        "Express",
        "JavaScript",
        "vercel",
      ],
      role: "Développeur frontend",
      challenge: "Créer des composants flexibles et performants réutilisables",
      solution: "#",
      github: "#",
      demo: "#",
    },
    {
      title: "WeatherApp - application web météo",
      description: "creation d'un clone de weather",
      tech: ["React", "API météo", "CSS", "json"],
      role: "Développeur frontend",
      challenge:
        "fetchér/scapper l'api de wether et afficher dynamiquement les données",
      solution: "#",
      github: "#",
      demo: "#",
    },
  ];

  const skills = {
    langages: [
      "HTML+CSS",
      "JavaScript",
      "TypeScript",
      "Lua",
      "C",
      "PHP (notions)",
      "SQL",
      "Python",
      "Java",
    ],
    frameworks: [
      "React",
      "React Native",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Mongoose",
    ],
    outils: [
      "Git",
      "VS Code",
      "MongoDB",
      "JWT",
      "Bcrypt",
      "Next.js",
      "Expo Go",
      "Cloudinary",
      "canvas",
      "Figma",
      "excalidraw",
      "Jenkins",
      "Docker",
    ],
    soft: [
      "Communication",
      "Pédagogie",
      "Gestion de projet",
      "Vente",
      "Travail d'équipe",
    ],
    spoken: ["Français (natif)", "Anglais (professionnel)", "Japonais (B2)"],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-800">Portfolio</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["accueil", "projets", "competences", "apropos", "contact"].map(
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
                )
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
                )
              )}
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section id="accueil" className="my-5 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 relative"
            onMouseEnter={() => setGlitchActive(true)}
            onMouseLeave={() => setGlitchActive(false)}
            style={{ fontFamily: "monospace" }}
          >
            {glitchActive ? glitchText() : normalName}
            <style>{`
              @keyframes glitch {
                0% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
                100% { transform: translate(0); }
              }
            `}</style>
          </h1>
          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            Développeur Fullstack applications Web & Mobile
          </p>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Je crée des applications web et mobile modernes, performantes et
            centrées sur l'expérience utilisateur tout en respectant le S.E.O.
            ;D
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
      <section id="projets" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Mes Projets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br 
                from-slate-50 
                via-gray-100 
                to-cyan-50 
                rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    Technologies :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    Rôle :
                  </p>
                  <p className="text-slate-600 text-sm">{project.role}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    Défi :
                  </p>
                  <p className="text-slate-600 text-sm">{project.challenge}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    Solution :
                  </p>
                  <p className="text-slate-600 text-sm">{project.solution}</p>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm font-semibold">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm font-semibold">Démo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="apropos" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">À propos</h2>
          <p
            className="bg-gradient-to-br 
                from-slate-50 
                via-gray-100 
                to-fuchsia-50 
                rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            {/*</p> <p className="text-lg text-slate-600 leading-relaxed">*/}
            Passionné par le développement web et mobile, je me suis reconverti
            dans la tech après 10 ans d'expérience en vente. Cette transition
            m'a permis d'acquérir une double compétence technique et
            relationnelle précieuse en entreprise. J'aime créer des solutions
            élégantes à des problèmes complexes, en mettant toujours
            l'utilisateur au centre de mes préoccupations. Ma philosophie : du
            code propre, des interfaces intuitives et une communication claire
            avec les équipes. J'ai intégré l'école Epitech Nice en 2025 afin
            d'approfondir mes connaissances. Je suis actuellement à la recherche
            d'une alternance pour continuer à développer mes compétences au sein
            d'une équipe dynamique.
          </p>
        </div>
      </section>
      ;{/* Skills Section */}
      <section id="competences" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Compétences
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-600" size={28} />
                <h3 className="text-xl font-bold text-slate-900">Langages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.langages.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="text-blue-600" size={28} />
                <h3 className="text-xl font-bold text-slate-900">
                  Frameworks / Libs
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-blue-600" size={28} />
                <h3 className="text-xl font-bold text-slate-900">
                  Outils / Tech
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.outils.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-blue-600" size={28} />
                <h3 className="text-xl font-bold text-slate-900">
                  Soft Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FlagIcon className="text-blue-600" size={28} />
                <h3 className="text-xl font-bold text-slate-900">
                  Spoken Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.spoken.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Contact</h2>
          <p className="text-lg text-slate-600 mb-10">
            Envie de discuter d'un projet ou d'une opportunité ? N'hésitez pas à
            me contacter !
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

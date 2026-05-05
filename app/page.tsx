"use client";
import React, { useState, useEffect } from "react";
import GlitchName from "./components/GlitchName";
import About from "./components/About";
import Skills from "./components/Skills";
import CardProject from "./components/cardProject";
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
      {/*projet*/}
      <CardProject />
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

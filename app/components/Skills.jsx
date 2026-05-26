"use client";

import { Code, Smartphone, Server, Database, Flag } from "lucide-react";

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
    "WebSockets",
  ],
  soft: [
    "Communication",
    "Pédagogie",
    "Gestion de projet",
    "Vente",
    "Travail d'équipe",
    "Leadership",
    "Adaptabilité",
    "Résolution de problèmes",
    "Esprit analytique",
    "Gestion du temps",
  ],
  spoken: ["Français (natif)", "Anglais (professionnel)", "Japonais (B2)"],
};

const Skills = () => {
  return (
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
                Compétences non techniques
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
              <Flag className="text-blue-600" size={28} />{" "}
              <h3 className="text-xl font-bold text-slate-900">
                Langages Parlées
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
  );
};

export default Skills;

import { Download } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-slate-900 mb-10 text-center">
        À propos
      </h2>

      <div className="bg-gradient-to-br from-slate-50 via-gray-100 to-fuchsia-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow space-y-10">
        {/* Introduction */}
        <p className="text-lg text-slate-700 leading-relaxed">
          Profil professionnel polyvalent à l'interface entre{" "}
          <strong>technique</strong>, <strong>produit</strong> et{" "}
          <strong>humain</strong>. Mon parcours m'a amené à évoluer dans des
          contextes variés, parfois flous ou sous tension, en m'appuyant sur une
          logique constante :{" "}
          <em>
            comprendre avant d'agir, structurer avant d'accélérer, coopérer
            avant d'imposer
          </em>
          .
        </p>

        {/* Pédagogie & Communication */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Pédagogie & communication
          </h3>
          <p className="text-slate-700 leading-relaxed">
            J'accorde une grande importance à l'adaptation du discours.
            J'explique avec des images simples quand c'est nécessaire, j'écoute
            avant de corriger et je privilégie une approche non conflictuelle.
            En équipe, je préfère dire
            <em> « on regarde ça ensemble »</em> plutôt que pointer une erreur,
            en tenant compte du niveau hiérarchique et du contexte émotionnel.
          </p>
        </div>

        {/* Gestion de projet */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Gestion de projet & organisation
          </h3>
          <p className="text-slate-700 leading-relaxed">
            J'aborde les projets avec une vision globale que je décline ensuite
            en étapes simples, testables et documentées. Architecture,
            priorisation, suivi et validation font partie intégrante de mon
            processus. En situation d'incertitude, je recadre les objectifs,
            identifie les blocages et ajuste les ressources selon l'avancement
            réel.
          </p>
        </div>

        {/* Travail d'équipe */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Travail d'équipe & leadership
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Je privilégie un leadership de situation, basé sur le cadre et la
            clarté plutôt que sur l'autorité. Lorsqu'une équipe bloque, je
            redonne du sens, identifie les forces et faiblesses, puis structure
            l'action. En cas de difficulté individuelle, je cherche d'abord à
            comprendre avant d'escalader de manière factuelle et responsable.
          </p>
        </div>

        {/* Analyse */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Analyse & résolution de problèmes
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Face à un problème complexe ou intermittent, je procède par filtrage
            progressif : isolation, réduction du périmètre, observation, test et
            documentation. Mon approche est analytique, structurée et orientée
            résultats, aussi bien sur des sujets techniques qu'organisationnels.
          </p>
        </div>

        {/* Adaptabilité */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Adaptabilité & prise de décision
          </h3>
          <p className="text-slate-700 leading-relaxed">
            À l'aise dans les environnements changeants, je cherche toujours à
            comprendre l'intention, le cadre décisionnel et la marge de
            négociation avant d'agir. Je m'adapte ensuite de manière
            proportionnée aux enjeux, aux rôles et aux contraintes réelles.
          </p>
        </div>

        {/* Apprentissage */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Apprentissage & curiosité
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Autonome et curieux, j'apprends rapidement en combinant
            compréhension globale, pratique immédiate et validation par
            l'exercice. Je mobilise documentation, veille, échanges et outils
            d'IA pour assimiler efficacement de nouveaux concepts ou
            technologies.
          </p>
        </div>

        {/* Culture & relationnel */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Débat, recul & relationnel
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Je sais défendre un point de vue sans rigidité, en privilégiant les
            questions et l'argumentation factuelle. Ma culture générale, nourrie
            par la philosophie, la fiction et l'analyse des systèmes complexes,
            influence ma manière de penser. J'utilise l'humour avec discernement
            comme outil de cohésion et de désamorçage.
          </p>
        </div>

        {/* Synthèse */}
        <div className="border-t pt-6">
          <p className="text-slate-800 font-medium leading-relaxed">
            En synthèse : un profil structuré, fiable et humain, capable de
            faire le lien entre complexité technique, enjeux produit et
            dynamiques collectives, avec une approche pragmatique, réfléchie et
            orientée action.
          </p>
        </div>

        <a
          href="/analyse.pdf"
          download
          className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold ml-60 px-6 py-4"
        >
          <Download size={20} />
          Télécharger le Bilan Complet
        </a>
      </div>
    </div>
  );
};

export default About;

import { fichesDe } from "../data/fiches";
import { MATIERES, TOUTES_MATIERES, libelleMatiere } from "../data/matieres";
import IconeMatiere from "./IconeMatiere";
import { PARCOURS, MOMENTS } from "../data/parcours";
import { BIENVENUE, DEFI } from "../data/accueil";
import { lireProgression } from "../data/progression";
import FicheMini from "./FicheMini";
import { Progression } from "./Parcours";
import logoVertical from "../assets/rohilova-logo-vertical-clair.svg";
import {
  GraduationCap, BookOpen, Map, MessagesSquare, Route, Target, ArrowRight,
} from "lucide-react";

const RACCOURCIS = [
  { id: "former", label: "Se former", icone: GraduationCap,
    texte: "Les cadres de la didactique et les méthodes pour intégrer l'EDD, dans toutes les matières." },
  { id: "ressources", label: "Ressources", icone: BookOpen,
    texte: "Les fiches de votre matière et les programmes officiels du PE 2026." },
  { id: "carte", label: "Carte", icone: Map,
    texte: "Les pratiques sociales, région par région : une même pratique, plusieurs matières." },
  { id: "communaute", label: "Communauté", icone: MessagesSquare,
    texte: "L'entraide entre collègues. Ouverture prochaine." },
];

export default function Accueil({ aller, matiere, matiereChoisie, choisirMatiere }) {
  // Les trois fiches les plus récentes de la matière choisie
  // (date au format « 2026-09 »)
  const dernieres = [...fichesDe(matiere)]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <section className="accueil-hero">
        <img
          src={logoVertical}
          alt="ROHILOVA : Éducation, Formation, Durabilité"
          className="accueil-logo"
          width="240"
        />
        <div>
          <h1 className="accueil-titre">{BIENVENUE.titre}</h1>
          <p className="accueil-texte">{BIENVENUE.texte}</p>
        </div>
      </section>

      {matiereChoisie === null && <ChoixMatiere onChoisir={choisirMatiere} />}

      {PARCOURS.map((p) => (
        <CarteParcours key={p.id} parcours={p} aller={aller} />
      ))}

      <section className="accueil-defi">
        <p className="accueil-defi-mois">
          <Target size={16} /> Défi du mois · {DEFI.mois}
        </p>
        <h2 className="accueil-defi-titre">{DEFI.titre}</h2>
        <p>{DEFI.texte}</p>
        <button
          className="bouton-suivant"
          onClick={() => aller("carte", { notion: DEFI.notion })}
        >
          Voir la carte <ArrowRight size={16} />
        </button>
      </section>

      <section className="accueil-bloc">
        <h2 className="accueil-bloc-titre">
          Dernières fiches
          {matiere !== TOUTES_MATIERES && " · " + libelleMatiere(matiere)}
        </h2>
        {dernieres.length === 0 ? (
          <p className="accueil-aucune">
            Les premières fiches de cette matière sont en cours d'élaboration.
          </p>
        ) : (
          dernieres.map((f) => (
            <FicheMini
              key={f.id}
              fiche={f}
              avecMatiere={matiere === TOUTES_MATIERES}
              onClick={() => aller("ressources", { fiche: f.id })}
            />
          ))
        )}
        <button className="lien-bouton" onClick={() => aller("ressources")}>
          Toutes les ressources <ArrowRight size={15} />
        </button>
      </section>

      <section className="accueil-bloc">
        <h2 className="accueil-bloc-titre">Explorer Rohilova</h2>
        <div className="raccourcis">
          {RACCOURCIS.map((r) => {
            const Icone = r.icone;
            return (
              <button key={r.id} className="raccourci" onClick={() => aller(r.id)}>
                <Icone size={22} className="raccourci-icone" />
                <span className="raccourci-label">{r.label}</span>
                <span className="raccourci-texte">{r.texte}</span>
              </button>
            );
          })}
        </div>
      </section>

      <p className="accueil-pied">
        Rohilova, version 0.1 · École Normale Supérieure de Fianarantsoa ·
        Université d'Antananarivo
      </p>
    </>
  );
}

// ─── Première visite : quelle matière enseignez-vous ? ───────
function ChoixMatiere({ onChoisir }) {
  return (
    <section className="choix-matiere">
      <h2 className="accueil-bloc-titre">Quelle matière enseignez-vous ?</h2>
      <p className="carte-aide">
        Rohilova affichera d'abord les contenus de votre matière. Vous pourrez
        changer à tout moment avec la barre des matières, en haut de l'écran.
      </p>
      <div className="choix-matiere-grille">
        {MATIERES.map((m) => (
          <button key={m.id} className="choix-matiere-bouton" onClick={() => onChoisir(m.id)}>
            <IconeMatiere id={m.id} size={20} />
            {m.label}
          </button>
        ))}
        <button
          className="choix-matiere-bouton"
          onClick={() => onChoisir(TOUTES_MATIERES)}
        >
          <IconeMatiere id={TOUTES_MATIERES} size={20} />
          Plusieurs matières
        </button>
      </div>
    </section>
  );
}

// ─── Le parcours : commencer, continuer ou revoir ────────────
function CarteParcours({ parcours, aller }) {
  const faites = lireProgression(parcours);
  const total = parcours.etapes.length;
  const prochaine = parcours.etapes.find((e) => !faites.includes(e));
  const moment = MOMENTS.find((m) => m.id === prochaine);

  let titre = "Votre premier parcours";
  let action = "Commencer le parcours";
  if (faites.length > 0 && prochaine) {
    titre = "Reprendre votre parcours";
    action = moment ? "Continuer : " + moment.id + ", " + moment.titre : "Continuer";
  }
  if (!prochaine) {
    titre = "Parcours terminé";
    action = "Revoir le parcours";
  }

  return (
    <section className="accueil-parcours">
      <p className="accueil-parcours-etiquette">
        <Route size={16} /> {titre}
      </p>
      <h2 className="accueil-bloc-titre">{parcours.titre}</h2>
      <Progression faites={faites.length} total={total} />
      <button
        className="bouton-suivant"
        onClick={() => aller("former", { parcours: parcours.id })}
      >
        {action} <ArrowRight size={16} />
      </button>
    </section>
  );
}

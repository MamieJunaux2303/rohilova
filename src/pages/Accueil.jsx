import { FICHES } from "../data/fiches";
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
    texte: "Les cadres de la didactique et le parcours des sept moments." },
  { id: "ressources", label: "Ressources", icone: BookOpen,
    texte: "Les fiches et les programmes officiels du PE 2026." },
  { id: "carte", label: "Carte", icone: Map,
    texte: "Les pratiques sociales, région par région et district par district." },
  { id: "communaute", label: "Communauté", icone: MessagesSquare,
    texte: "L'entraide entre collègues. Ouverture prochaine." },
];

export default function Accueil({ aller }) {
  // Les trois fiches les plus récentes (date au format « 2026-09 »)
  const dernieres = [...FICHES]
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
          Voir la carte : {DEFI.notion.toLowerCase()} <ArrowRight size={16} />
        </button>
      </section>

      <section className="accueil-bloc">
        <h2 className="accueil-bloc-titre">Dernières fiches</h2>
        {dernieres.map((f) => (
          <FicheMini key={f.id} fiche={f} onClick={() => aller("ressources", { fiche: f.id })} />
        ))}
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

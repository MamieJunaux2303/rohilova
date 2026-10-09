import { libelleNiveau } from "../data/fiches";
import { libelleMatiere } from "../data/matieres";

// Une fiche en version courte, utilisée sur l'Accueil et la Carte
// avecMatiere : afficher aussi la matière de la fiche
export default function FicheMini({ fiche, onClick, avecMatiere = false }) {
  return (
    <button className="fiche-mini" onClick={onClick}>
      <span className="fiche-mini-titre">{fiche.titre}</span>
      <span className="fiche-mini-pratique">{fiche.pratique}</span>
      <span className="fiche-mini-meta">
        {avecMatiere && libelleMatiere(fiche.discipline) + ", "}
        {fiche.type}, {libelleNiveau(fiche.niveau)}, {fiche.notion}
      </span>
    </button>
  );
}

import { libelleNiveau } from "../data/fiches";

// Une fiche en version courte, utilisée sur l'Accueil et la Carte
export default function FicheMini({ fiche, onClick }) {
  return (
    <button className="fiche-mini" onClick={onClick}>
      <span className="fiche-mini-titre">{fiche.titre}</span>
      <span className="fiche-mini-pratique">{fiche.pratique}</span>
      <span className="fiche-mini-meta">
        {fiche.type}, {libelleNiveau(fiche.niveau)}, {fiche.notion}
      </span>
    </button>
  );
}

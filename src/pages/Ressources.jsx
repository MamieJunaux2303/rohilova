import { useState } from "react";
import { FICHES, NIVEAUX, NOTIONS, TYPES } from "../data/fiches";
import { MapPin, GraduationCap, BadgeCheck, Search, X } from "lucide-react";

const TOUS = "Tous";

function sansAccent(texte) {
  return texte
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function Ressources() {
  const [recherche, setRecherche] = useState("");
  const [niveau, setNiveau] = useState(TOUS);
  const [notion, setNotion] = useState(TOUS);
  const [type, setType] = useState(TOUS);

  const mots = sansAccent(recherche.trim());

  const resultats = FICHES.filter((f) => {
    if (niveau !== TOUS && f.niveau !== niveau) return false;
    if (notion !== TOUS && f.notion !== notion) return false;
    if (type !== TOUS && f.type !== type) return false;

    if (mots === "") return true;

    const contenu = sansAccent(
      [f.titre, f.pratique, f.resume, f.notion, f.region, f.enjeu, f.nomVernaculaire].join(" ")
    );
    return contenu.includes(mots);
  });

  const filtreActif = niveau !== TOUS || notion !== TOUS || type !== TOUS || recherche !== "";

  function reinitialiser() {
    setRecherche("");
    setNiveau(TOUS);
    setNotion(TOUS);
    setType(TOUS);
  }

  return (
    <>
      <h1 className="titre-page">Ressources</h1>
      <p className="intro-page">
        Séquences, activités et outils d'évaluation contextualisés, reliant
        une notion de chimie à une pratique sociale et à un enjeu de durabilité.
      </p>

      <div className="barre-recherche">
        <Search size={18} className="icone-recherche" />
        <input
          type="search"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          placeholder="Rechercher une notion, une pratique, une région…"
          aria-label="Rechercher une fiche"
        />
      </div>

      <div className="filtres">
        <Filtre label="Niveau" valeur={niveau} options={NIVEAUX} onChange={setNiveau} />
        <Filtre label="Notion" valeur={notion} options={NOTIONS} onChange={setNotion} />
        <Filtre label="Type" valeur={type} options={TYPES} onChange={setType} />
      </div>

      <div className="ligne-compteur">
        <span className="compteur">
          {resultats.length} fiche{resultats.length > 1 ? "s" : ""}
        </span>
        {filtreActif && (
          <button className="bouton-reset" onClick={reinitialiser}>
            <X size={14} /> Réinitialiser
          </button>
        )}
      </div>

      {resultats.length === 0 ? (
        <div className="vide">
          <p className="vide-titre">Aucune fiche ne correspond</p>
          <p>
            Essayez d'élargir la recherche ou de retirer un filtre. Le fonds
            s'enrichit progressivement.
          </p>
        </div>
      ) : (
        <div className="grille-fiches">
          {resultats.map((f) => (
            <article key={f.id} className="fiche">
              <div className="fiche-haut">
                <span className="etiquette">{f.type}</span>
                {f.valide && (
                  <span className="etiquette valide">
                    <BadgeCheck size={13} /> Validé
                  </span>
                )}
              </div>

              <h2 className="fiche-titre">{f.titre}</h2>
              <p className="fiche-pratique">{f.pratique}</p>
              <p className="fiche-resume">{f.resume}</p>

              <div className="fiche-meta">
                <span><GraduationCap size={14} /> {f.niveau}</span>
                <span><MapPin size={14} /> {f.region}</span>
              </div>

              <div className="fiche-notion">
                <strong>Notion :</strong> {f.notion}
                <br />
                <strong>Enjeu :</strong> {f.enjeu}
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

function Filtre({ label, valeur, options, onChange }) {
  return (
    <label className="filtre">
      <span className="filtre-label">{label}</span>
      <select value={valeur} onChange={(e) => onChange(e.target.value)}>
        <option value={TOUS}>{TOUS}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
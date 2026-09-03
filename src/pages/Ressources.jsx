import { useState } from "react";
import {
  FICHES, NOTIONS, TYPES, NIVEAUX,
  CURRICULUMS, SERIES, libelleSerie,
} from "../data/fiches";
import {
  MapPin, GraduationCap, BadgeCheck, Search, X,
  Download, ArrowLeft, BookMarked, Lightbulb, Leaf,
} from "lucide-react";
import BlocProgrammes from "./BlocProgrammes";

const TOUS = "Tous";

function sansAccent(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export default function Ressources() {
  const [curriculum, setCurriculum] = useState("ancien");
  const [recherche, setRecherche] = useState("");
  const [niveau, setNiveau] = useState(TOUS);
  const [serie, setSerie] = useState(TOUS);
  const [notion, setNotion] = useState(TOUS);
  const [type, setType] = useState(TOUS);
  const [ficheOuverte, setFicheOuverte] = useState(null);

  if (ficheOuverte) {
    return <FicheDetail fiche={ficheOuverte} onRetour={() => setFicheOuverte(null)} />;
  }

  const seriesDispo = SERIES[curriculum].filter(
    (s) => niveau === TOUS || s.niveau === niveau
  );

  const mots = sansAccent(recherche.trim());

  const resultats = FICHES.filter((f) => {
    if (f.curriculum !== curriculum) return false;
    if (niveau !== TOUS && f.niveau !== niveau) return false;
    if (serie !== TOUS && !f.series.includes(serie)) return false;
    if (notion !== TOUS && f.notion !== notion) return false;
    if (type !== TOUS && f.type !== type) return false;
    if (mots === "") return true;

    const contenu = sansAccent(
      [f.titre, f.pratique, f.resume, f.notion, f.region,
       f.enjeu, f.nomVernaculaire, f.programme].join(" ")
    );
    return contenu.includes(mots);
  });

  const filtreActif =
    niveau !== TOUS || serie !== TOUS || notion !== TOUS ||
    type !== TOUS || recherche !== "";

  function reinitialiser() {
    setRecherche(""); setNiveau(TOUS); setSerie(TOUS);
    setNotion(TOUS); setType(TOUS);
  }

  function changerCurriculum(id) {
    setCurriculum(id);
    setSerie(TOUS);
  }

  function changerNiveau(n) {
    setNiveau(n);
    setSerie(TOUS);
  }

  return (
    <>
      <h1 className="titre-page">Ressources</h1>
      <p className="intro-page">
        Séquences, activités et outils d'évaluation contextualisés, reliant
        une notion de chimie à une pratique sociale et à un enjeu de durabilité.
      </p>

    

      <BlocProgrammes curriculum={curriculum} />

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
        <Filtre label="Niveau" valeur={niveau} onChange={changerNiveau}
          options={NIVEAUX.map((n) => ({ id: n, label: n }))} />
        <Filtre label="Série" valeur={serie} onChange={setSerie}
          options={seriesDispo.map((s) => ({ id: s.id, label: s.label }))} />
        <Filtre label="Notion" valeur={notion} onChange={setNotion}
          options={NOTIONS.map((n) => ({ id: n, label: n }))} />
        <Filtre label="Type" valeur={type} onChange={setType}
          options={TYPES.map((t) => ({ id: t, label: t }))} />
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
            Essayez l'autre programme, élargissez la recherche ou retirez
            un filtre.
          </p>
        </div>
      ) : (
        <div className="grille-fiches">
          {resultats.map((f) => (
            <button key={f.id} className="fiche" onClick={() => setFicheOuverte(f)}>
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

              <div className="series-liste">
                {f.series.map((s) => (
                  <span key={s} className="serie-puce">
                    {libelleSerie(f.curriculum, s)}
                  </span>
                ))}
              </div>

              <div className="fiche-meta">
                <span><GraduationCap size={14} /> {f.niveau}</span>
                <span><MapPin size={14} /> {f.region}</span>
              </div>

              <span className="fiche-lien">Ouvrir la fiche →</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function FicheDetail({ fiche, onRetour }) {
  const nomCurriculum = CURRICULUMS.find((c) => c.id === fiche.curriculum)?.label;

  return (
    <>
      <button className="bouton-retour" onClick={onRetour}>
        <ArrowLeft size={16} /> Retour aux ressources
      </button>

      <div className="fiche-haut">
        <span className="etiquette">{fiche.type}</span>
        {fiche.valide && (
          <span className="etiquette valide">
            <BadgeCheck size={13} /> Validé par la recherche
          </span>
        )}
      </div>

      <h1 className="titre-page">{fiche.titre}</h1>

      <div className="detail-meta">
        <span><GraduationCap size={15} /> {fiche.niveau}</span>
        <span><MapPin size={15} /> {fiche.region}</span>
        <span><BookMarked size={15} /> {fiche.notion}</span>
      </div>

      {fiche.fichier && (
        <a className="bouton-telecharger" href={fiche.fichier} download>
          <Download size={18} /> Télécharger la fiche (PDF)
        </a>
      )}

      <Bloc titre="Programme scolaire">
        <p><strong>Curriculum :</strong> {nomCurriculum}</p>
        <p><strong>Chapitre :</strong> {fiche.programme}</p>
        <p><strong>Référence :</strong> {fiche.reference}</p>
        <p><strong>Séries concernées :</strong></p>
        <div className="series-liste">
          {fiche.series.map((s) => (
            <span key={s} className="serie-puce">
              {libelleSerie(fiche.curriculum, s)}
            </span>
          ))}
        </div>
      </Bloc>

      <Bloc titre="Pratique sociale de référence" icone={<Leaf size={16} />}>
        <p className="detail-pratique">{fiche.pratique}</p>
        {fiche.nomVernaculaire && (
          <p className="detail-vernaculaire">En malgache : {fiche.nomVernaculaire}</p>
        )}
      </Bloc>

      <Bloc titre="Enjeu de durabilité">
        <p>{fiche.enjeu}</p>
      </Bloc>

      <Bloc titre="Déroulé">
        <p>{fiche.resume}</p>
      </Bloc>

      {fiche.conception && (
        <Bloc titre="Conception alternative visée" icone={<Lightbulb size={16} />}>
          <p>{fiche.conception}</p>
        </Bloc>
      )}

      <Bloc titre="Cadre théorique">
        <p>{fiche.cadre}</p>
      </Bloc>

      <p className="detail-signature">
        Déposé par {fiche.auteur} · {fiche.date} · Licence CC BY-SA 4.0
      </p>
    </>
  );
}

function Bloc({ titre, icone, children }) {
  return (
    <section className="bloc">
      <h2 className="bloc-titre">{icone} {titre}</h2>
      {children}
    </section>
  );
}

function Filtre({ label, valeur, options, onChange }) {
  return (
    <label className="filtre">
      <span className="filtre-label">{label}</span>
      <select value={valeur} onChange={(e) => onChange(e.target.value)}>
        <option value={TOUS}>{TOUS}</option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}
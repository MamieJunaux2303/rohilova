import { useState } from "react";
import { CADRES } from "../data/cadres";
import { libelleMatiere } from "../data/matieres";
import ChaineTD from "./ChaineTD";
import { PARCOURS } from "../data/parcours";
import { ParcoursCarte, ParcoursVue } from "./Parcours";
import { ArrowLeft, BookOpen, Route, Clock } from "lucide-react";

export default function SeFormer({ intention, matiere }) {
  const [onglet, setOnglet] = useState(intention?.parcours ? "parcours" : "cadres");
  const [cadreOuvert, setCadreOuvert] = useState(null);
  const [parcoursOuvert, setParcoursOuvert] = useState(
    () => PARCOURS.find((p) => p.id === intention?.parcours) || null
  );

  if (cadreOuvert) {
    return <CadreDetail cadre={cadreOuvert} onRetour={() => setCadreOuvert(null)} />;
  }

  if (parcoursOuvert) {
    return <ParcoursVue parcours={parcoursOuvert} onRetour={() => setParcoursOuvert(null)} />;
  }

  return (
    <>
      <h1 className="titre-page">Se former</h1>
      <p className="intro-page">
        Cadres théoriques et parcours guidés pour intégrer l'éducation au
        développement durable, quelle que soit votre matière.
      </p>

      {matiere !== "chimie" && (
        <p className="bandeau-info">
          Ces contenus valent pour toutes les matières. Les exemples sont pour
          l'instant tirés de la chimie, discipline pilote de Rohilova.
          {matiere === "toutes"
            ? " Ceux des autres matières sont en cours d'élaboration."
            : " Ceux de votre matière (" + libelleMatiere(matiere) + ") sont en cours d'élaboration."}
        </p>
      )}

      <div className="onglets" role="tablist">
        <button
          role="tab"
          aria-selected={onglet === "cadres"}
          className={onglet === "cadres" ? "onglet actif" : "onglet"}
          onClick={() => setOnglet("cadres")}
        >
          <span className="onglet-label"><BookOpen size={16} /> Cadres théoriques</span>
          <span className="onglet-detail">Comprendre les concepts</span>
        </button>
        <button
          role="tab"
          aria-selected={onglet === "parcours"}
          className={onglet === "parcours" ? "onglet actif" : "onglet"}
          onClick={() => setOnglet("parcours")}
        >
          <span className="onglet-label"><Route size={16} /> Parcours</span>
          <span className="onglet-detail">Se former pas à pas</span>
        </button>
      </div>

      {onglet === "cadres" ? (
        <div className="grille-fiches">
          {CADRES.map((c) =>
            c.disponible ? (
              <button key={c.id} className="fiche" onClick={() => setCadreOuvert(c)}>
                <h2 className="fiche-titre">{c.nom}</h2>
                <p className="fiche-pratique">{c.auteurs}</p>
                <p className="fiche-resume">{c.resume}</p>
                <span className="fiche-lien">Lire le cadre</span>
              </button>
            ) : (
              <div key={c.id} className="cadre-avenir">
                <span className="etiquette">
                  <Clock size={12} /> En préparation
                </span>
                <h2 className="fiche-titre">{c.nom}</h2>
                <p className="fiche-pratique">{c.auteurs}</p>
                <p className="fiche-resume">{c.resume}</p>
              </div>
            )
          )}
        </div>
      ) : (
                <div className="grille-fiches">
          {PARCOURS.map((p) => (
            <ParcoursCarte key={p.id} parcours={p} onOuvrir={() => setParcoursOuvert(p)} />
          ))}
        </div>
      )}
    </>
  );
}

function CadreDetail({ cadre, onRetour }) {
  const [modele, setModele] = useState(cadre.chaines[0].id);
  const chaineChoisie = cadre.chaines.find((ch) => ch.id === modele);

  return (
    <>
      <button className="bouton-retour" onClick={onRetour}>
        <ArrowLeft size={16} /> Retour aux cadres
      </button>

      <h1 className="titre-page">{cadre.nom}</h1>
      <p className="cadre-auteurs">{cadre.auteurs}</p>

      <section className="cadre-section">
        <h2 className="cadre-section-titre">Définition</h2>
        {cadre.definition.map((p, i) => (
          <p key={i} className="cadre-texte">{p}</p>
        ))}
      </section>

      <section className="cadre-section">
        <h2 className="cadre-section-titre">Pourquoi c'est utile en classe</h2>
        <div className="utilite-liste">
          {cadre.utilite.map((u) => (
            <div key={u.titre} className="utilite">
              <h3 className="utilite-titre">{u.titre}</h3>
              <p className="cadre-texte">{u.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cadre-section">
        <h2 className="cadre-section-titre">Les chaînes de la transposition</h2>
        <p className="cadre-texte">
          Choisissez un auteur pour afficher sa chaîne. Les maillons dorés
          marquent le point de départ, le maillon vert foncé le point d'arrivée.
        </p>

        <div className="choix-modeles" role="group" aria-label="Choisir un modèle">
          {cadre.chaines.map((ch) => (
            <button
              key={ch.id}
              className={ch.id === modele ? "choix-modele actif" : "choix-modele"}
              aria-pressed={ch.id === modele}
              onClick={() => setModele(ch.id)}
            >
              {ch.auteur} <span className="choix-annee">{ch.annee}</span>
            </button>
          ))}
        </div>

        <h3 className="chaine-titre">{chaineChoisie.titre}</h3>
        <ChaineTD chaine={chaineChoisie} />

        {cadre.comparaison.map((p, i) => (
          <p key={i} className="cadre-texte">{p}</p>
        ))}
      </section>

      <section className="cadre-section">
        <h2 className="cadre-section-titre">Un exemple malgache</h2>
        <h3 className="chaine-titre">{cadre.exemple.titre}</h3>
        <ChaineTD chaine={cadre.exemple.chaine} />
      </section>

      <section className="cadre-section">
        <h2 className="cadre-section-titre">Références</h2>
        <ul className="references">
          {/* À VOUS : afficher chaque référence de cadre.references dans un <li> */}
        </ul>
      </section>
    </>
  );
}
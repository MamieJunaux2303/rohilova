import { useState } from "react";
import { CADRES, GROUPES_CADRES } from "../data/cadres";
import { libelleMatiere } from "../data/matieres";
import IconeMatiere from "./IconeMatiere";
import ChaineTD from "./ChaineTD";
import { PARCOURS } from "../data/parcours";
import { ParcoursCarte, ParcoursVue } from "./Parcours";
import { ListeIntegration, MethodeDetail } from "./IntegrerEDD";
import { ArrowLeft, BookOpen, Route, Clock, Sprout } from "lucide-react";

const ONGLETS = [
  { id: "cadres", label: "Cadres théoriques", detail: "Comprendre les concepts", icone: BookOpen },
  { id: "integrer", label: "Intégrer l'EDD", detail: "Choisir une méthode", icone: Sprout },
  { id: "parcours", label: "Parcours", detail: "Se former pas à pas", icone: Route },
];

export default function SeFormer({ intention, matiere }) {
  const [onglet, setOnglet] = useState(intention?.parcours ? "parcours" : "cadres");
  const [cadreOuvert, setCadreOuvert] = useState(null);
  const [methodeOuverte, setMethodeOuverte] = useState(null);
  const [parcoursOuvert, setParcoursOuvert] = useState(
    () => PARCOURS.find((p) => p.id === intention?.parcours) || null
  );

  if (cadreOuvert) {
    return <CadreDetail cadre={cadreOuvert} matiere={matiere} onRetour={() => setCadreOuvert(null)} />;
  }

  if (methodeOuverte) {
    return (
      <MethodeDetail
        methode={methodeOuverte}
        matiere={matiere}
        onRetour={() => setMethodeOuverte(null)}
        onParcours={() => {
          setMethodeOuverte(null);
          setParcoursOuvert(PARCOURS.find((p) => p.id === methodeOuverte.parcours));
          window.scrollTo(0, 0);
        }}
      />
    );
  }

  if (parcoursOuvert) {
    return <ParcoursVue parcours={parcoursOuvert} onRetour={() => setParcoursOuvert(null)} />;
  }

  return (
    <>
      <h1 className="titre-page">Se former</h1>
      <p className="intro-page">
        Cadres théoriques, méthodes et parcours guidés pour intégrer
        l'éducation au développement durable, quelle que soit votre matière.
      </p>

      {/* Les méthodes ont déjà des exemples par matière : bandeau inutile */}
      {matiere !== "chimie" && onglet !== "integrer" && (
        <p className="bandeau-info">
          Ces contenus valent pour toutes les matières. Les exemples sont pour
          l'instant tirés de la chimie, discipline pilote de Rohilova.
          {matiere === "toutes"
            ? " Ceux des autres matières sont en cours d'élaboration."
            : " Ceux de votre matière (" + libelleMatiere(matiere) + ") sont en cours d'élaboration."}
        </p>
      )}

      <div className="onglets" role="tablist">
        {ONGLETS.map((o) => {
          const Icone = o.icone;
          return (
            <button
              key={o.id}
              role="tab"
              aria-selected={onglet === o.id}
              className={onglet === o.id ? "onglet actif" : "onglet"}
              onClick={() => setOnglet(o.id)}
            >
              <span className="onglet-label"><Icone size={16} /> {o.label}</span>
              <span className="onglet-detail">{o.detail}</span>
            </button>
          );
        })}
      </div>

      {onglet === "cadres" ? (
        GROUPES_CADRES.map((g) => (
          <section key={g.id} className="groupe-cadres">
            <h2 className="groupe-cadres-titre">{g.titre}</h2>
            <p className="carte-aide">{g.texte}</p>
            <div className="grille-fiches">
              {CADRES.filter((c) => c.groupe === g.id).map((c) =>
                c.disponible ? (
                  <button key={c.id} className="fiche" onClick={() => setCadreOuvert(c)}>
                    <h3 className="fiche-titre">{c.nom}</h3>
                    <p className="fiche-pratique">{c.auteurs}</p>
                    <p className="fiche-resume">{c.resume}</p>
                    <span className="fiche-lien">Lire la fiche</span>
                  </button>
                ) : (
                  <div key={c.id} className="cadre-avenir">
                    <span className="etiquette">
                      <Clock size={12} /> En préparation
                    </span>
                    <h3 className="fiche-titre">{c.nom}</h3>
                    <p className="fiche-pratique">{c.auteurs}</p>
                    <p className="fiche-resume">{c.resume}</p>
                  </div>
                )
              )}
            </div>
          </section>
        ))
      ) : null}

      {onglet === "integrer" && <ListeIntegration onMethode={setMethodeOuverte} />}

      {onglet === "parcours" && (
        <div className="grille-fiches">
          {PARCOURS.map((p) => (
            <ParcoursCarte key={p.id} parcours={p} onOuvrir={() => setParcoursOuvert(p)} />
          ))}
        </div>
      )}
    </>
  );
}

// Fiche d'un cadre ou d'une notion de base. Chaque rubrique
// ne s'affiche que si elle existe dans les données.
function CadreDetail({ cadre, matiere, onRetour }) {
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

      {cadre.tableau && (
        <section className="cadre-section">
          <h2 className="cadre-section-titre">{cadre.tableauTitre}</h2>
          <Tableau tableau={cadre.tableau} />
        </section>
      )}

      {cadre.utilite && (
        <section className="cadre-section">
          <h2 className="cadre-section-titre">
            {cadre.utiliteTitre || "Pourquoi c'est utile en classe"}
          </h2>
          <div className="utilite-liste">
            {cadre.utilite.map((u) => (
              <div key={u.titre} className="utilite">
                <h3 className="utilite-titre">{u.titre}</h3>
                <p className="cadre-texte">{u.texte}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {cadre.courants && (
        <section className="cadre-section">
          <h2 className="cadre-section-titre">{cadre.courantsTitre}</h2>
          <div className="courants">
            {cadre.courants.map((c) => (
              <article key={c.nom} className="courant">
                <h3 className="courant-nom">{c.nom}</h3>
                <p className="courant-auteurs">{c.auteurs}</p>
                <p className="cadre-texte">{c.idee}</p>
                <p className="courant-classe"><strong>En classe :</strong> {c.enClasse}</p>
                {c.limite && <p className="courant-limite"><strong>Limite :</strong> {c.limite}</p>}
              </article>
            ))}
          </div>
        </section>
      )}

      {cadre.sections && cadre.sections.map((sec) => (
        <section key={sec.titre} className="cadre-section">
          <h2 className="cadre-section-titre">{sec.titre}</h2>
          {sec.paragraphes.map((p, i) => <p key={i} className="cadre-texte">{p}</p>)}
        </section>
      ))}

      {cadre.chaines && <Chaines cadre={cadre} />}

      {cadre.exemplesMatieres && (
        <ExemplesMatieres exemples={cadre.exemplesMatieres} matiere={matiere} />
      )}

      {cadre.exemple && (
        <section className="cadre-section">
          <h2 className="cadre-section-titre">Un exemple malgache</h2>
          <h3 className="chaine-titre">{cadre.exemple.titre}</h3>
          <ChaineTD chaine={cadre.exemple.chaine} />
        </section>
      )}

      {cadre.vigilance && (
        <section className="cadre-section">
          <div className="vigilance">
            <h2 className="vigilance-titre">Points de vigilance</h2>
            <ul className="liste-puces">
              {cadre.vigilance.map((v) => <li key={v}>{v}</li>)}
            </ul>
          </div>
        </section>
      )}

      <section className="cadre-section">
        <h2 className="cadre-section-titre">Références</h2>
        <ul className="references">
          {cadre.references.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </section>
    </>
  );
}

// Les chaînes de la transposition didactique, avec un bouton par auteur
function Chaines({ cadre }) {
  const [modele, setModele] = useState(cadre.chaines[0].id);
  const chaineChoisie = cadre.chaines.find((ch) => ch.id === modele);

  return (
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
  );
}

// Tableau comparatif : deux colonnes côte à côte sur ordinateur,
// l'une sous l'autre sur téléphone
function Tableau({ tableau }) {
  return (
    <div className="comparatif">
      {tableau.lignes.map((l) => (
        <div key={l.critere} className="comparatif-ligne">
          <h3 className="comparatif-critere">{l.critere}</h3>
          <div className="comparatif-valeurs">
            {l.valeurs.map((v, i) => (
              <div key={i} className="comparatif-valeur">
                <span className="comparatif-colonne">{tableau.colonnes[i]}</span>
                <p>{v}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Exemples par matière, celui de la matière choisie en premier
function ExemplesMatieres({ exemples, matiere }) {
  const tries = [...exemples].sort(
    (a, b) => (b.matiere === matiere) - (a.matiere === matiere)
  );
  return (
    <section className="cadre-section">
      <h2 className="cadre-section-titre">Dans les différentes matières</h2>
      <ul className="exemples-matieres">
        {tries.map((e) => (
          <li
            key={e.matiere}
            className={e.matiere === matiere ? "exemple-matiere votre" : "exemple-matiere"}
          >
            <span className="exemple-matiere-nom">
              <IconeMatiere id={e.matiere} /> {libelleMatiere(e.matiere)}
              {e.matiere === matiere && <span className="etiquette">Votre matière</span>}
            </span>
            <p>{e.texte}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

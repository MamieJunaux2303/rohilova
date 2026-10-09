import { useState } from "react";
import { MOMENTS, TEMPS } from "../data/parcours";
import { lireProgression, enregistrerProgression } from "../data/progression";
import {
  ArrowLeft, ArrowRight, Check, Clock, Maximize2, BarChart3,
} from "lucide-react";

function trouverMoment(id) {
  return MOMENTS.find((m) => m.id === id);
}

function nomEtape(id) {
  if (id === "vue") return "Vue d'ensemble";
  if (id === "synthese") return "Synthèse";
  return id + " · " + trouverMoment(id).titre;
}

// ─── Barre de progression ────────────────────────────────────
export function Progression({ faites, total }) {
  // Part des étapes terminées, arrondie à l'unité
  const pourcentage = Math.round((faites / total) * 100);
  return (
    <div className="progression">
      <div
        className="progression-barre"
        role="progressbar"
        aria-valuenow={pourcentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progression du parcours"
      >
        <div className="progression-remplie" style={{ width: pourcentage + "%" }} />
      </div>
      <span className="progression-texte">
        {faites} étape{faites > 1 ? "s" : ""} sur {total} terminée{faites > 1 ? "s" : ""}
      </span>
    </div>
  );
}

// ─── Carte du parcours (dans l'onglet « Parcours ») ──────────
export function ParcoursCarte({ parcours, onOuvrir }) {
  const faites = lireProgression(parcours);
  const total = parcours.etapes.length;
  const libelle =
    faites.length === 0 ? "Commencer" : faites.length === total ? "Revoir" : "Continuer";

  return (
    <button className="fiche" onClick={onOuvrir}>
      <div className="fiche-haut">
        <span className="etiquette">{parcours.niveau}</span>
      </div>
      <h2 className="fiche-titre">{parcours.titre}</h2>
      <p className="fiche-resume">{parcours.resume}</p>
      <div className="fiche-meta">
        <span><Clock size={14} /> {parcours.duree}</span>
        <span><BarChart3 size={14} /> {total} étapes</span>
      </div>
      <Progression faites={faites.length} total={total} />
      <span className="fiche-lien">{libelle}</span>
    </button>
  );
}

// ─── Lecture du parcours, étape par étape ────────────────────
export function ParcoursVue({ parcours, onRetour }) {
  const [faites, setFaites] = useState(() => lireProgression(parcours));
  const premiereNonFaite = parcours.etapes.find((e) => !faites.includes(e));
  const [courante, setCourante] = useState(premiereNonFaite || parcours.etapes[0]);

  const index = parcours.etapes.indexOf(courante);
  const estFaite = faites.includes(courante);
  const estDerniere = index === parcours.etapes.length - 1;

  function allerA(id) {
    setCourante(id);
    window.scrollTo(0, 0);
  }

  function basculerFaite() {
    const nouvelle = estFaite
      ? faites.filter((e) => e !== courante)
      : [...faites, courante];
    setFaites(nouvelle);
    enregistrerProgression(parcours, nouvelle);
  }

  return (
    <>
      <button className="bouton-retour" onClick={onRetour}>
        <ArrowLeft size={16} /> Retour aux parcours
      </button>

      <h1 className="titre-page">{parcours.titre}</h1>
      <Progression faites={faites.length} total={parcours.etapes.length} />

      <nav className="etapes-nav" aria-label="Étapes du parcours">
        {parcours.etapes.map((id) => {
          const moment = trouverMoment(id);
          const classes =
            "etape-puce" +
            (id === courante ? " actif" : "") +
            (faites.includes(id) ? " faite" : "");
          return (
            <button
              key={id}
              className={classes}
              onClick={() => allerA(id)}
              aria-current={id === courante ? "step" : undefined}
              style={moment ? { "--couleur-moment": moment.couleur } : undefined}
            >
              {faites.includes(id) && <Check size={14} aria-label="terminée" />}
              {moment ? moment.id : nomEtape(id)}
            </button>
          );
        })}
      </nav>

      <article className="etape">
        {courante === "vue" && <VueEnsemble vue={parcours.vue} />}
        {courante === "synthese" && (
          <Synthese synthese={parcours.synthese} references={parcours.references} />
        )}
        {trouverMoment(courante) && <Moment moment={trouverMoment(courante)} />}
      </article>

      <div className="etape-pied">
        <label className="etape-case">
          <input type="checkbox" checked={estFaite} onChange={basculerFaite} />
          J'ai terminé cette étape
        </label>

        <div className="etape-boutons">
          {index > 0 && (
            <button className="bouton-retour" onClick={() => allerA(parcours.etapes[index - 1])}>
              <ArrowLeft size={16} /> Précédent
            </button>
          )}
          {estDerniere ? (
            <button className="bouton-suivant" onClick={onRetour}>
              Terminer le parcours
            </button>
          ) : (
            <button className="bouton-suivant" onClick={() => allerA(parcours.etapes[index + 1])}>
              {nomEtape(parcours.etapes[index + 1])} <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

// ─── Contenu des étapes ──────────────────────────────────────

function BadgeMoment({ moment, taille }) {
  return (
    <img
      src={moment.badge}
      alt=""
      width={taille}
      height={taille}
      className="badge-moment"
    />
  );
}

function VueEnsemble({ vue }) {
  return (
    <>
      <h2 className="cadre-section-titre">Vue d'ensemble</h2>
      {vue.visee.map((p, i) => (
        <p key={i} className="cadre-texte">{p}</p>
      ))}

      <h3 className="sous-titre-etape">Les sept moments en trois temps</h3>
      <div className="trois-temps">
        {TEMPS.map((t) => (
          <div key={t.titre} className="temps">
            <h4 className="temps-titre">{t.titre}</h4>
            <ul className="temps-liste">
              {t.moments.map((id) => {
                const m = trouverMoment(id);
                return (
                  <li key={id} className="temps-moment">
                    <BadgeMoment moment={m} taille={40} />
                    <span>
                      <strong>{m.id} · {m.titre}</strong>
                      <span className="temps-accroche">{m.accroche}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <figure className="figure-parcours">
        <img src={vue.figure} alt="Les sept moments disposés en cycle : le retour à la situation de départ, en M6, boucle la séquence." />
        <figcaption>
          <a href={vue.figure} target="_blank" rel="noreferrer">
            <Maximize2 size={14} /> Ouvrir la figure en grand
          </a>
        </figcaption>
      </figure>

      <h3 className="sous-titre-etape">Principes d'organisation</h3>
      <div className="utilite-liste">
        {vue.principes.map((p) => (
          <div key={p.titre} className="utilite">
            <h4 className="utilite-titre">{p.titre}</h4>
            <p className="cadre-texte">{p.texte}</p>
          </div>
        ))}
      </div>

      <div className="a-vous">
        <h3 className="a-vous-titre">Avant de commencer</h3>
        <p>{vue.consigne}</p>
      </div>
    </>
  );
}

function Moment({ moment }) {
  return (
    <div style={{ "--couleur-moment": moment.couleur }}>
      <header className="moment-entete">
        <BadgeMoment moment={moment} taille={64} />
        <div>
          <p className="moment-numero">{moment.id} · {moment.accroche}</p>
          <h2 className="moment-titre">{moment.titreLong}</h2>
        </div>
      </header>

      <p className="cadre-texte">{moment.presentation}</p>

      <div className="moment-reperes">
        <span><Clock size={14} /> {moment.duree}</span>
        <span>Langue : {moment.langue}</span>
      </div>

      <dl className="moment-fiche">
        <dt>Fonction didactique</dt>
        <dd>{moment.fonction}</dd>
        <dt>Rôle de l'enseignant</dt>
        <dd>{moment.enseignant}</dd>
        <dt>Rôle des élèves</dt>
        <dd>{moment.eleves}</dd>
        <dt>Traces produites</dt>
        <dd>{moment.traces}</dd>
      </dl>

      <div className="vigilance">
        <h3 className="vigilance-titre">Point de vigilance</h3>
        <p>{moment.vigilance}</p>
      </div>

      <div className="exemple-moment">
        <h3 className="exemple-titre">Exemple : la saponification</h3>
        <p>{moment.exemple}</p>
      </div>

      <div className="a-vous">
        <h3 className="a-vous-titre">À vous</h3>
        <p>{moment.consigne}</p>
        <p className="a-vous-critere">
          <strong>Pour vérifier :</strong> {moment.critere}
        </p>
      </div>
    </div>
  );
}

function Synthese({ synthese, references }) {
  return (
    <>
      <h2 className="cadre-section-titre">Synthèse : vérifier sa séquence</h2>
      <p className="cadre-texte">{synthese.intro}</p>

      <ul className="criteres">
        {MOMENTS.map((m) => (
          <li key={m.id} className="critere">
            <BadgeMoment moment={m} taille={36} />
            <span><strong>{m.id}</strong> {m.critere}</span>
          </li>
        ))}
      </ul>

      <h3 className="sous-titre-etape">La saponification en sept moments</h3>
      <ol className="frise-exemple">
        {MOMENTS.map((m) => (
          <li key={m.id} style={{ "--couleur-moment": m.couleur }}>
            <BadgeMoment moment={m} taille={40} />
            <div>
              <strong>{m.id} · {m.titre}</strong>
              <p>{m.exemple}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="cadre-texte">{synthese.conclusion}</p>

      <h3 className="sous-titre-etape">Références</h3>
      <ul className="references">
        {references.map((r) => <li key={r}>{r}</li>)}
      </ul>
    </>
  );
}

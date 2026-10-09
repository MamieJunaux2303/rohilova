import { NIVEAUX_INTEGRATION, METHODES } from "../data/methodes";
import { MOMENTS } from "../data/parcours";
import { libelleMatiere } from "../data/matieres";
import IconeMatiere from "./IconeMatiere";
import { ArrowLeft, ArrowRight, Clock, Route } from "lucide-react";

// ─── Onglet « Intégrer l'EDD » : trois niveaux, des méthodes ─
export function ListeIntegration({ onMethode }) {
  return (
    <>
      <p className="cadre-texte">
        Il existe plusieurs manières d'intégrer l'éducation au développement
        durable dans une matière, de la plus simple à la plus ambitieuse.
        Choisissez le niveau qui correspond à votre situation, puis une méthode.
      </p>

      {NIVEAUX_INTEGRATION.map((n) => {
        const methodes = METHODES.filter((m) => m.niveau === n.numero);
        return (
          <section key={n.numero} className="niveau-integration">
            <header className="niveau-entete">
              <span className="niveau-numero" aria-hidden="true">{n.numero}</span>
              <div>
                <p className="niveau-surtitre">Niveau {n.numero} · {n.accroche}</p>
                <h2 className="niveau-titre">{n.titre}</h2>
              </div>
            </header>

            <p className="cadre-texte">{n.texte}</p>

            <h3 className="niveau-sous-titre">Concrètement</h3>
            <ol className="niveau-etapes">
              {n.concretement.map((c) => <li key={c}>{c}</li>)}
            </ol>
            <p className="niveau-limite"><strong>Limite :</strong> {n.limite}</p>

            <h3 className="niveau-sous-titre">Méthodes</h3>
            <div className="grille-fiches">
              {methodes.map((m) =>
                m.disponible ? (
                  <button key={m.id} className="fiche" onClick={() => onMethode(m)}>
                    <h4 className="fiche-titre">{m.nom}</h4>
                    {m.auteurs && <p className="fiche-pratique">{m.auteurs}</p>}
                    <p className="fiche-resume">{m.resume}</p>
                    <span className="fiche-lien">Découvrir la méthode</span>
                  </button>
                ) : (
                  <div key={m.id} className="cadre-avenir">
                    <span className="etiquette"><Clock size={12} /> En préparation</span>
                    <h4 className="fiche-titre">{m.nom}</h4>
                    <p className="fiche-resume">{m.resume}</p>
                  </div>
                )
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}

// ─── Page d'une méthode ──────────────────────────────────────
export function MethodeDetail({ methode, matiere, onRetour, onParcours }) {
  const niveau = NIVEAUX_INTEGRATION.find((n) => n.numero === methode.niveau);

  return (
    <>
      <button className="bouton-retour" onClick={onRetour}>
        <ArrowLeft size={16} /> Retour aux méthodes
      </button>

      <p className="niveau-surtitre">Niveau {niveau.numero} · {niveau.titre}</p>
      <h1 className="titre-page">{methode.nom}</h1>
      {methode.auteurs && <p className="cadre-auteurs">{methode.auteurs}</p>}

      <section className="cadre-section">
        <h2 className="cadre-section-titre">Le principe</h2>
        {methode.principe.map((p, i) => <p key={i} className="cadre-texte">{p}</p>)}
      </section>

      {methode.parcours ? (
        <SeptMoments onParcours={onParcours} />
      ) : (
        <ContenuMethode methode={methode} matiere={matiere} />
      )}
    </>
  );
}

// Les sept moments : résumé et renvoi vers le parcours existant
function SeptMoments({ onParcours }) {
  return (
    <section className="cadre-section">
      <h2 className="cadre-section-titre">Les sept moments</h2>
      <ol className="frise-exemple">
        {MOMENTS.map((m) => (
          <li key={m.id} style={{ "--couleur-moment": m.couleur }}>
            <img src={m.badge} alt="" width="40" height="40" className="badge-moment" />
            <div>
              <strong>{m.id} · {m.titre}</strong>
              <p>{m.accroche}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="cadre-texte">
        Le parcours de formation détaille chaque moment : fonction didactique,
        rôle de l'enseignant et des élèves, point de vigilance, exemple de la
        saponification et consigne pour construire votre propre séquence.
      </p>
      <button className="bouton-suivant" onClick={onParcours}>
        <Route size={16} /> Suivre le parcours <ArrowRight size={16} />
      </button>
    </section>
  );
}

function ContenuMethode({ methode, matiere }) {
  // L'exemple de la matière choisie passe en premier
  const exemples = [...methode.exemples].sort(
    (a, b) => (b.matiere === matiere) - (a.matiere === matiere)
  );

  return (
    <>
      <section className="cadre-section">
        <h2 className="cadre-section-titre">Quand l'utiliser</h2>
        <ul className="liste-puces">
          {methode.quand.map((q) => <li key={q}>{q}</li>)}
        </ul>
      </section>

      <section className="cadre-section">
        <h2 className="cadre-section-titre">Les étapes</h2>
        <ol className="etapes-methode">
          {methode.etapes.map((e) => (
            <li key={e.titre}>
              <strong>{e.titre}</strong>
              <p>{e.texte}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="cadre-section">
        <h2 className="cadre-section-titre">Les rôles</h2>
        <dl className="moment-fiche">
          <dt>L'enseignant</dt>
          <dd>{methode.roles.enseignant}</dd>
          <dt>Les élèves</dt>
          <dd>{methode.roles.eleves}</dd>
        </dl>
      </section>

      <section className="cadre-section">
        <h2 className="cadre-section-titre">Dans les différentes matières</h2>
        <ul className="exemples-matieres">
          {exemples.map((e) => (
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

      <section className="cadre-section">
        <div className="vigilance">
          <h2 className="vigilance-titre">Points de vigilance</h2>
          <ul className="liste-puces">
            {methode.vigilance.map((v) => <li key={v}>{v}</li>)}
          </ul>
        </div>
      </section>

      <section className="cadre-section">
        <h2 className="cadre-section-titre">Références</h2>
        <ul className="references">
          {methode.references.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </section>
    </>
  );
}

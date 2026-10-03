import { Fragment } from "react";
import { ArrowDown, ArrowLeftRight } from "lucide-react";

// Un maillon de la chaîne : une boîte avec un intitulé
// et, éventuellement, une précision en dessous.
function Maillon({ element, classe }) {
  return (
    <div className={"maillon " + classe}>
      <span className="maillon-label">{element.label}</span>
      {element.detail && <span className="maillon-detail">{element.detail}</span>}
    </div>
  );
}

// Le passage entre deux maillons : une flèche vers le bas
// et, s'il existe, le texte qui décrit la transformation.
function Passage({ texte }) {
  return (
    <div className="passage">
      <ArrowDown size={20} className="passage-fleche" aria-hidden="true" />
      {texte && <span className="passage-texte">{texte}</span>}
    </div>
  );
}

export default function ChaineTD({ chaine }) {
  const aDesSources = chaine.sources.length > 0;
  const derniere = chaine.etapes.length - 1;

  return (
    <figure className="chaine">
      {aDesSources && (
        <div className={chaine.sources.length > 1 ? "chaine-sources double" : "chaine-sources"}>
          {chaine.sources.map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 && (
                <ArrowLeftRight size={20} className="chaine-lien" aria-label="en relation avec" />
              )}
              <Maillon element={s} classe="source" />
            </Fragment>
          ))}
        </div>
      )}

      {chaine.etapes.map((e, i) => (
        <Fragment key={e.label}>
          {(i > 0 || aDesSources) && <Passage texte={e.passage} />}
          <Maillon element={e} classe={i === derniere ? "arrivee" : ""} />
        </Fragment>
      ))}

      {chaine.commentaire && (
        <figcaption className="chaine-legende">{chaine.commentaire}</figcaption>
      )}
    </figure>
  );
}
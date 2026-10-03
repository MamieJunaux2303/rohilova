import { useState } from "react";
import { PROGRAMMES } from "../data/programmes";
import { PROGRAMME } from "../data/fiches";
import { FileText, Download, ChevronDown, ChevronUp } from "lucide-react";

function Lien(props) {
  const p = props.programme;
  return (
    <a className="prog-item" href={p.fichier} target="_blank" rel="noreferrer">
      <FileText size={16} />
      <span className="prog-item-texte">
        <strong>{p.titre}</strong>
        <span className="prog-taille">
          {p.contenu}
          {p.taille ? " · " + p.taille : ""}
        </span>
      </span>
      <Download size={16} />
    </a>
  );
}

export default function BlocProgrammes() {
  const [ouvert, setOuvert] = useState(false);

  const liens = PROGRAMMES.map(function (p) {
    return <Lien key={p.id} programme={p} />;
  });

  return (
    <section className="prog-bloc">
      <button
        className="prog-entete"
        onClick={function () { setOuvert(!ouvert); }}
        aria-expanded={ouvert}
      >
        <FileText size={18} />
        <span className="prog-entete-texte">
          <strong>Programmes officiels</strong>
          <span className="prog-entete-sous">
            {PROGRAMME.nom} · en vigueur depuis {PROGRAMME.depuis}
          </span>
        </span>
        <span className="prog-action">
          {ouvert ? "Masquer" : "Consulter"}
          {ouvert ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {ouvert ? (
        <div className="prog-contenu">
          <p className="prog-intro">
            Textes du Ministère de l'Éducation nationale. Chaque document
            regroupe les programmes de toutes les séries d'un niveau.
          </p>
          <div className="prog-liste">{liens}</div>
        </div>
      ) : null}
    </section>
  );
}
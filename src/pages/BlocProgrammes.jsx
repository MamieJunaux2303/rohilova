import { useState } from "react";
import { PROGRAMMES, INTITULE_DISCIPLINE } from "../data/programmes";
import { FileText, Download, ChevronDown, ChevronUp } from "lucide-react";

function Lien(props) {
  const p = props.programme;
  return (
    <a className="prog-item" href={p.fichier} target="_blank" rel="noreferrer">
      <FileText size={16} />
      <span className="prog-item-texte">
        <strong>{p.serie}</strong>
        <span className="prog-taille">{p.taille}</span>
      </span>
      <Download size={16} />
    </a>
  );
}

function Groupe(props) {
  const liste = props.liste;
  if (liste.length === 0) {
    return null;
  }
  const liens = liste.map(function (p) {
    return <Lien key={p.id} programme={p} />;
  });
  return (
    <div className="prog-niveau">
      <h3 className="prog-niveau-titre">{props.titre}</h3>
      <div className="prog-liste">{liens}</div>
    </div>
  );
}

function SousBloc(props) {
  const [ouvert, setOuvert] = useState(false);
  const curriculum = props.curriculum;

  const dispo = PROGRAMMES.filter(function (p) {
    return p.curriculum === curriculum;
  });

  if (dispo.length === 0) {
    return null;
  }

  const seconde = dispo.filter(function (p) { return p.niveau === "Seconde"; });
  const premiere = dispo.filter(function (p) { return p.niveau === "Premiere"; });
  const terminale = dispo.filter(function (p) { return p.niveau === "Terminale"; });

  return (
    <div className="prog-sous">
      <button
        className="prog-sous-entete"
        onClick={function () { setOuvert(!ouvert); }}
        aria-expanded={ouvert}
      >
        <span className="prog-sous-texte">
          <strong>{props.titre}</strong>
          <span className="prog-sous-detail">
            {INTITULE_DISCIPLINE[curriculum]} · {dispo.length} documents
          </span>
        </span>
        {ouvert ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {ouvert ? (
        <div className="prog-sous-contenu">
          <Groupe titre="Seconde" liste={seconde} />
          <Groupe titre="Première" liste={premiere} />
          <Groupe titre="Terminale" liste={terminale} />
        </div>
      ) : null}
    </div>
  );
}

export default function BlocProgrammes() {
  const [ouvert, setOuvert] = useState(false);

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
            Textes du Ministère de l'Éducation nationale
          </span>
        </span>
        <span className="prog-action">
          {ouvert ? "Masquer" : "Consulter"}
          {ouvert ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {ouvert ? (
        <div className="prog-contenu">
          <SousBloc curriculum="ancien" titre="Ancien programme" />
          <SousBloc curriculum="nouveau" titre="Nouveau programme" />
        </div>
      ) : null}
    </section>
  );
}
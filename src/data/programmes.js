// ─────────────────────────────────────────────────────────────
//  PROGRAMMES SCOLAIRES OFFICIELS
//  Fichiers PDF placés dans public/programmes/
//
//  Dénominations officielles distinctes selon le curriculum :
//   · Ancien  : « Physique-Chimie »
//   · Nouveau : « Sciences physiques et chimiques »
// ─────────────────────────────────────────────────────────────

export const PROGRAMMES = [
  // ─── ANCIEN PROGRAMME — Physique-Chimie ───
  {
    id: "anc-2nde",
    curriculum: "ancien",
    niveau: "Seconde",
    serie: "Seconde",
    titre: "Programme de physique-chimie — Seconde",
    fichier: "/programmes/programme-seconde.pdf",
    taille: "",
  },
  {
    id: "anc-1ere-a",
    curriculum: "ancien",
    niveau: "Premiere",
    serie: "1ère A",
    titre: "Programme de physique-chimie — 1ère A",
    fichier: "/programmes/programme-premiereA.pdf",
    taille: "",
  },
  {
    id: "anc-1ere-cd",
    curriculum: "ancien",
    niveau: "Premiere",
    serie: "1ère C et D",
    titre: "Programme de physique-chimie — 1ère C et D",
    fichier: "/programmes/programme-premiereCD.pdf",
    taille: "",
  },
  {
    id: "anc-tle-a",
    curriculum: "ancien",
    niveau: "Terminale",
    serie: "Tle A",
    titre: "Programme de physique-chimie — Terminale A",
    fichier: "/programmes/programme-terminaleA.pdf",
    taille: "",
  },
  {
    id: "anc-tle-cd",
    curriculum: "ancien",
    niveau: "Terminale",
    serie: "Tle C et D",
    titre: "Programme de physique-chimie — Terminales C et D",
    fichier: "/programmes/programme-terminalesCD.pdf",
    taille: "",
  },

  // ─── NOUVEAU PROGRAMME — Sciences physiques et chimiques ───
  {
    id: "nou-2nde",
    curriculum: "nouveau",
    niveau: "Seconde",
    serie: "Seconde",
    titre: "Programme des sciences physiques et chimiques — Seconde",
    fichier: "/programmes/nouveau-programme-seconde.pdf",
    taille: "",
  },
  {
    id: "nou-1ere-l",
    curriculum: "nouveau",
    niveau: "Premiere",
    serie: "1ère L",
    titre: "Programme des sciences physiques et chimiques — 1ère L",
    fichier: "/programmes/nouveau-programme-premiereL.pdf",
    taille: "",
  },
  {
    id: "nou-1ere-ose",
    curriculum: "nouveau",
    niveau: "Premiere",
    serie: "1ère OSE",
    titre: "Programme des sciences physiques et chimiques — 1ère OSE",
    fichier: "/programmes/nouveau-programme-premiereOSE.pdf",
    taille: "",
  },
  {
    id: "nou-1ere-s",
    curriculum: "nouveau",
    niveau: "Premiere",
    serie: "1ère S",
    titre: "Programme des sciences physiques et chimiques — 1ère S",
    fichier: "/programmes/nouveau-programme-premiereS.pdf",
    taille: "",
  },
  {
    id: "nou-tle-l",
    curriculum: "nouveau",
    niveau: "Terminale",
    serie: "Tle L",
    titre: "Programme des sciences physiques et chimiques — Terminale L",
    fichier: "/programmes/nouveau-programme-terminaleL.pdf",
    taille: "",
  },
  {
    id: "nou-tle-ose",
    curriculum: "nouveau",
    niveau: "Terminale",
    serie: "Tle OSE",
    titre: "Programme des sciences physiques et chimiques — Terminale OSE",
    fichier: "/programmes/nouveau-programme-terminaleOSE.pdf",
    taille: "",
  },
  {
    id: "nou-tle-s",
    curriculum: "nouveau",
    niveau: "Terminale",
    serie: "Tle S",
    titre: "Programme des sciences physiques et chimiques — Terminale S",
    fichier: "/programmes/nouveau-programme-terminaleS.pdf",
    taille: "",
  },
];

// Intitulé de la discipline selon le curriculum
export const INTITULE_DISCIPLINE = {
  ancien: "Physique-Chimie",
  nouveau: "Sciences physiques et chimiques",
};
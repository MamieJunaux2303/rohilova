// ─────────────────────────────────────────────────────────────
//  FICHES ROHY
//  Pour ajouter une fiche : copier un bloc entre { } et
//  l'adapter. Ne pas oublier la virgule entre deux blocs.
// ─────────────────────────────────────────────────────────────

// ─── Programmes scolaires malgaches ──────────────────────────
// Réforme de 2018 : de nombreux établissements appliquent
// encore l'ancien programme. Les deux sont donc maintenus.

export const CURRICULUMS = [
  { id: "ancien", label: "Ancien programme", detail: "Physique-Chimie · avant 2018" },
  { id: "nouveau", label: "Nouveau programme", detail: "Sciences physiques et chimiques · 2018" },
];

export const SERIES = {
  ancien: [
    { id: "2nde-a", niveau: "Seconde", label: "Seconde" },
    { id: "1ere-a", niveau: "Première", label: "1ère A" },
    { id: "1ere-cd", niveau: "Première", label: "1ère C et D" },
    { id: "tle-a", niveau: "Terminale", label: "Tle A" },
    { id: "tle-cd", niveau: "Terminale", label: "Tle C et D" },
  ],
  nouveau: [
    { id: "2nde-n", niveau: "Seconde", label: "Seconde" },
    { id: "1ere-l", niveau: "Première", label: "1ère L" },
    { id: "1ere-ose", niveau: "Première", label: "1ère OSE" },
    { id: "1ere-s", niveau: "Première", label: "1ère S" },
    { id: "tle-l", niveau: "Terminale", label: "Tle L" },
    { id: "tle-ose", niveau: "Terminale", label: "Tle OSE" },
    { id: "tle-s", niveau: "Terminale", label: "Tle S" },
  ],
};

export const NIVEAUX = ["Seconde", "Première", "Terminale"];

// Retrouve le libellé d'une série à partir de son identifiant
export function libelleSerie(curriculum, idSerie) {
  const s = SERIES[curriculum]?.find((x) => x.id === idSerie);
  return s ? s.label : idSerie;
}

// ─── Listes de référence ─────────────────────────────────────

export const NOTIONS = [
  "Combustion",
  "Solutions aqueuses",
  "Réactions acide-base",
  "Oxydoréduction",
  "Polymères",
  "Cycle du carbone",
];

export const TYPES = [
  "Séquence",
  "Activité",
  "Exercice",
  "Support de cours",
  "Outil d'évaluation",
];

// ─── Les fiches ──────────────────────────────────────────────

export const FICHES = [
  {
    id: 1,
    titre: "La combustion du charbon de bois",
    type: "Séquence",
    curriculum: "ancien",
    niveau: "Terminale",
    series: ["tle-cd"],
    programme: "Chimie organique — les combustions",
    reference: "Terminale · Partie à préciser",
    notion: "Combustion",
    region: "Haute Matsiatra",
    pratique: "Fabrication et usage du charbon de bois (arina)",
    nomVernaculaire: "Arina",
    enjeu: "Déforestation et qualité de l'air intérieur",
    conception:
      "Les élèves pensent souvent que la matière disparaît en brûlant, faute de percevoir les produits gazeux.",
    cadre: "Approche context-based",
    resume:
      "Partir de la fabrication artisanale du charbon, très répandue autour de Fianarantsoa, pour construire la distinction entre combustion complète et incomplète, puis relier au monoxyde de carbone et à la déforestation.",
    fichier: null,
    auteur: "M. Randriamanantena",
    date: "2026-09",
    valide: true,
  },
  {
    id: 2,
    titre: "L'eau du puits est-elle potable ?",
    type: "Activité",
    curriculum: "nouveau",
    niveau: "Première",
    series: ["1ere-s", "1ere-ose"],
    programme: "Solutions aqueuses — concentration et dissolution",
    reference: "Première · Partie à préciser",
    notion: "Solutions aqueuses",
    region: "Analamanga",
    pratique: "Approvisionnement en eau de puits en zone périurbaine",
    nomVernaculaire: "Lavaka rano",
    enjeu: "Accès à l'eau potable (ODD 6)",
    conception:
      "Une eau limpide est spontanément jugée potable ; la distinction entre limpidité et potabilité n'est pas construite.",
    cadre: "Question socialement vive",
    resume:
      "À partir de photographies de puits et de résultats d'analyses simplifiés, les élèves distinguent turbidité, dureté et contamination microbiologique, puis argumentent sur les moyens de traitement accessibles localement.",
    fichier: null,
    auteur: "M. Randriamanantena",
    date: "2026-09",
    valide: true,
  },
  {
    id: 3,
    titre: "Grille CER — argumenter en chimie",
    type: "Outil d'évaluation",
    curriculum: "nouveau",
    niveau: "Terminale",
    series: ["tle-l", "tle-ose", "tle-s"],
    programme: "Transversal — évaluation",
    reference: "Tous niveaux",
    notion: "Combustion",
    region: "Toutes régions",
    pratique: "Transversal",
    nomVernaculaire: "",
    enjeu: "Culture scientifique citoyenne",
    conception: "",
    cadre: "Théorie de l'action conjointe",
    resume:
      "Grille d'évaluation Claim–Evidence–Reasoning notée de 0 à 3, applicable aux productions écrites et orales, avec descripteurs et exemples de copies annotées.",
    fichier: null,
    auteur: "M. Randriamanantena",
    date: "2026-09",
    valide: true,
  },
];
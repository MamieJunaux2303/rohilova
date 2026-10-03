// ─────────────────────────────────────────────────────────────
//  FICHES ROHY
//  Pour ajouter une fiche : copier un bloc entre { } et
//  l'adapter. Ne pas oublier la virgule entre deux blocs.
// ─────────────────────────────────────────────────────────────

// ─── Programme scolaire de référence ─────────────────────────
// Depuis la rentrée 2026-2027, le « programme d'études » (PE)
// s'applique dans tous les établissements. Les classes du lycée
// s'appellent désormais T10, T11 et T12.

export const PROGRAMME = {
  nom: "Programme d'études",
  sigle: "PE",
  discipline: "Sciences physiques et chimiques",
  depuis: "2026-2027",
};

// id : ce qui est enregistré dans les fiches
// label : ce qui s'affiche à l'écran
// usuel : l'ancien nom, encore employé par tout le monde
export const NIVEAUX = [
  { id: "T10", label: "T10", usuel: "Seconde" },
  { id: "T11", label: "T11", usuel: "Première" },
  { id: "T12", label: "T12", usuel: "Terminale" },
];

// La T10 est un tronc commun : pas encore de série.
export const SERIES = [
  { id: "t10", niveau: "T10", label: "T10" },
  { id: "t11-l", niveau: "T11", label: "T11 L" },
  { id: "t11-ose", niveau: "T11", label: "T11 OSE" },
  { id: "t11-s", niveau: "T11", label: "T11 S" },
  { id: "t12-l", niveau: "T12", label: "T12 L" },
  { id: "t12-ose", niveau: "T12", label: "T12 OSE" },
  { id: "t12-s", niveau: "T12", label: "T12 S" },
];

// Retrouve le libellé d'une série à partir de son identifiant
export function libelleSerie(idSerie) {
  const s = SERIES.find((x) => x.id === idSerie);
  return s ? s.label : idSerie;
}

// Affiche un niveau sous la forme « T12 · Terminale »
export function libelleNiveau(idNiveau) {
  const n = NIVEAUX.find((x) => x.id === idNiveau);
  return n ? n.label + " · " + n.usuel : idNiveau;
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
    niveau: "T12",
    series: ["t12-s"],
    programme: "Chimie organique — les combustions",
    reference: "PE 12 · Partie à préciser",
    notion: "Combustion",
    region: "Matsiatra-Ambony",
    district: null,
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
    niveau: "T11",
    series: ["t11-s", "t11-ose"],
    programme: "Solutions aqueuses — concentration et dissolution",
    reference: "PE 11 · Partie à préciser",
    notion: "Solutions aqueuses",
    region: "Analamanga",
    district: null,
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
    niveau: "T12",
    series: ["t12-l", "t12-ose", "t12-s"],
    programme: "Transversal — évaluation",
    reference: "Tous niveaux",
    notion: "Combustion",
    region: "Toutes régions",
    district: null,
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
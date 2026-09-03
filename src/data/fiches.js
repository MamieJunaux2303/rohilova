// ─────────────────────────────────────────────────────────────
//  FICHES ROHY
//  Pour ajouter une fiche : copier un bloc entre { } et
//  l'adapter. Ne pas oublier la virgule entre deux blocs.
// ─────────────────────────────────────────────────────────────

export const NIVEAUX = ["Seconde", "Première", "Terminale"];

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

export const FICHES = [
  {
    id: 1,
    titre: "La combustion du charbon de bois",
    type: "Séquence",
    niveau: "Terminale",
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
    niveau: "Première",
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
    niveau: "Terminale",
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
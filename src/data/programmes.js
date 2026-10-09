// ─────────────────────────────────────────────────────────────
//  PROGRAMMES SCOLAIRES OFFICIELS
//  Programme d'études (PE) en vigueur depuis 2026-2027.
//  Un document par niveau, qui contient les programmes de
//  toutes les séries de ce niveau.
//  Fichiers PDF placés dans public/programmes/
//  disciplines : matières couvertes par le document
// ─────────────────────────────────────────────────────────────

export const PROGRAMMES = [
  {
    id: "pe-10",
    niveau: "T10",
    titre: "PE 10 — Programme d'études T10",
    contenu: "Seconde · tronc commun",
    fichier: "/programmes/pe-10.pdf",
    taille: "",
    disciplines: ["chimie", "physique"],
  },
  {
    id: "pe-11",
    niveau: "T11",
    titre: "PE 11 — Programme d'études T11",
    contenu: "Première · séries L, OSE et S",
    fichier: "/programmes/pe-11.pdf",
    taille: "",
    disciplines: ["chimie", "physique"],
  },
  {
    id: "pe-12",
    niveau: "T12",
    titre: "PE 12 — Programme d'études T12",
    contenu: "Terminale · séries L, OSE et S",
    fichier: "/programmes/pe-12.pdf",
    taille: "",
    disciplines: ["chimie", "physique"],
  },
];
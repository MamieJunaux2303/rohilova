// ─────────────────────────────────────────────────────────────
//  LES MATIÈRES
//  id         : identifiant utilisé dans les fiches (« discipline »)
//  disponible : true quand des contenus sont publiés pour la
//               matière ; sinon, « En cours d'élaboration »
//  Pour ouvrir une matière : passer disponible à true et ajouter
//  ses notions dans fiches.js (NOTIONS).
// ─────────────────────────────────────────────────────────────

export const TOUTES_MATIERES = "toutes";

export const MATIERES = [
  { id: "chimie", label: "Chimie", court: "Chimie", disponible: true },
  { id: "physique", label: "Physique", court: "Physique", disponible: false },
  { id: "mathematiques", label: "Mathématiques", court: "Maths", disponible: false },
  { id: "svt", label: "Sciences de la vie et de la Terre", court: "SVT", disponible: false },
  { id: "histoire-geographie", label: "Histoire-Géographie", court: "Hist.-Géo", disponible: false },
  { id: "lettres-langues", label: "Lettres et langues", court: "Lettres et langues", disponible: false },
  { id: "philosophie", label: "Philosophie", court: "Philosophie", disponible: false },
  { id: "eac", label: "Éducation à la citoyenneté", court: "Citoyenneté (EAC)", disponible: false },
];

export function trouverMatiere(id) {
  return MATIERES.find((m) => m.id === id) || null;
}

export function libelleMatiere(id) {
  if (id === TOUTES_MATIERES) return "Toutes les matières";
  const m = trouverMatiere(id);
  return m ? m.label : id;
}

// ─── Matière choisie, mémorisée sur l'appareil ───────────────
// null : l'enseignant n'a pas encore choisi (première visite)
const CLE = "rohilova:matiere";

export function lireMatiere() {
  try {
    return localStorage.getItem(CLE);
  } catch {
    return null;
  }
}

export function enregistrerMatiere(id) {
  try {
    localStorage.setItem(CLE, id);
  } catch {
    // Stockage indisponible : le choix ne sera pas gardé.
  }
}

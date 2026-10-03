// ─────────────────────────────────────────────────────────────
//  PROGRESSION DANS LES PARCOURS
//  Enregistrée dans le navigateur (localStorage), sur l'appareil.
//  localStorage peut être indisponible (navigation privée,
//  stockage plein) : d'où les try / catch.
// ─────────────────────────────────────────────────────────────

function cle(parcours) {
  return "rohilova:parcours:" + parcours.id;
}

// Liste des étapes terminées, par exemple ["vue", "M1"]
export function lireProgression(parcours) {
  try {
    return JSON.parse(localStorage.getItem(cle(parcours))) || [];
  } catch {
    return [];
  }
}

export function enregistrerProgression(parcours, liste) {
  try {
    localStorage.setItem(cle(parcours), JSON.stringify(liste));
  } catch {
    // Stockage indisponible : la progression ne sera pas gardée.
  }
}

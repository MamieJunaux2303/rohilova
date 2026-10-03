// ─────────────────────────────────────────────────────────────
//  LES 23 RÉGIONS DE MADAGASCAR
//  id : identifiant utilisé dans les fiches (champ « region »)
//  Le tracé est dans carte-trace.js.
// ─────────────────────────────────────────────────────────────

export const REGIONS = [
  { id: "alaotra-mangoro", nom: "Alaotra-Mangoro", chefLieu: "Ambatondrazaka" },
  { id: "amoron-i-mania", nom: "Amoron'i Mania", chefLieu: "Ambositra" },
  { id: "analamanga", nom: "Analamanga", chefLieu: "Antananarivo" },
  { id: "analanjirofo", nom: "Analanjirofo", chefLieu: "Fenoarivo Atsinanana" },
  { id: "androy", nom: "Androy", chefLieu: "Ambovombe" },
  { id: "anosy", nom: "Anosy", chefLieu: "Taolagnaro" },
  { id: "atsimo-andrefana", nom: "Atsimo-Andrefana", chefLieu: "Toliara" },
  { id: "atsimo-atsinanana", nom: "Atsimo-Atsinanana", chefLieu: "Farafangana" },
  { id: "atsinanana", nom: "Atsinanana", chefLieu: "Toamasina" },
  { id: "betsiboka", nom: "Betsiboka", chefLieu: "Maevatanana" },
  { id: "boeny", nom: "Boeny", chefLieu: "Mahajanga" },
  { id: "bongolava", nom: "Bongolava", chefLieu: "Tsiroanomandidy" },
  { id: "diana", nom: "Diana", chefLieu: "Antsiranana" },
  { id: "fitovinany", nom: "Fitovinany", chefLieu: "Manakara" },
  { id: "ihorombe", nom: "Ihorombe", chefLieu: "Ihosy" },
  { id: "itasy", nom: "Itasy", chefLieu: "Miarinarivo" },
  { id: "matsiatra-ambony", nom: "Matsiatra Ambony", autreNom: "Haute Matsiatra", chefLieu: "Fianarantsoa" },
  { id: "melaky", nom: "Melaky", chefLieu: "Maintirano" },
  { id: "menabe", nom: "Menabe", chefLieu: "Morondava" },
  { id: "sava", nom: "Sava", chefLieu: "Sambava" },
  { id: "sofia", nom: "Sofia", chefLieu: "Antsohihy" },
  { id: "vakinankaratra", nom: "Vakinankaratra", chefLieu: "Antsirabe" },
  { id: "vatovavy", nom: "Vatovavy", chefLieu: "Mananjary" },
];

// Valeur à mettre dans « region » pour une fiche valable partout
export const TOUTES_REGIONS = "toutes";

// Affiche le nom d'une région à partir de son identifiant
export function libelleRegion(id) {
  if (id === TOUTES_REGIONS) return "Toutes régions";
  const r = REGIONS.find((x) => x.id === id);
  if (!r) return id;
  return r.autreNom ? r.nom + " (" + r.autreNom + ")" : r.nom;
}

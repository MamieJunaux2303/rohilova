import { useEffect, useRef } from "react";
import { MATIERES, TOUTES_MATIERES } from "../data/matieres";
import IconeMatiere from "./IconeMatiere";

// Barre des matières, sous l'en-tête. Le choix s'applique
// à tous les espaces et reste mémorisé sur l'appareil.
export default function BarreMatieres({ matiere, onChoisir }) {
  const choix = [{ id: TOUTES_MATIERES, court: "Toutes" }, ...MATIERES];
  const barre = useRef(null);

  // Sur téléphone, la barre défile : on ramène la matière
  // choisie au centre pour qu'elle reste visible.
  useEffect(() => {
    const conteneur = barre.current;
    const actif = conteneur?.querySelector(".actif");
    if (!actif) return;
    conteneur.scrollTo({
      left: actif.offsetLeft - conteneur.clientWidth / 2 + actif.clientWidth / 2,
      behavior: "smooth",
    });
  }, [matiere]);

  return (
    <nav className="barre-matieres" aria-label="Choisir une matière" ref={barre}>
      {choix.map((m) => (
        <button
          key={m.id}
          className={m.id === matiere ? "puce-matiere actif" : "puce-matiere"}
          aria-pressed={m.id === matiere}
          onClick={() => onChoisir(m.id)}
        >
          <IconeMatiere id={m.id} />
          {m.court}
        </button>
      ))}
    </nav>
  );
}

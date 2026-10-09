import {
  LayoutGrid, FlaskConical, Atom, Sigma, Sprout, Earth, Languages, Brain, Landmark,
} from "lucide-react";

const ICONES = {
  toutes: LayoutGrid,
  chimie: FlaskConical,
  physique: Atom,
  mathematiques: Sigma,
  svt: Sprout,
  "histoire-geographie": Earth,
  "lettres-langues": Languages,
  philosophie: Brain,
  eac: Landmark,
};

export default function IconeMatiere({ id, size = 16 }) {
  const Icone = ICONES[id] || LayoutGrid;
  return <Icone size={size} aria-hidden="true" />;
}

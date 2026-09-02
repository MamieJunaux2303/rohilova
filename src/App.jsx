import { useState } from "react";
import { Home, GraduationCap, BookOpen, Map, MessagesSquare } from "lucide-react";

import Accueil from "./pages/Accueil";
import SeFormer from "./pages/SeFormer";
import Ressources from "./pages/Ressources";
import Carte from "./pages/Carte";
import Communaute from "./pages/Communaute";

const ESPACES = [
  { id: "accueil", label: "Accueil", icone: Home, composant: Accueil },
  { id: "former", label: "Se former", icone: GraduationCap, composant: SeFormer },
  { id: "ressources", label: "Ressources", icone: BookOpen, composant: Ressources },
  { id: "carte", label: "Carte", icone: Map, composant: Carte },
  { id: "communaute", label: "Communauté", icone: MessagesSquare, composant: Communaute },
];

export default function App() {
  const [pageActive, setPageActive] = useState("accueil");

  const espace = ESPACES.find((e) => e.id === pageActive);
  const PageCourante = espace.composant;

  return (
    <div className="app">
      <header className="entete">
        <div className="logo">R</div>
        <div>
          <div className="titre-site">ROHILOVA</div>
          <div className="sous-titre">EDD · MADAGASCAR</div>
        </div>
      </header>

      <div className="corps">
        <nav className="nav-laterale">
          <div className="nav-laterale-titre">NAVIGATION</div>
          {ESPACES.map((e) => {
            const Icone = e.icone;
            return (
              <button
                key={e.id}
                className={e.id === pageActive ? "nav-lat-item actif" : "nav-lat-item"}
                onClick={() => setPageActive(e.id)}
              >
                <Icone size={18} />
                <span>{e.label}</span>
              </button>
            );
          })}
        </nav>

        <main className="contenu">
          <PageCourante />
        </main>
      </div>

      <nav className="nav-basse">
        {ESPACES.map((e) => {
          const Icone = e.icone;
          return (
            <button
              key={e.id}
              className={e.id === pageActive ? "nav-item actif" : "nav-item"}
              onClick={() => setPageActive(e.id)}
              aria-current={e.id === pageActive ? "page" : undefined}
            >
              <Icone size={20} />
              <span>{e.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
import { useState, lazy, Suspense } from "react";
import { Home, GraduationCap, BookOpen, Map, MessagesSquare } from "lucide-react";

import Accueil from "./pages/Accueil";
import SeFormer from "./pages/SeFormer";
import Ressources from "./pages/Ressources";
import Communaute from "./pages/Communaute";
import logo from "./assets/rohilova-logo-entete-fonce.svg";
// La carte est chargée seulement quand on ouvre l'espace Carte :
// son tracé ne pèse pas sur le premier chargement de l'application.
const Carte = lazy(() => import("./pages/Carte"));

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
        <button
          className="entete-accueil"
          onClick={() => setPageActive("accueil")}
          aria-label="ROHILOVA — retour à l'accueil"
        >
          <img src={logo} alt="" className="entete-logo" />
        </button>
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
          <Suspense fallback={<p className="chargement">Chargement de la carte…</p>}>
            <PageCourante />
          </Suspense>
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
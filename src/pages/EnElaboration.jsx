import { libelleMatiere } from "../data/matieres";
import IconeMatiere from "./IconeMatiere";
import { GraduationCap, ArrowRight } from "lucide-react";

// Message pour une matière dont les contenus ne sont pas
// encore publiés : dire honnêtement ce qui manque, et
// orienter vers ce qui sert déjà à toutes les matières.
export default function EnElaboration({ matiere, aller, quoi = "Les fiches" }) {
  return (
    <div className="en-elaboration">
      <p className="en-elaboration-etiquette">
        <IconeMatiere id={matiere} /> {libelleMatiere(matiere)}
      </p>
      <h2 className="en-elaboration-titre">En cours d'élaboration</h2>
      <p>
        {quoi} de cette matière sont en préparation. Vous enseignez cette
        matière ? Vos pratiques de classe peuvent constituer les premières
        fiches.
      </p>
      {aller && (
        <>
          <p>
            En attendant, les cadres théoriques et les méthodes pour intégrer
            l'éducation au développement durable valent pour toutes les matières.
          </p>
          <button className="bouton-suivant" onClick={() => aller("former")}>
            <GraduationCap size={16} /> Se former <ArrowRight size={16} />
          </button>
        </>
      )}
    </div>
  );
}

export default function Accueil() {
  return (
    <>
      <h1 className="titre-page">Accueil</h1>
      <p className="intro-page">
        Communauté des enseignants du secondaire à Madagascar — partager,
        construire et transmettre un enseignement ancré dans le développement
        durable.
      </p>

      <div className="carte">
        <h2>Version 0.1 — en construction</h2>
        <p>
          Cette première version rassemble les cadres théoriques de la
          didactique et les premières fiches contextualisées en chimie.
        </p>
        <p>ENS Fianarantsoa · Université d'Antananarivo</p>
      </div>

      <div className="carte">
        <h2>Prochainement</h2>
        <p>
          Les dernières fiches déposées et le fil d'actualité apparaîtront
          ici dès que la médiathèque sera alimentée.
        </p>
      </div>
    </>
  );
}
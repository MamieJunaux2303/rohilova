# Rohilova — état du développement

Dernière mise à jour : 3 octobre 2026

## Contexte
Développement de la V1 de Rohilova avec Claude comme guide et codeur.
Débutant en programmation, apprentissage pas à pas : Claude fournit le
code complet et les instructions, l'utilisateur copie, exécute et signale
ce qui s'affiche.
Voir Rohilova_CDC_v3.docx pour le cahier des charges complet.

## Environnement
- Windows, dossier C:\Users\mamie\dev\rohilova
- Node.js v24.20.0, npm 11.19.0, Vite 8.2.2
- Dépôt public : github.com/MamieJunaux2303/rohilova
- Pas de Tailwind : CSS classique dans src/index.css
- Icônes : lucide-react

## Choix d'architecture
- V0.1 sans comptes ni base de données : données dans des fichiers .js
- Cinq espaces : Accueil, Se former, Ressources, Carte, Communauté
- Navigation par état React (useState), pas de routeur
- Deux curriculums : ancien (Physique-Chimie, avant 2018) et nouveau
  (Sciences physiques et chimiques, réforme 2018)
- Séries ancien : 2nde-a, 1ere-a, 1ere-cd, tle-a, tle-cd
- Séries nouveau : 2nde-n, 1ere-l, 1ere-ose, 1ere-s, tle-l, tle-ose, tle-s
- Le curriculum des fiches se choisit dans la barre de filtres
- Les programmes officiels sont un accordéon autonome à deux niveaux

## Séances terminées (1 à 6)
1. Installation : Node, VS Code, Git, compte GitHub
2. Création du projet Vite + React, premier écran
3. Navigation : cinq espaces, barre d'onglets mobile + barre latérale
4. Fichier de données fiches.js, affichage des fiches
5. Recherche insensible aux accents et filtres
6. Curriculums, séries, détail de fiche, téléchargement PDF,
   12 programmes officiels en accordéon replié par défaut

## Fichiers existants
- src/data/fiches.js : CURRICULUMS, SERIES, NIVEAUX, NOTIONS, TYPES,
  FICHES (3 fiches de démonstration), fonction libelleSerie
- src/data/programmes.js : PROGRAMMES (12 entrées), INTITULE_DISCIPLINE
- src/pages/Accueil.jsx : ébauche
- src/pages/SeFormer.jsx : ébauche, à construire en séance 7
- src/pages/Ressources.jsx : complet (recherche, filtres, détail)
- src/pages/BlocProgrammes.jsx : accordéon des programmes officiels
- src/pages/Carte.jsx : ébauche
- src/pages/Communaute.jsx : ébauche
- src/App.jsx : en-tête, navigation, sélection de page
- src/index.css : tous les styles
- public/programmes/ : 12 PDF officiels

## Reste à faire
7. Espace Se former : cadres théoriques et parcours de formation
8. Espace Carte : 23 régions de Madagascar en GeoJSON
9. Accueil et finitions mobiles
10. Transformation en PWA (fonctionnement hors connexion)
11. Mise en ligne (Netlify)
12. Application Android (Capacitor)

## En parallèle, hors code
- Dépouillement des programmes officiels pour établir le référentiel des
  notions et remplir les champs programme et reference des fiches
- Rédaction des 30 fiches d'amorçage
- Démarche auprès de l'ENS Fianarantsoa pour la reconnaissance de
  l'attestation de formation
- Vérification des droits de diffusion des programmes officiels auprès
  du Ministère

## Points en suspens
- Faut-il permettre qu'une fiche relève des deux curriculums ?
  (actuellement un seul par fiche)
- Ouvrir Rohilova à la physique ? Les programmes officiels couvrent les
  deux disciplines.
- Ajouter React Router pour permettre des liens directs vers une fiche

## Méthode de travail retenue
- Claude donne le code complet, fichier par fichier, avec les
  vérifications à faire et le résultat attendu
- Un commit Git après chaque étape qui fonctionne
- À partir de la séance 7, Claude laisse parfois une ou deux lignes à
  écrire par l'utilisateur pour l'aider à progresser
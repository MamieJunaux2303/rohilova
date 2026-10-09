// ─────────────────────────────────────────────────────────────
//  INTÉGRER L'EDD — espace « Se former »
//  Trois niveaux d'intégration, inspirés des réponses de
//  l'éducation à la durabilité décrites par Sterling (2001),
//  et des méthodes rattachées à chaque niveau.
//  Une méthode est « disponible » quand son contenu est rédigé
//  et validé ; les autres s'affichent « en préparation ».
//  exemples[].matiere : identifiant de matieres.js
// ─────────────────────────────────────────────────────────────

export const NIVEAUX_INTEGRATION = [
  {
    numero: 1,
    titre: "Contextualiser",
    accroche: "Ajouter la durabilité à une leçon existante",
    texte:
      "La leçon garde sa structure habituelle. L'enseignant y introduit une situation, un exemple, un document ou une question qui relie la notion à un enjeu de durabilité vécu par les élèves. C'est le point d'entrée le plus simple, réalisable dès la prochaine leçon.",
    concretement: [
      "Repérer dans la leçon une notion qui touche à l'eau, l'énergie, l'alimentation, les déchets, la santé ou les ressources.",
      "Choisir une situation locale qui l'illustre : une pratique de la région, un fait d'actualité, une donnée chiffrée.",
      "L'utiliser au moins deux fois : en ouverture pour susciter l'intérêt, et en fin de leçon pour réinvestir le savoir.",
    ],
    limite:
      "La durabilité reste un ajout : si l'exemple est retiré, la leçon fonctionne de la même manière. C'est un premier pas, pas un aboutissement.",
  },
  {
    numero: 2,
    titre: "Restructurer la séquence",
    accroche: "Construire la séquence autour d'un enjeu",
    texte:
      "L'enjeu de durabilité organise toute la séquence : il fait naître la question que les élèves cherchent à résoudre, et le savoir disciplinaire devient l'outil qui permet d'y répondre. La séquence part d'une situation et y revient.",
    concretement: [
      "Partir d'une situation ou d'une question qui pose problème aux élèves.",
      "Faire construire le savoir disciplinaire comme réponse à ce problème.",
      "Revenir à la situation de départ pour argumenter, décider ou débattre avec ce savoir.",
    ],
    limite:
      "Demande plus de préparation et de temps de classe qu'une leçon habituelle ; à réserver aux notions qui s'y prêtent le mieux.",
  },
  {
    numero: 3,
    titre: "Transformer par le projet",
    accroche: "Agir au-delà de la salle de classe",
    texte:
      "Les élèves conduisent une action réelle, dans l'établissement ou dans leur quartier, qui mobilise plusieurs matières. Le projet dépasse la séquence : il engage la classe, parfois l'établissement et la communauté.",
    concretement: [
      "Partir d'un problème réel et proche : déchets de l'établissement, eau, jardin, énergie.",
      "Associer plusieurs matières et répartir ce que chacune apporte.",
      "Aboutir à une production utile ou visible : aménagement, exposition, campagne, journée.",
    ],
    limite:
      "Exige une coordination entre collègues et un appui de la direction ; le risque est de privilégier l'action au détriment des savoirs.",
  },
];

export const METHODES = [
  // ─── Niveau 1 ───
  {
    id: "etude-de-cas",
    nom: "Étude de cas",
    niveau: 1,
    resume: "Analyser une situation réelle et documentée pour en dégager les savoirs en jeu.",
    disponible: false,
  },

  // ─── Niveau 2 ───
  {
    id: "sept-moments",
    nom: "Les sept moments",
    niveau: 2,
    auteurs: "Randriamanantena, 2026",
    resume:
      "Une séquence ancrée dans une pratique sociale locale, de la situation de départ à l'évaluation en contexte.",
    disponible: true,
    parcours: "sept-moments",
    principe: [
      "La séquence part d'une pratique sociale de référence vécue par les élèves, recueille leurs conceptions, en fait naître une question, construit le savoir par confrontation à des ressources, le formalise, puis revient à la situation pour en examiner les enjeux de durabilité avant une évaluation en contexte.",
      "Le dispositif a été conçu et expérimenté pour l'enseignement de la chimie au lycée, sans matériel expérimental. Sa structure peut s'adapter à d'autres matières ; ce transfert reste à étudier.",
    ],
  },
  {
    id: "qsv",
    nom: "Questions socialement vives et débat argumenté",
    niveau: 2,
    auteurs: "Legardez et Simonneaux, 2006",
    resume:
      "Enseigner à partir d'une question qui fait débat dans la société, et apprendre à argumenter avec des savoirs.",
    disponible: true,
    principe: [
      "Une question socialement vive (QSV) est une question qui fait débat à la fois dans la société, parmi les spécialistes, et donc dans la classe : les élèves en ont entendu parler et ont déjà un avis. Legardez et Simonneaux (2006) la caractérisent par ces trois niveaux de « vivacité ».",
      "Plutôt que de l'éviter, l'enseignant en fait un objet d'étude. Les élèves examinent les arguments des différents acteurs, distinguent les faits établis, les incertitudes et les valeurs en jeu, puis construisent une position argumentée en mobilisant les savoirs de la matière.",
    ],
    quand: [
      "Une notion du programme est directement liée à une question discutée localement : bois de chauffe et charbon, feux de brousse, sachets plastiques, accès à l'eau.",
      "Vous voulez travailler l'argumentation et l'esprit critique en plus de la notion.",
      "Les élèves ont déjà des opinions sur la question, souvent sans les relier à des savoirs.",
    ],
    etapes: [
      { titre: "Choisir et formuler la question", texte: "Une question ouverte, sans réponse évidente, liée au programme et à la vie des élèves. Exemple : « Faut-il continuer à cuisiner au charbon de bois ? »" },
      { titre: "Recueillir les avis initiaux", texte: "Chaque élève écrit sa position et une raison, sans discussion. Ces écrits serviront à mesurer le chemin parcouru." },
      { titre: "Identifier les acteurs et leurs arguments", texte: "Qui est concerné ? Ménages, charbonniers, commerçants, services forestiers, médecins… Les élèves listent ce que chacun pourrait dire." },
      { titre: "Étudier les savoirs en jeu", texte: "Documents, données, notions du programme : c'est le cœur disciplinaire. Les élèves trient ce qui relève des faits établis, des incertitudes et des valeurs." },
      { titre: "Débattre selon des règles", texte: "Débat organisé (groupes, rôles, temps de parole) où chaque argument doit s'appuyer sur une donnée ou un savoir étudié." },
      { titre: "Prendre position par écrit", texte: "Chaque élève reformule sa position, éventuellement nuancée, en la justifiant : affirmation, donnée, raisonnement. La comparaison avec l'avis initial montre ce que les savoirs ont changé." },
    ],
    roles: {
      enseignant:
        "Choisit la question et les documents ; garantit la rigueur des savoirs ; anime le débat sans imposer son opinion ; rappelle que tout argument doit s'appuyer sur des données ; fait la synthèse des savoirs, pas de la « bonne » opinion.",
      eleves:
        "Expriment et confrontent leurs avis ; analysent des documents ; distinguent faits, incertitudes et valeurs ; argumentent par écrit et à l'oral.",
    },
    exemples: [
      { matiere: "chimie", texte: "« Faut-il continuer à cuisiner au charbon de bois ? » : combustion complète et incomplète, monoxyde de carbone, comparaison avec le gaz butane." },
      { matiere: "svt", texte: "« Faut-il interdire les feux de brousse ? » : fertilité et érosion des sols, biodiversité, renouvellement des pâturages." },
      { matiere: "histoire-geographie", texte: "« Le charbon de bois : ressource ou menace pour la région ? » : économie des ménages, filière bois-énergie, recul de la forêt." },
      { matiere: "eac", texte: "« Les mesures contre les sachets plastiques sont-elles efficaces ? » : règle commune, comportements individuels, rôle des autorités." },
      { matiere: "philosophie", texte: "« Le progrès technique est-il l'ennemi de la nature ? » : notions de technique, de nature et de responsabilité." },
      { matiere: "lettres-langues", texte: "Rédiger, en malgache ou en français, un texte argumentatif ou un discours sur une question débattue dans le quartier." },
    ],
    vigilance: [
      "Un débat d'opinions sans savoirs n'est pas une QSV : chaque argument doit s'appuyer sur un document ou une notion étudiée.",
      "L'enseignant adopte une posture d'impartialité engagée (Kelly, 1986) : il peut exprimer un avis s'il le souhaite, mais il ne l'impose pas et ne sanctionne pas les positions, seulement la qualité de l'argumentation.",
      "Certaines questions touchent à des croyances, à des interdits (fady) ou à la situation des familles : choisir des questions qui peuvent être discutées sereinement en classe.",
    ],
    references: [
      "Albe, V. (2009). Enseigner des controverses. Presses universitaires de Rennes.",
      "Kelly, T. E. (1986). Discussing controversial issues: Four perspectives on the teacher's role. Theory and Research in Social Education, 14(2), 113-138.",
      "Legardez, A., & Simonneaux, L. (Dir.). (2006). L'école à l'épreuve de l'actualité : enseigner les questions vives. ESF.",
    ],
  },
  {
    id: "enquete",
    nom: "Démarche d'enquête",
    niveau: 2,
    resume: "Partir d'une question, recueillir des données, les interpréter et conclure.",
    disponible: false,
  },
  {
    id: "jeu-de-role",
    nom: "Jeu de rôle et simulation",
    niveau: 2,
    resume: "Incarner les acteurs d'un enjeu (eau, forêt, déchets) pour en comprendre les points de vue.",
    disponible: false,
  },

  // ─── Niveau 3 ───
  {
    id: "projet",
    nom: "Pédagogie de projet",
    niveau: 3,
    auteurs: "Kilpatrick, 1918 ; Perrenoud, 1999",
    resume:
      "Conduire avec les élèves une action réelle et utile, qui mobilise les savoirs de plusieurs matières.",
    disponible: true,
    principe: [
      "Les élèves conduisent une entreprise collective qui aboutit à une production concrète : aménager un jardin scolaire, organiser le tri des déchets de l'établissement, réaliser une exposition sur l'eau du quartier. Les savoirs du programme deviennent nécessaires pour réussir le projet.",
      "Le programme d'études 2026 accorde une place importante aux mini-projets et aux activités hors des murs : la pédagogie de projet permet de les inscrire dans une démarche d'éducation au développement durable.",
    ],
    quand: [
      "Un problème réel et proche concerne la classe ou l'établissement.",
      "Plusieurs collègues, de matières différentes, sont prêts à collaborer.",
      "Vous disposez de plusieurs semaines, par exemple sur un trimestre.",
    ],
    etapes: [
      { titre: "Faire émerger le projet", texte: "Partir d'un problème constaté avec les élèves : la cour est jonchée de sachets plastiques, l'eau du puits est trouble, la cantine manque de légumes." },
      { titre: "Définir la production finale", texte: "Ce qui sera réalisé, pour qui et pour quand. Une production visible motive : aménagement, affiche, journée de sensibilisation, émission de radio scolaire." },
      { titre: "Repérer les savoirs nécessaires", texte: "Pour chaque matière associée, les notions du programme que le projet mobilise. C'est ce qui distingue un projet d'apprentissage d'une simple activité." },
      { titre: "Planifier", texte: "Tâches, groupes, rôles et calendrier, élaborés avec les élèves et affichés dans la classe." },
      { titre: "Réaliser", texte: "Les élèves avancent par étapes, avec des apports de cours au moment où ils en ont besoin. Un point régulier permet d'ajuster." },
      { titre: "Présenter et faire le bilan", texte: "Présentation de la production, puis retour sur ce qui a été appris, dans chaque matière, et sur ce qui a changé dans l'établissement." },
    ],
    roles: {
      enseignant:
        "Accompagne sans faire à la place des élèves ; veille à ce que les savoirs visés soient réellement travaillés ; coordonne avec les collègues ; négocie les autorisations et les ressources.",
      eleves:
        "Proposent, planifient, se répartissent les tâches ; recherchent les informations ; réalisent la production et la présentent ; évaluent leur travail.",
    },
    exemples: [
      { matiere: "chimie", texte: "Tri des déchets de l'établissement : identifier les familles de polymères, ce qui se recycle et ce qui se brûle, et les fumées produites." },
      { matiere: "svt", texte: "Jardin scolaire et compostage : sol, matière organique, décomposition, cycles de la matière." },
      { matiere: "physique", texte: "Foyer amélioré : mesurer la consommation de bois ou de charbon, comprendre les pertes de chaleur, comparer les rendements." },
      { matiere: "mathematiques", texte: "Enquête sur la consommation d'eau ou d'énergie des familles : collecte de données, statistiques, graphiques, proportions." },
      { matiere: "histoire-geographie", texte: "Cartographie des points d'eau ou des dépôts d'ordures du quartier, et histoire de leur évolution." },
      { matiere: "lettres-langues", texte: "Campagne de sensibilisation bilingue : affiches, slogans et émission de radio scolaire en malgache et en français." },
      { matiere: "eac", texte: "Charte de l'établissement propre, rédigée et votée par les élèves délégués." },
    ],
    vigilance: [
      "Un projet n'est pas une activité occupationnelle : sans savoirs du programme identifiés à l'avance, il reste une action sympathique mais pauvre en apprentissages.",
      "Choisir un projet à la mesure des ressources de l'établissement : un projet sobre et achevé vaut mieux qu'un projet ambitieux abandonné.",
      "Prévoir l'évaluation dès le départ : des savoirs de chaque matière, et des compétences comme la coopération et la communication.",
    ],
    references: [
      "Kilpatrick, W. H. (1918). The project method. Teachers College Record, 19(4), 319-335.",
      "Perrenoud, P. (1999). Apprendre à l'école à travers des projets : pourquoi ? comment ? Université de Genève. https://www.unige.ch/fapse/SSE/teachers/perrenoud/php_main/php_1999/1999_17.html",
      "Sterling, S. (2001). Sustainable education: Re-visioning learning and change (Schumacher Briefings, 6). Green Books.",
    ],
  },
  {
    id: "sortie-terrain",
    nom: "Sortie de terrain",
    niveau: 3,
    resume: "Observer et enquêter hors des murs de l'école : marché, rivière, atelier, champ.",
    disponible: false,
  },
  {
    id: "interdisciplinaire",
    nom: "Séquence interdisciplinaire",
    niveau: 3,
    resume: "Une même pratique sociale étudiée par plusieurs matières, chacune avec ses savoirs.",
    disponible: false,
  },
];

// ─────────────────────────────────────────────────────────────
//  PARCOURS DE FORMATION — espace « Se former »
//  Source : « Les sept moments d'un enseignement de la chimie
//  ancré dans les pratiques sociales », description de
//  référence (Randriamanantena, version du 27 septembre 2026),
//  adaptée pour les enseignants.
//  Les visuels sont dans public/sept-moments/
// ─────────────────────────────────────────────────────────────

export const MOMENTS = [
  {
    id: "M1",
    titre: "Situation de départ",
    titreLong: "Situation de départ ancrée dans le contexte local",
    accroche: "Partir d'une situation locale",
    couleur: "#A8432A",
    badge: "/sept-moments/badge_M1.svg",
    presentation:
      "L'enseignant présente une situation de la vie quotidienne, une pratique sociale de référence, un phénomène naturel ou un événement survenu dans la société, situé dans l'environnement des élèves. Cette situation sert d'amorce et reste présente tout au long de la séquence : elle est reprise en M6.",
    fonction:
      "Faire entrer dans le milieu un objet issu d'une pratique sociale de référence (Martinand, 1986) et donner à la séquence un enjeu partagé ; susciter l'intérêt et la curiosité des élèves.",
    enseignant:
      "Choisit la situation, au besoin parmi celles partagées sur Rohilova ; la présente de manière concrète (récit bref, objet, image, étiquette, fait d'actualité) ; la rend visible au tableau ; ne donne aucune explication chimique à ce stade.",
    eleves:
      "Observent, reconnaissent la situation et peuvent y associer une expérience personnelle ou familiale. Variante : les élèves proposent eux-mêmes la situation.",
    traces: "Intitulé de la situation au tableau ; objet ou document support.",
    langue: "Malgache et français, à l'oral",
    duree: "5 à 10 minutes",
    vigilance:
      "La situation ne doit pas se réduire à une anecdote d'ouverture, abandonnée ensuite : si elle n'est pas reprise en M6, elle reste un simple habillage.",
    exemple:
      "Le prix du savon flambe, et chacun utilise un savon différent pour la lessive. L'enseignant montre un savon industriel et un savon local (savony nosy).",
    critere: "La situation de départ est explicitement située dans le contexte local des élèves.",
    consigne:
      "Choisissez une notion que vous enseignerez ce trimestre et une pratique sociale de votre région qui s'y rattache. Notez en deux ou trois phrases comment vous la présenterez, et l'objet ou l'image que vous apporterez en classe.",
  },
  {
    id: "M2",
    titre: "Conceptions des élèves",
    titreLong: "Explicitation des conceptions des élèves",
    accroche: "Recueillir ce que pensent les élèves",
    couleur: "#B7811C",
    badge: "/sept-moments/badge_M2.svg",
    presentation:
      "Les élèves expriment ce qu'ils pensent de la situation : ce qui se passe, pourquoi et comment. Il ne s'agit pas d'évaluer les réponses, mais de rendre visibles les conceptions, y compris alternatives, afin de pouvoir les mettre à l'épreuve en M4.",
    fonction:
      "Identifier les conceptions initiales (Posner et al., 1982) et en faire des objets de travail publics ; dévoluer aux élèves une part de la responsabilité de l'avancée du savoir.",
    enseignant:
      "Pose des questions ouvertes sur la situation ; accueille toutes les réponses sans les valider ni les corriger ; reformule ; consigne les réponses au tableau ou fait rédiger des billets ; repère les conceptions à reprendre.",
    eleves:
      "Formulent leurs explications à l'oral ou par écrit ; comparent leurs réponses ; peuvent mobiliser des savoirs familiaux ou locaux.",
    traces: "Liste des conceptions au tableau, conservée pour M4 et M5 ; billets individuels.",
    langue: "Majoritairement le malgache",
    duree: "10 à 15 minutes",
    vigilance:
      "Corriger immédiatement les réponses referme le moment. Les conceptions liées à des pratiques ou à des croyances locales sont traitées comme des explications à discuter, non comme des erreurs à disqualifier (Clément, 2006).",
    exemple:
      "Pourquoi certains savons moussent-ils et d'autres non ? Avec quoi fabrique-t-on le savon ? Qu'utilise-t-on à sa place ? Les réponses sont notées au tableau, par exemple « plus ça mousse, mieux ça lave ».",
    critere: "Les conceptions des élèves sont recueillies avant tout apport de savoir et conservées sous forme de trace.",
    consigne:
      "Rédigez trois questions ouvertes que vous poserez à vos élèves sur votre situation. Notez les réponses que vous attendez, y compris les conceptions alternatives probables.",
  },
  {
    id: "M3",
    titre: "Problématisation",
    titreLong: "Problématisation par le rapport sciences-sociétés",
    accroche: "Faire naître la question",
    couleur: "#7A3E7A",
    badge: "/sept-moments/badge_M3.svg",
    presentation:
      "À partir des conceptions recueillies et de questions sur les liens entre la situation, la science et la société, la classe construit un problème que ses connaissances actuelles ne permettent pas de résoudre. Le moment se conclut par une question-problème écrite, qui annonce la notion à enseigner.",
    fonction:
      "Construire le besoin du savoir (Fabre, 2009 ; Orange, 2012) ; passer de la contextualisation simple à la problématisation (Sjöström et Talanquer, 2014) ; stimuler la curiosité et l'esprit critique.",
    enseignant:
      "Met en tension les conceptions divergentes ; interroge les dimensions sociales, économiques ou sanitaires de la situation ; aide la classe à formuler la question-problème et l'écrit au tableau ; peut introduire le nom de la notion, par exemple par son étymologie.",
    eleves:
      "Constatent les désaccords ou les limites de leurs explications ; proposent des questions ; participent à la formulation de la question-problème.",
    traces: "Question-problème écrite au tableau et recopiée dans le cahier ; nom de la notion.",
    langue: "Bilingue ; question-problème écrite en français, reformulée en malgache si nécessaire",
    duree: "10 à 15 minutes",
    vigilance:
      "Une liste de questions n'est pas encore un problème. Si l'enseignant répond lui-même à la question dès qu'elle est formulée, M4 perd sa raison d'être.",
    exemple:
      "« Comment transforme-t-on une graisse en savon, et la mousse indique-t-elle vraiment qu'un savon lave bien ? » L'enseignant peut partir du mot saponification, construit sur le latin sapo, le savon.",
    critere: "Une question-problème est formulée et écrite.",
    consigne:
      "À partir des conceptions que vous avez anticipées, formulez la question-problème que la classe devrait écrire au tableau. Vérifiez qu'elle annonce la notion visée sans y répondre.",
  },
  {
    id: "M4",
    titre: "Construction du savoir",
    titreLong: "Construction du savoir chimique par confrontation",
    accroche: "Chercher et confronter",
    couleur: "#2E4A8C",
    badge: "/sept-moments/badge_M4.svg",
    presentation:
      "Les élèves travaillent, seuls ou en groupes, sur des ressources qui leur permettent d'avancer dans la réponse à la question-problème et de mettre à l'épreuve leurs conceptions de M2. En l'absence de matériel expérimental, le milieu est constitué de documents, de données, d'images, d'étiquettes, d'objets du quotidien et de modèles.",
    fonction:
      "Faire agir les élèves dans un milieu qui leur renvoie une information sur leurs réponses (Brousseau, 1998) ; confronter les conceptions aux données ; partager la responsabilité de l'élaboration du savoir.",
    enseignant:
      "Prépare et distribue les ressources ; précise la tâche et le temps ; circule, relance et régule sans donner la réponse ; rappelle les conceptions du tableau ; organise la mise en commun.",
    eleves:
      "Lisent, comparent, calculent, schématisent ; confrontent leurs résultats à leurs réponses initiales ; formulent des éléments de réponse et les présentent lors de la mise en commun.",
    traces:
      "Productions de groupes (fiches, schémas, réponses) ; annotations de la liste des conceptions : confirmées, modifiées ou abandonnées.",
    langue: "Bilingue ; documents en français, échanges en malgache",
    duree: "30 à 50 minutes",
    vigilance:
      "C'est le moment le plus exposé au retour à l'enseignement magistral sous la pression du temps. Une ressource que l'enseignant lit et commente lui-même ne constitue pas un milieu pour les élèves.",
    exemple:
      "Par groupes, les élèves décodent la composition de deux savons (sodium palmate, sodium tallowate), y repèrent le corps gras et la base, lisent un document sur l'eau dure et comparent leurs constats aux réponses du tableau.",
    critere: "Les élèves agissent sur des ressources avant la formalisation du savoir.",
    consigne:
      "Listez les ressources que vous donnerez aux élèves : documents, données, étiquettes, images ou objets. Pour chacune, notez quelle conception de M2 elle permet de mettre à l'épreuve.",
  },
  {
    id: "M5",
    titre: "Trace écrite",
    titreLong: "Formalisation et trace écrite",
    accroche: "Formaliser la leçon",
    couleur: "#3D4F61",
    badge: "/sept-moments/badge_M5.svg",
    presentation:
      "L'enseignant formalise avec la classe le savoir construit, que les élèves consignent dans leur cahier. La trace écrite répond à la question-problème et indique explicitement quelles conceptions initiales sont dépassées.",
    fonction:
      "Rendre public et officiel le savoir visé ; stabiliser le vocabulaire et les représentations symboliques (formules, équations) ; articuler les niveaux macroscopique, submicroscopique et symbolique.",
    enseignant:
      "Rédige la trace écrite avec les élèves en s'appuyant sur les productions de M4 ; énonce le savoir de référence ; revient sur les conceptions de M2 ; veille à l'exactitude scientifique.",
    eleves:
      "Contribuent à la formulation ; recopient la trace écrite ; posent des questions de clarification.",
    traces: "Cahiers des élèves ; trace écrite au tableau.",
    langue: "Français, à l'écrit",
    duree: "15 à 25 minutes",
    vigilance:
      "M5 correspond à la pratique habituelle de la leçon : il ne doit ni absorber le temps de la séquence, ni remplacer M4. Le passage à l'écrit en français est un point délicat pour les élèves.",
    exemple:
      "Définition de la saponification ; équation-bilan : triglycéride + hydroxyde de sodium → glycérol + carboxylate de sodium (savon) ; effet des ions calcium et magnésium de l'eau dure sur la mousse.",
    critere: "La trace écrite répond à la question-problème et revient sur les conceptions initiales.",
    consigne:
      "Rédigez la trace écrite attendue. Vérifiez qu'elle répond à votre question-problème et qu'elle mentionne au moins une conception dépassée.",
  },
  {
    id: "M6",
    titre: "Retour et durabilité",
    titreLong: "Retour à la situation et mise en tension des enjeux de durabilité",
    accroche: "Revenir à la situation, penser durable",
    couleur: "#3F7D3A",
    badge: "/sept-moments/badge_M6.svg",
    presentation:
      "La classe revient à la situation de départ et l'examine avec le savoir construit, sous l'angle des dimensions environnementale, sociale et économique de la durabilité. Les élèves argumentent : ils avancent une affirmation, l'appuient sur une donnée et la justifient par la notion de chimie.",
    fonction:
      "Réinvestir le savoir dans la situation de référence ; articuler chimie et durabilité ; développer l'esprit critique et une posture écocitoyenne ; produire une argumentation scientifique (McNeill et Krajcik, 2012).",
    enseignant:
      "Rappelle la situation de M1 ; pose des questions ou apporte des informations sur les trois dimensions ; exige des justifications fondées sur la notion ; aide à distinguer faits, données et opinions ; conclut sans moraliser.",
    eleves:
      "Répondent en mobilisant la notion ; argumentent, débattent ; envisagent des solutions à leur échelle ou à celle de leur communauté.",
    traces:
      "Arguments consignés au tableau ou dans le cahier ; courte production écrite argumentée, évaluable avec la grille CER (affirmation, donnée, raisonnement).",
    langue: "Bilingue à l'oral ; production écrite en français",
    duree: "20 à 30 minutes",
    vigilance:
      "Si un élève peut répondre sans le savoir chimique, la question n'est pas encore chimique. Le moment ne doit pas devenir un discours moral ajouté après le cours.",
    exemple:
      "Pourquoi le prix du savon augmente-t-il ? Pourquoi le savony nosy est-il si utilisé dans les familles ? Que change la fabrication locale pour l'économie des ménages, la société et l'environnement, par exemple pour les eaux de lessive rejetées dans les rivières ?",
    critere: "La situation de départ est reprise et au moins une question de durabilité exige le savoir chimique.",
    consigne:
      "Écrivez une question de durabilité sur votre situation de départ à laquelle on ne peut pas répondre sans la notion de chimie. Précisez la dimension concernée : environnementale, sociale ou économique.",
  },
  {
    id: "M7",
    titre: "Évaluation",
    titreLong: "Évaluation intégrant la durabilité",
    accroche: "Évaluer en contexte",
    couleur: "#1F7A80",
    badge: "/sept-moments/badge_M7.svg",
    presentation:
      "L'évaluation porte à la fois sur la notion de chimie et sur sa mobilisation dans une situation de durabilité. Elle comporte une part formative, distribuée dans la séquence, et une tâche sommative contextualisée.",
    fonction:
      "Vérifier l'appropriation de la notion et sa mobilisation en contexte ; rendre la dimension de durabilité légitime en l'évaluant.",
    enseignant:
      "Exploite les traces de M2 à M6 (évaluation formative) ; conçoit une tâche contextualisée proche de la situation de départ mais nouvelle ; évalue l'argumentation selon des critères explicites.",
    eleves:
      "Identifient la notion en jeu, produisent l'écriture symbolique, argumentent un choix ou une explication.",
    traces: "Copies ; grille de critères ; résultats par item.",
    langue: "Français, conformément aux examens",
    duree: "Formative : continue ; sommative : 15 à 30 minutes",
    vigilance:
      "Une évaluation limitée à la récitation de la définition ou de l'équation neutralise le dispositif : les élèves règlent leurs apprentissages sur ce qui est évalué.",
    exemple:
      "Une famille doit choisir entre un savon industriel et un savon local. Écrire l'équation de la saponification, puis justifier un choix par une affirmation, une donnée et un raisonnement chimique.",
    critere: "L'évaluation comporte au moins un item contextualisé intégrant la durabilité.",
    consigne:
      "Concevez une tâche d'évaluation proche de votre situation de départ, mais nouvelle. Elle doit demander l'écriture symbolique et une argumentation : affirmation, donnée, raisonnement.",
  },
];

// Les sept moments regroupés en trois temps
export const TEMPS = [
  { titre: "Entrer dans la situation", moments: ["M1", "M2", "M3"] },
  { titre: "Construire le savoir", moments: ["M4", "M5"] },
  { titre: "Réinvestir et évaluer", moments: ["M6", "M7"] },
];

export const PARCOURS = [
  {
    id: "sept-moments",
    titre: "Construire une séquence en sept moments",
    resume:
      "Concevoir, moment par moment, une séquence de chimie ancrée dans une pratique sociale de votre région et ouverte sur les enjeux de durabilité.",
    duree: "Environ 2 h",
    niveau: "Débutant",

    // Étapes : une vue d'ensemble, les sept moments, une synthèse
    etapes: ["vue", "M1", "M2", "M3", "M4", "M5", "M6", "M7", "synthese"],

    vue: {
      visee: [
        "Le dispositif organise l'enseignement d'une notion de chimie en sept moments, qui relient cette notion à une pratique sociale de référence et à des enjeux de durabilité. Il vise à la fois l'appropriation du savoir chimique et le développement d'une culture scientifique citoyenne : la capacité des élèves à mobiliser la chimie pour comprendre leur environnement et éclairer des décisions responsables.",
        "Il s'applique en principe à toute notion du programme de chimie du lycée, même si certaines se prêtent plus difficilement que d'autres à un ancrage dans les pratiques sociales. Il est conçu pour des classes sans matériel expérimental : la mise à l'épreuve des conceptions s'appuie sur des documents, des données, des images, des objets du quotidien et des modèles.",
      ],
      figure: "/sept-moments/2_cycle_sept_moments.svg",
      principes: [
        {
          titre: "Une séquence, non une séance",
          texte:
            "Les sept moments se répartissent sur deux à trois séances. M1 à M3 sont courts ; M4 et M6 concentrent l'essentiel du temps d'activité des élèves.",
        },
        {
          titre: "Un ordre orienté mais souple",
          texte:
            "M1 à M3 ouvrent la séquence dans cet ordre ; M1 et M2 peuvent se confondre lorsque la situation suscite d'elle-même les explications des élèves. M4 précède toujours M5. M5 et M6 peuvent s'inverser lorsque la réflexion sur la durabilité aide à formuler la trace écrite. M7 comporte une part formative, de M2 à M6, et une tâche sommative finale.",
        },
        {
          titre: "Un noyau fixe, des choix libres",
          texte:
            "Les sept fonctions didactiques et les critères de la synthèse restent les mêmes. Vous êtes libre du choix de la situation de départ, de la durée de chaque moment, des formes de travail, des ressources de M4, de la langue et de la forme de l'évaluation.",
        },
        {
          titre: "Deux langues en classe",
          texte:
            "Pour chaque moment, une langue est indiquée : c'est une attente, pas une obligation. L'alternance du malgache et du français fait partie de la vie de la classe.",
        },
        {
          titre: "Des ressources partagées",
          texte:
            "Rohilova recense des situations de départ et des ressources pour M4, pour aider les enseignants qui peinent à les trouver.",
        },
      ],
      consigne:
        "Gardez un cahier ou un document ouvert pendant le parcours. À chaque moment, une consigne « À vous » vous demande d'écrire quelques lignes : à la fin, vous aurez le plan complet de votre propre séquence.",
    },

    synthese: {
      intro:
        "Une séquence met en œuvre le dispositif lorsque les sept conditions suivantes sont réunies. Relisez votre plan en vérifiant chacune d'elles.",
      conclusion:
        "Bientôt, vous pourrez déposer votre séquence dans l'espace Ressources pour la partager avec vos collègues.",
    },

    // Références citées dans les sept moments
    references: [
      "Brousseau, G. (1998). Théorie des situations didactiques. La Pensée Sauvage.",
      "Clément, P. (2006). Didactic transposition and the KVP model: Conceptions as interactions between scientific knowledge, values and social practices. In Proceedings of the ESERA Summer School 2006 (pp. 9-18). IEC, Universidade do Minho.",
      "Fabre, M. (2009). Philosophie et pédagogie du problème. Vrin.",
      "Martinand, J.-L. (1986). Connaître et transformer la matière : des objectifs pour l'initiation aux sciences et techniques. Peter Lang.",
      "McNeill, K. L., & Krajcik, J. (2012). Supporting grade 5-8 students in constructing explanations in science: The claim, evidence, and reasoning framework for talk and writing. Pearson.",
      "Orange, C. (2012). Enseigner les sciences : problèmes, débats et savoirs scientifiques en classe. De Boeck.",
      "Posner, G. J., Strike, K. A., Hewson, P. W., & Gertzog, W. A. (1982). Accommodation of a scientific conception: Toward a theory of conceptual change. Science Education, 66(2), 211-227. https://doi.org/10.1002/sce.3730660207",
      "Sjöström, J., & Talanquer, V. (2014). Humanizing chemistry education: From simple contextualization to multifaceted problematization. Journal of Chemical Education, 91(8), 1125-1131. https://doi.org/10.1021/ed5000718",
    ],
  },
];

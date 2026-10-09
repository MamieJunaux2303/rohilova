// ─────────────────────────────────────────────────────────────
//  LES BASES — espace « Se former », onglet Cadres théoriques
//  Pédagogie, didactique, leur différence, conceptions
//  alternatives. Ces fiches sont affichées avant les cadres
//  didactiques (cadres.js).
//
//  Rubriques possibles d'une fiche (toutes facultatives sauf
//  definition) : definition, tableau, utilite, courants,
//  sections, exemplesMatieres, vigilance, references.
//  exemplesMatieres[].matiere : identifiant de matieres.js
// ─────────────────────────────────────────────────────────────

export const BASES = [
  // ═══ PÉDAGOGIE ═══════════════════════════════════════════
  {
    id: "pedagogie",
    groupe: "bases",
    nom: "La pédagogie",
    auteurs: "Houssaye, 1988 ; Meirieu, 1987",
    resume:
      "L'art et la réflexion sur la conduite de la classe : comment organiser les apprentissages, quel que soit le contenu.",
    disponible: true,

    definition: [
      "Le mot vient du grec paidagôgos, l'esclave qui conduisait l'enfant jusqu'à l'école. La pédagogie désigne aujourd'hui l'ensemble des pratiques et des réflexions qui concernent la conduite de la classe et la relation éducative : comment l'enseignant organise le travail, anime le groupe, motive les élèves, les guide et les évalue.",
      "La pédagogie est générale : ses questions se posent dans toutes les matières. Qu'il enseigne la chimie, l'histoire ou le malgache, un enseignant doit décider comment former les groupes, comment faire participer une classe de cinquante élèves, comment aider celui qui décroche.",
      "Jean Houssaye (1988) la représente par le triangle pédagogique : le savoir, l'enseignant et les élèves. Trois relations les relient : enseigner (entre l'enseignant et le savoir), former (entre l'enseignant et les élèves) et apprendre (entre les élèves et le savoir). Selon Houssaye, toute situation de classe privilégie deux pôles, tandis que le troisième « fait le mort » : choisir une méthode, c'est choisir la relation que l'on met au premier plan.",
    ],

    utilite: [
      {
        titre: "Organiser la classe",
        texte:
          "Travail individuel, en binômes, en groupes, en classe entière : chaque forme a ses usages. Avec des effectifs souvent élevés, savoir organiser le travail est la première condition pour que tous les élèves apprennent.",
      },
      {
        titre: "Motiver et faire participer",
        texte:
          "Un élève qui ne voit pas à quoi sert ce qu'il apprend décroche. La pédagogie donne des moyens de susciter l'intérêt : partir d'une situation vécue, donner un défi, valoriser les progrès.",
      },
      {
        titre: "Tenir compte des différences",
        texte:
          "Les élèves d'une même classe n'apprennent ni au même rythme ni de la même manière. La différenciation pédagogique consiste à varier les supports, les aides et les tâches pour que chacun progresse.",
      },
      {
        titre: "Évaluer pour faire apprendre",
        texte:
          "L'évaluation ne sert pas seulement à noter. L'évaluation formative, pendant l'apprentissage, permet à l'élève de savoir où il en est et à l'enseignant d'ajuster son enseignement.",
      },
    ],

    courantsTitre: "Les grands courants pédagogiques",
    courants: [
      {
        nom: "La pédagogie traditionnelle",
        auteurs: "Modèle transmissif",
        idee:
          "L'enseignant détient le savoir et le transmet ; l'élève écoute, prend des notes et mémorise. Le savoir est exposé de manière ordonnée, du simple au complexe.",
        enClasse: "Cours magistral, leçon dictée ou recopiée, exercices d'application, récitation.",
        limite:
          "Efficace pour exposer beaucoup de contenu en peu de temps, mais l'élève reste passif : il retient souvent sans comprendre et peine à mobiliser ce qu'il sait dans une situation nouvelle.",
      },
      {
        nom: "Le béhaviorisme et la pédagogie par objectifs",
        auteurs: "Skinner ; Bloom, 1956 ; Mager",
        idee:
          "Apprendre, c'est modifier un comportement observable. On découpe l'apprentissage en petites étapes, chacune définie par un objectif précis, et on renforce les bonnes réponses.",
        enClasse:
          "Objectifs formulés avec des verbes d'action (« l'élève sera capable d'écrire l'équation de… »), exercices progressifs, correction immédiate. La taxonomie de Bloom hiérarchise les objectifs, de la connaissance à l'évaluation.",
        limite:
          "Clarifie ce qui est attendu et facilite l'évaluation, mais le découpage en micro-objectifs peut faire perdre le sens global de ce qui est appris.",
      },
      {
        nom: "L'éducation nouvelle et les pédagogies actives",
        auteurs: "Dewey, Montessori, Decroly, Freinet",
        idee:
          "L'élève apprend en agissant, à partir de ses intérêts et de situations réelles. L'école doit être liée à la vie.",
        enClasse:
          "Travail par projets, enquêtes, sorties, correspondance scolaire, texte libre et imprimerie (Freinet), centres d'intérêt (Decroly), matériel manipulable (Montessori).",
        limite:
          "Très motivante, mais exigeante en temps et en organisation ; sans objectifs de savoir clairs, l'activité peut l'emporter sur l'apprentissage.",
      },
      {
        nom: "Le constructivisme",
        auteurs: "Piaget",
        idee:
          "L'élève construit lui-même ses connaissances en agissant sur le monde. Il intègre les informations nouvelles à ce qu'il sait déjà (assimilation) ou transforme ses connaissances lorsqu'elles ne suffisent plus (accommodation). Le déséquilibre, ou conflit cognitif, est le moteur de l'apprentissage.",
        enClasse:
          "Situations-problèmes, prédictions confrontées aux résultats, place laissée à l'erreur comme étape de l'apprentissage.",
        limite:
          "Met l'accent sur l'élève seul face au savoir ; le rôle des échanges avec les autres y est moins développé.",
      },
      {
        nom: "Le socioconstructivisme",
        auteurs: "Vygotski ; Doise et Mugny",
        idee:
          "On apprend avec les autres. Pour Vygotski, l'élève progresse dans sa zone proximale de développement : ce qu'il ne sait pas encore faire seul, mais qu'il réussit avec l'aide d'un adulte ou d'un camarade plus avancé. Doise et Mugny montrent que la confrontation de points de vue (le conflit sociocognitif) fait progresser.",
        enClasse:
          "Travail en groupes, débats, confrontation des réponses, tutorat entre élèves, étayage de l'enseignant qui se retire progressivement.",
        limite:
          "Le travail en groupe ne suffit pas : sans tâche bien conçue, certains élèves travaillent et d'autres regardent.",
      },
      {
        nom: "L'approche par compétences",
        auteurs: "Roegiers, 2000 ; Perrenoud",
        idee:
          "L'objectif n'est pas seulement de savoir, mais de savoir mobiliser ses ressources (connaissances, savoir-faire, attitudes) pour résoudre des situations complexes. On apprend les ressources, puis on les intègre dans des situations.",
        enClasse:
          "Situations d'intégration, tâches complexes, évaluation sur des situations nouvelles. Le programme d'études 2026, centré sur les résultats d'apprentissage et la mobilisation des connaissances en situation, s'inscrit dans cette logique.",
        limite:
          "La notion de compétence reste discutée ; mal comprise, l'approche peut conduire à négliger les savoirs de base.",
      },
    ],

    sections: [
      {
        titre: "Quel courant choisir ?",
        paragraphes: [
          "Aucun courant n'est bon en toutes circonstances. Un enseignant expérimenté combine souvent plusieurs approches dans une même séquence : un moment d'exposé clair, une situation-problème, un travail de groupe, des exercices d'entraînement.",
          "L'éducation au développement durable s'appuie surtout sur les pédagogies actives et socioconstructivistes : partir de situations réelles, faire débattre, mobiliser les savoirs pour agir. Les méthodes de l'onglet « Intégrer l'EDD » en sont des applications.",
        ],
      },
    ],

    references: [
      "Bloom, B. S. (Dir.). (1956). Taxonomy of educational objectives. Handbook I: Cognitive domain. David McKay.",
      "Doise, W., & Mugny, G. (1981). Le développement social de l'intelligence. InterÉditions.",
      "Houssaye, J. (1988). Le triangle pédagogique. Peter Lang.",
      "Meirieu, P. (1987). Apprendre… oui, mais comment ? ESF.",
      "Piaget, J. (1975). L'équilibration des structures cognitives. PUF.",
      "Roegiers, X. (2000). Une pédagogie de l'intégration. De Boeck.",
      "Vygotski, L. S. (1997). Pensée et langage (F. Sève, Trad. ; 3e éd.). La Dispute. (Ouvrage original publié en 1934)",
    ],
  },

  // ═══ DIDACTIQUE ══════════════════════════════════════════
  {
    id: "didactique",
    groupe: "bases",
    nom: "La didactique",
    auteurs: "Astolfi et Develay, 1989 ; Brousseau, 1998",
    resume:
      "L'étude de l'enseignement et de l'apprentissage d'un savoir particulier : ce qui est propre à chaque matière.",
    disponible: true,

    definition: [
      "La didactique étudie les processus d'enseignement et d'apprentissage d'un savoir particulier. Là où la pédagogie se demande comment conduire la classe, la didactique se demande comment enseigner ce savoir-là, et pourquoi les élèves ont du mal à l'apprendre.",
      "Elle est donc propre à chaque discipline : on parle de didactique des mathématiques, des sciences, des langues, de l'histoire. Chacune analyse la nature des savoirs de sa discipline, leur histoire, les difficultés qu'ils posent aux élèves et les situations qui permettent de les construire.",
      "Les didactiques des disciplines se sont développées en France à partir des années 1970, d'abord en mathématiques (Brousseau, Chevallard, Vergnaud), puis en sciences expérimentales (Astolfi, Develay, Martinand). Elles partagent un ensemble de concepts communs, présentés ci-dessous.",
    ],

    utilite: [
      {
        titre: "Analyser le savoir avant de l'enseigner",
        texte:
          "Que signifie vraiment la notion ? D'où vient-elle ? Sur quelles autres notions s'appuie-t-elle ? Cette analyse permet de choisir ce qui est essentiel et d'anticiper les difficultés.",
      },
      {
        titre: "Comprendre les erreurs des élèves",
        texte:
          "Une erreur n'est pas toujours un manque de travail : elle révèle souvent une conception ou un obstacle lié à la notion elle-même. La didactique aide à l'interpréter, et donc à y répondre.",
      },
      {
        titre: "Concevoir des situations d'apprentissage",
        texte:
          "Choisir une situation dans laquelle le savoir visé devient nécessaire pour résoudre un problème, plutôt que de l'énoncer directement.",
      },
      {
        titre: "Évaluer ce qui compte",
        texte:
          "Distinguer ce que l'élève récite de ce qu'il a compris, et construire des évaluations qui portent sur la compréhension du savoir, pas seulement sur sa mémorisation.",
      },
    ],

    courantsTitre: "Les concepts clés à connaître",
    courants: [
      {
        nom: "Le triangle didactique",
        auteurs: "Savoir, enseignant, élève",
        idee:
          "Les mêmes trois pôles que le triangle pédagogique, mais vus depuis le savoir : la didactique s'intéresse surtout à la manière dont le savoir circule entre l'enseignant et les élèves, et à ce qu'il devient en chemin.",
        enClasse: "Se demander, pour chaque activité, quel savoir précis elle fait travailler aux élèves.",
      },
      {
        nom: "La transposition didactique",
        auteurs: "Verret, 1975 ; Chevallard, 1985",
        idee:
          "Le savoir enseigné n'est pas le savoir des savants : il a été choisi, découpé et transformé pour devenir enseignable. Une fiche détaillée lui est consacrée dans les cadres didactiques.",
        enClasse: "Vérifier que les simplifications de la leçon restent fidèles au savoir de référence.",
      },
      {
        nom: "Le contrat didactique",
        auteurs: "Brousseau, 1998",
        idee:
          "L'ensemble des attentes, souvent implicites, entre l'enseignant et les élèves à propos du savoir : ce que chacun pense devoir faire. Exemple célèbre : « l'âge du capitaine », où des élèves calculent une réponse absurde parce qu'ils pensent qu'un problème posé a forcément une réponse calculable avec ses nombres.",
        enClasse:
          "Repérer quand les élèves cherchent à deviner la réponse attendue plutôt qu'à comprendre, et rendre explicites les règles du travail demandé.",
      },
      {
        nom: "La dévolution et le milieu",
        auteurs: "Brousseau, 1998",
        idee:
          "La dévolution consiste à faire accepter aux élèves la responsabilité d'un problème, à en faire leur problème. Le milieu est ce sur quoi ils agissent (documents, matériel, données) et qui leur renvoie une information sur leurs réponses, sans que l'enseignant ait à dire si c'est juste.",
        enClasse:
          "Proposer une tâche que les élèves peuvent engager seuls, avec des ressources qui leur permettent de vérifier eux-mêmes leurs hypothèses.",
      },
      {
        nom: "L'obstacle",
        auteurs: "Bachelard, 1938 ; Brousseau",
        idee:
          "Certaines difficultés ne viennent pas d'un manque de connaissances, mais d'une connaissance antérieure qui a fonctionné jusque-là et qui empêche d'en construire une nouvelle. Pour Bachelard, on connaît « contre » une connaissance antérieure.",
        enClasse: "Identifier, pour chaque notion, les obstacles prévisibles, et prévoir des situations qui les mettent en défaut.",
      },
      {
        nom: "Les conceptions des élèves",
        auteurs: "Giordan et De Vecchi, 1987",
        idee:
          "Les explications que les élèves ont déjà avant l'enseignement. Une fiche détaillée leur est consacrée dans les bases.",
        enClasse: "Les faire exprimer avant d'enseigner, puis les mettre à l'épreuve.",
      },
    ],

    references: [
      "Astolfi, J.-P., & Develay, M. (1989). La didactique des sciences. PUF.",
      "Bachelard, G. (1938). La formation de l'esprit scientifique. Vrin.",
      "Brousseau, G. (1998). Théorie des situations didactiques. La Pensée Sauvage.",
      "Chevallard, Y. (1991). La transposition didactique : du savoir savant au savoir enseigné (2e éd.). La Pensée Sauvage.",
      "Reuter, Y., Cohen-Azria, C., Daunay, B., Delcambre, I., & Lahanier-Reuter, D. (2013). Dictionnaire des concepts fondamentaux des didactiques (3e éd.). De Boeck.",
      "Vergnaud, G. (1990). La théorie des champs conceptuels. Recherches en didactique des mathématiques, 10(2-3), 133-170.",
    ],
  },

  // ═══ DIFFÉRENCE ══════════════════════════════════════════
  {
    id: "didactique-pedagogie",
    groupe: "bases",
    nom: "Didactique et pédagogie : quelle différence ?",
    auteurs: "Deux regards complémentaires sur la classe",
    resume:
      "La pédagogie regarde la classe, la didactique regarde le savoir. Toute leçon a besoin des deux.",
    disponible: true,

    definition: [
      "Pédagogie et didactique s'intéressent à la même situation : un enseignant, des élèves et un savoir. Elles la regardent depuis deux points de vue différents.",
      "La pédagogie se demande comment conduire la classe : organiser le travail, faire participer, motiver, accompagner chaque élève. Ses réponses valent pour toutes les matières.",
      "La didactique se demande comment enseigner ce savoir-là : ce qu'il signifie, pourquoi il est difficile, quelles conceptions il bouscule, quelle situation permet de le construire. Ses réponses sont propres à chaque discipline.",
    ],

    tableauTitre: "Les deux regards, point par point",
    tableau: {
      colonnes: ["Pédagogie", "Didactique"],
      lignes: [
        {
          critere: "La question centrale",
          valeurs: [
            "Comment conduire la classe pour que les élèves apprennent ?",
            "Comment enseigner ce savoir, et comment les élèves l'apprennent-ils ?",
          ],
        },
        {
          critere: "Ce qu'elle étudie d'abord",
          valeurs: [
            "La relation éducative, le groupe, les conditions de l'apprentissage.",
            "Le savoir lui-même : sa nature, son histoire, sa transformation pour l'école.",
          ],
        },
        {
          critere: "Son rapport aux matières",
          valeurs: [
            "Générale : valable dans toutes les matières.",
            "Spécifique : une didactique par discipline.",
          ],
        },
        {
          critere: "Dans le triangle",
          valeurs: [
            "Privilégie la relation entre l'enseignant et les élèves (former).",
            "Privilégie les relations au savoir (enseigner, apprendre).",
          ],
        },
        {
          critere: "Ses concepts typiques",
          valeurs: [
            "Motivation, gestion de classe, différenciation, travail de groupe, évaluation formative.",
            "Transposition, contrat didactique, dévolution, obstacle, conception.",
          ],
        },
        {
          critere: "Face à une erreur",
          valeurs: [
            "L'élève était-il attentif, motivé, la consigne était-elle claire ?",
            "Quelle conception, quel obstacle cette erreur révèle-t-elle ?",
          ],
        },
        {
          critere: "Un exemple",
          valeurs: [
            "Organiser une classe de cinquante élèves en groupes de cinq pour analyser des documents.",
            "Choisir les documents qui obligent à distinguer combustion complète et incomplète.",
          ],
        },
      ],
    },

    sections: [
      {
        titre: "Une confusion fréquente",
        paragraphes: [
          "La didactique n'est pas « la pédagogie appliquée à une matière ». Un enseignant peut maîtriser parfaitement la gestion de sa classe et pourtant enseigner une notion de manière qui renforce les conceptions erronées de ses élèves. À l'inverse, une analyse didactique très fine ne sert à rien si la classe n'est pas organisée pour que les élèves travaillent.",
        ],
      },
      {
        titre: "Les deux à l'œuvre dans les sept moments",
        paragraphes: [
          "La séquence en sept moments mobilise constamment les deux regards. Le choix de la situation de départ (M1), le recueil des conceptions (M2), la question-problème (M3) et la trace écrite (M5) relèvent surtout de la didactique : ils dépendent de la notion enseignée.",
          "L'organisation des groupes et de la mise en commun (M4), la gestion de la prise de parole (M2) et l'animation du débat (M6) relèvent surtout de la pédagogie : ils se retrouvent dans toutes les matières. Une bonne séquence est celle où les deux se soutiennent.",
        ],
      },
    ],

    references: [
      "Astolfi, J.-P., & Develay, M. (1989). La didactique des sciences. PUF.",
      "Houssaye, J. (1988). Le triangle pédagogique. Peter Lang.",
      "Reuter, Y., Cohen-Azria, C., Daunay, B., Delcambre, I., & Lahanier-Reuter, D. (2013). Dictionnaire des concepts fondamentaux des didactiques (3e éd.). De Boeck.",
    ],
  },

  // ═══ CONCEPTIONS ALTERNATIVES ════════════════════════════
  {
    id: "conceptions",
    groupe: "bases",
    nom: "Les conceptions alternatives",
    auteurs: "Giordan et De Vecchi, 1987 ; Posner et al., 1982",
    resume:
      "Ce que les élèves pensent déjà avant la leçon, et pourquoi il faut en partir pour qu'ils apprennent vraiment.",
    disponible: true,

    definition: [
      "Les élèves n'arrivent jamais en classe la tête vide. Pour expliquer le monde qui les entoure, ils ont déjà construit des idées, à partir de leur expérience quotidienne, de la langue, de leur culture et de leurs apprentissages antérieurs. Ces idées sont appelées conceptions, ou représentations.",
      "On parle de conceptions alternatives lorsqu'elles diffèrent du savoir scientifique enseigné. Le terme « alternative » est préféré à « erronée » (en anglais misconception) : ces conceptions ne sont pas des fautes d'inattention, mais des explications cohérentes pour l'élève, qui lui ont souvent rendu service.",
      "Exemple : pour beaucoup d'élèves, « la matière disparaît quand elle brûle ». L'observation quotidienne semble leur donner raison : le bois devient une petite quantité de cendres. Il faut savoir que des gaz invisibles se forment pour comprendre que la matière se conserve.",
    ],

    utiliteTitre: "Leurs caractéristiques",
    utilite: [
      {
        titre: "Elles sont cohérentes",
        texte: "Elles expliquent de manière satisfaisante, pour l'élève, ce qu'il observe au quotidien. C'est ce qui les rend solides.",
      },
      {
        titre: "Elles résistent à l'enseignement",
        texte:
          "Un élève peut réciter correctement la leçon et garder intacte sa conception, qu'il réutilise dès qu'il sort du cadre scolaire. Les deux coexistent.",
      },
      {
        titre: "Elles sont largement partagées",
        texte:
          "Les mêmes conceptions se retrouvent chez des élèves de pays et d'âges très différents, ce qui permet de les anticiper.",
      },
      {
        titre: "Elles s'appuient sur le langage",
        texte:
          "Les mots du quotidien portent des idées : « le soleil se lève », « l'eau s'évapore et disparaît », « ce produit est chimique, donc dangereux ». En malgache comme en français, la langue courante peut renforcer une conception.",
      },
    ],

    courantsTitre: "Comment les travailler en classe",
    courants: [
      {
        nom: "Les faire émerger",
        auteurs: "Avant tout enseignement",
        idee:
          "On ne peut pas travailler une conception que l'on ne connaît pas. La première étape est de la rendre visible, sans la juger.",
        enClasse:
          "Questions ouvertes, prédictions (« que va-t-il se passer si… ? »), dessins, billets écrits individuellement, discussion en malgache. C'est le moment M2 des sept moments.",
      },
      {
        nom: "Créer un conflit cognitif",
        auteurs: "Piaget ; Posner, Strike, Hewson et Gertzog, 1982",
        idee:
          "Placer l'élève face à une situation que sa conception ne permet pas d'expliquer. Selon Posner et ses collègues, l'élève change de conception lorsqu'il est insatisfait de l'ancienne et que la nouvelle lui paraît compréhensible, plausible et plus féconde.",
        enClasse:
          "Confronter une prédiction à des données : la masse des produits d'une combustion mesurée, des résultats d'analyse d'une eau limpide mais contaminée.",
      },
      {
        nom: "Viser le franchissement d'un obstacle",
        auteurs: "Martinand, 1986 ; Astolfi et Peterfalvi, 1993",
        idee:
          "Martinand propose de faire du dépassement d'un obstacle l'objectif même de la séquence : c'est l'objectif-obstacle. On choisit les obstacles qui valent la peine d'être travaillés, plutôt que de vouloir tout corriger.",
        enClasse: "Formuler l'objectif de la séquence en termes d'obstacle à dépasser, et construire les activités en conséquence.",
      },
      {
        nom: "Apprendre avec et contre ses conceptions",
        auteurs: "Giordan, modèle allostérique",
        idee:
          "Pour André Giordan, on n'apprend ni en effaçant ses conceptions, ni en les ignorant, mais en les transformant : la nouvelle connaissance se construit à partir de l'ancienne, qui en est à la fois le point d'appui et l'obstacle.",
        enClasse:
          "Laisser du temps et multiplier les occasions : documents, échanges entre élèves, aide de l'enseignant, retour sur ce que l'on pensait au départ.",
      },
      {
        nom: "Faire le bilan du chemin parcouru",
        auteurs: "Métacognition",
        idee:
          "Comparer explicitement ce que l'on pensait avant et ce que l'on sait après aide l'élève à prendre conscience du changement, et à le stabiliser.",
        enClasse:
          "Reprendre les billets ou la liste du tableau de M2 au moment de la trace écrite (M5) : quelles idées sont confirmées, modifiées, abandonnées ?",
      },
    ],

    exemplesMatieres: [
      { matiere: "chimie", texte: "« La matière disparaît quand elle brûle. » « Une eau limpide est forcément potable. » « Ce qui est chimique est dangereux, ce qui est naturel est sans danger. »" },
      { matiere: "physique", texte: "« Un objet lourd tombe plus vite qu'un objet léger. » « Le courant électrique s'use dans l'ampoule. »" },
      { matiere: "svt", texte: "« Les plantes se nourrissent de terre. » « Les microbes sont tous nuisibles. »" },
      { matiere: "mathematiques", texte: "« Multiplier, c'est toujours agrandir. » « 0,25 est plus grand que 0,3 parce que 25 est plus grand que 3. »" },
      { matiere: "histoire-geographie", texte: "« Il fait plus chaud en été parce que la Terre est plus proche du Soleil. »" },
      { matiere: "ses", texte: "« Imprimer davantage de billets rendrait tout le monde plus riche. »" },
    ],

    vigilance: [
      "Ne pas ridiculiser une conception : l'élève qui l'exprime prend un risque, et c'est ce risque qui permet d'apprendre.",
      "Certaines conceptions s'appuient sur des savoirs familiaux, des pratiques ou des croyances locales. Elles sont à discuter comme des explications, non à disqualifier (Clément, 2006).",
      "Une seule leçon suffit rarement : une conception ancienne demande plusieurs occasions de mise à l'épreuve.",
    ],

    references: [
      "Astolfi, J.-P., & Peterfalvi, B. (1993). Obstacles et construction de situations didactiques en sciences expérimentales. Aster, 16 (Modèles pédagogiques 1), 103-141.",
      "Bachelard, G. (1938). La formation de l'esprit scientifique. Vrin.",
      "Clément, P. (2006). Didactic transposition and the KVP model: Conceptions as interactions between scientific knowledge, values and social practices. In Proceedings of the ESERA Summer School 2006 (pp. 9-18). IEC, Universidade do Minho.",
      "Driver, R., Guesne, E., & Tiberghien, A. (Dir.). (1985). Children's ideas in science. Open University Press.",
      "Giordan, A., & De Vecchi, G. (1987). Les origines du savoir : des conceptions des apprenants aux concepts scientifiques. Delachaux et Niestlé.",
      "Martinand, J.-L. (1986). Connaître et transformer la matière : des objectifs pour l'initiation aux sciences et techniques. Peter Lang.",
      "Posner, G. J., Strike, K. A., Hewson, P. W., & Gertzog, W. A. (1982). Accommodation of a scientific conception: Toward a theory of conceptual change. Science Education, 66(2), 211-227. https://doi.org/10.1002/sce.3730660207",
    ],
  },
];

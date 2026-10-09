// ─────────────────────────────────────────────────────────────
//  CADRES THÉORIQUES — espace « Se former »
//  Un cadre est « disponible » quand son contenu est rédigé et
//  validé. Les autres s'affichent comme « en préparation ».
// ─────────────────────────────────────────────────────────────

import { BASES } from "./cadres-bases";

// Les cadres didactiques ; les bases sont dans cadres-bases.js
const CADRES_DIDACTIQUES = [
  {
    id: "transposition",
    groupe: "cadres",
    nom: "Transposition didactique",
    auteurs: "Verret, 1975 ; Chevallard, 1985/1991",
    resume:
      "Comment un savoir savant devient une leçon, et ce que l'enseignant en fait dans sa classe.",
    disponible: true,

    // 1. Définir
    definition: [
      "Entre le savoir produit par les chimistes et ce qu'un élève retient d'une leçon, le savoir ne reste jamais identique : il est choisi, découpé, simplifié, réorganisé, puis reconstruit par l'élève. La transposition didactique désigne l'ensemble de ces transformations.",
      "Le terme apparaît chez le sociologue Michel Verret (1975), qui s'intéressait à tous les savoirs transmis par l'école. Yves Chevallard l'a ensuite développé en didactique des mathématiques (1985/1991) : un savoir désigné comme « à enseigner » subit des « transformations adaptatives » qui le rendent apte à devenir un objet d'enseignement.",
      "Chevallard distingue deux étapes. La transposition externe transforme le savoir savant en savoir à enseigner : elle se joue hors de la classe, dans la noosphère, c'est-à-dire l'ensemble des acteurs qui décident des programmes (concepteurs, inspecteurs, scientifiques, responsables politiques, parents). La transposition interne transforme le savoir à enseigner en savoir enseigné : c'est le travail de l'enseignant qui prépare puis conduit sa leçon.",
      "Pour Chevallard, la transposition n'est ni bonne ni mauvaise : elle est inévitable, car il n'existe pas d'enseignement sans transformation du savoir. Elle ne se confond pas pour autant avec la vulgarisation scientifique, qui rend la science accessible au grand public sans viser un apprentissage organisé.",
      "Le concept a ensuite été élargi. Martinand (1986) montre que les savoirs scolaires prennent aussi leur source dans des pratiques sociales de référence : activités techniques, domestiques ou professionnelles. Develay (1992) et Perrenoud (1998) intègrent ces pratiques à la chaîne et la prolongent jusqu'à ce que les élèves apprennent réellement.",
    ],

    // 2. Justifier son utilité
    utilite: [
      {
        titre: "Lire le programme comme un choix",
        texte:
          "Le programme d'études n'est pas la chimie elle-même : c'est déjà le résultat d'une transposition externe, avec ses sélections et ses découpages. Le savoir aide l'enseignant à comprendre pourquoi une notion figure en T11 plutôt qu'en T12, et ce qui a été laissé de côté.",
      },
      {
        titre: "Préparer une leçon, c'est transposer",
        texte:
          "Choisir les exemples, ordonner les étapes, décider du vocabulaire, simplifier une équation : chaque décision de préparation est un acte de transposition interne. Verret le souligne : tout enseignement suppose d'abord de transformer son objet en objet d'enseignement. En prendre conscience permet de faire ces choix de manière réfléchie plutôt que par habitude.",
      },
      {
        titre: "Garder une vigilance épistémologique",
        texte:
          "Toute simplification comporte un risque. Un savoir trop éloigné de sa référence peut devenir faux ou installer des conceptions alternatives durables, comme « la matière disparaît quand elle brûle » ou « une eau limpide est potable ». Brousseau (1998) invite à placer la transposition sous surveillance : vérifier que ce qui est enseigné reste fidèle au savoir de référence.",
      },
      {
        titre: "Relier la chimie aux pratiques sociales",
        texte:
          "En partant des pratiques sociales de référence, comme la fabrication du charbon de bois, la savonnerie artisanale ou le traitement de l'eau, l'enseignant donne aux savoirs une fonction dans la vie des élèves. C'est le fondement de Rohilova et de l'éducation au développement durable : des savoirs fonctionnels, que les élèves mobilisent pour comprendre leur environnement et prendre des décisions éclairées.",
      },
      {
        titre: "Penser jusqu'à l'apprentissage des élèves",
        texte:
          "Ce qui est enseigné n'est pas ce qui est appris. Les modèles de Develay et de Perrenoud rappellent que la chaîne ne s'arrête qu'aux savoirs réellement assimilés. L'évaluation fait donc partie de la transposition, et elle doit porter sur ce qui a été travaillé en classe.",
      },
    ],

    // 3. Les chaînes de la transposition didactique
    //  sources : point de départ de la chaîne (aucun, un ou deux)
    //  etapes  : maillons successifs ; « passage » = texte de la flèche
    chaines: [
      {
        id: "verret",
        auteur: "Verret",
        annee: "1975",
        titre: "Les opérations de la transposition",
        sources: [],
        etapes: [
          { label: "Désyncrétisation du savoir", detail: "Le savoir est découpé en domaines et en notions distincts." },
          { label: "Dépersonnalisation du savoir", detail: "Il est détaché de la personne et du contexte qui l'ont produit." },
          { label: "Programmation du savoir", detail: "Les notions sont ordonnées en une progression." },
          { label: "Publicité du savoir", detail: "Le savoir est rendu public et explicite : définitions, énoncés, trace écrite." },
          { label: "Contrôle des acquisitions", detail: "Les apprentissages sont vérifiés par des évaluations et des examens." },
        ],
        commentaire:
          "Verret décrit les opérations par lesquelles un savoir devient scolaire. Son modèle va jusqu'au contrôle de ce que les élèves ont acquis.",
      },
      {
        id: "chevallard",
        auteur: "Chevallard",
        annee: "1985/1991",
        titre: "Du savoir savant au savoir enseigné",
        sources: [{ label: "Savoir savant", detail: "Objet de savoir" }],
        etapes: [
          { passage: "Transposition externe, par la noosphère", label: "Savoir à enseigner", detail: "Programmes et manuels" },
          { passage: "Transposition interne, par l'enseignant", label: "Savoir enseigné", detail: "Ce qui se dit et se fait en classe" },
        ],
        commentaire:
          "Le modèle de référence. Il part du seul savoir savant et s'arrête au savoir enseigné en classe.",
      },
      {
        id: "develay",
        auteur: "Develay",
        annee: "1992",
        titre: "Savoirs savants et pratiques sociales",
        sources: [
          { label: "Savoirs savants" },
          { label: "Pratiques sociales de référence" },
        ],
        etapes: [
          { passage: "Didactisation, choix de valeurs (axiologiques), travail du concepteur de programme", label: "Savoirs à enseigner" },
          { passage: "Travail de l'enseignant", label: "Savoirs enseignés" },
          { passage: "Travail de l'élève", label: "Savoirs assimilés" },
        ],
        commentaire:
          "Develay place les pratiques sociales de référence à côté des savoirs savants, nomme le travail accompli à chaque passage et prolonge la chaîne jusqu'à l'élève.",
      },
      {
        id: "perrenoud",
        auteur: "Perrenoud",
        annee: "1998",
        titre: "Des savoirs et pratiques aux apprentissages",
        sources: [{ label: "Savoirs et pratiques ayant cours dans la société" }],
        etapes: [
          { label: "Curriculum formel", detail: "Objectifs et programmes" },
          { label: "Curriculum réel", detail: "Contenus effectivement enseignés" },
          { label: "Apprentissages effectifs et durables des élèves" },
        ],
        commentaire:
          "Perrenoud part des savoirs et des pratiques de la société, puis distingue ce qui est prescrit (curriculum formel), ce qui est réellement enseigné (curriculum réel) et ce qui est appris durablement.",
      },
    ],

    comparaison: [
      "Les modèles se distinguent surtout par leurs extrémités. Au départ, Chevallard ne retient que le savoir savant, alors que Develay et Perrenoud y ajoutent les pratiques sociales. À l'arrivée, Chevallard s'arrête au savoir enseigné, tandis que Verret, Develay et Perrenoud vont jusqu'aux acquisitions des élèves.",
      "Pour un enseignement de la chimie au service du développement durable, les modèles de Develay et de Perrenoud sont les plus éclairants : ils partent de la société et s'achèvent sur ce que l'élève a réellement appris.",
    ],

    // Exemple malgache : la chaîne de Develay appliquée à une notion
    exemple: {
      titre: "La saponification, du savony nosy à la copie de l'élève",
      chaine: {
        id: "exemple-saponification",
        auteur: "Exemple",
        annee: "",
        titre: "La chaîne de Develay appliquée à la saponification",
        sources: [
          { label: "Savoirs savants", detail: "Chimie organique : hydrolyse des triglycérides en milieu basique" },
          { label: "Pratiques sociales de référence", detail: "Fabrication du savon local (savony nosy), lessive" },
        ],
        etapes: [
          { passage: "Concepteurs du programme d'études", label: "Savoirs à enseigner", detail: "La saponification en T11 L et OSE : définition et équation-bilan" },
          { passage: "Enseignant", label: "Savoirs enseignés", detail: "Une séquence qui part du savon du marché pour arriver à l'équation" },
          { passage: "Élève", label: "Savoirs assimilés", detail: "Choisir entre un savon industriel et un savon local, et justifier ce choix par la chimie" },
        ],
        commentaire: "",
      },
    },

    references: [
      "Brousseau, G. (1998). Théorie des situations didactiques. La Pensée Sauvage.",
      "Chevallard, Y. (1991). La transposition didactique : du savoir savant au savoir enseigné (2e éd.). La Pensée Sauvage. (1re éd. 1985)",
      "Develay, M. (1992). De l'apprentissage à l'enseignement. ESF.",
      "Martinand, J.-L. (1986). Connaître et transformer la matière. Peter Lang.",
      "Perrenoud, P. (1998). La transposition didactique à partir de pratiques : des savoirs aux compétences. Revue des sciences de l'éducation, 24(3), 487-514.",
      "Tsimilaza, A., & Randriamanantena, M. S. J. P. (2024). Considération du rapport sciences-sociétés et acculturation scientifique dans l'enseignement/apprentissage de chimie. Revue Hybrides, 2(4), 321-337.",
      "Verret, M. (1975). Le temps des études. Honoré Champion.",
    ],
  },

  // ─── Cadres en préparation ───
  {
    id: "action-conjointe",
    groupe: "cadres",
    nom: "Action conjointe en didactique",
    auteurs: "Sensevy, 2011",
    resume: "Analyser comment l'enseignant et les élèves font avancer ensemble le savoir en classe.",
    disponible: false,
  },
  {
    id: "approches-contextualisees",
    groupe: "cadres",
    nom: "Approches contextualisées",
    auteurs: "Bennett, Lubben et Hogarth, 2007",
    resume: "Partir de situations de la vie réelle pour enseigner les notions scientifiques.",
    disponible: false,
  },
  {
    id: "qsv",
    groupe: "cadres",
    nom: "Questions socialement vives",
    auteurs: "Legardez et Simonneaux, 2006",
    resume: "Enseigner à partir de questions qui font débat dans la société et chez les scientifiques.",
    disponible: false,
  },
];

// Toutes les fiches de l'onglet, les bases en premier
export const CADRES = [...BASES, ...CADRES_DIDACTIQUES];

export const GROUPES_CADRES = [
  { id: "bases", titre: "Les bases", texte: "Les notions à maîtriser avant tout : ce que sont la pédagogie et la didactique, et ce que pensent déjà les élèves." },
  { id: "cadres", titre: "Les cadres didactiques", texte: "Des cadres théoriques pour analyser et concevoir l'enseignement." },
];

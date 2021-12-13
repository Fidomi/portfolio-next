import demo2018_O from "../public/img/demo_2018_O.png";
import demo2016_O from "../public/img/demo_2016_O.png";
import gardenMap_O from "../public/img/my_garden_map_O.png";
import seat_O from "../public/img/seat_O.png";
import amap_O from "../public/img/amap_O.png";
import walkcycle_O from "../public/img/walk_cycle_O.png";
import demo2018_16_9 from "../public/img/demo_2018_C.png";
import demo2016_16_9 from "../public/img/demo_2016_C.png";
import gardenMap_16_9 from "../public/img/my_garden_map_C.png";
import seat_16_9 from "../public/img/seat_C.png";
import amap_16_9 from "../public/img/amap_C.png";
import walkcycle_16_9 from "../public/img/walk_cycle_C.png";
import ailleurs_1 from "../public/img/ailleurs_1.png";
import ailleurs_2 from "../public/img/ailleurs_2.png";
import ailleurs_3 from "../public/img/ailleurs_3.png";
import ailleurs_1_carre from "../public/img/ailleurs_1_carre.png";
import ailleurs_2_carre from "../public/img/ailleurs_2_carre.png";
import ailleurs_3_carre from "../public/img/ailleurs_3_carre.png";
import ailleurs_C from "../public/img/ailleurs_C.png";
import clairenou_C from "../public/img/clairenou_C.png";
import clairenou_1 from "../public/img/clairenou_1.png";
import clairenou_2 from "../public/img/clairenou_2.png";
import clairenou_3 from "../public/img/clairenou_3.png";
import clairenou_1_carre from "../public/img/clairenou_1_carre.png";
import clairenou_2_carre from "../public/img/clairenou_2_carre.png";
import clairenou_3_carre from "../public/img/clairenou_3_carre.png";
import wheel_C from "../public/img/wheel_C.png";
import wheel_1 from "../public/img/wheel_1.png";
import wheel_2 from "../public/img/wheel_2.png";
import wheel_3 from "../public/img/wheel_3.png";
import wheel_1_carre from "../public/img/wheel_1_carre.png";
import wheel_2_carre from "../public/img/wheel_2_carre.png";
import wheel_3_carre from "../public/img/wheel_3_carre.png";
import portfolio_C from "../public/img/portfolio_C.png";
import portfolio_1 from "../public/img/portfolio_1.png";
import portfolio_2 from "../public/img/portfolio_2.png";
import portfolio_3 from "../public/img/portfolio_3.png";
import portfolio_1_carre from "../public/img/portfolio_1_carre.png";
import portfolio_2_carre from "../public/img/portfolio_2_carre.png";
import portfolio_3_carre from "../public/img/portfolio_3_carre.png";

export type Project = {
    dev: boolean;
    id: number;
    title: string;
    subtitle: string;
    desc: string[];
    name: string;
    img: StaticImageData[];
    imgC: StaticImageData[];
    srcVideo?: string;
    technical_sheet?: string[];
    technologies?: string[];
    preview?: boolean; //is there a website?
    url?: string;
    code?: boolean; //is there a github repo?
    github?: string;
};

export const PROJECTS_EN: Project[] = [
    {
        dev: false,
        id: 1,
        title: "Demoreel 2018",
        subtitle: "Compositing and Motion Design demoreel",
        desc: [
            "Compositing made with Nuke, Motion Design made with After Effects.",
            "Extracts of several movie shots I worked on between 2016 and 2018.",
        ],
        name: "demo2018",
        img: [demo2018_O],
        imgC: [demo2018_16_9],
        srcVideo:
            "https://player.vimeo.com/video/431456339?portrait=0&title=0&byline=0",
    },
    {
        dev: false,
        id: 2,
        title: "Demoreel 2016",
        subtitle: "Compositing and Motion Design demoreel",
        desc: [
            "3D Introduction made with Cinema4D, compositing of the shots made with Nuke. ",
            "Extracts of several movie shots I worked on between 2012 and 2016.",
        ],
        name: "demo2016",
        img: [demo2016_O],
        imgC: [demo2016_16_9],
        srcVideo:
            "https://player.vimeo.com/video/194044173?portrait=0&title=0&byline=0",
    },
    {
        dev: false,
        id: 3,
        title: "My Garden Map",
        subtitle: "Animated explainer video to promote 'My Garden Map'",
        desc: [
            "My role : design, storyboard, animation (After Effects).",
            "The client : script",
            "Fabrice Sarcy : sound design",
        ],
        name: "gardenmap",
        img: [gardenMap_O],
        imgC: [gardenMap_16_9],
        srcVideo:
            "https://player.vimeo.com/video/217581808?portrait=0&title=0&byline=0",
    },
    {
        dev: false,
        id: 4,
        title: "Seat",
        subtitle:
            "A series of corporate videos explaining Seat's digital strategy (extracts)",
        desc: [
            "My role : animation with After Effects",
            "The client : script, storyboard, design, sound",
        ],
        name: "seat",
        img: [seat_O],
        imgC: [seat_16_9],
        srcVideo:
            "https://player.vimeo.com/video/191660872?portrait=0&title=0&byline=0",
    },
    {
        dev: false,
        id: 5,
        title: "Réseau des Amap Idf",
        subtitle: "Corporate video for 'Réseau des Amaps IdF'",
        desc: [
            "My role : photo shooting, design (illustrator), storyboard, animation and compositing (after effects)",
            "The client : script",
            "Fabrice Sarcy : sound design",
        ],
        name: "amap",
        img: [amap_O],
        imgC: [amap_16_9],
        srcVideo:
            "https://player.vimeo.com/video/190995104?portrait=0&title=0&byline=0",
    },
    {
        dev: false,
        id: 6,
        title: "Personal Work",
        subtitle: "Testing some plugins on After Effects",
        desc: [
            "Having some fun with After Effects plug-ins : DUIK (character's rigging tool), Puppet Pin Tool, Newton... ",
        ],
        name: "walkcycle",
        img: [walkcycle_O],
        imgC: [walkcycle_16_9],
        srcVideo:
            "https://player.vimeo.com/video/198272473?portrait=0&title=0&byline=0",
    },
    {
        dev: true,
        id: 7,
        title: "Ailleurs",
        subtitle: "Which place in France suits you best?",
        desc: [
            "This project offers a small questionnaire to the user to better understand his expectations regarding his living environment.",
            "According to his answers, a map of France is generated with the list of departments that best fit the user.",
            "You can also consult thematic maps: security, family life and environment.",
        ],
        name: "ailleurs",
        img: [ailleurs_C],
        imgC: [
            ailleurs_1_carre,
            ailleurs_2_carre,
            ailleurs_3_carre,
            ailleurs_1,
            ailleurs_2,
            ailleurs_3,
        ],
        technical_sheet: [
            "To carry out this project, I started by collecting data (data.gouv.fr, INSEE...) that I gathered in a MongoDB database.",
            "By performing many manipulations and joins (aggregations), I was able to export the final data to a JSON file.",
            "I then made a REST API with Node and Express to be able to use this data in my application (there are only GET requests).",
            "The Front part of the application was made with React 17. It fetches the data from the API using ReactQuery.",
            "I designed the layout of this app with Figma. For styling I used Styled-Component. I finally deployed this app on Heroku. ",
        ],
        technologies: [
            "Javascript",
            "HTML5",
            "CSS",
            "React",
            "React Query",
            "Styled Components",
            "Node",
            "Express",
            "Heroku",
        ],
        preview: true,
        code: true,
        github: "https://github.com/Fidomi/ailleurs-react-app",
        url: "https://partir-ailleurs.herokuapp.com/",
    },
    {
        dev: true,
        id: 8,
        title: "Clairenou",
        subtitle: "A showcase site and a backoffice application",
        desc: [
            "Claire Renou is a safety assessor of cosmetics.",
            "She asked me for a showcase site to present her activity but also so that its visitors can book training sessions that she runs herself.",
            "She also needs a tool to automate the creation of EU Product Information File for her clients, which requires a complex database.",
        ],
        name: "clairenou",
        img: [clairenou_C],
        imgC: [
            clairenou_1_carre,
            clairenou_2_carre,
            clairenou_3_carre,
            clairenou_1,
            clairenou_2,
            clairenou_3,
        ],
        technical_sheet: [
            "I started by designing the relational database, with the Merise method, necessary for Claire's backoffice tool.",
            "A first version of the backoffice project was produced with PHP without a framework. Now I have chosen to switch everything to Node, Express and Typescript.",
            "The database remains in MySQL. And the front-end part has been switched to React.",
            "The goal is to make the back office part 'open-source' and sufficiently generic to be used by other evaluators of the toxicity of cosmetics.",
        ],
        technologies: [
            "Javascript",
            "HTML5",
            "CSS",
            "Less",
            "Bootstrap",
            "Node",
            "Express",
            "MySQL",
        ],
        preview: false,
        code: false,
    },
    {
        dev: true,
        id: 9,
        title: "My Portfolio",
        subtitle: "My portfolio website you're already looking at",
        desc: [
            "I made my portfolio with NextJs framework based on React.",
            "I designed it myself and tried to be UX friendly as possible",
        ],
        name: "portfolio",
        img: [portfolio_C],
        imgC: [
            portfolio_1_carre,
            portfolio_2_carre,
            portfolio_3_carre,
            portfolio_1,
            portfolio_2,
            portfolio_3,
        ],
        technical_sheet: [
            "I started to sketch a layout on figma.",
            "I chose to work with Tailwind css framework for its flexibility.",
            "I made two versions : french and english.",
        ],
        technologies: [
            "NextJS",
            "Typecript",
            "Javascript",
            "HTML5",
            "CSS",
            "Sass",
            "Tailwind",
        ],
        preview: false,
        code: true,
        github: "https://github.com/Fidomi/portfolio-next",
    },
    {
        dev: true,
        id: 10,
        title: "Lucky Wheel",
        subtitle: "A random wheel in pure javascript",
        desc: [
            "A wheel is split into as many fractions as there are names given by the user within a limit of 10.",
            "Each wheel fraction has its own random color. As names are designated by the wheel, this last updates its number of fraction and the ranking is displayed.",
        ],
        name: "wheel",
        img: [wheel_C],
        imgC: [
            wheel_1_carre,
            wheel_2_carre,
            wheel_3_carre,
            wheel_1,
            wheel_2,
            wheel_3,
        ],
        technical_sheet: [
            "For this project I used the Canvas object of Javascript and I created classes and Javascript modules.",
        ],
        technologies: ["Javascript", "HTML5", "CSS"],
        preview: true,
        code: true,
        github: "https://github.com/Fidomi/random_wheel",
        url: "https://codepen.io/fidomi/project/editor/ZbLQRE",
    },
];

export const PROJECTS_FR: Project[] = [
    {
        dev: false,
        id: 1,
        title: "Démo 2018",
        subtitle: "Compositing et Motion Design",
        desc: [
            "Compositing sur Nuke, Motion Design avec After Effects.",
            "Extraits de plusieurs plans auxquels j'ai participé en tant que compeuse ou motion designer entre 2016 et 2018",
        ],
        name: "demo2018",
        img: [demo2018_O],
        imgC: [demo2018_16_9],
        srcVideo:
            "https://player.vimeo.com/video/431456339?portrait=0&title=0&byline=0",
    },
    {
        dev: false,
        id: 2,
        title: "Démo 2016",
        subtitle: "Compositing et Motion Design",
        desc: [
            "Introduction 3D de la démo réalisée avec Cinema4D, compositing des plans fait sur Nuke. ",
            "Extraits de plusieurs plans auxquels j'ai participés en tant que compeuse ou motion designer entre 2012 et 2016.",
        ],
        name: "demo2016",
        img: [demo2016_O],
        imgC: [demo2016_16_9],
        srcVideo:
            "https://player.vimeo.com/video/194044173?portrait=0&title=0&byline=0",
    },
    {
        dev: false,
        id: 3,
        title: "My Garden Map",
        subtitle: "Vidéo explicative de l'app 'My Garden Map'",
        desc: [
            "Ma partie : design, storyboard, animation (After Effects).",
            "Le client : scénario",
            "Fabrice Sarcy : sound design",
        ],
        name: "gardenmap",
        img: [gardenMap_O],
        imgC: [gardenMap_16_9],
        srcVideo:
            "https://player.vimeo.com/video/217581808?portrait=0&title=0&byline=0",
    },
    {
        dev: false,
        id: 4,
        title: "Seat",
        subtitle: "Extraits d'une série de vidéo réalisées pour Seat",
        desc: [
            "Ma mission : animation sur After Effects",
            "Le client : scénario, storyboard, design",
        ],
        name: "seat",
        img: [seat_O],
        imgC: [seat_16_9],
        srcVideo:
            "https://player.vimeo.com/video/191660872?portrait=0&title=0&byline=0",
    },
    {
        dev: false,
        id: 5,
        title: "Réseau des Amap Idf",
        subtitle: "Présentation du 'Réseau des Amaps IdF'",
        desc: [
            "Ma mission : prises de vues, design (illustrator), storyboard, animation et compositing (after effects)",
            "Le client : scénario",
            "Fabrice Sarcy : sound design",
        ],
        name: "amap",
        img: [amap_O],
        imgC: [amap_16_9],
        srcVideo:
            "https://player.vimeo.com/video/190995104?portrait=0&title=0&byline=0",
    },
    {
        dev: false,
        id: 6,
        title: "Projet Personnel",
        subtitle: "Essais de différents plug-ins d'After Effects",
        desc: [
            "Quelques essais avec des plug-ins d'After : DUIK (outil de rigging 2D de personnages), Puppet Pin Tool, Newton... ",
        ],
        name: "walkcycle",
        img: [walkcycle_O],
        imgC: [walkcycle_16_9],
        srcVideo:
            "https://player.vimeo.com/video/198272473?portrait=0&title=0&byline=0",
    },
    {
        dev: true,
        id: 7,
        title: "Ailleurs",
        subtitle: "Quel coin de France vous correspond le mieux?",
        desc: [
            "Ce projet propose un petit questionnaire à l'utilisateur pour mieux cerner ses attentes quand à son cadre de vie.",
            "En fonction de ses réponses, une carte de France est générée avec le palmarès des départements les plus en phase avec l'utilisateur.",
            "On peut aussi consulter des cartes thématiques : sécurité, vie de famille et environnement.",
        ],
        name: "ailleurs",
        img: [ailleurs_C],
        imgC: [
            ailleurs_1_carre,
            ailleurs_2_carre,
            ailleurs_3_carre,
            ailleurs_1,
            ailleurs_2,
            ailleurs_3,
        ],
        technical_sheet: [
            "Pour réaliser ce projet, j'ai commencé par collecter des données (data.gouv.fr, INSEE...) que j'ai réunies dans une base de données MongoDB.",
            "En réalisant de nombreuses manipulations et jointures (aggregations), j'ai pu exporter les données finales dans un fichier JSON.",
            "J'ai ensuite réalisé une API REST avec Node et Express pour pouvoir utiliser ces données dans mon application (il n'y a que des requêtes GET).",
            "La partie Front de l'application a été faite avec React 17. Mes requêtes GET sont envoyées à l'API grâce aux hooks de React Query.",
            "J'ai conçu de le design de l'application sur Figma et j'utilise Styled-Components pour le css. J'ai finalement déployé cette application sur Heroku.",
        ],
        technologies: [
            "Javascript",
            "HTML5",
            "CSS",
            "React",
            "React Query",
            "Styled Components",
            "Node",
            "Express",
            "Heroku",
        ],
        preview: true,
        code: true,
        github: "https://github.com/Fidomi/ailleurs-react-app",
        url: "https://partir-ailleurs.herokuapp.com/",
    },
    {
        dev: true,
        id: 8,
        title: "Clairenou",
        subtitle: "Un site vitrine et une application backoffice",
        desc: [
            "Claire Renou est évaluatrice de la toxicité des cosmétiques.",
            "Elle m'a commandé un site vitrine pour présenter son activité mais aussi pour que ses visiteurs puissent réserver des sessions de formation à l'évaluation qu'elle anime elle-même.",
            "Elle a aussi besoin d'un outil pour automatiser la création des dossiers de toxicité de ses clients qui requiert une base de données complexe.",
        ],
        name: "clairenou",
        img: [clairenou_C],
        imgC: [
            clairenou_1_carre,
            clairenou_2_carre,
            clairenou_3_carre,
            clairenou_1,
            clairenou_2,
            clairenou_3,
        ],
        technical_sheet: [
            "J'ai commencé par designer avec la méthode Merise la base de données relationnelles nécessaire à l'outil backoffice de Claire.",
            "Une première version du projet backoffice a été réalisée avec PHP sans framework. Maintenant j'ai choisi de tout basculer sur Node, Express et Typescript.",
            "La base de données reste elle en MySQL. Et le front-end tout a été migré sur React.",
            "L'objectif étant de rendre la partie backoffice 'open-source' et suffisamment générique pour être utilisée par d'autres évaluateurs de la toxicité des cosmétiques.",
        ],
        technologies: [
            "Javascript",
            "HTML5",
            "CSS",
            "Less",
            "Bootstrap",
            "Node",
            "Express",
            "MySQL",
        ],
        preview: false,
        code: false,
    },
    {
        dev: true,
        id: 9,
        title: "Mon Portfolio",
        subtitle: "Le site portfolio sur lequel vous êtes actuellement.",
        desc: [
            "J'ai façonné ce portfolio avec le framework Next basé sur React.",
            "Mon objectif est de présenter mes compétences en développement et en VFX mais avec une dominante dév.",
        ],
        name: "portfolio",
        img: [portfolio_C],
        imgC: [
            portfolio_1_carre,
            portfolio_2_carre,
            portfolio_3_carre,
            portfolio_1,
            portfolio_2,
            portfolio_3,
        ],
        technical_sheet: [
            "J'ai d'abord esquissé plusieurs maquettes sur figma.",
            "Puis j'ai choisi de travailler avec le framework css Tailwind pour sa souplesse",
            "Et parce que je ne vois pas l'intérêt d'un 'dark mode' (je veux bien qu'on m'explique?) mais je comprends l'utilité d'une version anglaise, j'ai donc fait deux versions du site : français et anglais.",
        ],
        technologies: [
            "NextJS",
            "Typecript",
            "Javascript",
            "HTML5",
            "CSS",
            "Sass",
            "Tailwind",
        ],
        preview: false,
        code: true,
        github: "https://github.com/Fidomi/portfolio-next",
    },
    {
        dev: true,
        id: 10,
        title: "La Roue du Hasard",
        subtitle: "Une roue de tirage au sort en pur javascript",
        desc: [
            "L'utilisateur entre les noms à tirer au sort. La roue compte une fraction par nom.",
            "Chaque fraction de roue a sa propre couleur aléatoire. Au fur et à mesure que les noms sont désignés par la roue, cette dernière se met à jour et le palmarès s'affiche.",
        ],
        name: "wheel",
        img: [wheel_C],
        imgC: [
            wheel_1_carre,
            wheel_2_carre,
            wheel_3_carre,
            wheel_1,
            wheel_2,
            wheel_3,
        ],
        technical_sheet: [
            "Pour réaliser ce projet j'ai utilisé l'objet Canvas de Javascript et j'ai créé des classes et des modules Javascript.",
        ],
        technologies: ["Javascript", "HTML5", "CSS"],
        preview: true,
        code: true,
        github: "https://github.com/Fidomi/random_wheel",
        url: "https://codepen.io/fidomi/project/editor/ZbLQRE",
    },
];

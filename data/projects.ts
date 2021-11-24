import demo2018 from "../public/img/demo_2018_Y.png";
import demo2016 from "../public/img/demo_2016_Y.png";
import gardenMap from "../public/img/my_garden_map_Y.png";
import seat from "../public/img/seat_Y.png";
import amap from "../public/img/amap_Y.png";
import walkcycle from "../public/img/walk_cycle_Y.png";

type Project = {
    dev: boolean;
    id: number;
    title: string;
    subtitle: string;
    desc: string;
    name: string;
    src: StaticImageData;
};

export const PROJECTS: Project[] = [
    {
        dev: false,
        id: 1,
        title: "Demoreel 2018",
        subtitle: "Compositing and Motion Design demoreel",
        desc: "Compositing made with Nuke, Motion Design made with After Effects.",
        name: "demo2018",
        src: demo2018,
    },
    {
        dev: false,
        id: 2,
        title: "Demoreel 2016",
        subtitle: "Compositing and Motion Design demoreel",
        desc: "3D Introduction made with Cinema4D, compositing made with Nuke. ",
        name: "demo2016",
        src: demo2016,
    },
    {
        dev: false,
        id: 3,
        title: "My Garden Map",
        subtitle: "Animation to promote 'My Garden Map' web app.",
        desc: "Characters and props design made with Illustrator, character animation using pupet tool.",
        name: "gardenmap",
        src: gardenMap,
    },
    {
        dev: false,
        id: 4,
        title: "Seat",
        subtitle: "Animation video to explain Seat's digital strategy",
        desc: "I made the animations under After Effects",
        name: "seat",
        src: seat,
    },
    {
        dev: false,
        id: 5,
        title: "Réseau des Amap d'Ile-de-France",
        subtitle: "Corporate video",
        desc: "Design, storyboard, animation.",
        name: "amap",
        src: amap,
    },
    {
        dev: false,
        id: 6,
        title: "Personal Work",
        subtitle: "Testing some plugins on After Effects",
        desc: "TO DO",
        name: "walkcycle",
        src: walkcycle,
    },
    {
        dev: true,
        id: 7,
        title: "Ailleurs",
        subtitle: "'Moving to the country' React Web App",
        desc: "TO DO",
        name: "ailleurs",
        src: walkcycle,
    },
    {
        dev: true,
        id: 8,
        title: "Wheel",
        subtitle: "Toss wheel with canvas and vanilla Javascript",
        desc: "TO DO",
        name: "wheel",
        src: walkcycle,
    },
    {
        dev: true,
        id: 9,
        title: "Clairenou",
        subtitle: "React Node Express MySQL app",
        desc: "TO DO",
        name: "clairenou",
        src: walkcycle,
    },
];

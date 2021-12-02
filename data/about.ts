type AboutType = {
    salutation: string;
    title: string;
    desc: string;
    technologies: string[];
    phone: string;
    email: string;
};

export const ABOUT_EN: AboutType = {
    salutation: "Hi there! ",
    title: "I'm Sidonie, front-end developer from France.",
    desc: "I like to code things from scratch as much as using React or Next. I'm a quick learner and adapt really fast. I also have skills in graphic techniques since I spent more than 10 years in the VFX field (compositing and motion design) for TV series and long feature films.",
    technologies: [
        "Languages : TypeScript / JavaScript, HTML, CSS, Less, MySQL, Pug, Twig, Less",
        "Dev Tools : React, Next, Node, Express, MongoDB, Gulp, Git, Bootstrap, Tailwind",
        "Design Tools : Figma, Photoshop, Illustrator",
        "VFX Tools : Nuke, After Effects, Unreal Engine 4 (lighting/shading), Blender (basics)",
    ],
    phone: "0033 + (0)663915267",
    email: "sidonie.moulart@gmail.com",
};

export const ABOUT_FR: AboutType = {
    salutation: "Bonjour! ",
    title: "Je suis Sidonie, développeuse front-end.",
    desc: "J'aime coder sans framework tout autant qu'en utilisant React et Next. J'apprends vite et m'adapte facilement. Après 10 années passées dans les effets spéciaux numériques pour le cinéma, j'ai aussi de bonnes compétences graphiques (compositing et motion design).",
    technologies: [
        "Langages : TypeScript / JavaScript, HTML, CSS, Less, MySQL, Pug, Twig, Less",
        "Outils de développement : React, Next, Node, Express, MongoDB, Gulp, Git, Bootstrap, Tailwind",
        "Outils de design : Figma, Photoshop, Illustrator",
        "Outils VFX : Nuke, After Effects, Unreal Engine 4 (lighting/shading), Blender (basics)",
    ],
    phone: "0033 + (0)663915267",
    email: "sidonie.moulart@gmail.com",
};

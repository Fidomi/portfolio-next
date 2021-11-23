import React from "react";
import { Layout } from "../../components/Layout";

const About = () => {
    return (
        <Layout>
            <div className="container px-4 mx-auto">
                <div className="space-x-5 lg:flex item-center lg:-mx-4">
                    <div className="lg:px-4 ">
                        <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
                            Hi there!
                            <br />
                            I'm Sidonie, front-end developer from France.
                        </h1>

                        <div className="mt-4 text-gray-800 font-body text-lg">
                            <p>
                                I like to code things from scratch as much as
                                using React or Next. I'm a quick learner and
                                adapt really fast. I also have skills in graphic
                                techniques since I spent more than 10 years in
                                the VFX field (compositing and motion design)
                                for TV series and long feature films.
                            </p>
                            <p className="mt-2">
                                Languages : TypeScript / JavaScript, HTML, CSS,
                                Less, MySQL
                                <br />
                                Dev Tools : React, Next, Node, Express, MongoDB,
                                Gulp, Git, Bootstrap, Tailwind
                                <br />
                                Design Tools : Figma, Photoshop, Illustrator,
                                After Effects
                            </p>
                        </div>
                    </div>

                    <div className="flex-shrink-0 mt-12 lg:px-4 lg:mt-0"></div>
                </div>
            </div>
        </Layout>
    );
};

export default About;

import React from "react";
import { Layout } from "../../components/Layout";
import Image from "next/image";
import profilePic from "../../public/img/Sidonie.png";

const About = () => {
    const curColor: string = "gray-300";
    return (
        <Layout curColor={curColor}>
            <div
                className={`container px-2 flex flex-column justify-center bg-${curColor}`}>
                <div className="lg:px-4">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
                            Hi there!
                            <br />
                            I'm Sidonie, front-end developer from France.
                        </h1>
                        <Image
                            src={profilePic}
                            alt="Picture of the auhtor"
                            width={130}
                            height={120}
                        />
                    </div>

                    <div className="mt-4 text-gray-800 font-body text-lg">
                        <p>
                            I like to code things from scratch as much as using
                            React or Next. I'm a quick learner and adapt really
                            fast. I also have skills in graphic techniques since
                            I spent more than 10 years in the VFX field
                            (compositing and motion design) for TV series and
                            long feature films.
                        </p>
                        <p className="mt-2">
                            Languages : TypeScript / JavaScript, HTML, CSS,
                            Less, MySQL
                            <br />
                            Dev Tools : React, Next, Node, Express, MongoDB,
                            Gulp, Git, Bootstrap, Tailwind
                            <br />
                            Design Tools : Figma, Photoshop, Illustrator, After
                            Effects
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;

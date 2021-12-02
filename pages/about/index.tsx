import React from "react";
import { Layout } from "../../components/Layout";
import Image from "next/image";
import profilePic from "../../public/img/Sidonie.png";
import { LanguageContext } from "../../utils/languageContext";
import { ABOUT_EN, ABOUT_FR } from "../../data/about";

const About = () => {
    const curColor: string = "gray-300";
    const { language, changeLanguage } = React.useContext(LanguageContext);
    const ABOUT = language === "FR" ? ABOUT_FR : ABOUT_EN;
    return (
        <Layout curColor={curColor}>
            <div
                className={`container max-w-xl lg:max-w-4xl px-4 flex flex-column justify-center bg-${curColor}`}>
                <div className="lg:px-4 max-w-screen-lg">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <h1 className="text-base order-2 md:order-1 font-medium text-black md:text-2xl lg:text-4xl">
                            {ABOUT.salutation}
                            <br />
                            {ABOUT.title}
                        </h1>
                        <div className="order-1 self-end md:order-last">
                            <Image
                                layout="fixed"
                                src={profilePic}
                                alt="Picture of the auhtor"
                                width={130}
                                height={120}
                            />
                        </div>
                    </div>

                    <div className="mt-4 text-gray-800 font-body text-sm md:text-lg">
                        <p>{ABOUT.desc}</p>
                        <div className="mt-2">
                            {ABOUT.technologies.map((ele, index) => {
                                return <p key={`about-${index}`}>{ele}</p>;
                            })}
                        </div>
                        <p className="mt-2 font-bold">
                            {ABOUT.phone}
                            <br />
                            {ABOUT.email}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default About;

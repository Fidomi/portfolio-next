import React from "react";
import { LanguageContext } from "../utils/languageContext";

const Footer = ({ bgColor }: { bgColor: string }) => {
    const { language, changeLanguage } = React.useContext(LanguageContext);
    return (
        <div
            className={`flex-1 w-full pt-2 pb-2 ${bgColor} max-h-30 md:max-h-36`}>
            <footer className="flex flex-row flex-wrap  w-full justify-between px-5 items-end text-lg font-body md:flex-nowrap">
                <div className="flex order-1 flex-50 flex-col text-sm md:text-base md:order-1 md:flex-25">
                    <p>
                        {language === "EN"
                            ? "FRONT END DEVELOPER"
                            : "DÉVELOPPEUSE FRONT-END"}
                    </p>
                    <p>MOTION / VFX </p>
                </div>
                <p className="text-xs text-center order-3 pt-6 flex-100 md:order-2 md:flex-1 md:flex-50 md:text-sm md:pt-0">
                    {language === "EN"
                        ? "Build with Next.js, Typescript and Tailwind"
                        : "Fabriqué avec Next.js, Typescript et Tailwind"}
                </p>
                <div className="flex order-2 flex-50 flex-col items-end text-sm md:text-base md:order-3 md:flex-25 ">
                    <a href="mailto:sidonie.moulart@gmail.com">EMAIL</a>
                    <a
                        href="https://github.com/Fidomi"
                        target="_blank"
                        rel="noreferrer">
                        GITHUB
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sidoniemoulart/"
                        target="_blank"
                        rel="noreferrer">
                        LINKEDIN
                    </a>
                    <a
                        href="../public/documents/CV_Sidonie_Moulart_2021.pdf"
                        download>
                        {language === "EN" ? "RESUME (fr)" : "CV"}
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

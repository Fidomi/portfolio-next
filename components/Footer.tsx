import React from "react";
import { LanguageContext } from "../utils/languageContext";
import { ShowedProjectContext } from "../utils/context";
import { PROJECTS_EN, PROJECTS_FR, Project } from "../data/projects";

const Footer = () => {
    const { language, changeLanguage } = React.useContext(LanguageContext);
    const { project, changeProject } = React.useContext(ShowedProjectContext);
    const resetProject = () => {
        language === "FR"
            ? changeProject(PROJECTS_FR[6])
            : changeProject(PROJECTS_EN[6]);
    };
    let borderColor =
        project.dev === true ? "border-sky-600" : "border-amber-600";
    return (
        <footer
            className={`w-full max-h-30 md:max-h-36 flex-shrink-0 mt-auto pt-2 pb-2 border-t-2 border-dotted border-solid ${borderColor} bg-warmGray-200 self-end`}>
            <div className="flex flex-row flex-wrap justify-between px-5 items-end text-lg font-body md:flex-nowrap">
                {project.dev === true ? (
                    <div className="text-sky-600 flex order-1 flex-50 flex-col text-sm md:text-base md:order-1 md:flex-25">
                        <p>
                            {language === "EN"
                                ? "FRONT END DEVELOPER"
                                : "DÉVELOPPEUSE FRONT-END"}
                        </p>
                        <p>MOTION / VFX </p>
                    </div>
                ) : (
                    <div className="text-amber-600 flex order-1 flex-50 flex-col text-sm md:text-base md:order-1 md:flex-25">
                        <p>
                            {language === "EN"
                                ? "FRONT END DEVELOPER"
                                : "DÉVELOPPEUSE FRONT-END"}
                        </p>
                        <p>MOTION / VFX </p>
                    </div>
                )}
                {project.dev === true ? (
                    <p className="text-sky-600 text-xs text-center order-3 pt-6 flex-100 md:order-2 md:flex-1 md:flex-50 md:text-sm md:pt-0">
                        {language === "EN"
                            ? "Build with Next.js, Typescript and Tailwind"
                            : "Fabriqué avec Next.js, Typescript et Tailwind"}
                    </p>
                ) : (
                    <p className="text-amber-600 text-xs text-center order-3 pt-6 flex-100 md:order-2 md:flex-1 md:flex-50 md:text-sm md:pt-0">
                        {language === "EN"
                            ? "Build with Next.js, Typescript and Tailwind"
                            : "Fabriqué avec Next.js, Typescript et Tailwind"}
                    </p>
                )}
                {project.dev === true ? (
                    <div className="text-sky-600 flex order-2 flex-50 flex-col items-end text-sm md:text-base md:order-3 md:flex-25 ">
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
                ) : (
                    <div className="text-amber-600 flex order-2 flex-50 flex-col items-end text-sm md:text-base md:order-3 md:flex-25 ">
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
                )}
            </div>
        </footer>
    );
};

export default Footer;

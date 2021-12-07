import React from "react";
import Link from "next/link";
import SwitchKnob from "./SwitchKnob/SwitchKnob";
import { LanguageContext } from "../utils/languageContext";
import { ShowedProjectContext } from "../utils/context";
import { PROJECTS_EN, PROJECTS_FR, Project } from "../data/projects";

function Header({ bgColor }: { bgColor: string }) {
    const { language, changeLanguage } = React.useContext(LanguageContext);
    const { project, changeProject } = React.useContext(ShowedProjectContext);
    const resetProject = () => {
        language === "FR"
            ? changeProject(PROJECTS_FR[6])
            : changeProject(PROJECTS_EN[6]);
    };
    return (
        <div className={`w-full py-3 ${bgColor} max-h-20 fixed z-30`}>
            <header className="flex flex-row justify-between px-4 items-center ">
                <Link href="/">
                    {project.dev === true ? (
                        <a
                            className="font-sans text-sky-600 text-2xl md:text-4xl"
                            onClick={resetProject}>
                            SIDONIEM
                        </a>
                    ) : (
                        <a
                            className="font-sans text-amber-600 text-2xl md:text-4xl"
                            onClick={resetProject}>
                            SIDONIEM
                        </a>
                    )}
                </Link>
                <div className={`flex items-center justify-end`}>
                    <SwitchKnob project={project} />
                    <Link href="/about">
                        {project.dev === true ? (
                            <a
                                onClick={resetProject}
                                className="text-lg w-20 text-sky-600 text-right md:w-32 font-body md:text-2xl">
                                {language === "EN" ? "ABOUT" : "À PROPOS"}
                            </a>
                        ) : (
                            <a
                                onClick={resetProject}
                                className="text-lg w-20 text-amber-600 text-right md:w-32 font-body md:text-2xl">
                                {language === "EN" ? "ABOUT" : "À PROPOS"}
                            </a>
                        )}
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Header;

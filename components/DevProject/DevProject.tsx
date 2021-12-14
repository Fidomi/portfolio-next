import React from "react";
import { Project } from "../../data/projects";
import styles from "./DevProject.module.scss";
import Image from "next/image";
import { LanguageContext } from "../../utils/languageContext";
import useWindowSize, { WindowSizeType } from "../../utils/useWindowSize";

const DevProject = ({ project }: { project: Project }) => {
    const { language, changeLanguage } = React.useContext(LanguageContext);
    const windowSize = useWindowSize();

    if (windowSize.width !== undefined) {
        var isMobile = windowSize.width < 768;
    } else {
        var isMobile = false;
    }

    return (
        <div className={`${styles.project} mx-auto font-body mt-4 md:mt-20`}>
            <div
                className={`${styles.project__description} md:w-col90 md:px-0 md:text-lg mx-auto px-4 text-sky-600 text-base mb-4`}>
                <div>
                    {(project.desc as string[]).map((ele, index) => (
                        <p key={`str-${project.name}-${index}`}>{ele}</p>
                    ))}
                </div>
            </div>
            <div className={`${styles.project__img1} px-4 md:px-0`}>
                {isMobile &&
                    project.imgC[1] &&
                    project.imgC.map((ele, index) => {
                        if (index < 3) {
                            return (
                                <div
                                    className="mb-4"
                                    key={project.name + "-" + index}>
                                    <Image
                                        src={project.imgC[index]}
                                        alt={project.subtitle}
                                    />
                                </div>
                            );
                        }
                    })}
                {!isMobile &&
                    project.imgC[1] &&
                    project.imgC.map((ele, index) => {
                        if (index >= 3) {
                            return (
                                <div
                                    className="mb-5"
                                    key={project.name + "-" + index}>
                                    <Image
                                        src={project.imgC[index]}
                                        alt={project.subtitle}
                                    />
                                </div>
                            );
                        }
                    })}
                {!project.imgC[1] && (
                    <Image src={project.imgC[0]} alt={project.subtitle} />
                )}
            </div>

            <div className={`${styles.project__buttons}`}>
                <div className="flex flex-row justify-around mb-4">
                    {project.preview && (
                        <a
                            className={`bg-sky-600 hover:bg-sky-800
                     text-white text-xs py-1 px-2  m-1 rounded-full md:text-base md:py-2 md:px-4`}
                            href={project.url}
                            target="_blank"
                            rel="noreferrer">
                            {language === "EN"
                                ? "VISIT PROJECT"
                                : "VOIR LE PROJET"}
                        </a>
                    )}
                    {project.code && (
                        <a
                            className={`bg-sky-600 hover:bg-sky-800 hover:border-solid hover:border-4 hover:border-black
                     text-white text-xs py-1 px-2 m-1 rounded-full md:text-base md:py-2 md:px-4`}
                            href={project.github}
                            target="_blank"
                            rel="noreferrer">
                            {language === "EN"
                                ? "VIEW CODE ON GITHUB"
                                : "VOIR LE CODE"}
                        </a>
                    )}
                </div>
            </div>

            <div
                className={`${styles.project__technical_sheet} md:w-col90 mx-auto`}>
                <div className="font-bold md:text-lg text-sky-600 px-4">
                    {language === "EN" ? "TECHNICAL SHEET" : "FICHE TECHNIQUE"}
                </div>
                <div className="mb-4">
                    {(project.technical_sheet as string[]).map((ele, index) => (
                        <p
                            key={`str-${project.name}-${index}`}
                            className="md:text-lg text-sky-600 px-4">
                            {ele}
                        </p>
                    ))}
                </div>
            </div>

            <div
                className={`${styles.project__technologies} md:w-col90 md:mx-auto`}>
                <div className="md:text-lg font-bold text-sky-600 px-4">
                    TECHNOLOGIES
                </div>
                <div className="md:flex mb-4">
                    {(project.technologies as string[]).map((ele, index) => (
                        <p
                            key={`str2-${project.name}-${index}`}
                            className="md:text-lg text-sky-600 px-4">
                            {` ${ele} `}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DevProject;

import React from "react";
import { Layout } from "../../components/Layout";
import styles from "./Projects.module.scss";
import { ShowedProjectContext } from "../../utils/context";
import { LanguageContext } from "../../utils/languageContext";
import VideoProject from "../../components/VideoProject/VideoProject";
import DevProject from "../../components/DevProject/DevProject";
import { PROJECTS_EN, PROJECTS_FR } from "../../data/projects";

function makeColors(dev: boolean) {
    let [curColor, curColorDark, textColor, textColorDark, borderColor] =
        dev === true
            ? [
                  "bg-warmGray-200",
                  "bg-sky-600",
                  "text-sky-600",
                  "text-sky-800",
                  "border-sky-600",
              ]
            : [
                  "bg-warmGray-200",
                  "bg-amber-600",
                  "text-amber-600",
                  "text-amber-800",
                  "border-amber-600",
              ];
    return [curColor, curColorDark, textColor, textColorDark, borderColor];
}

export default function Project() {
    const { project, changeProject } = React.useContext(ShowedProjectContext);
    const { language, changeLanguage } = React.useContext(LanguageContext);
    let PROJECTS = language === "FR" ? PROJECTS_FR : PROJECTS_EN;

    let [curColor, curColorDark, textColor, textColorDark, borderColor] =
        makeColors(project.dev);

    const prevProject = () => {
        const curIndex = project.id - 1;
        if (curIndex == 0) {
            changeProject(PROJECTS[9]);
        } else {
            changeProject(PROJECTS[curIndex - 1]);
        }
    };

    const nextProject = () => {
        const curIndex = project.id - 1;
        if (curIndex === 9) {
            changeProject(PROJECTS[0]);
        } else {
            changeProject(PROJECTS[curIndex + 1]);
        }
    };

    return (
        <Layout curColor={curColor}>
            <div
                className={`flex flex-row w-full justify-between p-2 fixed bg-warmGray-200 z-10`}>
                <button
                    onClick={prevProject}
                    className={`${textColor} hover:${textColorDark} text-4xl  `}>
                    &#129044;
                </button>
                <div
                    className={` mt-5 p-2 text-center border-double border-b-2 ${borderColor}`}>
                    <h1
                        className={`${textColor} text-3xl sm:text-4xl md:text-5xl font-sans uppercase`}>
                        {project.title}
                    </h1>
                    <p className={`${textColor}`}>{project.subtitle}</p>
                </div>
                <button
                    onClick={nextProject}
                    className={`${textColor} hover:${textColorDark} text-4xl  `}>
                    &#129046;
                </button>
            </div>
            <div
                className={`container z-0 w-full mx-auto mt-32 md:mt-20 md:min-h-min75`}>
                <div className={`${styles.project} px-2 w-full h-full mt-3`}>
                    {project.dev ? (
                        <DevProject
                            project={project}
                            color={curColor}
                            key={`devproject_${project.name}`}
                        />
                    ) : (
                        <VideoProject
                            project={project}
                            color={curColor}
                            textColor={textColor}
                            textColorDark={textColorDark}
                            key={`videoproject_${project.name}`}
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
}

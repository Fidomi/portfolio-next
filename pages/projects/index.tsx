import React from "react";
import { Layout } from "../../components/Layout";
import { ShowedProjectContext } from "../../utils/context";
import { LanguageContext } from "../../utils/languageContext";
import VideoProject from "../../components/VideoProject/VideoProject";
import DevProject from "../../components/DevProject/DevProject";
import { PROJECTS_EN, PROJECTS_FR } from "../../data/projects";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";

function makeColors(dev: boolean) {
    let [textColor, textColorDark, borderColor] =
        dev === true
            ? ["text-sky-600", "text-sky-800", "border-sky-600"]
            : ["text-amber-600", "text-amber-800", "border-amber-600"];
    return [textColor, textColorDark, borderColor];
}

export default function Project() {
    const { project, changeProject } = React.useContext(ShowedProjectContext);
    const { language, changeLanguage } = React.useContext(LanguageContext);
    let PROJECTS = language === "FR" ? PROJECTS_FR : PROJECTS_EN;

    let [textColor, textColorDark, borderColor] = makeColors(project.dev);

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
        <Layout>
            <div
                className={`flex flex-row w-full justify-between p-2 fixed bg-warmGray-200 z-10`}>
                <ArrowLeftIcon
                    onClick={prevProject}
                    className={`${textColor} hover:${textColorDark} w-6 md:w-10`}
                />
                <div
                    className={` mt-5 p-2 text-center border-double border-b-2 ${borderColor}`}>
                    <h1
                        className={`${textColor} text-3xl sm:text-4xl md:text-5xl font-sans uppercase`}>
                        {project.title}
                    </h1>
                    <p className={`${textColor}`}>{project.subtitle}</p>
                </div>
                <ArrowRightIcon
                    onClick={nextProject}
                    className={`${textColor} hover:${textColorDark} w-6 md:w-10`}
                />
            </div>
            <div
                className={`container z-0 w-full mx-auto mt-32 md:mt-20 md:min-h-min75`}>
                <div className={`px-2 w-full h-full mt-3 overflow-y-hidden`}>
                    {project.dev ? (
                        <DevProject
                            project={project}
                            key={`devproject_${project.name}`}
                        />
                    ) : (
                        <VideoProject
                            project={project}
                            key={`videoproject_${project.name}`}
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
}

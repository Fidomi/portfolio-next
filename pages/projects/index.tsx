import React from "react";
import { Layout } from "../../components/Layout";
import styles from "./Projects.module.scss";
import { ShowedProjectContext } from "../../utils/context";
import { LanguageContext } from "../../utils/languageContext";
import VideoProject from "../../components/VideoProject/VideoProject";
import DevProject from "../../components/DevProject/DevProject";
import { PROJECTS_EN, PROJECTS_FR, PROJECTS_COLORS } from "../../data/projects";
import { scrollElement } from "../../utils/scrollElement";

export default function Project() {
    const { project, changeProject } = React.useContext(ShowedProjectContext);
    const { language, changeLanguage } = React.useContext(LanguageContext);
    let PROJECTS = language === "FR" ? PROJECTS_FR : PROJECTS_EN;

    const curColor: string = `${PROJECTS_COLORS[project.id - 1][1]}-${
        PROJECTS_COLORS[project.id - 1][2]
    }`;

    const prevProject = () => {
        const curIndex = project.id - 1;
        if (curIndex == 0) {
            changeProject(PROJECTS[8]);
        } else {
            changeProject(PROJECTS[curIndex - 1]);
        }
    };

    const nextProject = () => {
        const curIndex = project.id - 1;
        if (curIndex === 8) {
            changeProject(PROJECTS[0]);
        } else {
            changeProject(PROJECTS[curIndex + 1]);
        }
    };

    let last_known_scroll_position = 0;

    const scrollProject = (e: React.WheelEvent) => {
        console.log("scrolling");
        const elementToScroll = document.querySelector(".projectToScroll");
        if (typeof elementToScroll !== null) {
            var delta = e.deltaY;
            if (delta < 0) {
                last_known_scroll_position += e.deltaY;
            } else {
                last_known_scroll_position += e.deltaY;
            }
            setTimeout(() => {
                scrollElement(
                    elementToScroll as Element,
                    last_known_scroll_position
                );
            }, 50);
        }
    };

    return (
        <Layout curColor={curColor}>
            <div className={`${styles.projects_container} w-full`}>
                <div
                    className={`${styles.project_title} text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans uppercase`}>
                    {project.title}
                </div>
                <button
                    onClick={prevProject}
                    className={`${styles.buttonLeft} bg-${
                        PROJECTS_COLORS[project.id - 1][1]
                    }-700 hover:bg-${curColor} flex flex-col justify-center items-center justify-self-start place-self-center`}>
                    <div
                        className={`invisible font-body md:text-base lg:text-lg`}>
                        PREV
                    </div>
                </button>
                <button
                    onClick={nextProject}
                    className={`${styles.buttonRight} bg-${
                        PROJECTS_COLORS[project.id - 1][1]
                    }-700 hover:bg-${curColor}    text-center flex flex-col justify-center items-center justify-self-end place-self-center`}>
                    <div
                        className={`invisible font-body md:text-base lg:text-lg`}>
                        NEXT
                    </div>
                </button>
                <div
                    className={`${styles.project} w-full h-full mt-3 projectToScroll`}
                    onWheel={(event) => scrollProject(event)}>
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
                            key={`videoproject_${project.name}`}
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
}

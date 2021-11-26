import React from "react";
import { Layout } from "../../components/Layout";
import styles from "./Projects.module.scss";
import { ShowedProjectContext } from "../../utils/context";
import VideoProject, { VideoProjectInfo } from "../../components/VideoProject";
import DevProject from "../../components/DevProject";
import { PROJECTS } from "../../data/projects";
// import { classNames } from "../../utils/classNames";
// import Link from "next/link";

type ProjectColor = [number, string, number];
const PROJECTS_COLORS: ProjectColor[] = [
    [1, "rosado", 800],
    [2, "blush", 600],
    [3, "olive", 400],
    [4, "asparagus", 400],
    [5, "seagreen", 400],
    [6, "pine", 400],
    [7, "steel", 400],
    [8, "chocolate", 400],
    [9, "orchid", 400],
];

export default function Project() {
    const { project, changeProject } = React.useContext(ShowedProjectContext);

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

    return (
        <Layout curColor={curColor}>
            <div className={`${styles.projects_container} w-full `}>
                <div
                    className={`${styles.project_title} text-4xl md:text-5xl lg:text-6xl font-sans uppercase`}>
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
                    }-700 hover:bg-${curColor} text-center flex flex-col justify-center items-center justify-self-end place-self-center`}>
                    <div
                        className={`invisible font-body md:text-base lg:text-lg`}>
                        NEXT
                    </div>
                </button>
                <div className={`${styles.project} w-full h-full mt-3`}>
                    {project.dev ? (
                        <DevProject project={project} color={curColor} />
                    ) : (
                        <VideoProject project={project} color={curColor} />
                    )}
                </div>
            </div>
        </Layout>
    );
}

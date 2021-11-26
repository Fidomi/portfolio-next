import React from "react";
import { Layout } from "../../components/Layout";
import styles from "./Projects.module.scss";
import { ShowedProjectContext } from "../../utils/context";
import { classNames } from "../../utils/classNames";
import Link from "next/link";

type ProjectColor = [number, string, number];
const PROJECTS_COLORS: ProjectColor[] = [
    [1, "rosado", 600],
    [2, "verdeAzulado", 400],
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

    return (
        <Layout curColor={curColor}>
            <div className={`${styles.projects_container} w-full `}>
                <div
                    className={`${styles.project_title} text-4xl md:text-5xl lg:text-6xl font-sans uppercase`}>
                    {project.title}
                </div>
                <div
                    className={`${styles.buttonLeft} bg-${curColor} hover:bg-${
                        PROJECTS_COLORS[project.id - 1][1]
                    }-700 flex flex-col justify-center items-center justify-self-start place-self-center`}>
                    <div
                        className={`invisible md:visible font-body md:text-base lg:text-lg`}>
                        PREV
                    </div>
                </div>
                <div
                    className={`${styles.buttonRight} bg-${curColor} hover:bg-${
                        PROJECTS_COLORS[project.id - 1][1]
                    }-700 text-center flex flex-col justify-center items-center justify-self-end place-self-center`}>
                    <div
                        className={`invisible font-body md:visible md:text-base lg:text-lg`}>
                        NEXT
                    </div>
                </div>
                <div className={`${styles.d}`}>DDDDDDDD</div>
                <div className={`${styles.e}`}>EEEEEEEE</div>
                <div className={`${styles.f}`}>FFFFFFFFF</div>
                <div className={`${styles.g}`}>GGGGGGGGGGGG</div>
            </div>
        </Layout>
    );
}

import styles from "./Map.module.css";
import { PROJECTS, Project } from "../../data/projects";
import React, { useState, useContext } from "react";
import { ShowedProjectContext } from "../../utils/context";
import Link from "next/link";

export default function Map() {
    const { project, changeProject } = useContext(ShowedProjectContext);
    const [title, setTitle] = useState("");
    const [subtitle, setSubTitle] = useState("");

    function screenTitle(event: React.SyntheticEvent): void {
        event.preventDefault();
        const newTitle = (event.target as HTMLElement).getAttribute("title");
        const newName = (event.target as HTMLElement).getAttribute(
            "data-name"
        ) as string;
        const newSubTitle = (event.target as HTMLElement).getAttribute(
            "data-subtitle"
        ) as string;
        const newProject = PROJECTS.find(
            (ele) => ele.name === newName
        ) as Project;
        if (newTitle) {
            setTitle(newTitle);
            setSubTitle(newSubTitle);
            if (changeProject !== undefined) {
                changeProject(newProject);
            }
        }
    }

    return (
        <div className="container">
            <div
                onMouseLeave={() => {
                    setTitle("");
                    setSubTitle("");
                }}
                className={`container w-map h-map ${styles.map_container} `}>
                <div className={`${styles.dev} text-3xl`}>DEV</div>
                <div className={`${styles.vfx} text-3xl`}>VFX/MOTION</div>
                {PROJECTS.map((project, index) => {
                    return project.dev ? (
                        <Link href="/projects" passHref>
                            <a
                                key={project.id.toString()}
                                title={project.title}
                                data-subtitle={project.subtitle}
                                data-name={project.name}
                                onMouseEnter={screenTitle}
                                className={`${styles[project.name]}`}></a>
                        </Link>
                    ) : (
                        ""
                    );
                })}
                <div
                    className={styles.c}
                    onMouseEnter={() => setTitle("")}></div>
                <div className={styles.line}></div>
                <div className={styles.vfxSection}>
                    {PROJECTS.map((project, index) => {
                        return project.dev ? (
                            ""
                        ) : (
                            <Link href="/projects" passHref>
                                <a
                                    key={project.id.toString()}
                                    title={project.title}
                                    data-subtitle={project.subtitle}
                                    data-name={project.name}
                                    onMouseEnter={screenTitle}
                                    className={`${styles[project.name]}`}></a>
                            </Link>
                        );
                    })}
                    <div
                        className={`${styles.demo} ${styles.black}`}
                        onMouseEnter={() => setTitle("")}></div>
                </div>
                <div
                    className={`${styles.title} text-body text-left text-3xl py-4 text-blue-800 flex flex-row justify-between items-end`}>
                    <p className="text-3xl uppercase leading-8">{title}</p>
                    <p className="text-base leading-8">{subtitle}</p>
                </div>
            </div>
        </div>
    );
}

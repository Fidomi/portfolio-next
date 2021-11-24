import styles from "./Map.module.css";
import { PROJECTS } from "../../data/projects";
import React, { useState } from "react";

export default function Map() {
    const [title, setTitle] = useState("");
    function screenTitle(event: React.SyntheticEvent): void {
        event.preventDefault();
        const newTitle = (event.target as HTMLElement).getAttribute("title");
        if (newTitle) {
            setTitle(newTitle);
        }
    }
    return (
        <div className="container">
            <div className={`container w-map h-map ${styles.map_container} `}>
                <div className={`${styles.dev} text-3xl`}>DEV</div>
                <div className={`${styles.vfx} text-3xl`}>VFX/MOTION</div>
                <div className={styles.a}></div>
                <div className={styles.b}></div>
                <div className={styles.c}></div>
                <div className={styles.d}></div>
                <div className={styles.line}></div>
                <div className={styles.e}>
                    {PROJECTS.map((project, index) => (
                        <button
                            key={index}
                            title={project.title}
                            onClick={screenTitle}
                            className={`${styles.demo} ${styles[project.name]}`}
                        />
                    ))}
                    <div className={`${styles.demo} ${styles.black}`}></div>
                </div>
            </div>
            <h2 className="text-body text-center text-4xl pt-6 uppercase">
                {title}
            </h2>
        </div>
    );
}

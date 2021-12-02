import React from "react";
import { Layout } from "../../components/Layout";
import styles from "./Projects.module.scss";
import { ShowedProjectContext } from "../../utils/context";
import { LanguageContext } from "../../utils/languageContext";
import VideoProject from "../../components/VideoProject/VideoProject";
import DevProject from "../../components/DevProject/DevProject";
import { PROJECTS_EN, PROJECTS_FR, PROJECTS_COLORS } from "../../data/projects";

export default function Project() {
    const { project, changeProject } = React.useContext(ShowedProjectContext);
    const { language, changeLanguage } = React.useContext(LanguageContext);
    let PROJECTS = language === "FR" ? PROJECTS_FR : PROJECTS_EN;

    const curColor: string = `bg-${PROJECTS_COLORS[project.id - 1][1]}-${
        PROJECTS_COLORS[project.id - 1][2]
    }`;
    const curColorDark: string = `bg-${PROJECTS_COLORS[project.id - 1][1]}-700`;
    const textColor: string = `text-${PROJECTS_COLORS[project.id - 1][1]}-${
        PROJECTS_COLORS[project.id - 1][2]
    }`;
    const textColorDark: string = `text-${
        PROJECTS_COLORS[project.id - 1][1]
    }-700`;

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
    let elementToScrollRef: HTMLElement | null;

    const scrollMouseHandler = (e: React.WheelEvent) => {
        if (elementToScrollRef instanceof HTMLElement) {
            let isBottom =
                elementToScrollRef?.scrollHeight -
                    elementToScrollRef?.scrollTop ===
                elementToScrollRef?.clientHeight;
            let isTop = elementToScrollRef.scrollTop === 0;
            if (!isBottom && !isTop) {
                last_known_scroll_position += e.deltaY;
                elementToScrollRef.scroll({
                    top: last_known_scroll_position * 3,
                    behavior: "smooth",
                });
            } else if (isTop) {
                last_known_scroll_position = 0;
                elementToScrollRef.scroll({
                    top: 100,
                    behavior: "smooth",
                });
            } else {
                if (e.deltaY < 0) {
                    elementToScrollRef.scroll({
                        top: -last_known_scroll_position * 3,
                        behavior: "smooth",
                    });
                }
            }
        }
    };

    const scrollTouchHandler = (e: React.TouchEvent) => {
        if (elementToScrollRef instanceof HTMLElement) {
            console.log(e);
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
                    className={`${styles.buttonLeft} ${curColorDark} hover:${curColor} flex flex-col justify-center items-center justify-self-start place-self-center`}>
                    <div
                        className={`invisible font-body md:text-base lg:text-lg`}>
                        PREV
                    </div>
                </button>
                <button
                    onClick={nextProject}
                    className={`${styles.buttonRight} ${curColorDark} hover:${curColor}   text-center flex flex-col justify-center items-center justify-self-end place-self-center`}>
                    <div
                        className={`invisible font-body md:text-base lg:text-lg`}>
                        NEXT
                    </div>
                </button>
                <div
                    ref={(node) => {
                        if (node) {
                            elementToScrollRef = node;
                        }
                    }}
                    className={`${styles.project} w-full h-full mt-3 projectToScroll `}
                    onWheel={(event) => scrollMouseHandler(event)}
                    onTouchMove={(event) => scrollTouchHandler(event)}>
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

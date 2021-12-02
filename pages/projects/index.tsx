import React from "react";
import { Layout } from "../../components/Layout";
import styles from "./Projects.module.scss";
import { ShowedProjectContext } from "../../utils/context";
import { LanguageContext } from "../../utils/languageContext";
import VideoProject from "../../components/VideoProject/VideoProject";
import DevProject from "../../components/DevProject/DevProject";
import { PROJECTS_EN, PROJECTS_FR } from "../../data/projects";

function makeColors(id: number) {
    let [curColor, curColorDark, textColor, textColorDark] = [
        "bg-yellow",
        "bg-yellow-700",
        "text-grey",
        "text-black",
    ];
    switch (id) {
        case 1:
            [curColor, curColorDark, textColor, textColorDark] = [
                "bg-rosado-dark",
                "bg-rosado",
                "text-rosado-dark",
                "text-rosado",
            ];
            break;
        case 2:
            [curColor, curColorDark, textColor, textColorDark] = [
                "bg-blush",
                "bg-blush-dark",
                "text-blush",
                "text-blush-dark",
            ];
            break;
        case 3:
            [curColor, curColorDark, textColor, textColorDark] = [
                "bg-olive",
                "bg-olive-dark",
                "text-olive",
                "text-olive-dark",
            ];
            break;
        case 4:
            [curColor, curColorDark, textColor, textColorDark] = [
                "bg-asparagus",
                "bg-asparagus-dark",
                "text-asparagus",
                "text-asparagus-dark",
            ];
            break;
        case 5:
            [curColor, curColorDark, textColor, textColorDark] = [
                "bg-seagreen",
                "bg-seagreen-dark",
                "text-seagreen",
                "text-seagreen-dark",
            ];
            break;
        case 6:
            [curColor, curColorDark, textColor, textColorDark] = [
                "bg-pine",
                "bg-pine-dark",
                "text-pine",
                "text-pine-dark",
            ];
            break;
        case 7:
            [curColor, curColorDark, textColor, textColorDark] = [
                "bg-steel",
                "bg-steel-dark",
                "text-steel",
                "text-steel-dark",
            ];
            break;
        case 8:
            [curColor, curColorDark, textColor, textColorDark] = [
                "bg-orchid",
                "bg-orchid-dark",
                "text-orchid",
                "text-orchid-dark",
            ];
            break;
        case 9:
            [curColor, curColorDark, textColor, textColorDark] = [
                "bg-chocolate",
                "bg-chocolate-dark",
                "text-chocolate",
                "text-chocolate-dark",
            ];
            break;
        default:
            [curColor, curColorDark, textColor, textColorDark] = [
                "bg-yellow",
                "bg-yellow-700",
                "text-grey",
                "text-black",
            ];
    }
    return [curColor, curColorDark, textColor, textColorDark];
}

export default function Project() {
    const { project, changeProject } = React.useContext(ShowedProjectContext);
    const { language, changeLanguage } = React.useContext(LanguageContext);
    let PROJECTS = language === "FR" ? PROJECTS_FR : PROJECTS_EN;

    let [curColor, curColorDark, textColor, textColorDark] = makeColors(
        project.id
    );

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

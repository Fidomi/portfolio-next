import styles from "./Map.module.scss";
import { PROJECTS_EN, PROJECTS_FR, Project } from "../../data/projects";
import React, { useState, useContext } from "react";
import { ShowedProjectContext } from "../../utils/context";
import Link from "next/link";
import { LanguageContext } from "../../utils/languageContext";
import Image from "next/dist/client/image";
import { redirect } from "next/dist/server/api-utils";

export default function Map() {
    const { currProject, changeProject } = useContext(ShowedProjectContext);
    const { language, changeLanguage } = React.useContext(LanguageContext);
    let defaultMessage =
        language === "FR" ? "Survolez les images" : "Hover over images";
    const [title, setTitle] = useState(defaultMessage);
    const [subtitle, setSubTitle] = useState("");
    const [projectType, setProjectType] = useState("dev");

    let PROJECTS = language === "FR" ? PROJECTS_FR : PROJECTS_EN;

    function screenTitle(event: React.SyntheticEvent): void {
        let targetElement = (event.target as HTMLElement).hasAttribute("title")
            ? (event.target as HTMLElement)
            : ((event.target as HTMLElement).parentElement as HTMLElement);
        const newTitle = targetElement.getAttribute("title");
        const newName = targetElement.getAttribute("data-name") as string;
        const newSubTitle = targetElement.getAttribute(
            "data-subtitle"
        ) as string;
        const newProject = PROJECTS.find(
            (ele) => ele.name === newName
        ) as Project;
        newProject.dev === true ? setProjectType("dev") : setProjectType("vfx");
        if (newTitle) {
            setTitle(newTitle);
            setSubTitle(newSubTitle);
        }
    }

    function handleClick(event: React.SyntheticEvent): void {
        const newName = (event.target as HTMLElement).getAttribute(
            "data-name"
        ) as string;
        const newProject = PROJECTS.find(
            (ele) => ele.name === newName
        ) as Project;
        (changeProject as any)(newProject);
    }

    return (
        <div className="w-full mx-auto pt-8 md:pt-0  px-2">
            {language === "FR" ? (
                <h1
                    className={`${styles.portfolio_title} lg:max-w-760 text-sky-600 subpixel-antialiased font-body font-normal text-3xl leading-9 tracking-tight pb-5 md:px-5 mx-auto`}>
                    Bienvenue sur mon portfolio! Je suis Sidonie,{" "}
                    <strong>développeuse frontend</strong>, aspirante fullstack
                    js, avec des compétences en effets spéciaux numériques.
                </h1>
            ) : (
                <h1
                    className={`${styles.portfolio_title} lg:max-w-760 text-sky-600 subpixel-antialiased font-body font-normal text-3xl leading-9 tracking-tight pb-5 mx-auto`}>
                    Welcome to my portfolio! {`I'm`} Sidonie,{" "}
                    <strong>frontend developer</strong> with skills in VFX.
                </h1>
            )}
            <div
                onMouseLeave={() => {
                    setTitle(defaultMessage);
                    setSubTitle("");
                }}
                className={`${styles.map} mx-auto justify-center`}>
                <div
                    className={`${styles.map__dev} font-sans text-sky-600 text-4xl mb-2 text-right sm:text-left border-b-2 border-sky-600`}>
                    {language === "FR" ? "PROJETS DEV" : "DEV PROJECTS"}
                </div>
                <div
                    className={`${styles.map__vfx} font-sans text-amber-600 text-4xl mb-2 text-left border-b-2 border-amber-600`}>
                    {language === "FR" ? "VFX/MOTION" : "VFX/MOTION"}
                </div>
                <div
                    className={`${styles.map__projetsDev} flex flex-col justify-between content-between flex-wrap`}>
                    {PROJECTS.map((project) => {
                        return project.dev ? (
                            <div
                                key={"dev-" + project.id.toString()}
                                className={`${styles.map__projetsDev__element} ${styles.hoverwrap} w-full flex flex-col mx-auto overflow-hidden sm:w-col48 sm:h-row48`}>
                                <Link href="/projects" passHref>
                                    <a
                                        onMouseEnter={screenTitle}
                                        onClick={(e) => handleClick(e)}
                                        className="inline">
                                        <Image
                                            title={project.title}
                                            data-subtitle={project.subtitle}
                                            data-name={project.name}
                                            src={project.img[0]}
                                            alt={project.subtitle}
                                            layout="responsive"
                                            sizes="100vw"
                                        />
                                        <div
                                            className={`${styles.DEV__hovercap}`}
                                            title={project.title}
                                            data-subtitle={project.subtitle}
                                            data-name={project.name}>
                                            <p className="font-sans text-2xl uppercase" data-name={project.name}>
                                                {title}
                                            </p>
                                            <p className="font-body text-xl" data-name={project.name}>
                                                {subtitle}
                                            </p>
                                        </div>
                                    </a>
                                    </Link>
                                <div
                                    className={`flex flex-col justify-end px-2 pt-2 mb-5`}>
                                    <h3 className="uppercase md:text-lg lg:hidden text-sky-600">
                                        {project.title}
                                    </h3>
                                    <div className="lg:hidden md:text-lg leading-5 font-body text-sky-600">
                                        {project.subtitle}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            ""
                        );
                    })}
                </div>
                <div
                    className={`${styles.map__projetsVfx} flex flex-col justify-between`}>
                    {PROJECTS.map((project) => {
                        return project.dev ? (
                            ""
                        ) : (
                            <div
                                key={"vfx-" + project.id.toString()}
                                className={`${styles.map__projetsVfx__element} ${styles.hoverwrap} flex flex-col mx-auto w-full `}>
                                <div
                                    className={
                                        "sm:max-h-20 lg:max-h-20 sm:overflow-hidden"
                                    }>
                                    <Link href="/projects" passHref>
                                        <a
                                            onMouseEnter={screenTitle}
                                            onClick={(e) => handleClick(e)}>
                                            <Image
                                                src={project.img[0]}
                                                alt={project.subtitle}
                                                layout="responsive"
                                                objectFit="cover"
                                                title={project.title}
                                                data-subtitle={project.subtitle}
                                                data-name={project.name}
                                            />
                                            <div
                                                className={`${styles.VFX__hovercap}`}
                                                title={project.title}
                                                data-subtitle={project.subtitle}
                                                data-name={project.name}>
                                                <p className="font-sans text-body uppercase" data-name={project.name}>
                                                    {title}
                                                </p>
                                                <p className="font-body text-sm" data-name={project.name}>
                                                    {subtitle}
                                                </p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                                <div
                                    className={`flex flex-col justify-end px-2 pt-2 mb-5 sm:mb-1 sm:pt-0`}>
                                    <h3 className="lg:hidden uppercase text-lg lg:hidden text-amber-600">
                                        {project.title}
                                    </h3>
                                    <div className="lg:hidden text-lg leading-4 font-body text-amber-600 sm:hidden">
                                        {project.subtitle}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {projectType === "dev" ? (
                    <div
                        className={`${styles.map__title} text-body text-left text-sky-600 flex flex-row justify-between items-center`}>
                        <p className="font-sans text-2xl uppercase">{title}</p>
                        <p className="font-body text-xl">{subtitle}</p>
                    </div>
                ) : (
                    <div
                        className={`${styles.map__title} text-body text-left text-amber-600 flex flex-row justify-between items-center`}>
                        <p className="font-sans text-2xl uppercase">{title}</p>
                        <p className="font-body text-xl">{subtitle}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

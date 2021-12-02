import React from "react";
import { ProjectInfo, PROJECTS_COLORS } from "../../data/projects";
import styles from "./DevProject.module.scss";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
import { LanguageContext } from "../../utils/languageContext";

const DevProject = (props: ProjectInfo) => {
    const { language, changeLanguage } = React.useContext(LanguageContext);
    return (
        <div className={`${styles.project_container} font-body`}>
            <div className={`${styles.img1}`}>
                {props.project.imgC[1] && (
                    <Carousel
                        images={props.project.imgC}
                        key={`carousel_${props.project.name}`}
                    />
                )}
                {!props.project.imgC[1] && (
                    <Image
                        src={props.project.imgC[0]}
                        alt={props.project.subtitle}
                    />
                )}
            </div>

            <div className={`${styles.buttons} mt-4`}>
                <div className="flex flex-row justify-around">
                    {props.project.preview && (
                        <button
                            className={`bg-${
                                PROJECTS_COLORS[props.project.id - 1][1]
                            }-700 hover:bg-${props.color}
                     text-white text-xs py-1 px-2  m-1 rounded-full`}>
                            {language === "EN"
                                ? "VISIT PROJECT"
                                : "VOIR LE PROJET"}
                        </button>
                    )}
                    {props.project.code && (
                        <button
                            className={`bg-${
                                PROJECTS_COLORS[props.project.id - 1][1]
                            }-700 hover:bg-${props.color}
                     text-white text-xs py-1 px-2 m-1 rounded-full`}>
                            {language === "EN"
                                ? "VIEW CODE ON GITHUB"
                                : "VOIR LE CODE"}
                        </button>
                    )}
                </div>
            </div>

            <div className={`${styles.description} text-base`}>
                <div className="font-bold mt-4">{props.project.subtitle}</div>
                <div className="mt-4">
                    {(props.project.desc as string[]).map((ele, index) => (
                        <p key={`str-${props.project.name}-${index}`}>{ele}</p>
                    ))}
                </div>
            </div>

            <div className={`${styles.technical_sheet}`}>
                <div className="font-bold mt-4">
                    {language === "EN" ? "TECHNICAL SHEET" : "FICHE TECHNIQUE"}
                </div>
                {(props.project.technical_sheet as string[]).map(
                    (ele, index) => (
                        <p key={`str-${props.project.name}-${index}`}>{ele}</p>
                    )
                )}
            </div>

            <div className={`${styles.technologies}`}>
                <div className="font-bold mt-4">TECHNOLOGIES</div>
                {(props.project.technologies as string[]).map((ele, index) => (
                    <p key={`str2-${props.project.name}-${index}`}>- {ele}</p>
                ))}
            </div>
        </div>
    );
};

export default DevProject;

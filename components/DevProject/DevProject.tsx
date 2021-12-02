import React from "react";
import { ProjectInfo } from "../../data/projects";
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
                            className={`bg-black hover:${props.color}
                     text-white text-xs py-1 px-2  m-1 rounded-full md:text-base md:py-2 md:px-4`}>
                            {language === "EN"
                                ? "VISIT PROJECT"
                                : "VOIR LE PROJET"}
                        </button>
                    )}
                    {props.project.code && (
                        <button
                            className={`bg-black hover:${props.color} hover:border-solid hover:border-4 hover:border-black
                     text-white text-xs py-1 px-2 m-1 rounded-full md:text-base md:py-2 md:px-4`}>
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
                <div className="md:flex">
                    {(props.project.technologies as string[]).map(
                        (ele, index) => (
                            <p key={`str2-${props.project.name}-${index}`}>
                                {` - ${ele} `}
                            </p>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default DevProject;

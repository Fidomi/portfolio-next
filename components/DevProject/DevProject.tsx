import React from "react";
import { ProjectInfo, PROJECTS_COLORS } from "../../data/projects";
import styles from "./DevProject.module.scss";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";

const DevProject = (props: ProjectInfo) => {
    return (
        <div className={`${styles.project_container}`}>
            <div className={`${styles.title} text-base`}>
                {props.project.subtitle}
            </div>

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
            {/* {props.project.imgC[1] && (
                <div className={`${styles.img2}`}>
                    <Image
                        src={props.project.imgC[1]}
                        alt={props.project.subtitle}
                    />
                </div>
            )}
            {props.project.imgC[2] && (
                <div className={`${styles.img3}`}>
                    <Image
                        src={props.project.imgC[2]}
                        alt={props.project.subtitle}
                    />
                </div>
            )} */}
            <div className={`${styles.description}`}>
                <div className="flex flex-row justify-between">
                    {props.project.preview && (
                        <button
                            className={`bg-${
                                PROJECTS_COLORS[props.project.id - 1][1]
                            }-700 hover:bg-${props.color}
                     text-white text-xs py-1 px-2  m-1 rounded-full`}>
                            VISIT PROJECT
                        </button>
                    )}
                    {props.project.code && (
                        <button
                            className={`bg-${
                                PROJECTS_COLORS[props.project.id - 1][1]
                            }-700 hover:bg-${props.color}
                     text-white text-xs py-1 px-2 m-1 rounded-full`}>
                            VIEW CODE ON GITHUB
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DevProject;

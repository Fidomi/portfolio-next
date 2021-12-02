import React from "react";
import { Project, PROJECTS_COLORS } from "../../data/projects";
import ReactPlayer from "react-player";
import { PlayIcon } from "@heroicons/react/solid";
import style from "./VideoProject.module.scss";

export type VideoProjectInfo = {
    project: Project;
    color: string;
    textColor: string;
    textColorDark: string;
};

const VideoProject = (props: VideoProjectInfo) => {
    const ProjectPlayIcon = (
        <PlayIcon
            className={`w-16 md:w-32 ${props.textColor} hover:${props.textColorDark}`}
        />
    );
    console.log(props.project.imgC);

    return (
        <div className="flex flex-col h-full w-full mx-auto justify-around items-center md:max-w-3xl lg:max-w-2xl">
            {/* md:max-w-3xl lg:max-w-4xl max-w-full mb-5 self-center  */}
            <div className={`${style.player_wrapper}`}>
                <ReactPlayer
                    url={props.project.srcVideo}
                    light={props.project.imgC[0].src}
                    playIcon={ProjectPlayIcon}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className="self-center">
                <h2 className="text-xs sm:text-sm md:text-lg font-bold text-left">
                    {props.project.subtitle}
                </h2>
                <div className="text-xs sm:text-sm md:text-lg">
                    {props.project.desc.map((ele, index) => {
                        return (
                            <p key={`${props.project.id}-desc-${index}`}>
                                {ele}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default VideoProject;

import React from "react";
import { Project } from "../../data/projects";
import ReactPlayer from "react-player";
import { PlayIcon } from "@heroicons/react/solid";
import style from "./VideoProject.module.scss";

export type VideoProjectInfo = {
    project: Project;
    color: string;
    textColor: string;
    textColorDark: string;
};

const VideoProject = ({ project }: { project: Project }) => {
    const ProjectPlayIcon = (
        <PlayIcon
            className={`w-8 md:w-16 text-amber-600 hover:text-amber-800`}
        />
    );
    return (
        <div className="md:w-col90 md:px-0 md:text-lg px-4 flex flex-col h-full w-full justify-between items-center lg:max-w-2xl mx-auto mt-10 ">
            <div className={`${style.player_wrapper} md:mt-20 lg:mt-8`}>
                <ReactPlayer
                    url={project.srcVideo}
                    light={project.imgC[0].src}
                    playIcon={ProjectPlayIcon}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className="flex-grow self-center mt-8">
                <div className="text-amber-600 font-body px-4 mt-2 sm:text-sm md:text-lg">
                    {project.desc.map((ele, index) => {
                        return <p key={`${project.id}-desc-${index}`}>{ele}</p>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default VideoProject;

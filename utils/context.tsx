import React from "react";
import { PROJECTS } from "../data/projects";

// Handle Showed Project on the Project Page
type ProjectContextType = {
    project: string;
    changeProject?: (value: string) => void;
};

let defaultProject = PROJECTS.find((ele) => ele.dev === true);
let defaultProjectName =
    defaultProject === undefined ? "ailleurs" : defaultProject.name;

export const ShowedProjectContext = React.createContext<ProjectContextType>({
    project: defaultProjectName,
});

export const ShowedProjectProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [currentProject, setCurrentProject] =
        React.useState(defaultProjectName);
    const changeProject = (newProject: string) => {
        setCurrentProject(newProject);
    };
    const project = currentProject;

    return (
        <ShowedProjectContext.Provider value={{ project, changeProject }}>
            {children}
        </ShowedProjectContext.Provider>
    );
};

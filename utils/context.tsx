import React from "react";
import { PROJECTS, Project } from "../data/projects";

// Handle Showed Project on the Project Page
type ProjectContextType = {
    project: Project;
    changeProject?: (value: Project) => void;
};

let defaultProject = PROJECTS.find((ele) => ele.dev === true);
defaultProject = defaultProject === undefined ? PROJECTS[6] : defaultProject;

export const ShowedProjectContext = React.createContext<ProjectContextType>({
    project: defaultProject,
});

export const ShowedProjectProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [currentProject, setCurrentProject] = React.useState(defaultProject);
    const changeProject = (newProject: Project) => {
        setCurrentProject(newProject);
    };
    const project = currentProject as Project;

    return (
        <ShowedProjectContext.Provider value={{ project, changeProject }}>
            {children}
        </ShowedProjectContext.Provider>
    );
};

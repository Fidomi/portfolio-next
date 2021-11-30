import React from "react";
import { PROJECTS_EN, PROJECTS_FR, Project } from "../data/projects";
import { LanguageContext } from "./languageContext";

// Handle Showed Project on the Project Page
type ProjectContextType = {
    project: Project;
    changeProject: (value: Project) => void;
};

let defaultProject = PROJECTS_EN.find((ele) => ele.dev === true);
defaultProject = defaultProject === undefined ? PROJECTS_EN[6] : defaultProject;
let changeProject = (project: Project) => {
    defaultProject = project;
};

export const ShowedProjectContext = React.createContext<ProjectContextType>({
    project: defaultProject,
    changeProject,
});

export const ShowedProjectProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [currentProject, setCurrentProject] = React.useState(defaultProject);
    const { language, changeLanguage } = React.useContext(LanguageContext);
    const changeProject = (newProject: Project) => {
        setCurrentProject(newProject);
    };
    const project =
        language === "FR"
            ? PROJECTS_FR[(currentProject as Project).id - 1]
            : PROJECTS_EN[(currentProject as Project).id - 1];

    return (
        <ShowedProjectContext.Provider value={{ project, changeProject }}>
            {children}
        </ShowedProjectContext.Provider>
    );
};

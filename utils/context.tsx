import React from "react";
import { PROJECTS_EN, PROJECTS_FR, Project } from "../data/projects";
import { LanguageContext } from "./languageContext";

// Handle Showed Project on the Project Page
type ProjectContextType = {
    currProject: Project;
    changeProject: undefined | ( (newProject: Project) => void);
};

export const ShowedProjectContext = React.createContext<ProjectContextType>({currProject:PROJECTS_EN[6],changeProject:undefined});

export const ShowedProjectProvider = ({
    children,
}: {
    children: React.ReactNode;
    }) => {
    const defaultProject = PROJECTS_EN[6];
    const [currProject, setcurrProject] = React.useState(defaultProject);
    const { language } = React.useContext(LanguageContext);

    const changeProject = (newProject: Project) => {
        const project =
        language === "FR"
            ? PROJECTS_FR[newProject.id - 1]
            : PROJECTS_EN[newProject.id - 1];
        setcurrProject(project);
    };
    return (
        <ShowedProjectContext.Provider value={{ currProject, changeProject }}>
            {children}
        </ShowedProjectContext.Provider>
    );
};

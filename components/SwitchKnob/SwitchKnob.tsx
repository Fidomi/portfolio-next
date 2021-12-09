import style from "./SwitchKnob.module.scss";
import { LanguageContext } from "../../utils/languageContext";
import React from "react";
import { Project } from "../../data/projects";

const SwitchKnob = ({ project }: { project: Project }) => {
    const { language, changeLanguage } = React.useContext(LanguageContext);
    let isChecked: boolean = language === "FR" ? true : false;
    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        language === "FR" ? changeLanguage("EN") : changeLanguage("FR");
        const element = e.target as HTMLInputElement;
    };
    const handleChange = () => {
        isChecked = language === "FR" ? true : false;
    };

    return (
        <div className={`${style.switch_container}`}>
            <input
                type="checkbox"
                id="switch"
                className={`${style.switchInput}`}
                onClick={(e) => handleClick(e)}
                onChange={handleChange}
                checked={isChecked}
            />
            {project.dev === true ? (
                <label
                    htmlFor="switch"
                    id={`${style.label}`}
                    className="border border-solid border-sky-600">
                    <span
                        className={`${style.text} ${style.en} font-body text-sky-600`}>
                        EN
                    </span>
                    <span
                        className={`${style.text} ${style.fr} font-body text-sky-600`}>
                        FR
                    </span>
                    <span className={`${style.ball} bg-sky-600`}></span>
                </label>
            ) : (
                <label
                    htmlFor="switch"
                    id={`${style.label}`}
                    className="border border-solid border-amber-600 font-body">
                    <span
                        className={`${style.text} ${style.en} font-body text-amber-600`}>
                        EN
                    </span>
                    <span
                        className={`${style.text} ${style.fr} font-body text-amber-600`}>
                        FR
                    </span>
                    <span className={`${style.ball} bg-amber-600`}></span>
                </label>
            )}
        </div>
    );
};

export default SwitchKnob;

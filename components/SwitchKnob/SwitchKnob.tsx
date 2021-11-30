import style from "./SwitchKnob.module.scss";
import { LanguageContext } from "../../utils/languageContext";
import React from "react";

const SwitchKnob = () => {
    const { language, changeLanguage } = React.useContext(LanguageContext);
    let isChecked: boolean = language === "FR" ? true : false;
    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        language === "FR" ? changeLanguage("EN") : changeLanguage("FR");
        const element = e.target as HTMLInputElement;
        console.log(element.checked);
    };
    const handleChange = () => {
        isChecked = language === "FR" ? true : false;
    };
    console.log("language", language);

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
            <label htmlFor="switch" id={`${style.label}`}>
                <span className={`${style.text} ${style.en}`}>EN</span>
                <span className={`${style.text} ${style.fr}`}>FR</span>
                <span className={`${style.ball} bg-black`}></span>
            </label>
        </div>
    );
};

export default SwitchKnob;

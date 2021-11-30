import React from "react";

//Handle language
type LanguageType = {
    language: string;
    changeLanguage: (value: string) => void;
};

let defaultLanguage = "FR";
let changeLanguage = (language: string) => {
    defaultLanguage = language;
};

export const LanguageContext = React.createContext<LanguageType>({
    language: "FR",
    changeLanguage,
});

export const LanguageProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [currentLanguage, setCurrentLanguage] =
        React.useState(defaultLanguage);
    const changeLanguage = (newLanguage: string) => {
        setCurrentLanguage(newLanguage);
    };
    const language = currentLanguage as string;

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

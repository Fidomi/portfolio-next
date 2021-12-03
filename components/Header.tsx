import React from "react";
import Link from "next/link";
import SwitchKnob from "./SwitchKnob/SwitchKnob";
import { LanguageContext } from "../utils/languageContext";

function Header({ bgColor }: { bgColor: string }) {
    const { language, changeLanguage } = React.useContext(LanguageContext);
    return (
        <div className={`flex-1 w-full px-2 py-3 ${bgColor} max-h-20`}>
            <header className="flex flex-row justify-between px-5 items-center ">
                <Link href="/">
                    <a className="font-sans text-2xl md:text-4xl">SIDONIE</a>
                </Link>
                <div className={`flex items-center`}>
                    <SwitchKnob />
                    <Link href="/about">
                        <a className="text-lg w-20 lg:w-32 font-body lg:text-2xl">
                            {language === "EN" ? "ABOUT" : "À PROPOS"}
                        </a>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Header;

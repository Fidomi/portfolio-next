import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { prependOnceListener } from "process";

export const Layout = ({
    children,
    curColor,
}: {
    children: React.ReactNode;
    curColor: string;
}) => {
    return (
        <div
            className={`bg-${curColor} flex flex-col min-h-screen justify-center items-center`}>
            <Header bgColor={curColor} />
            <main className="flex-4 flex-grow w-full mx-auto antialiased h-auto flex flex-col justify-center items-center">
                {children}
            </main>
            <Footer bgColor={curColor} />
        </div>
    );
};

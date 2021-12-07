import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({
    children,
    curColor,
}: {
    children: React.ReactNode;
    curColor: string;
}) => {
    return (
        <React.Fragment>
            <Header bgColor={curColor} />
            <div
                className={`${curColor} min-h-screen h-screen flex flex-col justify-between items-stretch`}>
                <main className="flex-4 flex-grow flex-shrink-0 w-full mx-auto antialiased flex flex-col items-center mt-8 ">
                    {children}
                </main>
                <Footer bgColor={curColor} />
            </div>
        </React.Fragment>
    );
};

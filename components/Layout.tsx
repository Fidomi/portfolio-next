import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            <Header />
            <div
                className={`bg-warmGray-200 min-h-screen h-screen flex flex-col justify-between items-stretch w-screen lg:px-5`}>
                <main className="flex-4 flex-grow flex-shrink-0 w-full mx-auto antialiased flex flex-col items-center mt-8 ">
                    {children}
                </main>
                <Footer />
            </div>
        </React.Fragment>
    );
};

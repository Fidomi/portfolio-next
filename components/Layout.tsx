import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            <Header />
            <div
                className={`w-full bg-warmGray-200 min-h-screen h-screen h-max flex flex-col flex-nowrap justify-between items-stretch  pt-20`}>
                <main className="w-full flex-4 flex-grow flex-shrink-0 mx-auto antialiased ">
                    {children}
                </main>
                <Footer />
            </div>
        </React.Fragment>
    );
};

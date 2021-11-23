import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <main className="max-w-4xl mx-auto mt-16 antialiased">
                {children}
            </main>
            <Footer />
        </div>
    );
};

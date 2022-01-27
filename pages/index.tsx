import React from "react";
import Head from "next/head";
// import { Layout } from "../components/Layout";
// import Map from "../components/Map/Map";

export default function Home() {
    return (
        <div>
            <Head>
                <title>SidonieM</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <title>SidonieM</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <main style={{ margin: "5rem auto", width: "85vw" }}>
                <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
                    On règle quelques détails...
                </h1>
                <p style={{ textAlign: "center", fontSize: "1rem" }}>
                    et on sera prêt pour le 1er février!
                </p>
            </main>
        </div>
    );
}

import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { ShowedProjectProvider } from "../utils/context";
import { LanguageProvider } from "../utils/languageContext";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {" "}
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <title>SidonieM</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/apple-touch-icon.png"
                />
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
                <link rel="manifest" href="site.webmanifest" />
                <link rel="manifest" href="manifest.json" />
                <link
                    rel="mask-icon"
                    href="safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <LanguageProvider>
                <ShowedProjectProvider>
                    <Component {...pageProps} />
                </ShowedProjectProvider>
            </LanguageProvider>
        </>
    );
}

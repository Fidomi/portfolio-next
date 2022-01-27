import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";
import { ShowedProjectProvider } from "../utils/context";
import { LanguageProvider } from "../utils/languageContext";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
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
            <LanguageProvider>
                <ShowedProjectProvider>
                    <Component {...pageProps} />
                </ShowedProjectProvider>
            </LanguageProvider>
        </>
    );
}

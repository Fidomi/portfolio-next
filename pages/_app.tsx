import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.scss";
import { ShowedProjectProvider } from "../utils/context";
import { LanguageProvider } from "../utils/languageContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <LanguageProvider>
            <ShowedProjectProvider>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <title>SidonieM</title>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <Component {...pageProps} />
            </ShowedProjectProvider>
        </LanguageProvider>
    );
}

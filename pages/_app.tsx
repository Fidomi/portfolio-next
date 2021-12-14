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
                    <link rel="shortcut icon" href="../public/favicon.ico" />
                    <title>SidonieM</title>
                </Head>
                <Component {...pageProps} />
            </ShowedProjectProvider>
        </LanguageProvider>
    );
}

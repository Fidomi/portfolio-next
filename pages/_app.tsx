import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { ShowedProjectProvider } from "../utils/context";
import { LanguageProvider } from "../utils/languageContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <LanguageProvider>
            <ShowedProjectProvider>
                <Head>
                    <title>SidonieM</title>
                </Head>
                <Component {...pageProps} />
            </ShowedProjectProvider>
        </LanguageProvider>
    );
}

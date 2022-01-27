import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { ShowedProjectProvider } from "../utils/context";
import { LanguageProvider } from "../utils/languageContext";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LanguageProvider>
            <ShowedProjectProvider>
                <Component {...pageProps} />
            </ShowedProjectProvider>
        </LanguageProvider>
    );
}

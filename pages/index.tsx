import React from "react";
import { Layout } from "../components/Layout";
import Map from "../components/Map/Map";
import { ShowedProjectProvider } from "../utils/context";
import { LanguageProvider } from "../utils/languageContext";

export default function Home() {
    return (
        <Layout>
            <Map />
        </Layout>
    );
}

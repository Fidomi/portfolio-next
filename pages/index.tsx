import React from "react";
import { Layout } from "../components/Layout";
import Map from "../components/Map/Map";
import { ErrorBoundary } from "../components/ErrorBundaries/ErrorBundary";

export default function Home() {
    return (
        <React.StrictMode>
            <ErrorBoundary>
                <Layout>
                    <Map />
                </Layout>
            </ErrorBoundary>
        </React.StrictMode>
    );
}

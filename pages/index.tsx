import React from "react";
import { Layout } from "../components/Layout";
import Map from "../components/Map/Map";

export default function Home() {
    const curColor: string = "bg-warmGray-200";
    return (
        <Layout>
            <div className={`container px-4 mx-auto ${curColor}`}>
                <Map />
            </div>
        </Layout>
    );
}

import React from "react";
import { Layout } from "../../components/Layout";
import Image from "next/image";
import { ShowedProjectContext } from "../../utils/context";
import Link from "next/link";

export default function Project() {
    const curColor: string = "gray-300";

    const { project, changeProject } = React.useContext(ShowedProjectContext);
    return (
        <Layout curColor={curColor}>
            <div>Current Project : {project}</div>
        </Layout>
    );
}

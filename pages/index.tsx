import { Layout } from "../components/Layout";

export default function Home() {
    const curColor: string = "yellow-400";
    return (
        <Layout curColor={curColor}>
            <div className={`container px-4 mx-auto bg-${curColor}`}>
                HOME PAGE
            </div>
        </Layout>
    );
}

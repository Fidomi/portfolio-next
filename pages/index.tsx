import { Layout } from "../components/Layout";
import Map from "../components/Map/Map";
export default function Home() {
    const curColor: string = "bg-yellow-400";
    return (
        <Layout curColor={curColor}>
            <div className={`container px-4 mx-auto ${curColor}`}>
                <Map />
            </div>
        </Layout>
    );
}

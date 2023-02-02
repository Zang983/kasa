import { useEffect, useState } from "react"
import Layout from "../components/layout/layout.jsx"
import ContentBanner from "../components/contentBanner/contentBanner.jsx"
import contentBannerImg from "../assets/contentBanner_index.png"
import Card from "../components/card/card.jsx"


export default function Index() {
    const [data, setData] = useState()
    async function getDatas() {
        let result = await fetch("/data/logements.json")
        setData(await result.json())
    }
    useEffect(() => {
        getDatas()
    }, [])
    return (
        <Layout actualPage="index">
            <ContentBanner image={contentBannerImg} title="Chez vous, partout et ailleurs"></ContentBanner>
            <main>
                {
                    data && data.map((value, key) => {
                        return <Card data={value} key={key}></Card>
                    })}
            </main>
        </Layout>

    );
}


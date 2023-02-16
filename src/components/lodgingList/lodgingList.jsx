import { useEffect, useState } from "react"
import Card from "../card/card.jsx"

/*
Primary component to have datas about all lodging in index page.
 */
export default function LodgingList() {
    let [data, setData] = useState()
    async function getDatas() {
        let result = await fetch("data/logements.json")
        setData(await result.json())
    }
    useEffect(() => {
        getDatas()
    }, [])

    return (
        <main>
            {
            data && data.map((value,key)=>{
                return <Card data={value} key={key}></Card>
            })}
        </main>

    );
}


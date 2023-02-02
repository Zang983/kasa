import { useEffect, useState } from "react"
import Card from "../card/card.jsx"

export default function LodgingList() {
    let [data, setData] = useState()

    async function getDatas() {
        let result = await fetch("data/logements.json")
        setData(await result.json())

    }

    useEffect(() => {
        getDatas()
        console.log(data)
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


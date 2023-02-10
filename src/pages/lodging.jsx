import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Carrousel from "../components/carrousel/carrousel";
import Dropdown from "../components/dropdown/dropdown";
import Layout from "../components/layout/layout";
import LodgingOwner from "../components/lodgingOwner/lodgingOwner";
import StarContain from "../components/starContain/starContain";
import Tag from "../components/tag/tag";
import styles from "./styles/lodging.module.scss"


export default function Lodging() {
    const [lodgingData, setLodgingData] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    async function getDatas() {
        let data = await fetch("/data/logements.json")
        filterDatas(await data.json())
    }
    function filterDatas(datasArray) {
        let result = datasArray.filter(target => target.id === id)
        result.length === 0 ? navigate('/*') : setLodgingData(result[0])
    }
    useEffect(() => {
        getDatas()
    })

    return (
        <Layout>
            <Carrousel imgArray={lodgingData.pictures} />
            <div>
                <div className={styles.lodging}>
                    <div className={styles.lodgingTitle}>
                        <h2>{lodgingData.title}</h2>
                        <h3>{lodgingData.location}</h3>
                        <div className={styles.tagList}>
                            {
                                lodgingData.tags && lodgingData.tags.map((value, key) => {
                                    return <Tag key={key}> {value} </Tag>
                                })}
                        </div>
                    </div>
                    <div className={styles.ratingAndOwner}>
                        {<LodgingOwner avatar={lodgingData.host && lodgingData.host.picture} name={lodgingData.host && lodgingData.host.name} />}
                        {<StarContain rating={lodgingData.rating}></StarContain>}
                    </div>
                </div>
                <div className={styles.dropdownContain}>
                    <Dropdown title="Description" longSize="1"><p>{lodgingData.description}</p></Dropdown>
                    <Dropdown title="Équipements" longSize="1">
                        <ul>
                            {
                                lodgingData.equipments && lodgingData.equipments.map((equipment, key) => <li key={key}>{equipment}</li>)
                            }
                        </ul>
                    </Dropdown>
                </div>
            </div>
        </Layout>

    );
}


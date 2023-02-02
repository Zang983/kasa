import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Carrousel from "../components/carrousel/carrousel";
import Dropdown from "../components/dropdown/dropdown";
import Layout from "../components/layout/layout";

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
                <div>
                    <div>
                        <h2>{lodgingData.title}</h2>
                        <h3>{lodgingData.location}</h3>
                        <div>
                            {/* {Boucle générant des composants TAGS} */}
                        </div>
                    </div>
                    <div>
                        {/*Composant regroupant les infos du logeur.*/}
                        {/* {Composant contenant les étoiles} */}
                    </div>
                </div>
                <div>
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


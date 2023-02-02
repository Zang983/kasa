import { useEffect, useState } from "react";

export default function Carrousel({ imgArray }) {
    const [index, setIndex] = useState(0)

    function navigate(direction) {
        let length = imgArray.length - 1
        if (direction === -1) {
            index === 0 ? setIndex(length) : setIndex(index - 1)
        }
        else if (direction === 1) {
            index === length ? setIndex(0) : setIndex(index + 1)
        }
        else {
            console.error("Un problème de navigation dans le slider d'image est présent.")
        }
    }
    useEffect(() => {//A étudier
    }, [])

    return (
        <div>
            {imgArray && imgArray.length > 1 ? <button onClick={() => navigate(-1)}>GAUCHE</button> : null}
            <img src={imgArray && imgArray[index]} alt="" />
            {imgArray && imgArray.length > 1 ? <button  onClick={() => navigate(1)}>DROITE</button> : null}
            {imgArray && imgArray.length > 1 ? <p >{index + 1} / {imgArray && imgArray.length}</p> : null}
        </div>
    );
}


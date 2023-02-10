import { useEffect, useState } from "react";
import styles from "./carrousel.module.scss"

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
        <div className={styles.carrousel}>
            {imgArray && imgArray.length > 1 ? <div className={styles.arrowLeft} onClick={() => navigate(-1)}></div> : null}
            <img src={imgArray && imgArray[index]} alt="" />
            {imgArray && imgArray.length > 1 ? <div className={styles.arrowRight} onClick={() => navigate(1)}></div> : null}
            {imgArray && imgArray.length > 1 ? <p className={styles.count}>{index + 1} / {imgArray && imgArray.length}</p> : null}
        </div>
    );
}


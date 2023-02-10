import styles from "./star.module.scss"
import { useState } from "react"

/**
 * 
 * @param {boolean} fill A boolean to know if star is fill or not
 * @param {string} color Color in hexa format.
 * @returns 
 */
export default function Star({ fill, color }) {
    let defaultColor = "#E3E3E3"
    const [fillColor,setColor] = useState(fill === true ? color : defaultColor)


    return (
        <svg className={styles.star} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_108749_228)">
                <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill={fillColor}/>
            </g>
        </svg>
    )
}
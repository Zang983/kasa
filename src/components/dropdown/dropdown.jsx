import {useState } from "react";
import styles from "./dropdown.module.scss"

/**
 * 
 * @param {String} title of the block
 * @param {Boolean} longSize to know if block take all place or if it's smaller (components is in lodging and about pages) 
 * @returns 
 */
export default function Dropdown({ title, longSize,isOpen, children }) {
    console.log(isOpen)
    const [statut, setStatut] = useState(isOpen && isOpen ? true : false)


    return (
        <div className={`${styles.dropdown} ${longSize && longSize === "1" ? `${styles.dropdownSmaller}` : null}`}>
            <h3>{title} 
            <div className={statut ? styles.arrowUp : styles.arrowDown} onClick={(e) => {
                setStatut(!statut);
            }}>
            </div>
            </h3>
            <div className={statut === false ? styles.hidden : styles.visible}>{children}</div>
        </div>
    );
}

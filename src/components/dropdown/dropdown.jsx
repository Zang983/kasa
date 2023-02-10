import { useEffect, useState } from "react";
import styles from "./dropdown.module.scss"


/**
 * Rajouter une condition ajoutant la class longSize si boolean à true
 * Modifier la div "Test action" par un chevron fait avec des attributs css
 */
export default function Dropdown({ title, longSize, children }) {
    const [statut, setStatut] = useState(true)
    useEffect(() => {//A étudier

    },)

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

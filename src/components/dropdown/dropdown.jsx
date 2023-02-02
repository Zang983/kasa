import { useEffect, useState } from "react";


/**
 * Rajouter une condition ajoutant la class longSize si boolean à true
 * Modifier la div "Test action" par un chevron fait avec des attributs css
 */
export default function Dropdown({ title,longSize, children }) {
    const [statut, setStatut] = useState(false)

useEffect(()=>{//A étudier

},[statut])

    return (
        <div>
            <h3>{title} <div onClick={(e) => {
                setStatut(!statut);
            }}>Test action</div></h3>
            {statut ? <p>{children}</p> : null }
        </div>
    );
}


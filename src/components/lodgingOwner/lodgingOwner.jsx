import styles from "./lodgingOwner.module.scss"

/**
 * 
 * @param {string} name of lodging's owner
 * @param {string} avatar of lodging's owner
 * @returns 
 */
export default function LodgingOwner({name,avatar}){

    return(
        <div className={styles.lodgingOwner}>
            <p>{name && name}</p>
            <img src={avatar && avatar} alt="Propriétaire du logement"/>
        </div>
    )
}
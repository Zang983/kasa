import styles from "./lodgingOwner.module.scss"

export default function LodgingOwner({name,avatar}){

    return(
        <div className={styles.lodgingOwner}>
            <p>{name && name}</p>
            <img src={avatar && avatar} alt="Propriétaire du logement"/>
        </div>
    )
}
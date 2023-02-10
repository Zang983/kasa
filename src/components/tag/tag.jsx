import styles from "./tag.module.scss"
export default function Tag({children}){

    return(
        <div className={styles.tag}>
        {children}
        </div>
    )
}
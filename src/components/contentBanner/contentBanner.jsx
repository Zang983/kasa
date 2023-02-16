import styles from "./contentBanner.module.scss"
/**
 * 
 * @param {String} image (wich image will be in page)
 * @param {String} page page of the components
 * @param {String} children content of <h1> 
 * @returns 
 */
export default function ContentBanner({image,page,children}) {
    return (
        <div className={`${styles.banner} ${page && page === 'about' ? styles.aboutBanner : null}`}>
            <h1>{children}</h1> 
            <img src={image} alt={"Bannière"} />
        </div>
    );
}
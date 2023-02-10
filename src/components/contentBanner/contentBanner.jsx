import styles from "./contentBanner.module.scss"
export default function ContentBanner({image,page,children}) {
    return (
        <div className={`${styles.banner} ${page && page === 'about' ? styles.aboutBanner : null}`}>
            <h1>{children}</h1> 
            <img src={image} alt={"Bannière"} />
        </div>
    );
}
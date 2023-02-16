
import Logo from "../logo/logo";
import styles from "./footer.module.scss"

export default function Footer() {
    return (

        <footer className={styles.footer}>
            <Logo backColor="none" fillColor="#FFFFFF"></Logo>
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </footer>


    );
}
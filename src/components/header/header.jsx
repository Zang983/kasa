import Logo from "../logo/logo";
import styles from "./header.module.scss"

/**
 * 
 * @param {String} actualPage to underline actual page
 * @returns 
 */
export default function Header({actualPage}) {
    return (
      <header>
       <a href="/">
       <Logo backColor="none" fillColor="#FF6060"></Logo>
       </a>
       
       <ul>
        <li><a href="/" className={actualPage === "index" ? styles.underline : ""}>Accueil</a></li>
        <li><a href="/about" className={actualPage === "about" ? styles.underline : ""}>A propos</a></li>
       </ul>
      </header>
    );
  }
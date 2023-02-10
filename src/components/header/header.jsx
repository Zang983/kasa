import Logo from "../logo/logo";
import styles from "./header.module.scss"

export default function Header({actualPage}) {
    return (
      <header>
       <a href="/">
       {/* <img src={Logo} alt="" />Insérer le SVG plutôt que l'image et en faire un composant a part entière avec son propre style. */}
       <Logo backColor="none" fillColor="#FF6060"></Logo>
       </a>
       
       <ul>
        <li><a href="/" className={actualPage === "index" ? styles.underline : ""}>Accueil</a></li>
        <li><a href="/about" className={actualPage === "about" ? styles.underline : ""}>A propos</a></li>
       </ul>
      </header>
    );
  }
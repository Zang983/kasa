import { useState } from 'react'

export default function Header(props) {
    let [compteur, setCompteur] = useState(0)

    function incrementation(){
        console.log(compteur)
        setCompteur(compteur = compteur + 1);
    }
    return (

      <header className="header">
        <button onClick={incrementation}>Incrémenter</button>
        <div>{compteur}</div>
         Bonjour {props.name ? props.name : "tout le monde"}
      </header>
    );
  }
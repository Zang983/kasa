// import { useState } from 'react'
import Logo from "../../assets/logo.svg"

export default function Header(props) {
    return (
      <header>
       <img src={Logo} alt="" />
       <ul>
        <li>Accueil</li>
        <li>A propos</li>
       </ul>
      </header>
    );
  }
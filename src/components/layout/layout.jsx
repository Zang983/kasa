import { React } from 'react'
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"


/**
 * 
 * @param {String} actualPage name of actual page
 * @param {Pagte content} children content of the page
 * @returns 
 */
export default function Layout({actualPage,children}) {
    return (
        <>
            <Header actualPage={actualPage}></Header>
            {children}
            <Footer></Footer>
        </>




    );
}
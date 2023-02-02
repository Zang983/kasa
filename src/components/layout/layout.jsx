import { React } from 'react'
import Header from "../header/header.jsx"
import Footer from "../footer/footer.jsx"



export default function Layout(props) {
    return (
        <div>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>




    );
}
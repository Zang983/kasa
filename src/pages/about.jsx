import ContentBanner from "../components/contentBanner/contentBanner.jsx";
import Dropdown from "../components/dropdown/dropdown.jsx"
import contentBannerImg from "../assets/contentBanner_about.png"
import Layout from "../components/layout/layout.jsx";
import styles from "./styles/about.module.scss"

export default function About() {
    return (
        <Layout actualPage="about">
            <ContentBanner image={contentBannerImg} page="about" ></ContentBanner>
            <main className={styles.about}>
                <Dropdown title="Fiabilité" longSize="true"><p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p></Dropdown>
                <Dropdown title="Respect" longSize="true"><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></Dropdown>
                <Dropdown title="Service" longSize="true"><p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p></Dropdown>
                <Dropdown title="Sécurité" longSize="true"><p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p></Dropdown>
            </main>
        </Layout>

    );
}


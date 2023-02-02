import ContentBanner from "../components/contentBanner/contentBanner.jsx";
import Dropdown from "../components/dropdown/dropdown.jsx"
import contentBannerImg from "../assets/contentBanner_about.png"
import Layout from "../components/layout/layout.jsx";

export default function About() {
    return (
        <Layout actualPage="about">
            <ContentBanner image={contentBannerImg} ></ContentBanner>
            <Dropdown title="Fiabilité" longSize="true">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</Dropdown>
            <Dropdown title="Respect" longSize="true">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Dropdown>
            <Dropdown title="Service" longSize="true">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</Dropdown>
            <Dropdown title="Sécurité" longSize="true">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Dropdown>
        </Layout>

    );
}


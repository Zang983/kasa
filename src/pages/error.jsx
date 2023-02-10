import styles from "./styles/error.module.scss"
import Layout from "../components/layout/layout";
export default function Error() {
    return (
        <Layout>
            <main className={styles.error}>
                <div>
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                </div>
                <p><a href="./">Retourner sur la page d'accueil</a></p>
            </main>
        </Layout>
    );
}


import styles from "./card.module.scss"
export default function Card({ data }) {
    return (

        <a className={styles.card} href={"/lodging/" + data.id}>
            <figure>
                <img src={data.cover} alt="" />
                <figcaption>{data.title}</figcaption>
            </figure>
        </a>
    );
}
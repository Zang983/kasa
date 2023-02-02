export default function Card({ data }) {
    return (

        <a href={"/lodging/" + data.id}>
            <figure>
                <img src={data.cover} alt="" />
                <figcaption>{data.title}</figcaption>
            </figure>
        </a>
    );
}
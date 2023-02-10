import Star from "../star/star";
import styles from "./starContain.module.scss"
export default function StarContain({ rating }) {
    let scaleRating = 5;//maximum rate
    return (
        <div className = {styles.starContain}>
            {
                /*
                create an array with boolean
                */
                rating && Array(scaleRating).fill(false).fill(true, 0, rating).map((fill, key) => {
                    return <Star key={key} fill={fill} color="#FF6060">
                    </Star>
                })
            }

        </div>
    )
}
import style from './Card.module.css'
import { Link } from "react-router-dom"

function Card({ name, genres, background_image, id, rating }) {

    return (
        <Link className = {style.link} to = {`/detail/${id}`}>
        <div className={style.container}>
            <img className= {style.img} src={background_image} alt=""/>
            <h2>{name}</h2>
            <p><b>Genres:</b> {genres.join (", ")}</p>
            <p><b>Rating:</b> {rating}</p>
        </div>
        </Link>
    )
}
export default Card;
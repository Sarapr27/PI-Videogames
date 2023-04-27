import style from "./Detail.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getByDetail } from "../../../redux/actions";
import { useParams, Link } from "react-router-dom";


const Detail = () => {

    const { detailId } = useParams();
    const detail = useSelector((state) => state.detailGames)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getByDetail(detailId))
    }, [detailId])

return (
<div className={style.containerdivdetail}>
    <Link to= "/home"><button className={style.button}>Back</button></Link>
    {
        detail.name ? (
    <div className={style.container}>
        
    <h2>{detail.name}</h2>
    <img className= {style.img} src={detail.background_image} alt="img"/>
    <div className={style.text}>
    <p><b>ID:</b> {detail.id}</p>
    <p><b>Platforms:</b> {detail.platforms.join(", ")}</p>
    <p><b>Release Date:</b> {detail.released}</p>
    <p><b>Rating:</b> {detail.rating}</p>
    <p><b>Genres:</b> {detail.genres.join(", ")}</p>
    <p><b>Description:</b> {detail.description.replace(/<[^>]+>/g, "")}</p>
    </div>
    </div> ):(
        <div className={style.loading}>
            <img src="https://i.gifer.com/origin/8d/8d772dc03b5f8c40dc0971bf3594d820_w200.webp" 
                    alt="loading" />
        </div>
    ) }

</div> )

}

export default Detail;
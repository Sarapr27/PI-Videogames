import { Link } from "react-router-dom"
import style from "../About//About.module.css"

function About (){

    return (
     <div className={`${style.about} ${style["full-screen-bg"]}`}>
        <Link to="/home">
        <button className={style.button}>Home</button>
        </Link>
        <div className= {style.container}>
            <h1 className={style.h1}>About the Creator: </h1>
            <h2>Started as a teacher for kids, now looking to reskilling as Software Development.</h2>
            <div className={style.img} ><img src="./img/unnamed.jpg"alt="Me"></img></div>
            <br></br>
            <Link>
            <div><img url= "https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="git"></img></div>
            
            </Link>
            <Link>
            </Link>
            <Link>
            </Link>
            <h3><em>~ Sara Pinzón</em></h3>
        </div>
    </div>
    
    )
}
export default About;
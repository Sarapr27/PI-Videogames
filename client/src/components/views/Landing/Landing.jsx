import React from "react";
import style from "./Landing.module.css"
import { Link } from "react-router-dom"

function Landing () {
    return (
        
    <div className={`${style.landing} ${style["full-screen-bg"]}`}>
        <div>
    <Link to="/home">
    <button className={style.button}>PRESS START</button>
    </Link>
      </div> 
      </div>
      )
      
}

export default Landing;
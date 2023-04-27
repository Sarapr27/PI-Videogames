import style from "./SearchBar.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";

const Searchbar = () => {

    const dispatch = useDispatch();
    const [game, setGame] = useState("");

    const handleChange = (event) => {
        setGame(event.target.value)

    }

    const searcher = (g) => {
        g.preventDefault();
        dispatch(searchByName(game))
        setGame('')
        
    };
    
    return (
        <div className={style.bar}>
            <form action="">
                <input type="text" placeholder='Videogame' onChange={handleChange} value={game} />
                <button className={style.button}onClick={(g) => searcher(g)}>Search</button>
            </form>
        </div>
    ) 
}

export default Searchbar;
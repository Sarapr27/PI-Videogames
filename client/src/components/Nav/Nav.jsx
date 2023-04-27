import { Link } from "react-router-dom";
import Searchbar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterByOrigin, filterByRating, getAllGenres } from "../../redux/actions";
import { filterByGenre, filterByOrder } from "../../redux/actions";
import style from "../Nav/Nav.module.css"



const Nav = () => {
  const genresMap = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
    
  }, []);

  const handleFilterByGenre = (event) => {
    dispatch(filterByGenre(event.target.value));
  }

  const handleFilterOrigin = (event) => {
    dispatch(filterByOrigin(event.target.value));
  }

  const handleFilterByOrder = (event) => {
    dispatch(filterByOrder(event.target.value))
  }

  const handleFilterByRating = (event) => {
    dispatch(filterByRating(event.target.value))
  }

  return (
    <nav className={style.nav}>
      <br />
      <div>
        <Link to="/create"><button className={style.button}>Create Videogame</button></Link>
        <Link to="/about"><button className={style.button}>About</button></Link>
        <Link to="/"><button className={style.button}>Logout</button></Link>
        <div>
          <br />
          <Searchbar />
        </div>
      </div>

      <div>
        <select defaultValue='0' id="filterByGenres" className={style.select} onChange={handleFilterByGenre}>
          <option disabled value="0">Filter by Genres</option>
          {genresMap.map((genre, index) => {
            return <option key={index} value={genre}>{genre}</option>;
          })}
        </select>

        <select defaultValue='0' name="" id="orderByName" className={style.select} onChange={(e) => { handleFilterByOrder(e) }}>
          <option disabled value="0">Order by Name</option>
          <option value="a-z">Name (A-Z)</option>
          <option value="z-a">Name (Z-A)</option>
        </select>

        <select defaultValue='0' name="" id="orderByRating" className={style.select} onChange={(e) => { handleFilterByRating(e) }}>
          <option disabled value="0" >Order by Rating</option>
          <option value="1-9">Ascending Rating</option>
          <option value="9-1">Descending Rating</option>
        </select>

        <select defaultValue='0' name="" id="orderByOrigin" className={style.select} onChange={(e) => { handleFilterOrigin(e) }}>
          <option disabled value="0">Order by Origin</option>
          <option value="all">All Videogames</option>
          <option value="created">Created Videogames</option>
          <option value="api">API Videogames</option>
        </select>

        <button className={style.reset}
          onClick={() => {
            window.location.reload();
          }}>Reset</button>

      </div>
    </nav>
  );
};
export default Nav;

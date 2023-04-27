import Nav from "../../Nav/Nav"
import Cards from "../../Cards/Cards";
import style from "../Home/Home.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllGenres, getAllVideogames } from "../../../redux/actions";
import Paging from "../../Paging/Paging"
import { backHome } from "../../../redux/actions";


const Home = () => {

   const videogames = useSelector((state) => state.videogames)
   const dispatch = useDispatch();

   const [currentPage, setCurrentPage] = useState(1);
   const videogamesPerPages = 15;
   const lastIndexVideogames = currentPage * videogamesPerPages;
   const firstIndexVideogames = lastIndexVideogames - videogamesPerPages;
   const currentVideogames = videogames.slice(firstIndexVideogames, lastIndexVideogames);

   useEffect(() => {
      dispatch(getAllVideogames())
      dispatch(getAllGenres())
      dispatch(backHome())
   }, [])

   const paging = (numberPage) => {
      setCurrentPage(numberPage);
   }
   const next = () => {
      if (lastIndexVideogames > videogames.length) return
      setCurrentPage(currentPage + 1)
   }
   const prev = () => {
      if (firstIndexVideogames < 1) return
      setCurrentPage(currentPage - 1)
   }

   return (
      <div>
         <Nav></Nav>
         <div className={style.paging}>
            <Paging
               videogamesPerPages={videogamesPerPages}
               videogames={videogames.length}
               paging={paging}
               next={next}
               prev={prev}
               currentPage={currentPage}
            />
         </div>

         {
            currentVideogames.length > 0 ? (
               <Cards videogames={currentVideogames}></Cards>
            ) : (
               <div>
                  <img src="https://i.gifer.com/origin/8d/8d772dc03b5f8c40dc0971bf3594d820_w200.webp"
                     alt="loading" />
               </div>

            )}

         <div className={style.paging}>
            <Paging
               videogamesPerPages={videogamesPerPages}
               videogames={videogames.length}
               paging={paging}
               next={next}
               prev={prev}
               currentPage={currentPage}
            />
         </div>
      </div>
   )
}
export default Home;
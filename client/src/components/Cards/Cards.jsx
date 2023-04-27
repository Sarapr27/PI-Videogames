import style from "../Cards/Cards.module.css";
import Card from "../Card/Card";


const Cards = ({ videogames }) => {
  return (
    <div className={style.container}>
      {videogames.map(({ name, genres, background_image, id, rating }) => {
        return (
          <Card
            id={id}
            background_image={background_image}
            name={name}
            genres={genres}
            rating={rating}
          ></Card>
        );
      })}
    </div>
  );
};
export default Cards;

// const [currentPage, setCurrentPage] = useState(1);
// const [videogamesPerPages, setVideogamesPerPages] = useState(15);
// const lastIndexVideogames = currentPage * videogamesPerPages;
// const firstIndexVideogames = lastIndexVideogames - videogamesPerPages;
// const currentVideogames = videogames.slice(firstIndexVideogames, lastIndexVideogames);

// const paging = (numberPage) =>{
//     setCurrentPage(numberPage);

// const next = () => {
//         if (lastIndexVideogames > videogames.length) return
//         setCurrentPage(currentPage + 1)
//     }
// const prev = () => {
//         if (firstIndexVideogames < 1) return
//         setCurrentPage(currentPage - 1)
//     }
// }

//     <div className={style.container}>

//     {/* <Paging
//     videogamesPerPages = {videogamesPerPages}
//     videogames ={ videogames.length}
//     paging = {paging}
//     /> */}

// <br></br>

//     {currentVideogames.length > 0? (
//         currentVideogames.map((Vg) => {
//             return (
//             <Card
//             background_image={Vg.background_image}
//             name={Vg.name}
//             genres={Vg.genres}
//             />

//         );
//     })
//     ) : (
//         <div className={style.loading}>
//             <img src="https://i.gifer.com/origin/8d/8d772dc03b5f8c40dc0971bf3594d820_w200.webp"
//                  alt="loading" />
//         </div>
//     )}
//     </div>
// )

//     }

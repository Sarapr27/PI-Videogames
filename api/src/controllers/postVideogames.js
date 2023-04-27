const { Videogame, Genres } = require("../db");

const postVideogames = async (req, res) => {
  try {
    const {
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      genre,
    } = req.body;

    if (
      !name ||
      !description ||
      !platforms ||
      !background_image ||
      !released ||
      !rating ||
      !genre ||
      genre.length == 0
    ) {
      res.status(404).send("Missing data");
    } else {
      const [newGame, created]  = await Videogame.findOrCreate({
        where: { name: name },
        defaults: {
          name,
          description,
          platforms,
          background_image: background_image,
          released,
          rating,
        },
      });
      
      genre.forEach(async (element) => {
        let findDbGenres = await Genres.findAll({ where: { name: element } });
        await newGame.addGenres(findDbGenres);
      });

      if(created){
        res.status(200).json(newGame);
      }else{
        res.status(404).send("Videogame already exists")
      }

      
    }
  } catch (error) {
    res.status(404).send("Error in data");
  }
};
module.exports = postVideogames;

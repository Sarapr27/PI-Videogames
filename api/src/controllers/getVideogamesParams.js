require('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;
const { getVideoGamesDb } = require ("../controllers/getVideogamesDb.js")

const getVideogamesParams = async (req, res) => {
  try {
    const { idVideogame } = req.params;
    if (idVideogame.length > 7 && typeof idVideogame === "string") {
      const videoGame = await getVideoGamesDb();

      const filter = videoGame.filter((element) => element.id === idVideogame)
      res.status(200).json(filter[0]);

    } else {
      const getVideoGamesApi = await axios.get(
        `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`
      );
      const oneGame = {
        id: getVideoGamesApi.data.id,
        name: getVideoGamesApi.data.name,
        description: getVideoGamesApi.data.description,
        platforms: getVideoGamesApi.data.platforms.map(
          (platform) => platform.platform.name
        ),
        background_image: getVideoGamesApi.data.background_image,
        genres: getVideoGamesApi.data.genres.map((g)=>g.name),
        released: getVideoGamesApi.data.released,
        rating: getVideoGamesApi.data.rating,
      };
      res.status(200).json(oneGame);
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getVideogamesParams;

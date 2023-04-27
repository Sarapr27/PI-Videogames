const { Videogame, Genres } = require("../db");
const getVideoGamesApi = require("./getVideogamesApi");

const getVideoGamesDb = async () => {
  try {
    const allVideogames = await Videogame.findAll({
      include: {
        model: Genres,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    const videoGamesDb = allVideogames.map((e) => {
      return {
        id: e.id,
        name: e.name,
        rating: e.rating,
        background_image: e.background_image,
        genres: e.genres.map((e) => e.name),
        description: e.description,
        released: e.released,
        createdVideoGame: e.createdVideoGame,
        platforms: e.platforms,
      };
    });
    return videoGamesDb;
  } catch (error) {
    console.log(error.message);
    throw new Error("Error fetching video games from database");
  }
};

const getVideoGames = async () => {
  try {
    const allInfo = await Promise.all([getVideoGamesDb(), getVideoGamesApi()]);
    const videoGamesDb = Array.isArray(allInfo?.[0]) ? allInfo[0] : [];
    const videoGamesApi = Array.isArray(allInfo?.[1]) ? allInfo[1] : [];
    return [...videoGamesDb, ...videoGamesApi];
  } catch (error) {
    console.log(error.message);
    throw new Error("Error fetching video games");
  }
};

module.exports = { getVideoGames, getVideoGamesDb };

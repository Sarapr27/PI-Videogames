require('dotenv').config();
const axios = require("axios");
const { API_KEY } = process.env;


const getVideoGamesApi = async () => {
  try {
    const games = [];

    let URL_BASE = `https://api.rawg.io/api/games?key=${API_KEY}`;

    for (let index = 0; index < 5; index++) {
      let page = await axios.get(URL_BASE);
      page.data?.results.forEach((element) => {
        games.push({
          id: element.id,
          name: element.name,
          description: element.description,
          platforms: element.platforms.map(p => p.platform.name),
          background_image: element.background_image,
          releaseDate: element.releaseDate,
          rating: element.rating,
          genres: element.genres.map((game) => game.name),
          createdVideoGame: false,
        });
      });
      URL_BASE = page.data.next;
    }
    console.log(games);
    return games;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getVideoGamesApi;

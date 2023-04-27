require('dotenv').config();
const { Genres } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getVideogamesGenres = async (req, res) => {
  try {
    const URL_BASE = `https://api.rawg.io/api/genres?key=${API_KEY}`;

    const getVideogamesGenresApi = await axios.get(URL_BASE);
console.log(getVideogamesGenresApi.data);
    const videoGenres = getVideogamesGenresApi.data.results.map((gen) => gen.name);

    videoGenres.flat().forEach(async(element) => {
      await Genres.findOrCreate({ where: { name: element } });
    });

    const allVideogamesGenres = await Genres.findAll();
    res.status(200).json(allVideogamesGenres);

  } catch(error) {
    console.log(error);
    res.status(404).send("Genre not found");
  }
};

module.exports = getVideogamesGenres;

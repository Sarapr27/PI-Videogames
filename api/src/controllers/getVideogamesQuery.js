const { getVideoGames } = require("../controllers/getVideogamesDb");

const getVideoGamesQuery = async (req, res) => {
  try {
    const { name } = req.query;
    const getAllVideogames = await getVideoGames();
    if (name) {
      let filteredVideoGames = getAllVideogames
        .filter((vg) => vg.name.toLowerCase().includes(name.toLowerCase()))
        .slice(0, 15);
      res.status(200).json(filteredVideoGames);
    } else {
      res.status(200).json(getAllVideogames);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

module.exports = getVideoGamesQuery;

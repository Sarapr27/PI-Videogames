const { Videogame } = require("../db");

const deleteVideogame = async (req, res) => {
  try {
    const { idVideogame } = req.params;

    const getVideogame = Videogame.findByPk(idVideogame);

    if (getVideogame) {
      getVideogame.destroy();
      res.status(200).send("Deleted Videogame");
    } else {
      res.status(404).send("Videogame not found");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = deleteVideogame;



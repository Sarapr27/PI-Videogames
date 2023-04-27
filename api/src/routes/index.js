const { Router } = require("express");
//const { getVideoGames } = require("../controllers/getVideogamesDb");
const getVideogamesParams = require("../controllers/getVideogamesParams");
const postVideogames = require("../controllers/postVideogames.js");
const getVideogamesGenres = require("../controllers/getVideogamesGenres");
const getVideoGamesQuery = require("../controllers/getVideogamesQuery");
const deleteVideogame = require("../controllers/deleteVideogames");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/videogames", postVideogames);

router.get("/videogames", getVideoGamesQuery);

router.get("/videogames/:idVideogame", getVideogamesParams);

router.get("/genres", getVideogamesGenres);

router.delete("/videogames/:idVideogame", deleteVideogame);

module.exports = router;

const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require('./videogamesRouter/videogameRouter.js')
const genresRouter = require('./genresRouter/genresRouter.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);

module.exports = router;

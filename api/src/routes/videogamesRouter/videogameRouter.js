const { Router } = require("express");
const { getGames, newGame, getGame } = require("./controller");
const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const games = await getGames(name);
    res.status(200).json(games);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, description, image, released, rating, platforms, genres } =
    req.body;
  try {
    res
      .status(201)
      .json(
        await newGame(
          name,
          description,
          image,
          released,
          rating,
          platforms,
          genres
        )
      );
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.status(201).json(await getGame(id,getGames));
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;

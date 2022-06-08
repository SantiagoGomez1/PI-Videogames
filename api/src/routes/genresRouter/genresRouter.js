const { Router } = require("express");
const { getGenres } = require("./controller.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const genres = await getGenres();
    res.status(201).json(genres);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;

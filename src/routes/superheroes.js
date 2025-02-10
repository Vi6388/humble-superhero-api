const express = require('express');
const router = express.Router();
const { superheroes } = require("../data");

// POST /superheroes
router.post('/', (req, res) => {
  const { name, superpower, humilityScore } = req.body;

  // Validation
  if (!name || !superpower || humilityScore === undefined) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  if (typeof humilityScore !== 'number' || humilityScore < 1 || humilityScore > 10) {
    return res.status(400).json({ error: 'Humility score must be a number between 1 and 10.' });
  }

  const newHero = { name, superpower, humilityScore };
  superheroes.push(newHero);
  res.status(201).json(newHero);
});

// GET /superheroes
router.get('/', (req, res) => {
  const sortedHeroes = superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  res.json(sortedHeroes);
});

module.exports = router;
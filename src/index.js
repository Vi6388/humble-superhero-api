const express = require('express');
const bodyParser = require('body-parser');
const superheroRoutes = require('./routes/superheroes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/superheroes', superheroRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
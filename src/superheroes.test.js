const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const superheroRoutes = require('./routes/superheroes');

const app = express();
app.use(bodyParser.json());
app.use('/superheroes', superheroRoutes);

describe('Superhero API', () => {
  it('should add a new superhero', async () => {
    const response = await request(app)
      .post('/superheroes')
      .send({ name: 'Superman', superpower: 'Flight', humilityScore: 9 });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      name: 'Superman',
      superpower: 'Flight',
      humilityScore: 9,
    });
  });

  it('should fetch superheroes sorted by humility score', async () => {
    await request(app)
      .post('/superheroes')
      .send({ name: 'Batman', superpower: 'Stealth', humilityScore: 8 });

    const response = await request(app).get('/superheroes');
    expect(response.status).toBe(200);
    expect(response.body[0].name).toBe('Superman'); // Superman should appear first
  });
});
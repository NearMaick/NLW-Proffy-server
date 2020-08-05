import express from 'express';

const app = express();

app.use(express.json);

app.get('/users', (request, response) => {
  
  const users = [
    { name: 'Maick', age: 34 },
    { name: 'Enilda', age: 62 },
    { name: 'Neuza', age: 62 },
  ]

  response.json(users);
});

app.listen(3333);
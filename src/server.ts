import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  
  const users = [
    { name: 'Maick', age: 34 },
    { name: 'Enilda', age: 62 },
    { name: 'Neuza', age: 62 },
  ]

  return response.send(users);
});

app.listen(3333);
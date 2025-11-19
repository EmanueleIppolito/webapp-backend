const express = require('express');
const app = express();
const connection = require('./database/connection');
const movieRouter = require('./routes/movie');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the webapp backend!' });
})

app.use('/api/movies', movieRouter)

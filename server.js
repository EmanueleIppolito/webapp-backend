const express = require('express');
const app = express();
const movieRouter = require('./routes/movie');

const PORT = process.env.PORT || 3000;

app.use('/api/movies', movieRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the webapp backend!' });
})



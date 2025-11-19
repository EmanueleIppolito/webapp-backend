const express = require('express');
const app = express();
const movieRouter = require('./routes/movie');
const notFound = require('./middleware/notFound');
const serverError = require('./middleware/serverError');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.use('/api/movies', movieRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the webapp backend!' });
})

app.use(serverError);


app.use(notFound);


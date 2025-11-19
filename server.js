const express = require('express');
const app = express();
const connection = require('./database/connection');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the webapp backend!' });
})

app.get('/movies', (req, res) => {
    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ movies:results });   
    });
});

app.get('/movies/:id', (req, res) => {
    const movieId = Number(req.params.id);
    const sql = 'SELECT * FROM movies WHERE id = ?';
    connection.query(sql, [movieId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json({ movie: results[0] });   
    });
});
const router = require('express').Router();
const connection = require('../database/connection');

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ movies:results });   
    });
});

router.get('/:id', (req, res) => {
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





module.exports = router;
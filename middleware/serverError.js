function serverError(err, req, res, next){
  console.log(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
};
module.exports = serverError;
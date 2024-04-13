const express = require('express');
const router = express.Router();
const apiControllerMovies = require('../../controllers/api/moviesController');
const {validationMovieCreate} = require('../../validations/validationsMovies');


///list Movies
router.get('/api/movies/list', apiControllerMovies.list);

// create movies
router.post('/api/movies/create',validationMovieCreate ,apiControllerMovies.create);

//delete movies
router.delete('/api/movies/delete/:id', apiControllerMovies.delete);

module.exports = router
const express =  require('express');
const router = express.Router();
const apiControllerGenres = require('../../controllers/api/genresController');


//List genres
router.get('/api/genres/list', apiControllerGenres.list);

///detail genres
router.get('/api/genres/detail/:id', apiControllerGenres.detail);

module.exports = router
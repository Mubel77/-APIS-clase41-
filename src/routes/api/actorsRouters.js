const express = require('express');
const router = express.Router();
const apiControllerActors = require('../../controllers/api/actorsController');
const {validacionActores} = require('../../validations/validationsActors') 


///List actors
router.get('/api/actors/list', apiControllerActors.list);

///Create actors
router.post('/api/actors/create',validacionActores, apiControllerActors.create);

///delete actor
router.delete('/api/actors/delete/:id',apiControllerActors.delete);

module.exports = router
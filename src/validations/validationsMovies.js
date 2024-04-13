const {body} = require('express-validator');

const validationMovieCreate = [
    body('title')
    .notEmpty().withMessage('Debes ingresar un Nombre').bail()
    .isLength({ min:2, max:200 }).withMessage('Tiene que contener mas de dos letra'),
    body('rating')
        .notEmpty().withMessage('Debes completar con un numero de rating').bail()
        .isInt({ min: 1, max: 10 }).withMessage('El rating debe estar entre 1 y 10'),
    body('awards')
        .notEmpty().withMessage('Debes completar los awards').bail()
        .isInt({ min: 0 }).withMessage('Los premios deben ser de o hasta los premios que ganaste'),
    body('release_date')
    .notEmpty().withMessage('Debes ingresar la Fecha de Estreno'),
    body('length')
    .notEmpty().withMessage('Debes ingresar el Tiempo de Duracion de la pelicula en minutos').bail()
    .isInt({min:0}).withMessage('Solo admite numeros mayores a cero'),
    body('genre_id')
    .notEmpty().withMessage('Debes ingresar el Genero de la pelicula').bail()
    .isInt({min:0}).withMessage('Error de datos')
];

const validationMovieUpdate = [
    body('title')
    .notEmpty().withMessage('Debes ingresar un Nombre').bail()
    .isLength({ min:2, max:500 }).withMessage('Debe contener mas de 2 (dos) letras'),
    body('rating')
    .notEmpty().withMessage('Debes ingresar el Rating, solo admite numeros').bail()
    .isFloat({min:0, max:10}).withMessage('El rating es de 0 a 10 y admite decimal (Por ej., 7.5)'),
    body('awards')
    .notEmpty().withMessage('Debes ingresar la cantidad de Premios de la pelicula (0 (cero) si no tiene)').bail()
    .isInt({min:0, max:100}).withMessage('Solo admite numeros entre 0 y 100'),
    body('release_date')
    .notEmpty().withMessage('Debes ingresar la Fecha de Estreno').bail()
    .toDate().withMessage('Debes respetar el formato "YYYY-MM-DD'),
    body('length')
    .notEmpty().withMessage('Debes ingresar el Tiempo de Duracion de la pelicula en minutos').bail()
    .isInt({min:0}).withMessage('Solo admite numeros mayores a 0 (cero)'),
    body('genre_id')
    .notEmpty().withMessage('Debes ingresar el Genero de la pelicula').bail()
    .isInt({min:0}).withMessage('Error de configuracion, por favor contacte al desarrollador')
]

module.exports = {validationMovieCreate,validationMovieUpdate}


    
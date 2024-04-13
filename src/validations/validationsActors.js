
const {body} = require('express-validator');

const validacionActores = [
    body('first_name')
    .notEmpty().withMessage('Debes ingresar un Nombre').bail()
    .isLength({ min:2}).withMessage('Tiene que contener mas de dos letra'),
    body('last_name')
    .notEmpty().withMessage('Debes ingresar un Apellido').bail()
    .isLength({ min:2}).withMessage('Tiene que contener mas de dos letra'),
      body('rating')
        .notEmpty().withMessage('Debes completar con un numero de rating').bail()
        .isInt({ min: 1, max: 10 }).withMessage('El rating debe estar entre 1 y 10'),
];

module.exports = {validacionActores}

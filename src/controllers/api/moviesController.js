const db = require('../../database/models/index')

const {validationResult} = require('express-validator')

const apiControllerMovies = {
  list: async (req,res) => {
    try {
      await db.Movie.findAll()
        .then((movies) => {
          res.status(200).json({
            meta:{
              status: 200,
              total: movies.length,
              url:'api/movies/list'
            },
            data: movies
          })
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
  },

  create: async (req,res) => {
    try {
      const errors = validationResult(req)
      if (errors.isEmpty()) {
        let movie = await db.Movie.create(req.body)
        return res.status(200).json({
          data: movie,
          status: 200,
          created: "ok"
        })
      } else {
        const errorsMapped = errors.mapped()
        for (const key in errorsMapped) {
          delete errorsMapped[key].type;
          delete errorsMapped[key].location;
          delete errorsMapped[key].path;
        }
        const errorsJson = JSON.stringify(errorsMapped)
        throw new Error (errorsJson)
      }
    } catch (error) {
        res.status(400).send(error.message)
    }
  },

  delete: async (req,res) => {
    try {
      const {id} = req.params
      await db.Movie.destroy({
        where:{id}
      })
        .then((result => {
          res.status(200).json({
            reference_id: id,
            status: 200,
            deleted: "True"
          })
        }))
    } catch (error) {
      res.status(200).send(error.message)
    }
  }
}

module.exports = apiControllerMovies
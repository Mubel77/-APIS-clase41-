const db = require('../../database/models/index')
 const {validationResult} = require('express-validator')

const apiControllerActors = {
  list: async (req,res) => {
    try {
      await db.Actor.findAll()
        .then((actors) => {
          res.status(200).json({
            meta:{
              status: 200,
              total: actors.length,
              url:'api/actors/list'
            },
            data: actors
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
        let actor = await db.Actor.create(req.body)
        return res.status(200).json({
          data: actor,
          status: 200,
          created: "True"
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
      await db.Actor.destroy({
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

module.exports = apiControllerActors
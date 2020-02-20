const express = require('express')
const Memes =require('../models/memes.js')
const memes = new Memes()

const router = express.Router()

router.get('/memes', getAllMemes)
router.get('/memes/:id')
router.post('/memes')
router.put('/memes/:id')
router.delete('/memes/:id')

function getAllMemes(req, res, next) {
  memes.read()
    .then(result => {
      const output = {
        count: result.length,
        data: result
      }
      res.status(200).json(output)
    })
    .catch(next) // does this do this in case of a break?
}

function getOneMeme(req, res, next) {
  memes.read(req.params.id)
    .then(data => {
      
    })
}

module.exports = router

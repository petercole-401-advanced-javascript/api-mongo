const Model = require('./mongo-model.js')
const schema = require('./memes-schema.js')

class Memes extends Model {
  constructor (){
    super(schema)
  }
}


module.exports = Memes

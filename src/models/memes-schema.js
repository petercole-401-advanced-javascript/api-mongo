const mongoose = require('mongoose');

const memesSchema = mongoose.Schema({
  template: { type: String },
  textboxes: { type: [String] },
  imgUrl: { type: String }
})

module.exports = mongoose.model('memes', memesSchema);

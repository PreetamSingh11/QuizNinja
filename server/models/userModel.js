const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  categories: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);

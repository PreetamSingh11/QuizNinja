const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: String,
  challenge: {
    total: {
      type: Number,
      default: 0
    },
    won: {
      type: Number,
      default: 0
    },
    tie: {
      type: Number,
      default: 0
    }
  }
}, {
  _id: false
});

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  categories: [categorySchema],
  total_points: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema);
//module.exports.Category = mongoose.model('category', categorySchema);

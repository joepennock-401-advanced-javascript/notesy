'use strict';

const mongoose = require('mongoose');

const note = mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
});

note.pre('validate', function () {
  this.category = this.category.toLowerCase();
});

module.exports = mongoose.model('note', note);
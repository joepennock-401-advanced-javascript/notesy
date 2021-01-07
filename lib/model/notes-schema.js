'use strict';

const mongoose = require('mongoose');

const note = mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
});

note.pre('validate', function () {
  this.category = this.category.toLowerCase();
});

note.post('save', function() {
  console.log('Adding new note: "' + this.text + '" To category: "' + this.category +'"');
});

module.exports = mongoose.model('note', note);
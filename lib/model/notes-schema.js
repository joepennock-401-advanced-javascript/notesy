'use strict';

const mongoose = require('mongoose');

const note = mongoose.Schema({
  text: { type: String, require: true },
});

module.exports = mongoose.model('note', note);
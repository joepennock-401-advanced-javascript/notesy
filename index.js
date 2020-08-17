'use strict'

/*
TODOs:
1. entry point of app
2. import from lib/input.js and lib/notes.js
3. pass user input from lib/input.js to lib/notes.js
*/

/** Connection to MongoDB */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notesy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Input = require('./lib/input');
const Note = require('./lib/notes');

const input = new Input();

/** Conditional running the execute() method of the Note class if usre input has passed validation */
if ( input.validate() === true){
  const addNote = new Note(input);
  addNote.execute();
} else { 
  console.log('Error, please input a valid command');
};
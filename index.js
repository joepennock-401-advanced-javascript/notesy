#!/usr/bin/env node
'use strict'

/*
***** OLD *****
TODOs:
1. entry point of app
2. import from lib/input.js and lib/notes.js
3. pass user input from lib/input.js to lib/notes.js
***** NEW *****
1. Clean up code
2. Add appropriate documentation
3. Try and check if code is DRY
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

/** Conditional running the execute() method of the Note class if user input has passed validation */
if ( input.validate() ) {
  const addNote = new Note(input);
  addNote.execute()
  .then( () => {
    mongoose.disconnect()
  });
} else { 
  console.log('Error, please input a valid command');
  mongoose.disconnect();
};

console.log('test input', input);
console.log(new Note(input));
'use strict'

/*
TODOs:
1. entry point of app
2. import from lib/input.js and lib/notes.js
3. pass user input from lib/input.js to lib/notes.js
*/

const Input = require('./lib/input');
const Note = require('./lib/notes');

const input = new Input;

console.log(input.validate());

if ( input.validate(input) === true){
  const addNote = new Note(input);
  addNote.execute(input);
  addNote.add(input);

} else { 
  console.log('Error, please input a valid command')
};
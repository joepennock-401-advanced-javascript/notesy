'use strict'

/*
TODOs:
1. export a constuctot function
2. prototype method 'execute()' that executes correct operation from input.js (action)
  a. must be able to handle multiple types of actions
3. prototype method 'add()' that creates object representing note
  a. must contain unique ID for each note
  b. console.log body of note to be added (user confirmation)
*/

// Requiring from input.js to access parsed user input.
const Input = require('./input');
const options = new Input();

/**
 * Constructor function that will handle the creation and management of notes using user input data from lib/input/js
 * @params {*} action - parsed command/--flag from user input.
 * @params {*} payload - parsed user note.
 * */
const Note = function(){
  this.action = options.action;
  this.payload = options.payload;
  this.id = Math.floor(Math.random() * 1000000);
};

/**
 * Prototype method that will execute the correct operation based on which command the user gives. i.e 'add', 'delete' etc. Will run the add() method upon execution.
 * @params {*} commands - The list of accepted commands the user can give.
 */
Note.prototype.execute = function(){
  const commands = ['a', 'add'];

  switch (commands.includes(this.action)){
    case 'a' || 'add':
      Note.add;
      break;
  };

};

/**
 * Prototype method that will create a new note object based on user input and send confirmation of action back to the user.
 * @params {*} note - new instance of the Note object with parsed, workable user input.
 */
Note.prototype.add = function(){
  let note = new Note();
  console.log('adding new note ', + this.payload + ' ID: ' + this.id);
  return note;
};

module.exports = Note;
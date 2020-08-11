'use strict'

/*
TODOs:
1. export constructor that recieves command line input
2. using minimist.js, parse CL input into usable data
3. evaluate and validate data
4. return instance of constructor with 'action' and 'payload'
   action: the action from input i.e. flag
   payload: the user's note to be saved
*/

// Library to help parse command line user input.
const minimist = require('minimist');

// User input that has been parsed and serperated into data relevent to this application, i.e. a command/action and a note/payload.
const args = minimist(process.argv.slice(2));
// The command, or --flag, given by the user.
const method = (Object.keys(args).slice(1));
// The content of the user input, i.e. the note.
const message = (Object.values(args).slice(1));

/**
 * Constructor function that will process the above parsed user input
 * @params {*} action - CRUD operation
 * @params {*} payload - user input/message
 * */
const Input = function(){
  this.action = method[0];
  this.payload = message[0];
  this.valid = this.validate();
};

/**
 * Method used to determine whether or not the user input is valid data, specifically pertaining to the note application. Is there a command and is it valid? Does the input contain a string to be used as the 'note'?
 * @params {*} validCommand - Variable to check for a valid user input command/--flag.
 * @params {*} string - Variable used to check if user input actually has a note content.
 */
Input.prototype.validate = function(){
  let validCommand = false;
  let string = false;

/** 
 * Checks action/method against an array of valid commands.
 * @params {*} commands - Variable array that has a list of all acceptable commands/--flags.
 */
  const commands = ['a', 'add'];
  if (commands.includes(this.action)){
    validCommand = true;
  };

/**
 * Checks to see if payload/message is a valid string.
 */
  if (typeof(this.payload) !== 'boolean'){
    string = true; 
  };

  return validCommand && string;

};

// Exports the above Input contructor function to the root file, index.js.
module.exports = Input;

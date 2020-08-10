'use strict'

/*
TODOs:
1. export constructor that recieves command line input
2. using minimist.js, parses CL input into usable data
3. evaluates and validates data
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

// Constructor function that will process the above parsed user input
const Input = function(){
  this.action = method[0];
  this.payload = message[0];
  this.validate();
};

// Method used to determine whether or not the user input is valid data, specifically pertaining to the note application. Is there a command and is it valid? Does the input contain a string to be used as the 'note'? 
Input.prototype.validate = function(){
  let validCommand = false;
  let string = false;

// Checks action/method against an array of valid commands.
  const commands = ['a', 'add'];
  if (commands.includes(method[0])){
    validCommand = true;
    console.log('true');
  } else {
    console.log('false');
  };

// Checks to see if payload/message is a valid string.
  const str = '';
  if (message[0] !== str){
    string = true; // currently always returning true, needs to be reworked
    console.log('true');
  } else {
    console.log('false');
  };

  return validCommand && string;

};

// Exports the above Input contructor function to the root file, index.js.
module.exports = Input;

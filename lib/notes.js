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
 * @class used to generate a new object for each new note using input from the user.
 */
class Note {

  /**
   * Generates a new note object using imported user input.
   * @constructor
   * @params {*} this.action - Command, or --flag, parsed from user input. Recieved from input.js.
   * @params {*} this.payload - The note to be added which has been parsed from user input. Recieved from input.js.
   */
  constructor(){
    this.action = options.action;
    this.payload = options.payload;
    this.id = Math.floor(Math.random() * 1000000);
    this.commands = ['a', 'add', 'd', 'delete', 'l', 'list'];
  };

  /**
   * Note class method that executes whichever command the user inputs, i.e. 'add' or 'delete' etc using a switch statement.
   * @params {array} commands - Array of acceptable commands/--flags.
   */
  execute() {

    switch (this.commands.includes(this.action)){
      case 'a' || 'add':
        Note.addNote;
        break;
    };

  };

  /**
   * Note class method that actually adds the note based on user input.
   * @params {*} note - new instance of the Note class.
   * @return {*} console.log() conformation of added note object.
   */
  addNote() {
    let note = new Note();
    if ( this.action === 'a' || this.action === 'add') { 
      console.log('Adding new note: ' + this.payload + ' ID: ' + this.id);
      return note;
    };
  };

};

module.exports = Note;
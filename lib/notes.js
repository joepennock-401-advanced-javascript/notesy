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

  constructor(){
    this.action = options.action;
    this.payload = options.payload;
    this.id = Math.floor(Math.random() * 1000000);
  };

  execute() {
    const commands = ['a', 'add'];

    switch (commands.includes(this.action)){
      case 'a' || 'add':
        Note.add;
        break;
    };

  };

  add() {
    let note = new Note();
    console.log('Adding new note: ' + this.payload + ' ID: ' + this.id);
    return note;
  };

};

module.exports = Note;
'use strict'

/*
TODOs:
***** OLD *****
1. export a constuctot function
2. prototype method 'execute()' that executes correct operation from input.js (action)
  a. must be able to handle multiple types of actions
3. prototype method 'add()' that creates object representing note
  a. must contain unique ID for each note
  b. console.log body of note to be added (user confirmation)
***** NEW *****
1. Refactor all CRUD operations to funnel through notes-collection.js instead of directly from class
2. Complete documentation of functions and variable for later review
3. Clean up code, try and minimize usage
*/

// Requiring from input.js to access parsed user input.
// const Input = require('./input');
// const options = new Input();
const Crud = require('./model/notes-collection');

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
  constructor(options){

    this.action = options.action;
    this.payload = options.payload;
    this.categoryAction = options.categoryActon;
    this.category = options.category || 'General';
    
  };

  /**
   * Note class method that executes whichever command the user inputs, i.e. 'add' or 'delete' etc using a switch statement.
   * @params {array} commands - Array of acceptable commands/--flags.
   * @returns Runs the appropriate CRUD operation depending on user input
   */
  async execute() {

    let crud = new Crud();

    switch (this.action){
      case 'a':
      case 'add':
        await crud.post(this.payload, this.category);
        break;
      case 'l':
      case 'list':
        await crud.get(this.payload);
        break;
      case 'd':
      case 'delete':
        await crud.delete(this.payload);
        break;
      default:
        console.log(' ***** Error executing given action ***** ');

    };
  };
};

module.exports = Note;
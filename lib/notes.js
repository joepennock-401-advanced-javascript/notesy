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
const { Mongoose } = require('mongoose');

/**
 * @class used to generate a new object for each new note using input from the user.
 */
class Note {

  /**
   * Generates a new note object using imported user input.
   * @constructor
   * @param {string} this.action - Command parsed from user input that determines what method this.execute() will run
   * @param {string} this.payload - The note to be added which has been parsed from user input
   * @param {string} this.categoryAction - the command used to add a category to a note when saving to Mongo
   * @param {string} this.category - the specified category a note is going to belong to
   * @function execute - will invoke the crud operation dependant on this.command
   */
  constructor(options){

    this.action = options.action;
    this.payload = options.payload;
    this.categoryAction = options.categoryActon;
    this.category = options.category || 'General';
    
  };

  /**
   * Note class method that executes whichever command the user inputs, i.e. 'add' or 'delete' etc using a switch statement.
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
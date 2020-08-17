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
// const Input = require('./input');
// const options = new Input();
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');
const Schema = require('./model/notes-schema');

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
    this.id = uuidv4();
  };

  /**
   * Note class method that executes whichever command the user inputs, i.e. 'add' or 'delete' etc using a switch statement.
   * @params {array} commands - Array of acceptable commands/--flags.
   * @returns Runs the appropriate CRUD operation depending on user input
   */
  async execute() {

    switch (this.action){
      case 'a':
        await this.addNote(this.payload, this.category);
        break;
      case 'add':
        await this.addNote(this.payload, this.category);
        break;
    };

    mongoose.disconnect();

  };

  /**
   * Note class method that actually adds the note based on user input.
   * @params {*} note - new instance of the Note class.
   * @return {*} console.log() conformation of added note object.
   */
  async addNote(msg, cat) {

    try{
      let newNote = new Schema( {text: msg, category: cat} );
      if ( this.action === 'a' || this.action === 'add') { 
        let addedNote = await newNote.save();
        console.log('added', addedNote);
        console.log('Adding new note: ' + msg + ' Category: ' + cat);
      };
    } catch(e) {
      console.log(e);
    };
  };
};

module.exports = Note;
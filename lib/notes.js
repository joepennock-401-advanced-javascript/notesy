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
      case 'add':
        await this.addNote(this.payload, this.category);
        break;
      case 'l':
      case 'list':
        await this.listNotes();
        break;
      case 'd':
      case 'delete':
        await this.deleteNote(this.payload);
    };

  };

  /**
   * Note class method that actually adds the note based on user input.
   * @params {*} note - new instance of the Note class.
   * @return {*} console.log() conformation of added note object.
   */
  async addNote(msg, cat) {

    try{
      let newNote = new Schema( {text: msg, category: cat} );
        let addedNote = await newNote.save();
        console.log('Adding new note: ' + msg + ' Category: ' + cat);
        mongoose.disconnect();
    } catch(e) {
      console.log(e);
    };
  };
  
  //needs logic to allow flag with no selected category
  async listNotes() {
    try{
      if ( this.action && this.payload) {
        let noteList  = await Schema.find( {category: this.payload} );
        console.log('all notes by category', noteList);
        mongoose.disconnect();
      };
      //  else if ( this.action && this.payload !== true) {
      //   let noteList = await Schema.find({});
      //   console.log('all notes', noteList);
      //   mongoose.disconnect();
      // };
    } catch(e) {
      console.log(e);
    };
  };

  async deleteNote() {
    try{
      if ( (this.action === 'd' || this.action === 'delete') && this.payload ){
        await Schema.findByIdAndRemove(this.payload);
        console.log('note deleted');
        mongoose.disconnect();
      } else if ( (this.action === 'd' || this.action === 'delete') && !this.payload ) {
        console.log('Please specifiy note ID');
        mongoose.disconnect();
      };
    } catch(e) {
      console.log(e);
    };
  };
};

module.exports = Note;
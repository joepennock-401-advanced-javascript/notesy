'use strict';

/*
TODOs:
1. export constructor that recieves command line input
2. using minimist.js, parse CL input into usable data
3. evaluate and validate data
4. return instance of constructor with 'action' and 'payload'
   action: the action from input i.e. flag
   payload: the user's note to be saved
*/

/** Library to help parse command line user input. */
const minimist = require('minimist');

/**
 * Used to generate an object with workable user input to be passed on to notes.js. The data has been validated.
 * @class
 * @function parse - parses user input into a workable object
 * @function validate - ensures user is providing a valid form of input with accepted arguments
 */
class Input {

  /** Generates the actual input object. 
   * @constructor
   * @params {string} args - the input directly from the command line ran through minimist
   * @params {object} pizza - object conataing all parsed data from the class parse() function
   * @params {*} this.action - the parsed command given by the user.
   * @params {*} this.payload - the parsed content of the users note to be added.
   * @params {*} this.categoryAction - user command to add note to specific category
   * @params {*} this.category - the desired category the note will be saved to
  */
  constructor() {

    const args = minimist(process.argv.slice(2));
    let pizza = this.parse(args);

    this.action = pizza.action;
    this.payload = pizza.payload;
    this.catergoryAction = pizza.catAction;
    this.category = pizza.category;
  };

  /**
   * Takes command line user input from minimist and parses it out into and object for easy use
   * @returns {object} obj - object containing parsed relevant user input  
   */
  parse(args) {

    let obj = {};

    obj.action = Object.keys(args).slice(1)[0];
    obj.payload = Object.values(args).slice(1)[0];
    obj.catAction = Object.keys(args).slice(1)[1] || null;

    if(args[obj.catAction] === true){
      obj.category = 'General';
    } else {
      obj.category = Object.values(args).slice(1)[1];
    };

    return obj;
  };

  /** 
   * Class method that checks action against an array of valid commands and determines if the user has provided a valid note message.
   * @params {boolean} validCommand - Boolean indicating whether or not user has input a valid command.
   * @params {boolean} string - Boolean indicating whether or not user has provided a proper message/note.
   * @params {array} commands - Variable array that has a list of all acceptable commands/--flags.
   * @return {boolean} - Valid input should return true.
   */
  validate() {

    if (this.action === 'l' || this.action === 'list') {
      return true;

    } else {

      let validCommand = false;
      let string = false;
      let catAct = false;
    
      if (this.action === 'a' || this.action === 'add' ) {
        validCommand = true;
      };

      if (this.action === 'd' || this.action === 'delete' ) {
        validCommand = true;
      };

      if (typeof(this.payload) !== 'boolean'){
        string = true; 
      };

      if (!this.catAction){
        catAct = true;
      } else if (this.catAction === 'c' || this.catAction === 'category'){
        catAct = true;
      } else { 
        catAct = false;
      };

      return validCommand && string && catAct;
    };

  };

  // validate() {

  //   let validCommands = ['a', 'add', 'l', 'list', 'd', 'delete'];

  //   if (!validCommands.includes(this.action)) {
  //     return false;
  //   };

  //   if (this.payload === '' && this.payload === true) {
  //     return false;
  //   };

  //   /** Validates secondary action exists and is an accepted value */
  //   if (!this.catAction){
  //     return true;
  //   } else if (this.catAction === 'c' || this.catAction === 'category'){
  //     return true;
  //   };

  //   return true;

  // }

};


/** Exports the above Input contructor function to the root file, index.js. */
module.exports = Input;

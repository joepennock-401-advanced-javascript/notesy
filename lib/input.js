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
 */
class Input {

  /** Generates the actual input object. 
   * @constructor
   * @params {*} this.action - the parsed command given by the user.
   * @params {*} this.payload - the parsed content of the users note to be added.
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
   * 
   * @param {*} args 
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
    let validCommand = false;
    let string = false;
    let catAct = false;
    const commands = ['a', 'add', 'l', 'list', 'd', 'delete'];

    /** Checks command input by user against a list of predetermined accepted commands. */
    if (commands.includes(this.action)){
      validCommand = true;
    };

    /** Checks to see if payload/message is a valid string. */
    if (typeof(this.payload) !== 'boolean'){
      string = true; 
    };

    /** Validates secondary action exists and is an accepted value */
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

/** Exports the above Input contructor function to the root file, index.js. */
module.exports = Input;

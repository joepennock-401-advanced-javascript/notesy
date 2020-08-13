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

/** User input that has been parsed and serperated into data relevent to this application, i.e. a command/action and a note/payload. */
const args = minimist(process.argv.slice(2));
/** The command, or --flag, given by the user. */
const method = (Object.keys(args).slice(1));
/** The content of the user input, i.e. the note. */
const message = (Object.values(args).slice(1));

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
    this.action = method[0];
    this.payload = message[0];
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
    const commands = ['a', 'add'];

    /** Checks command input by user against a list of predetermined accepted commands. */
    if (commands.includes(this.action)){
      validCommand = true;
    };

    /** Checks to see if payload/message is a valid string. */
    if (typeof(this.payload) !== 'boolean'){
      string = true; 
    };

    return validCommand && string;
  };

};

/** Exports the above Input contructor function to the root file, index.js. */
module.exports = Input;

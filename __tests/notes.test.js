'use strict';

/* 
TODOs:
***** OLD *****
** will require to use a spy to check if console.log() was called**
1. Write tests to verify that nothing is being logged to the console if the user does not provide a command.
2. If the user provides both a valid command and a valid message, write tests to verify the console logs appropriately.
***** NEW *****
1. Use supergoose and ensure that each CRUD op is succesfuly adding/deleting/listing from Mongo
2. Make ssure that the Note class is successfuly using the notes-collection interface to run the operations through.
*/

jest.mock('minimist');
const minimist = require('minimist');
/** Used for testing  */
require('@code-fellows/supergoose');

minimist.mockImplementation( () => {
  return {
    _: [],
    a: 'test',
  };
});

const Note = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Test suite for Note module from lib/notes.js.', () => {

  it('Proof of life test', () => {
    const test = 'test';
    expect(test).toEqual('test');
  });

  // it('Verify input is successfully being recieved from lib/notes.js module.', () => {
  //   const options = new Note();
  //   expect(options.action).toEqual('a');
  // });

  // it('Checks to make sure that a new instance of a note can be created', () => {
  //   const note = new Note();
  //   expect( note instanceof Note).toBe(true);
  // });

  // it('Ensure console.log() is not being called with invalid user input', () => {
  //   const options = new Note();
  //   options.action = null;
  //   options.addNote();
  //   expect(console.log).not.toHaveBeenCalled();
  // });
  
  // it('Check to see if console.log() is being called.', () => {
  //   const options = new Note();
  //   options.addNote();
  //   expect(console.log).toHaveBeenCalled();
  // });

});
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

// jest.mock('minimist');
// const minimist = require('minimist');
/** Used for testing  */
require('@code-fellows/supergoose');

// minimist.mockImplementation( () => {
//   return {
//     _: [],
//     a: 'pizza',
//   };
// });

//primarily only testing switch statement of Notes
//mock out notes-collection data/functionality

const Note = require('../lib/notes');
const Crud = require('../lib/model/notes-collection');
jest.mock('../lib/model/notes-collection');

jest.spyOn(global.console, 'log');

//Crud mock data {}

describe('Test suite for Note module from lib/notes.js.', () => {

  let crud = new Crud();

  it('Can successfully return a new instance of the Note class', () => {

    let mockInput = {
      action: 'a',
      payload: 'test payload',
      categoryAction: 'c',
      category: 'general',
    };

    let note = new Note(mockInput);
    expect(note instanceof Note).toBe(true);
  });

});
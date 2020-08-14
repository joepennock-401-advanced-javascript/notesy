'use strict';

/* 
TODOs:
** will require to use a spy to check if console.log() was called**
1. Write tests to verify that nothing is being logged to the console if the user does not provide a command.
2. If the user provides both a valid command and a valid message, write tests to verify the console logs appropriately.
*/

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation( () => {
  return {
    _: [],
    a: 'test',
  }
})

const Note = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Test suite for Note module from lib/notes.js.', () => {

  it('Proof of life test', () => {
    const test = 'test';
    expect(test).toEqual('test');
  });

  it('Verify input is successfully being recieved from lib/notes.js module.', () => {
    const options = new Note();
  });

    it('Ensure console.log() is not being called with invalid user input', () => {
    const options = new Note();
    options.action = null;
    options.addNote();
    expect(console.log).not.toHaveBeenCalled();
  });
  
  it('Check to see if console.log() is being called.', () => {
    const options = new Note();
    options.addNote();
    expect(console.log).toHaveBeenCalled();
  });

});
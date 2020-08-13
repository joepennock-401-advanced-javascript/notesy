'use strict';

/* 
TODOs:
1. Write tests that will pass when user is providing valid input
  a. validate() returns true
  b. new instance of Input has both action and a payload
2. Write tests that will pass when user provides invalid input
  a. validate() returns false
*/

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation( () => {
  return {
    _: [],
    // action: 'payload'
    a: 'test',
  };
});

const Input = require('../lib/input');

describe('Test suite for the Input module from lib/input.js.', () => {
  
  it('Proof of life test.', () => {
    let test = 'test';
    expect(test).toEqual('test');
  });

  it('Verify that input is successfully being recieved from input.js module.', () => {
    let options = new Input();
    console.log(options);
    expect(options.payload).toEqual('test');
  });

  it('Given the user providing valid input, Input.validate() should return true.', () => {
    let options = new Input();
    expect(options.validate(options)).toBe(true);
  });

  it('Given the user provides missing or invalid input, Input.validate() will return false.', () => {
    let options = new Input();
    options.action = null;
    console.log(options);
    expect(options.validate(options)).toBe(false);
  });

});
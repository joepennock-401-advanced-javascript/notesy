'use strict';

//unit tests for each individual crud op
// needs supergoose to test actual database manipulation

describe('Test suite for Note module from lib/notes.js.', () => {

  it('Proof of life test', () => {
    const test = 'test';
    expect(test).toEqual('test');
  });

  // it('Can successfully add a new record to the MongoDB', async () => {

  //   let obj = {
  //     payload: 'test',
  //     category: 'general',
  //   };

  //   let test = await crud.post(obj.payload, obj.category)
  //   console.log(test);
  //   expect(test).toBeDefined();
  //   // expect(test).toEqual();

  // });

});
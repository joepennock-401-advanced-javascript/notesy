'use strict'

/*
TODOs:
1. Require notes-schema.js
2. Implement CRUD operations in this file. Each file should invoke the proper mongoose method.
  a. GET(), PUT(), POST(), DELETE()
  b. Note execute() will call methods from this file
*/

/** Mongoose schema file */
const Schema = require('./notes-schema');

/**
 * Class used to handle all CRUD operations for notesy.
 * @function get - will retrieve a list of notes from the MongoDB
 * @function post - will save a new note to the MongoDB
 * @function delete - will delete a specified note based on MongoDB ID
 */
class Crud {

  constructor(){};

  get(){

  };

  post(action, payload){

    let addedNote = new Schema( {text: msg, category: cat} );
    return addedNote.save();

  };

  // async addNote(msg, cat) {

  //   try{
  //     let newNote = new Schema( {text: msg, category: cat} );
  //     let addedNote = await newNote.save();
  //       console.log('Adding new note: ' + msg + ' Category: ' + cat);
  //       mongoose.disconnect();
  //   } catch(e) {
  //     console.log(e);
  //   };
  // };

  delete(){

  };

};

module.exports = Crud;
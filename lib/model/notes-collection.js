'use strict'

/*
TODOs:
1. Require notes-schema.js
2. Implement CRUD operations in this file. Each file should invoke the proper mongoose method.
  a. GET(), POST(), DELETE() with PUT() being optional stretch goal
  b. Note execute() will call methods from this file
*/

/** 
 * Mongoose schema file 
 */
const Schema = require('./notes-schema');

/**
 * Class used to handle all CRUD operations for notesy.
 * @function get - will retrieve a list of notes from the MongoDB
 * @function post - will save a new note to the MongoDB
 * @function delete - will delete a specified note based on MongoDB ID
 */
class Crud {

  constructor(){};

  /**
   * lists all notes in a given category, or all if arg is left blank
   */
  async get(category) {

    let searchDB = category ? { category } : {};

    if (searchDB.category === true) {
      const findNote = await Schema.find({});
      console.log(findNote);
      return findNote;
    } else if (category) {
      const findNote = await Schema.find({category});
      console.log(findNote);
      return findNote;
    } else {
      console.log('GET error');
    };

  };

  /** 
   * adds new note to MongoDB
   */
  async post(msg, cat) {
    
    let addedNote = new Schema( {text: msg, category: cat} );
    return addedNote.save();

  };

  /** 
   * delete note from MongoDB by ID
   */
  async delete(id) {

    let deletedNote = await Schema.findByIdAndDelete(id);
    console.log('Deleted note with ID# ' + id)
    return deletedNote;

  };

};

module.exports = Crud;
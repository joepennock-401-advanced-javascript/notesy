# LAB - Class 02

## Project: Notesy


- A simple CLI note taking app made in Node.js.

### Author: Joe Pennock

- Here's my [Github](https://github.com/penjoe)

### Links and Resources

- [submission PR](https://github.com/joepennock-401-advanced-javascript/notesy/pull/2)
- [ci/cd](https://github.com/joepennock-401-advanced-javascript/notesy/actions) (GitHub Actions)

### Setup

- Have `node` installed on your local machine.
- In terminal, run this command `npm i minimist` to get a CLI input parsing library used in this application.
- Run the command `npm i jest` to install Jest, a testing library this application will be using for running all of the required tests.

#### `.env` requirements (where applicable)

Currently no required .env variables.

#### How to initialize/run your application (where applicable)

- Open `Terminal` on your computer, or a similar CLI interface such as `WSL`.
- Start with the command `notes` followed by these commands:
  - `a` or `--add` to add a new note to Notesy.
- Following the desired command, add the body of the note contained within quotations, or " ".
- The command should look something like this:
```
notes --add "This is a new note I'm adding"
```


#### How to use your library (where applicable)

#### Tests

- << **All testing will require mock data** >>
- Testing for `input.js` are checking for a truthy value if there is valid input provided and a falsey value is there is invalid user input provided:
  - use `jest.mock('minimist)`
  - provide mock user input data
  - run the command `npm test input.test.js`
- Testing for `notes.js` are checking to see whether or not `console.log()` is being caled within the `Note` class. 
  - will require the use of a spy to check if `console.log()` has been called
  - provide mock data
  - run the command `npm test notes.test.js`

#### UML

![project UML](assets/notesy-uml.png)
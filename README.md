# LAB - Class 01

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

- No tests required yet for this lab.

#### UML

![project UML](assets/notesy-uml.png)
#! /usr/bin/env node

const fs = require('fs');
const classComp = require('./classComp.js');
const statelessComp = require('./statelessComp.js');
const init = require('./init.js');

const command = process.argv[2];
const component = process.argv[3];

const action = (input) => {

  let command = input.toLowerCase();
  
  switch (command) {
    case 'init':
      init();
      break;
    case 'class':
      fs.writeFile(`${component}.jsx`, classComp, (err) => {
        if (err) {
          throw err;
        }
        console.log(`Class Component ${component} created!`);
      });
      break;
    case 'stateless':
      fs.writeFile(`${component}.jsx`, statelessComp, (err) => {
        if (err) {
          throw err;
        }
        console.log(`Stateless Component ${component} created!`);
      });
      break;
    default:
      console.log(`Invalid command`);
  }
}


action(command);
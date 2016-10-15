const fs = require('fs');
const path = require('path');

const project = path.basename(__dirname);

const packageJson = `{
  "name": "${project}",
  "version": "1.0.0",
  "description": "",
  "main": "index.html",
  "scripts": {
    "test": "",
    "start": "webpack-dev-server --progress --inline --hot",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC"
}`;

module.exports = packageJson;
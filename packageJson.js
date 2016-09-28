const packageJson = `{
  "name": "boiler",
  "version": "1.0.0",
  "description": "",
  "main": "index.html",
  "scripts": {
    "test": "",
    "start": "webpack-dev-server --progress --inline --hot",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "*",
    "react-dom": "*",
    "react-router": "*"
  },
  "devDependencies": {
    "babel-core": "*",
    "babel-loader": "*",
    "babel-preset-es2015": "*",
    "babel-preset-react": "*",
    "webpack": "*",
    "webpack-dev-server": "*"
  }
}`;

module.exports = packageJson;
const fs = require('fs');
const exec = require('child_process').exec;
const path = require('path');
const webpackConfig = require('./webpackConfig.js');
const packageJson = require('./packageJson.js');
const indexJsx = require('./indexJsx.js');
const indexHtml = require('./indexHtml.js');

const project = process.argv[3];

const npmBuild = () => {

  exec(`npm install react react-dom react-router --save`, (err, stdout, stderr) => {
    if (err) {
      throw err;
    }
    console.log(stdout);
    console.log('Installing production dependencies.')
    exec(`npm install --prefix babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server --save-dev`, (err, stdout,stderr) => {
      exec(`npm run build` , (err, stdout, stderr) => {
        if (err) {
          throw err;
        }
        console.log(stdout);
        console.log(`Success!
          cd ${project}, then npm start to start up the webpack-dev-server`);
      })
    })
    
  })
}

const init = () => {

  fs.mkdirSync(`${project}`, () => {
    console.log('Success');
  })

  fs.mkdirSync(`${project}/src`, () => {
    console.log('Success');
  });

  fs.mkdirSync(`${project}/public`, () => {
    console.log('Success');
  });

  fs.mkdirSync(`${project}/src/components`, () => {
    console.log('Success');
  });
  
  console.log('Installing production dependencies...');
  fs.writeFileSync(`${project}/package.json`, packageJson);

  fs.writeFileSync(`${project}/src/index.jsx`, indexJsx);

  fs.writeFileSync(`${project}/public/index.html`, indexHtml);

  fs.writeFileSync(`${project}/.gitignore`, 'node_modules');

  fs.writeFileSync(`${project}/webpack.config.js`, webpackConfig);
  
  process.chdir(`${project}`);

  exec(`yarn add react react-dom react-router`, (err, stdout, stderr) => {
    if (err) {
      npmBuild();
      return;
    }
    console.log(stdout);
    console.log('Installing dev dependencies...');
    exec(`yarn add babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server --dev`, (err, stdout, stderr) => {
      if (err) {
        throw err;
      }
      console.log(stdout);
      console.log('Bundling...');
      exec('npm run build', (err, stdout, stderr) => {
        if (err) {
          throw err;
        }
        console.log(stdout);
        console.log(`Success!\ncd ${project}, then npm start to start up the webpack-dev-server`);
      })
    })
  })

};

module.exports = init;
const fs = require('fs');
const exec = require('child_process').exec;
const path = require('path');
const webpackConfig = require('./webpackConfig.js');
const packageJson = require('./packageJson.js');
const indexJsx = require('./indexJsx.js');
const indexHtml = require('./indexHtml.js');

const project = path.basename(__dirname);

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
    console.log('hi')
  });
  
  console.log('Installing dependencies...');
  fs.writeFileSync('package.json', packageJson);

  fs.writeFile(`${project}/src/index.jsx`, indexJsx, (err) => {
    if (err) {
      throw err;
    }
  })

  fs.writeFile(`${project}/public/index.html`, indexHtml, (err) => {
    if (err) {
      throw err;
    }
  })

  fs.writeFile('.gitignore', 'node_modules', (err) => {
    if (err) {
      throw err
    }
  })

  fs.writeFile('webpack.config.js', webpackConfig, (err) => {
    if (err) {
      throw err;
    }
  })

  exec(`npm install --prefix ./${project} react react-dom react-router --save`, (err, stdout, stderr) => {
    if (err) {
      throw err;
    }
    console.log(stdout);
    exec(`npm install --prefix ./${project} babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server --save-dev`, (err, stdout,stderr) => {
      exec('npm run build', (err, stdout, stderr) => {
        if (err) {
          throw err;
        }
        console.log(stdout);
        console.log(`Success!
          cd ${project}, then npm start to start up the webpack-dev-server`);
      })
    })
    
  })

};

module.exports = init;
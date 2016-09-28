const fs = require('fs');
const exec = require('child_process').exec;
const webpackConfig = require('./webpackConfig.js');
const packageJson = require('./packageJson.js');
const indexJsx = require('./indexJsx.js');
const indexHtml = require('./indexHtml.js');

const init = () => {

  fs.mkdirSync('src', () => {
    console.log('Success');
  });

  fs.mkdirSync('public', () => {
    console.log('Success');
  });

  fs.mkdirSync('src/components', () => {
    console.log('hi')
  });
  
  console.log('Installing dependencies...');
  fs.writeFileSync('package.json', packageJson);

  fs.writeFile('src/index.jsx', indexJsx, (err) => {
    if (err) {
      throw err;
    }
  })

  fs.writeFile('public/index.html', indexHtml, (err) => {
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
  exec('npm install', (err, stdout, stderr) => {
    if (err) {
      throw err;
    }
  })

};

module.exports = init;
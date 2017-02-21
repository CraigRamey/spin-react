const fs = require("fs");
const component = process.argv[3];

const classComp = `import React, { Component } from 'react';

class ${component} extends Component {
  render() {
    return(
      <div>Hello</div>
    );
  }
}

${component}.propTypes = {

};

export default ${component};`;

module.exports = classComp;

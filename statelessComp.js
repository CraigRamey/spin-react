const fs = require('fs');
const component = process.argv[3];

const statelessComp = `import React from 'react';

const ${component} = (props) => {
  return(
    <div>Hello</div>
  );
}

${component}.propTypes = {

};

export default ${component};`;

module.exports = statelessComp;
# Spin React

### Getting started
```
npm install -g spin-react
```

### Commands
__spin-react init [project name]__  
```
- Creates the directory structure and installs all of the dependencies.  
  Use npm start to start up the webpack-dev-server.  
  * Side note, the installation of all of the dependencies is much  
  faster if you have Yarn.

- public  
  - bundle.js  
  - index.html  
- src  
  - index.jsx  
- package.json  
- webpack.config.js  
- .gitignore
```

__spin-react class [name]__  
```
- creates a .jsx file in your current directory with the same name as the component  
  supplied by [name]. Boilerplate code provided within the file.  
```
__spin-react stateless [name]__  
```
Same as class but a stateless component as opposed to a class component  
```
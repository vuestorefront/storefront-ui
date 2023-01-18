const generateComponentPath = (framework, componentName) => 
  `/${framework}/components/${componentName.replace('Vsf', '').toLowerCase()}`;

module.exports = { generateComponentPath };

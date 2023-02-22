const generateComponentPath = (framework, componentName) => 
  `/${framework}/components/${componentName.replace('Vsf', '').toLowerCase()}.html`;

module.exports = { generateComponentPath };

const generateComponentPath = (framework, componentName, type = 'components') => {
  switch (type) {
    case 'components':
      return `/${framework}/components/${componentName.replace('Vsf', '').toLowerCase()}.html`;
    case 'showcases':
      return `/${framework}/showcases/${componentName}.html`;
    case 'hooks':
      return `/${framework}/hooks/${componentName}.html`;
  }
};

module.exports = { generateComponentPath };

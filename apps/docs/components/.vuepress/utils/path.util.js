const generateComponentPath = (framework, componentName, type = 'components') => {
  switch (type) {
    case 'components':
      return `/${framework}/components/${componentName.replace('Vsf', '').toLowerCase()}.html`;
    case 'hooks':
      return `/${framework}/hooks/${componentName}.html`;
    case 'blocks':
      return `/${framework}/blocks/${componentName}.html`;
  }
};

module.exports = { generateComponentPath };

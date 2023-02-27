const generateComponentPath = (framework, componentName, isShowcase = false) => {
  return `/${framework}/${isShowcase ? 'showcases' : 'components'}/${isShowcase ? componentName : componentName.replace('Vsf', '').toLowerCase()}.html`;
}

module.exports = { generateComponentPath };

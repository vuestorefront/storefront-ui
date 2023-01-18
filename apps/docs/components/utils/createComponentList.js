const glob = require('glob');
const fs = require('fs');

const removeIndexEntry = (paths) => paths.filter((path) => path !== 'index');
const componentNameFromPath = (paths) => paths.map((path) => path.split('/').pop().split('.')[0]);

const getFrameworkFiles = (frameworkName, componentsExt) => {
  const componentNames = componentNameFromPath(glob.sync(`./${frameworkName}/components/*.md`));
  const existingDocsNames = removeIndexEntry(componentNames);
  return componentNameFromPath(
    glob.sync(`../../../packages/sfui/frameworks/${frameworkName}/**/*.${componentsExt}`),
  ).filter((name) => existingDocsNames.includes(name.replace('Vsf', '').toLowerCase()));
};

const components = {
  vue: getFrameworkFiles('vue', 'vue'),
  react: getFrameworkFiles('react', 'tsx'),
};

fs.writeFileSync('./utils/components.json', JSON.stringify(components, null, 2));

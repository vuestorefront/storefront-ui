const glob = require('glob');
const fs = require('fs');

const removeIndexEntry = (paths) => paths.filter((path) => path !== 'index');
const componentNameFromPath = (paths) => paths.map((path) => path.split('/').pop().split('.')[0]);

const getFrameworkFiles = (frameworkName, componentsExt) => {
  const componentNames = componentNameFromPath(glob.sync(`../hooks/*.md`, { cwd: __dirname }));
  const existingDocsNames = removeIndexEntry(componentNames);
  return componentNameFromPath(
    glob.sync(`../../../../packages/sfui/frameworks/${frameworkName}/**/*.${componentsExt}`, { cwd: __dirname }),
  ).filter((name) => existingDocsNames.includes(name));
};

const hooks = {
  vue: getFrameworkFiles('vue', 'vue'),
  react: getFrameworkFiles('react', 'ts'),
};

fs.writeFileSync('./utils/hooks.json', JSON.stringify(hooks, null, 2));

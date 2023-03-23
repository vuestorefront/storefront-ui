const glob = require('glob');
const fs = require('fs');

const removeIndexEntry = (paths) => paths.filter((path) => path !== 'index');
const componentNameFromPath = (paths) => paths.map((path) => path.split('/').pop().split('.')[0]);

// In dev, if `dist` is built, the list of functions might be duplicated
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const getFrameworkFiles = (frameworkName, componentsExt) => {
  const componentNames = componentNameFromPath(glob.sync(`../hooks/*.md`, { cwd: __dirname }));
  const existingDocsNames = removeIndexEntry(componentNames);
  return componentNameFromPath(
    glob.sync(`../../../../packages/sfui/frameworks/${frameworkName}/**/*.${componentsExt}`, { cwd: __dirname }),
  )
    .filter((name) => existingDocsNames.includes(name))
    .filter(onlyUnique);
};

const hooks = {
  vue: getFrameworkFiles('vue', 'ts'),
  react: getFrameworkFiles('react', 'ts'),
};

fs.writeFileSync('./utils/hooks.json', JSON.stringify(hooks, null, 2));

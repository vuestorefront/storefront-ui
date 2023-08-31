const glob = require('glob');
const fs = require('fs');

const removeIndexEntry = (paths) => paths.filter((path) => path !== 'index');
const componentNameFromPath = (paths) => paths.map((path) => path.split('/').pop().split('.')[0]);

const getFrameworkFiles = () => {
  const componentNames = componentNameFromPath(glob.sync(`../blocks/*.md`, { cwd: __dirname }));
  return removeIndexEntry(componentNames);
};

const components = {
  vue: getFrameworkFiles('vue', 'vue'),
  react: getFrameworkFiles('react', 'tsx'),
};

fs.writeFileSync('./utils/blocks.json', JSON.stringify(components, null, 2));

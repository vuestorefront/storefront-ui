const glob = require('glob');
const fs = require('fs');

const vueDocs = glob.sync('./vue/components/*.md').map((path) => path.split('/').pop().split('.')[0]);

const vueFiles = glob
  .sync('../../../packages/sfui/frameworks/vue/components/**/*.vue')
  .map((path) => path.split('/').pop().split('.')[0])
  .filter((name) => {
    return vueDocs.includes(name.replace('Vsf', '').toLowerCase());
  });

const reactDocs = glob.sync('./vue/components/*.md').map((path) => path.split('/').pop().split('.')[0]);

const reactFiles = glob
  .sync('../../../packages/sfui/frameworks/react/components/**/*.tsx')
  .map((path) => path.split('/').pop().split('.')[0])
  .filter((name) => {
    return reactDocs.includes(name.replace('Vsf', '').toLowerCase());
  });

const components = {
  vue: vueFiles,
  react: reactFiles,
};

fs.writeFileSync('./utils/components.json', JSON.stringify(components, null, 2));

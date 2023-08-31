const fs = require('fs');
const glob = require('glob');
const commandLineArgs = require('command-line-args');
const { docsSplit, removePart, saveDoc } = require('./utils');

const options = commandLineArgs([{ name: 'event' }, { name: 'path' }]);
const mdFiles = glob.sync('./components/*.md');

function generateDocs() {
  if (options.event === 'change') {
    let docsContent = fs.readFileSync(options.path, 'utf8');
    const reactDocContent = removePart(docsContent, 'vue');
    const vueDocContent = removePart(docsContent, 'react');

    saveDoc(`./react/${options.path}`, reactDocContent);
    saveDoc(`./vue/${options.path}`, vueDocContent);
  } else {
    docsSplit(mdFiles, 'components');
  }
}

module.exports = {
  generateDocs,
};

if (require.main === module) {
  generateDocs();
}

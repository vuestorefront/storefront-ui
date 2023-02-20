const fs = require('fs');
const glob = require('glob');
const path = require('path');
const commandLineArgs = require('command-line-args')
const options = commandLineArgs([
  { name: 'event' },
  { name: 'path' }
])
const mdFiles = glob.sync('./components/*.md');

function docsSplit() {
  if(options.event === 'change') {
    let docsContent = fs.readFileSync(options.path, 'utf8');
    const reactDocContent = removePart(docsContent, 'vue');
    const vueDocContent = removePart(docsContent, 'react');

    saveDoc(`./react/${options.path}`, reactDocContent);
    saveDoc(`./vue/${options.path}`, vueDocContent);
  } else {
    for (const file of mdFiles) {
      let docsContent;
      try {
        docsContent = fs.readFileSync(file, 'utf8');
      } catch (e) {
        console.warn(`WARN: skipping read md file: ${e.message}`);
        continue;
      }
      const reactDocContent = removePart(docsContent, 'vue');
      const vueDocContent = removePart(docsContent, 'react');

      const fileName = path.basename(file);
      saveDoc(`./react/components/${fileName}`, reactDocContent);
      saveDoc(`./vue/components/${fileName}`, vueDocContent);
    }
  }
}

function removePart(content, framework) {
  const removeRegex = new RegExp(`<!-- ${framework} -->.*?<!-- end ${framework} -->(?:\n|$)`, 'gs');
  const docsWithout = content.replace(removeRegex, '');
  const removeIfsRegex = /<!--(.*?)-->\n?/g;
  const docsWithoutIfs = docsWithout.replace(removeIfsRegex, '');
  return docsWithoutIfs;
}

function saveDoc(filepath, docsContent) {
  const pathWithoutFilename = path.dirname(filepath);
  if (!fs.existsSync(pathWithoutFilename)) {
    fs.mkdir(pathWithoutFilename, { recursive: true }, (e) => {
      console.warn(`WARN: Cannot create directory: ${e}`);
    });
    console.log('Docs directory created');
  }
  fs.writeFile(filepath, docsContent, (e) => {
    if (e) {
      console.warn(`WARN: skipping write md file: ${e.message}`);
    } else {
      console.log(`Doc file successfully written ${filepath}`);
    }
  });
  return true;
}

module.exports = {
  docsSplit,
};

if (require.main === module) {
  docsSplit();
}

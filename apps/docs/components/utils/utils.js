const path = require('path');
const fs = require('fs');

function addRepoPathToFrontmatter(content, fileName) {
  const frontmatterStartIndex = content.indexOf('---') + '---'.length;
  const link = `/components/${fileName}`;

  return content.slice(0, frontmatterStartIndex) + `\nrepoPath: ${link}` + content.slice(frontmatterStartIndex);
}

function addNumberOfBlocksToFrontmatter(content) {
  const frontmatterStartIndex = content.indexOf('---') + '---'.length;
  const numberOfShowcases = content.match(/showcase-name/g)?.length;

  return (
    content.slice(0, frontmatterStartIndex) +
    `\nblockCount: ${numberOfShowcases}` +
    content.slice(frontmatterStartIndex)
  );
}

function updateFrontmatter(content, fileName, type) {
  let docContent = addRepoPathToFrontmatter(content, fileName);
  if (type === 'blocks') {
    docContent = addNumberOfBlocksToFrontmatter(docContent);
  }
  return docContent;
}

function removePart(content, framework) {
  const removeRegex = new RegExp(`<!-- ${framework} -->.*?<!-- end ${framework} -->(?:\n|$)?`, 'gs');
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
  removePart,
  saveDoc,
  updateFrontmatter,
  docsSplit(mdFiles, type) {
    for (const file of mdFiles) {
      let docsContent;
      try {
        docsContent = fs.readFileSync(file, 'utf8');
      } catch (e) {
        console.warn(`WARN: skipping read md file: ${e.message}`);
        continue;
      }

      const fileName = path.basename(file);
      const reactDocContent = updateFrontmatter(removePart(docsContent, 'vue'), fileName, type);
      const vueDocContent = updateFrontmatter(removePart(docsContent, 'react'), fileName, type);

      const reactDirectory = `./react/${type}`;
      const vueDirectory = `./vue/${type}`;

      if (!fs.existsSync(reactDirectory)) {
        fs.mkdirSync(reactDirectory);
      }
      if (!fs.existsSync(vueDirectory)) {
        fs.mkdirSync(vueDirectory);
      }

      saveDoc(`${reactDirectory}/${fileName}`, reactDocContent);
      saveDoc(`${vueDirectory}/${fileName}`, vueDocContent);
    }
  },
};

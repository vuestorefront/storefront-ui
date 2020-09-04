"use strict"

const fse = require("fse");
const path = require('path');
const fs = require('fs');

const srcPath = path.join(__dirname, "../packages/vue/src/");
const styleSrcPath = path.join(__dirname, "../packages/shared");
const targetComponentsPath = path.join(__dirname, "../../../../storefrontUI/components");
const targetStylesPath = path.join(__dirname, "../../../../storefrontUI/styles");
const examplesPath = path.join(__dirname, "../../../../storefrontUI/components/examples");
const componentsPath = path.join(__dirname, "../../../../storefrontUI/components");

function removeDir(path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);

    if (files.length > 0) {
      files.forEach((filename) => {
        if (fs.statSync(`${path}/${filename}`).isDirectory()) {
          removeDir(`${path}/${filename}`)
        } else {
          fs.unlinkSync(`${path}/${filename}`)
        }
      })
      fs.rmdirSync(path)
    } else {
      fs.rmdirSync(path)
    }
  } else {
    console.log("Directory path not found.")
  }
}

function removeFiles(names, path, flat) {

  const removeFilesFlat = () => {
    fs.readdirSync(path)
    .filter((file) => {
      return names.indexOf(file) > -1;
    })
    .forEach(file => {
      fs.unlinkSync(`${path}/${file}`)
    })
  }

  if (flat) {
    removeFilesFlat();
    return;
  }

  const getAllFoldersFromDir = fs.readdirSync(`${path}/components`);

  const getAllFilesFromDir = getAllFoldersFromDir.map(file => `${path}/components/${file}`)

  const getAllComponentsNames = getAllFilesFromDir
    .map(fileDir => fs.readdirSync(fileDir))
    .reduce((acc, val) => acc.concat(val), [])

  const getAllComponentsPaths = getAllComponentsNames.map(name => {
    return getAllFilesFromDir.map(path => {
      return `${path}/${name}`
    })
    .filter(el => fs.existsSync(el))
  })
  .reduce((acc, val) => acc.concat(val), [])

  const getAllFilesInComponent = getAllComponentsPaths.map(file => {
    return fs.readdirSync(file);
  }).reduce((acc, val) => acc.concat(val), [])

  const getAllPathFilesInComponents = []
    .concat(...getAllFilesInComponent
    .map(name => getAllComponentsPaths.map(path =>  {
        return `${path}/${name}`
    })))
    .filter(el => fs.existsSync(el))

  const getAllVueFilesFromDir = getAllPathFilesInComponents.filter(el => el.endsWith(".vue"))

  const storiesFilesToRemove = getAllPathFilesInComponents.filter((path) => {
    return path.endsWith(names[0])
  })
  const mdFilesToRemove = getAllPathFilesInComponents.filter((path) => {
    return path.endsWith(names[1])
  })
  const specFilesToRemove = getAllPathFilesInComponents.filter((path) => {
    return path.endsWith(names[2])
  })

  const namesToRemove = [...storiesFilesToRemove, ...mdFilesToRemove, ...specFilesToRemove]

  getAllVueFilesFromDir.forEach(vueFile => fs.readFile(vueFile, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace('~@storefront-ui/shared/', 'storefrontUI/styles/');
    data = data.replace(/\"{1}\@{1}storefront\-ui\/shared/g, '"../../../../styles')
    
    fs.writeFileSync(vueFile, data, 'utf8', function (err) {
        if (err) return console.log(err);
    });
  }))

  namesToRemove.forEach(filePath => fs.unlinkSync(filePath))
}

fse.copydir(srcPath, targetComponentsPath)
  .then(() => removeDir(examplesPath))
  .then(() => removeFiles(["App.vue", "index.js", "main.js", "Playground.vue", "shims-vue.d.ts"], componentsPath, true))
  .then(() => removeFiles([".stories.js", ".md", ".spec.js" ], componentsPath, false))
fse.copydir(styleSrcPath, targetStylesPath);

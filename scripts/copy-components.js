"use strict"

const fse = require("fse");
const path = require('path');
const fs = require('fs');

const src = path.join(__dirname, "../packages/vue/src/");
const styleSrc = path.join(__dirname, "../packages/shared");
const targetComponents = path.join(__dirname, "../../../../storefrontUI/components");
const targetStyles = path.join(__dirname, "../../../../storefrontUI/styles");
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

function removeFiles(names, path) {
  if (names.length > 4) {
    fs.readdirSync(path)
      .filter((file) => {
        return names.indexOf(file) > -1;
      })
      .forEach(file => {
        fs.unlinkSync(`${path}/${file}`)
      })
  } else {
    fs.readdirSync(path + "/components")
      .forEach(folder => {
        fs.readdirSync(`${path}/components/${folder}`)
        .forEach(filename => {
          fs.readdirSync(`${path}/components/${folder}/${filename}`)
          names.forEach(name => {
            if (fs.existsSync(`${path}/components/${folder}/${filename}/${filename}${name}`)) {
              fs.unlinkSync(`${path}/components/${folder}/${filename}/${filename}${name}`)
            }
            if (fs.existsSync(`${path}/components/${folder}/${filename}/${name}`)) {
                removeDir(`${path}/components/${folder}/${filename}/${name}`)
            }
          })
          if(fs.existsSync(`${path}/components/${folder}/${filename}/${filename}.vue`)) {
            fs.readFile(`${path}/components/${folder}/${filename}/${filename}.vue`, 'utf8', function (err,data) {
              if (err) {
                return console.log(err);
              }
              const stylesImport = data.replace('~@storefront-ui/shared/', 'storefrontUI/styles/');
            
              fs.writeFileSync(`${path}/components/${folder}/${filename}/${filename}.vue`, stylesImport, 'utf8', function (err) {
                 if (err) return console.log(err);
              });
            });
          }
        })
      })
  }
}

fse.copydir(src, targetComponents)
  .then(() => removeDir(examplesPath))
  .then(() => removeFiles(["App.vue", "index.js", "main.js", "Playground.vue", "shims-vue.d.ts", ], componentsPath))
  .then(() => removeFiles([".stories.js", ".md", ".spec.js", "_internal" ], componentsPath))
  .then(() => {
    fs.readFile(`${componentsPath}/components/atoms/SfIcon/SfIcon.vue`, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }

      const pathsImportIcons = data.replace(/\"{1}\@{1}storefront\-ui\/shared/g, '"../../../../styles')
    
      fs.writeFileSync(`${componentsPath}/components/atoms/SfIcon/SfIcon.vue`, pathsImportIcons, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
  })
fse.copydir(styleSrc, targetStyles);
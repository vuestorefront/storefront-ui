const fs = require("fs");
const glob = require("glob");
const path = require("path");
// const sass = require("sass");
const breakpointValue = process.argv[2];

const srcPath = path.join(__dirname, "..", "/src/components/");
const pathsVueFiles = glob.sync("*/*/Sf*.vue", {
  cwd: srcPath,
});
const styleSrcPath = path.join(
  __dirname,
  "../..",
  "/shared/styles/components/"
);
const pathsStyleFiles = glob.sync("*/Sf*.scss", {
  cwd: styleSrcPath,
});
const styleFiles = pathsStyleFiles.map(file => path.join(styleSrcPath, file));
const vueFiles = pathsVueFiles.map(file => path.join(srcPath, file));
// console.log(styleSrcPath, pathsStyleFiles, styleFiles);
//  TODO: find all style files
// find all @include for-desktop and @include for-mobile mixins
// add (breakpoint_value) to every mixin

function updateBreakpoint() {
  // let styleFiles = findFiles(pathsStyleFiles, ".scss");
  for (const file of styleFiles) {
    addBreakpointValue(file, breakpointValue);
  }
  // let vueFiles = findFiles(srcPath, ".vue");
  for (const file of vueFiles) {
    addBreakpointValue(file, breakpointValue);
  }
}

// function findFiles(path, fileExtension) {
//   if (!fs.existsSync(path)) {
//     console.log("no dir ", path);
//     return;
//   }
//   files = fs.readdirSync(path);
//   let filesFiltered = []
//   files.forEach(file => {
//     if (path.extname(file) == fileExtension)
//       filesFiltered.push(file);
//   })
//   return filesFiltered;
// };

function addBreakpointValue(file, value) {  
  const data = fs.readFileSync(file, 'utf8', function (err) {
    if (err) {
      return console.log('Cannot read file.', err);
    }    
  });
  const mixinsFound =
    data.matchAll(/(@include) [(for\-desktop)|(for\-mobile)]+/g);  
  if (!mixinsFound) return;
  let result = "";
  for (const mixin of mixinsFound) {
    result = [
      // (mixin.index + mixin[0].length * mixin)
      data.slice(0, mixin.index + mixin[0].length),
      ` (${value}px) `,
      data.slice(mixin.index + mixin[0].length),
    ].join("");
  }
  fs.writeFileSync(file, result, 'utf8', function (err) {
    if (err) return console.log('Cannot write file.', err);
  });
  return true;
}

module.exports = {
  updateBreakpoint,
};
if (require.main === module) {
  updateBreakpoint();
}
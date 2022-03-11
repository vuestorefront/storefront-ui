const fs = require("fs");
const glob = require("glob");
const path = require("path");
const breakpointValue = process.argv[2];

const srcPath = path.join(__dirname, "..", "/src/components/");
const pathsVueFiles = glob.sync("*/*/*{.vue,/*.vue}", {
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
const transitionFile = path.join(__dirname, "..", "/src/utilities/transitions/_transitions.scss");

function updateBreakpoint() {
  for (const file of styleFiles) {
    addBreakpointValue(file, breakpointValue);
  }
  for (const file of vueFiles) {
    addBreakpointValue(file, breakpointValue);
  }
  addBreakpointValue(transitionFile, breakpointValue);
}

function addBreakpointValue(file, value) {    
  const data = fs.readFileSync(file, 'utf8', function (err) {
    if (err) {
      return console.log('Cannot read file.', err);
    }    
  });  
  const addBreakpoint = mixin => {
    const valueString = !!value ? value.toString().concat('px') : '$breakpoint';
    return mixin.includes('for-desktop') ? `for-desktop(${valueString}) ` : `for-mobile(${valueString}) `
  }
  let result = 
    data.replace(/for\-(desktop|mobile)\(.+\)./g, addBreakpoint); 
  if (!result) return;
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
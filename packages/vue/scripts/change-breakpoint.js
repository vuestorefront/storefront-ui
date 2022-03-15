const fs = require("fs");
const path = require("path");
const breakpointValue = process.argv[2];

const transitionFile = path.join(__dirname, "../..", "/shared/styles/helpers/_breakpoints.scss");

function updateBreakpoint() {
  addBreakpointValue(transitionFile, breakpointValue);
}

function addBreakpointValue(file, value) {    
  const data = fs.readFileSync(file, 'utf8', function (err) {
    if (err) {
      return console.log('Cannot read breakpoints.scss file.', err);
    }    
  });  
  const valueString = !!value ? value.toString().concat('px') : '$desktop-min';
  let result = 
    data.replace(/\$breakpoint:.+/, `$breakpoint: ${valueString} !default;`);
  if (!result) return;
  fs.writeFileSync(file, result, 'utf8', function (err) {
    if (err) return console.log('Cannot write breakpoints.scss file.', err);
  });
  return true;
}

module.exports = {
  updateBreakpoint,
};
if (require.main === module) {
  updateBreakpoint();
}
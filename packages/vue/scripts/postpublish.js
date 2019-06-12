var fs = require('fs')

fs.readFile('./src/css/_variables.scss', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace('../../../../../sfui.scss', '../../sfui.scss');
  fs.writeFile('./src/css/_variables.scss', result, 'utf8', function (err) {
    if (err) return console.log(err);
    console.log(result);
  });
});
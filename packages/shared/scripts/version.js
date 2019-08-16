var fs = require('fs')

fs.readFile('../styles/_variables.scss', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace('../../vue/sfui.scss', '../../../../sfui.scss');
  fs.writeFile('../styles/_variables.scss', result, 'utf8', function (err) {
    if (err) return console.log(err);
    console.log(result);
  });
});
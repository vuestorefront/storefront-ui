const fs = require('fs');

// eslint-disable-next-line func-names
module.exports = function (source, sourceMap) {
  // Read the referenced file and remove the <include-source> block, so it doesn't
  // show up in the source code that will be shown in the UI
  const fileContent = fs
    .readFileSync(this.resourcePath, 'utf8')
    .replace(/<include-source.*\n/, '');

  // Generate a function that'll receive the Vue component and attach the source
  this.callback(
    null,
    `export default function (Component) {
            Component.options.source = ${JSON.stringify(fileContent)};
        }`,
    sourceMap
  );
};

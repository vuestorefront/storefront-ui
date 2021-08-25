const fs = require('fs');

// eslint-disable-next-line func-names
module.exports = function (source, sourceMap) {
  const fileContent = fs
    .readFileSync(this.resourcePath, 'utf8')
    .replace(/<include-source.*\n/, '');

  this.callback(
    null,
    `export default function (Component) {
            Component.options.source = ${JSON.stringify(fileContent)};
        }`,
    sourceMap
  );
};

const traverse = require('traverse');
const { isMitosisNode } = require('@builder.io/mitosis');

const GENERAL_IF_REGEX = /\/\* IF(-\w*)? \*\/(.*?)\/\* ENDIF(-\w*)? \*\//gms;

function removeIfsFromCode(code, type) {
  if (!Array.isArray(type)) type = [type];
  /* remove framework-specyfic IF' comments with inner code untouched */
  type.forEach((framework) => {
    const FRAMEWORK_IF_REGEX = new RegExp(`\\/\\* (END)?IF(-${framework})? \\*\/`, 'gms');
    code = code.replace(FRAMEWORK_IF_REGEX, '');
  });

  /* remove all other IF's conditions along with its inner code */
  code = code.replace(GENERAL_IF_REGEX, '');
  return code;
}

module.exports =
  ({ type = '' }) =>
  () => ({
    json: {
      // Happens before any modifiers
      pre: (json) => {
        // remove props
        traverse(json).forEach(function (item) {
          if (typeof item === 'string') {
            return removeIfsFromCode(item, type);
          }
        });
        return json;
      },
      // Happens after built in modifiers
      post: (json) => {
        return json;
      },
    },
    code: {
      // Happens before formatting
      pre: (code) => {
        code = removeIfsFromCode(code, type);
        return code;
      },
      // Happens after formatting
      post: (code) => {
        return code;
      },
    },
  });

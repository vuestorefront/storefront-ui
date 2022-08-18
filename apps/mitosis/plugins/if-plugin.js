const GENERAL_IF_REGEX = /\/\* IF(-\w*)? \*\/(.*?)\/\* ENDIF(-\w*)? \*\//gms;

module.exports =
  ({ type = '' }) =>
  () => ({
    json: {
      // Happens before any modifiers
      pre: (json) => {
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
        if (!Array.isArray(type)) type = [type];
        /* remove framework-specyfic IF' comments with inner code untouched */
        type.forEach((framework) => {
          const FRAMEWORK_IF_REGEX = new RegExp(`\\/\\* (END)?IF(-${framework})? \\*\/`, 'gms');
          code = code.replace(FRAMEWORK_IF_REGEX, '');
        });

        /* remove all other IF's conditions along with its inner code */
        code = code.replace(GENERAL_IF_REGEX, '');
        return code;
      },
      // Happens after formatting
      post: (code) => {
        return code;
      },
    },
  });

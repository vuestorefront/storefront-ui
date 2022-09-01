const traverse = require('traverse');

const attributedToDelete = [
  'v-model',
  'v-html'
];

module.exports =
  ({ type = '' }) =>
    () => ({
      json: {
        pre: (json) => {
          traverse(json).forEach(function (item) {
            if (!type.includes('vue')) {
              const vModelProp = Object.keys(item || {}).includes('v-model');
              if (vModelProp) {
                attributedToDelete.forEach(attribute => {
                  const isAttrExists = Object.keys(item || {}).includes(attribute);

                  if (isAttrExists) delete item[attribute];
                });
              }
            }
          });
          return json;
        },
        post: (json) => json,
      },
      code: {
        pre: (code) => code,
        post: (code) => code,
      },
    })

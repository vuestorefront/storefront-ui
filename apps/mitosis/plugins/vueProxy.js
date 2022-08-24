const traverse = require('traverse');
const VUE_PROXY_REGEX = new RegExp(/(vueProxy.+)\(\) \{\s*return \{\s([\s\S]+?)\s+\};/, 'gm');

module.exports =
  ({ type = '' }) =>
    () => ({
      json: {
        pre: (json) => {
          traverse(json).forEach(function (item) {
            if (!type.includes('vue')) {
              const vueProxyState = Object.keys(item?.state || {}).find(a => a.includes('vueProxy'));
              if (vueProxyState) {
                delete item.state[vueProxyState]
              }
              const vModelProp = Object.keys(item || {}).includes('v-model');
              if (vModelProp) {
                delete item['v-model'];
              }
            }
          });
          return json;
        },
        post: (json) => {

          return json;
        },
      },
      code: {
        pre: (code) => {
          return code;
        },
        post: (code) => {
          if (type.includes('vue')) {
            return code.replace(VUE_PROXY_REGEX, (_match, g1, g2) => {
              return `${g1}: {\n${g2}`;
            });
          }
          return code;
        },
      },
    })

const traverse = require('traverse');
const { isMitosisNode } = require('@builder.io/mitosis');

const PROXY_PREFIX = '$proxy_';

function proxyName(prop) {
  return PROXY_PREFIX + prop;
}
function getNameFromProxy(proxy) {
  return proxy.replace(PROXY_PREFIX, '');
}

// const proxyComputed = (proxyFn, prop) => ({
//   code:
//     `@builder.io/mitosis/method:get ${proxyFn}: {\n ` +
//     `  get: function() {return this.${prop}},\n` +
//     `  set: function(val) {this.$emit('update:${prop}', val)},\n` +
//     '}',
//   type: 'getter',
// });

function proxyFn(proxy) {
  const propName = getNameFromProxy(proxy);
  return `
  ${proxy}: {
    get: function() {return this.${propName}},
    set: function(val) {this.$emit('update:${propName}', val)},
  },
  `;
}

module.exports = () => ({
  json: {
    // Happens before any modifiers
    pre: (json) => {
      return json;
    },
    // Happens after built in modifiers
    post: (json) => {
      const model = json.meta.useMetadata?.vueModel;
      if (model && model.event && model.prop) {
        const proxyModelName = proxyName(model.prop);

        // const proxyModelFn = proxyComputed(proxyModelName, model.prop);

        // json.state[proxyModelName] = proxyModelFn;

        // console.log(node);
        traverse(json).forEach((node) => {
          if (isMitosisNode(node)) {
            const vModelNode = node.properties.hasOwnProperty('v-model') || node.bindings.hasOwnProperty('v-model');
            if (vModelNode) {
              // update v-model binding to proxy property
              node.properties['v-model'] = proxyModelName;
              const event = model.event;
              // remove event listener and possible binding
              delete node.bindings[event];
              delete node.bindings['v-model'];
            }
          }
        });
      }
      return json;
    },
  },
  code: {
    // Happens before formatting
    pre: (code) => {
      const hasVModel = /v-model="(.*?)"/g.exec(code);
      if (hasVModel) {
        const proxyProperty = hasVModel[1];
        const proxyFnString = proxyFn(proxyProperty);
        // inject proxy v-model to computed
        code = code.replace(/computed:\s*{/, 'computed: {' + proxyFnString);
        // inject v-model prop
        code = code.replace(/props:\s*\[/, `props: ["${getNameFromProxy(proxyProperty)}" ,`);
      }
      return code;
    },
    // Happens after formatting
    post: (code) => {
      // console.log(code)
      return code;
    },
  },
});

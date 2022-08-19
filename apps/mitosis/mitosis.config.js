const seedrandom = require('seedrandom')
const rng = seedrandom('vue-sdk-seed')
const ifPlugin = require('./plugins/if-plugin');
const vueModelPlugin = require('./plugins/vue-model-plugin');
const vueComputedProxy = require('./plugins/vueProxy');

const getSeededId = () => {
  const rngVal = rng()
  return Number(String(rngVal).split('.')[1]).toString(36)
}

module.exports = {
  files: 'src/**',
  targets: ['react', 'vue2', 'vue3'],
  options: {
    vue3: {
      plugins: [
        vueComputedProxy({ type: ['vue', 'vue3'] }),
      ],
    },
    vue2: {
      plugins: [
        vueComputedProxy({ type: ['vue', 'vue2'] }),
      ],
    },
    vue: {
      cssNamespace: getSeededId,
    },
    react: {
      plugins: [vueComputedProxy({ type: 'react' })],
      transpiler: {
        languages: 'ts',
      },
    },
  },
}

const seedrandom = require('seedrandom')
const rng = seedrandom('vue-sdk-seed')
const ifPlugin = require('./plugins/if-plugin');
const vueComputedProxy = require('./plugins/vueProxy');
const vueConditionalSlot = require('./plugins/vueConditionalSlot');

const getSeededId = () => {
  const rngVal = rng()
  return Number(String(rngVal).split('.')[1]).toString(36)
}

module.exports = {
  files: 'src/**',
  targets: ['react', 'vue2', 'vue3'],
  options: {
    vue3: {
      cssNamespace: getSeededId, 
      transpiler: { format: 'esm' },
      plugins: [
        ifPlugin({ type: ['vue', 'vue3'] }),
        vueComputedProxy({ type: ['vue', 'vue3'] }),
        vueConditionalSlot({ type: ['vue', 'vue3'] }),
      ],
    },
    vue2: {
      cssNamespace: getSeededId, 
      transpiler: { format: 'esm' },
      plugins: [
        ifPlugin({ type: ['vue', 'vue2'] }),
        vueComputedProxy({ type: ['vue', 'vue2'] }),
        vueConditionalSlot({ type: ['vue', 'vue2'] }),
      ],
    },
    react: {
      plugins: [
        ifPlugin({ type: 'react' }),
        vueComputedProxy({ type: 'react' })
      ],
      transpiler: {
        languages: 'ts',
        format: 'esm'
      },
    },
  },
}

const seedrandom = require('seedrandom')
const rng = seedrandom('vue-sdk-seed')

const getSeededId = () => {
  const rngVal = rng()
  return Number(String(rngVal).split('.')[1]).toString(36)
}

module.exports = {
  files: 'src/**',
  targets: ['react', 'vue2', 'vue3'],
  options: {
    vue2: { cssNamespace: getSeededId, transpiler: { format: 'esm' } },
    vue3: { cssNamespace: getSeededId, transpiler: { format: 'esm' } },
    react: {
      transpiler: {
        languages: 'ts',
        format: 'esm'
      },
    },
  },
}

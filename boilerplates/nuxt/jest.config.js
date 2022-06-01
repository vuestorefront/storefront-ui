module.exports = {
  setupFiles: [
    '<rootDir>/__tests__/setup.js'
  ],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '.*\\.js$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue2-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['<rootDir>/**/__tests__/**/*.spec.js'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/components/**/*.vue'],
  coverageDirectory: './coverage/',
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      lines: 80
    }
  }
}

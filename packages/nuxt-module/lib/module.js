const { mergeWith, isArray } = require('lodash')

const merge = (source, destination) => mergeWith(source, destination, (objValue, srcValue) => {
  if (isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

function loadStorefrontRawSources (options) {
  const rawSources = [
    '@storefront-ui/vue',
    '@storefront-ui/shared'
  ]

  options.useRawSource = merge(options.useRawSource, {
    dev: rawSources,
    prod: rawSources
  })
}

module.exports = function (moduleOptions) {
  const defaultOptions = {
    useRawSource: {
      dev: [],
      prod: []
    }
  }

  const options = merge(defaultOptions, moduleOptions)

  loadStorefrontRawSources.call(this, options)

  function resolveDependency (name) {
    try {
      return require.resolve(name, { paths: [process.cwd()] })
    } catch (error) {
      return false
    }
  };

  const useRawSource = (packageName) => {
    const pkgPath = resolveDependency(`${packageName}/package.json`)
    const pkg = require(pkgPath)

    if (pkg.module) {
      this.extendBuild((config) => {
        config.resolve.alias[pkg.name + '$'] = resolveDependency(`${packageName}/${pkg.module}`)
      })
    }

    // https://github.com/zloirock/core-js/issues/743
    this.options.build.babel.exclude = [/\bcore-js\b/, /\bwebpack\/buildin\b/]
    this.options.build.transpile.push(packageName)
  }

  options.useRawSource[process.env.NODE_ENV === 'production' || options.coreDevelopment ? 'prod' : 'dev'].map(packageName => useRawSource(packageName))

  const storefrontUiStyles = [
    '@storefront-ui/shared/styles/_helpers.scss',
    '@storefront-ui/shared/styles/_global.scss',
    '@storefront-ui/shared/styles/_variables.scss'
  ]

  storefrontUiStyles.forEach(style => this.options.css.push(style))
}

module.exports.meta = require('../package.json')

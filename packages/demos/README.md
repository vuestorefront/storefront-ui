- If your projects are either vue-cli app or nuxt app,  you just need to install the  `@storefrontui/vue`
- If your projects do not support scss or vue file (single file component) currently, there are some extra works to do.

Here are the steps.
1. install @storefrontui/vue from yarn or npm
```js
npm install -s @storefrontui/vue
```

2. add scss loader or vue loader config

```js
// webpack.config.js

const { scssConfig } = require("paht/to/utilities/build/sfui.webpack.config")
const { vueConfig } = require("paht/to/utilities/build/sfui.webpack.config")
const merge = require("wepack-merge")

module.exports = merge(customConfig,scssConfig,vueConfig)

```

3. install loaders from yarn or npm
```js
//scss loader
npm install -D sass-loader node-sass css-loader

//vue loader
npm install -D vue-loader vue-template-compiler
```

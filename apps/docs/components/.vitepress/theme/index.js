import Theme from 'vitepress/theme'
import PlaygroundWrapper from './components/PlaygroundWrapper.vue'
import AlertBase from './components/AlertBase.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('PlaygroundWrapper', PlaygroundWrapper),
    app.component('AlertBase', AlertBase)
  }
}
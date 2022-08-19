import Theme from 'vitepress/theme'
import PlaygroundWrapper from '../components/PlaygroundWrapper.vue'
import AlertBase from '../components/AlertBase.vue'
import VsfButton from '../components/VsfButton.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('PlaygroundWrapper', PlaygroundWrapper),
    app.component('AlertBase', AlertBase),
    app.component('Button', VsfButton)
  }
}
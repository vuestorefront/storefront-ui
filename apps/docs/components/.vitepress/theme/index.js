import Theme from 'vitepress/theme'
import PlaygroundWrapper from '../components/PlaygroundWrapper.vue'
import AlertBase from '../components/AlertBase.vue'
import VsfBreadcrumbs from '../components/VsfBreadcrumbs.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('PlaygroundWrapper', PlaygroundWrapper),
    app.component('AlertBase', AlertBase),
    app.component('Breadcrumbs', VsfBreadcrumbs)
  }
}
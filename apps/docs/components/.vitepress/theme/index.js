import Theme from 'vitepress/theme'
import PlaygroundWrapper from '../components/PlaygroundWrapper.vue'
import VsfAlert from '../components/VsfAlert.vue'
import VsfCheckbox from '../components/VsfCheckbox.vue'
import VsfBreadcrumbs from '../components/VsfBreadcrumbs.vue'
import VsfRating from '../components/VsfRating.vue'
import VsfDivider from '../components/VsfDivider.vue'
import VsfSheet from '../components/VsfSheet.vue'
import VsfSpinner from '../components/VsfSpinner.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('PlaygroundWrapper', PlaygroundWrapper),
    app.component('Alert', VsfAlert),
    app.component('Checkbox', VsfCheckbox),
    app.component('Breadcrumbs', VsfBreadcrumbs),
    app.component('Rating', VsfRating),
    app.component('Divider', VsfDivider),
    app.component('Sheet', VsfSheet),
    app.component('Spinner', VsfSpinner)
  }
}
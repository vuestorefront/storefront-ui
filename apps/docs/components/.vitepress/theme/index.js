import Theme from 'vitepress/theme'
import PlaygroundWrapper from '../components/PlaygroundWrapper.vue'
import AlertBase from '../components/AlertBase.vue'
import VsfCheckbox from '../components/VsfCheckbox.vue'
import VsfBreadcrumbs from '../components/VsfBreadcrumbs.vue'
import VsfRating from '../components/VsfRating.vue'
import VsfRatingButton from '../components/VsfRatingButton.vue'
import VsfTooltip from '../components/VsfTooltip.vue'
import VsfOverlay from '../components/VsfOverlay.vue'
import VsfSwitch from '../components/VsfSwitch.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('PlaygroundWrapper', PlaygroundWrapper),
    app.component('AlertBase', AlertBase),
    app.component('Checkbox', VsfCheckbox),
    app.component('Breadcrumbs', VsfBreadcrumbs),
    app.component('Rating', VsfRating),
    app.component('RatingButton', VsfRatingButton),
    app.component('ChipsInput', VsfChipsInput),
    app.component('Tooltip', VsfTooltip),
    app.component('Overlay', VsfOverlay),
    app.component('Switch', VsfSwitch)
  }
}
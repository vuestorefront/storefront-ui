import Theme from 'vitepress/theme'
import PlaygroundWrapper from '../components/PlaygroundWrapper.vue'
import VsfAlert from '../components/VsfAlert.vue'
import VsfCheckbox from '../components/VsfCheckbox.vue'
import VsfChipsInput from '../components/VsfChipsInput.vue'
import VsfBreadcrumbs from '../components/VsfBreadcrumbs.vue'
import VsfRating from '../components/VsfRating.vue'
import VsfRatingButton from '../components/VsfRatingButton.vue'
import VsfSelect from '../components/VsfSelect.vue'
import VsfTooltip from '../components/VsfTooltip.vue'
import VsfOverlay from '../components/VsfOverlay.vue'
import VsfDivider from '../components/VsfDivider.vue'
import VsfSheet from '../components/VsfSheet.vue'
import VsfSpinner from '../components/VsfSpinner.vue'
import VsfSwitch from '../components/VsfSwitch.vue'
import VsfChipsFilter from '../components/VsfChipsFilter.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('ChipsFilter', VsfChipsFilter),
    app.component('PlaygroundWrapper', PlaygroundWrapper),
    app.component('Alert', VsfAlert),
    app.component('Checkbox', VsfCheckbox),
    app.component('ChipsInput', VsfChipsInput),
    app.component('Overlay', VsfOverlay),
    app.component('Rating', VsfRating),
    app.component('Tooltip', VsfTooltip),
    app.component('RatingButton', VsfRatingButton),
    app.component('Select', VsfSelect),
    app.component('ChipsInput', VsfChipsInput),
    app.component('Tooltip', VsfTooltip),
    app.component('Overlay', VsfOverlay),
    app.component('Divider', VsfDivider),
    app.component('Sheet', VsfSheet),
    app.component('Spinner', VsfSpinner),
    app.component('Switch', VsfSwitch)
  }
}

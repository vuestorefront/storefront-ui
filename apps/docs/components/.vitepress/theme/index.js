import Theme from 'vitepress/theme';
import PlaygroundWrapper from '../components/PlaygroundWrapper.vue';
import VsfAlert from '../output/blocks/VsfAlert/VsfAlert.vue';
import VsfCheckbox from '../output/blocks/VsfCheckbox/VsfCheckbox.vue';
import VsfChipsInput from '../output/blocks/VsfChipsInput/VsfChipsInput.vue';
import VsfBreadcrumbs from '../output/blocks/VsfBreadcrumbs/VsfBreadcrumbs.vue';
import VsfButton from '../output/blocks/VsfButton/VsfButton.vue';
import VsfRating from '../output/blocks/VsfRating/VsfRating.vue';
import VsfRatingButton from '../output/blocks/VsfRatingButton/VsfRatingButton.vue';
import VsfSelect from '../output/blocks/VsfSelect/VsfSelect.vue';
import VsfTooltip from '../output/blocks/VsfTooltip/VsfTooltip.vue';
import VsfOverlay from '../output/blocks/VsfOverlay/VsfOverlay.vue';
import VsfDivider from '../output/blocks/VsfDivider/VsfDivider.vue';
import VsfSheet from '../output/blocks/VsfSheet/VsfSheet.vue';
import VsfSpinner from '../output/blocks/VsfSpinner/VsfSpinner.vue';
import VsfSwitch from '../output/blocks/VsfSwitch/VsfSwitch.vue';
import VsfChipsFilter from '../output/blocks/VsfChipsFilter/VsfChipsFilter.vue';
import VsfCounter from '../components/VsfCounter.vue';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Counter', VsfCounter);
    app.component('PlaygroundWrapper', PlaygroundWrapper);
    app.component('Alert', VsfAlert);
    app.component('Breadcrumbs', VsfBreadcrumbs);
    app.component('Checkbox', VsfCheckbox);
    app.component('Overlay', VsfOverlay);
    app.component('Rating', VsfRating);
    app.component('Tooltip', VsfTooltip);
    app.component('RatingButton', VsfRatingButton);
    app.component('Select', VsfSelect);
    app.component('ChipsInput', VsfChipsInput);
    app.component('Tooltip', VsfTooltip);
    app.component('Overlay', VsfOverlay);
    app.component('Divider', VsfDivider);
    app.component('Sheet', VsfSheet);
    app.component('Spinner', VsfSpinner);
    app.component('Switch', VsfSwitch);
    app.component('Button', VsfButton);
    app.component('ChipsFilter', VsfChipsFilter);
  },
};

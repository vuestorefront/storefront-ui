import Theme from 'vitepress/theme';
import PlaygroundWrapper from '../components/PlaygroundWrapper.vue';
import VsfAlert from '../output/blocks/VsfAlert/VsfAlert.vue';
import VsfCheckbox from '../output/blocks/VsfCheckbox/VsfCheckbox.vue';
import VsfChipsInput from '../output/blocks/VsfChipsInput/VsfChipsInput.vue';
import VsfBreadcrumbs from '../output/blocks/VsfBreadcrumbs/VsfBreadcrumbs.vue';
import VsfButton from '@sfui/sfui/frameworks/vue/components/VsfButton/VsfButton.vue';
import VsfRating from '../output/blocks/VsfRating/VsfRating.vue';
import VsfRatingButton from '../output/blocks/VsfRatingButton/VsfRatingButton.vue';
import VsfSelect from '../output/blocks/VsfSelect/VsfSelect.vue';
import VsfTooltip from '../output/blocks/VsfTooltip/VsfTooltip.vue';
import VsfOverlay from '@sfui/sfui/frameworks/vue/components/VsfOverlay/VsfOverlay.vue';
import VsfDivider from '@sfui/sfui/frameworks/vue/components/VsfDivider/VsfDivider.vue';
import VsfSheet from '../output/blocks/VsfSheet/VsfSheet.vue';
import VsfSpinner from '../output/blocks/VsfSpinner/VsfSpinner.vue';
import VsfSwitch from '../output/blocks/VsfSwitch/VsfSwitch.vue';
import VsfChipsFilter from '../output/blocks/VsfChipsFilter/VsfChipsFilter.vue';
import VsfGallery from '../output/blocks/VsfGallery/VsfGallery.vue';
import VsfCounter from '../output/blocks/VsfCounter/VsfCounter.vue';
import VsfSlider from '../output/blocks/VsfSlider/VsfSlider.vue';
import VsfDialog from '../output/blocks/VsfDialog/VsfDialog.vue';
import VsfSearch from '../output/blocks/VsfSearch/VsfSearch.vue';
import VsfNavBarTop from '../output/blocks/VsfNavBarTop/VsfNavBarTop.vue';
import VsfRadio from '../output/blocks/VsfRadio/VsfRadio.vue';
import VsfRadioGroup from '../output/blocks/VsfRadioGroup/VsfRadioGroup.vue';

export default {
  ...Theme,
  enhanceApp({ app }) {

    app.component('RadioGroup', VsfRadioGroup);
    app.component('Radio', VsfRadio);
    app.component('Counter', VsfCounter);
    app.component('NavBarTop', VsfNavBarTop);
    app.component('Dialog', VsfDialog);
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
    app.component('Gallery', VsfGallery);
    app.component('Slider', VsfSlider);
    app.component('Search', VsfSearch);
  },
};

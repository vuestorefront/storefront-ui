import SfBanner from "./components/molecules/SfBanner/SfBanner.vue";
import SfBottomNavigation from "./components/organisms/SfBottomNavigation/SfBottomNavigation.vue";
import SfButton from "./components/atoms/SfButton/SfButton.vue";
import SfCallToAction from "./components/molecules/SfCallToAction/SfCallToAction.vue";

export default (StorefrontUI.install = function(Vue, options) {
  Vue.component("SfBanner", SfBanner);
  Vue.component("SfBottomNavigation", SfBottomNavigation);
  Vue.component("SfButton", SfButton);
  Vue.component("SfCallToAction", SfCallToAction);
});

export { SfBanner, SfBottomNavigation, SfButton, SfCallToAction };

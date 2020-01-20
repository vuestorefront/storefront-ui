/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
const StoriesWrapper = {
  template: `<div style="display: flex;">
    <div style="flex: 1; margin-right: 1.25rem">
      <div style="height: 25rem; border: 1px solid #f2f2f2;"></div>
      <div style="height: 25rem; margin-top: 1.25rem; border: 1px solid #f2f2f2;"></div>
    </div>
    <div style="flex: 1">
      <slot/>
    </div>
  </div>`
};
const StoriesPlaceholder = {
  template: `<div style="display: flex; flex: 1; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
        [#default slot content]
      </div>`
};
import SfSticky from "./SfSticky.vue";
storiesOf("Molecules|Sticky", module).add("Common", () => ({
  components: { SfSticky, StoriesWrapper, StoriesPlaceholder },
  template: `<StoriesWrapper>
    <SfSticky>
      <StoriesPlaceholder/>
    </SfSticky>
  </StoriesWrapper>`
}));

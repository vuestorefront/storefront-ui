// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfSlidingSection from "./SfSlidingSection.vue";

storiesOf("Molecules|SlidingSection", module).add("Default", () => ({
  components: { SfSlidingSection },
  template: `<div style="max-width: 64rem; margin: auto">
      <SfSlidingSection>
        <template #static>
          <div style="display: flex; align-items:center; justify-content:center; height: 34.6875rem; background-color: #f2f2f2;">
            [#static slot content]
          </div>
        </template>
        <template #sliding>
          <div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
            [#sliding slot content]
          </div>
        </template>
      </SfSlidingSection>
    </div>`
}));

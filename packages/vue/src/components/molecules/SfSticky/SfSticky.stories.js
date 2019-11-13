// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfSticky from "./SfSticky.vue";

storiesOf("Molecules|Sticky", module).add("[slot] default", () => ({
  components: { SfSticky },
  template: `<div style="display: flex;">
    <div style="flex: 1; margin-right: 1.25rem">
      <div style="height: 25rem; border: 1px solid #f2f2f2;"></div>
      <div style="height: 25rem; margin-top: 1.25rem; border: 1px solid #f2f2f2;"></div>
    </div>
    <div style="flex: 1">
      <SfSticky>
        <div style="display: flex; flex: 1; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
          [#default slot content]
        </div>
      </SfSticky>
    </div>
  </div>`
}));

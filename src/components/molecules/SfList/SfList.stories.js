/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfList from "./SfList.vue";

storiesOf("SfList", module).add(
  "[slot] Default",
  () => ({
    components: { SfList },
    template: `
    <SfList>
      <SfListItem>Hello</SfListItem>
      <SfListItemHello</SfListItem>
      <SfListItem>Hello</SfListItem>
    </SfList>`
  }),
  {
    info: true
  }
);

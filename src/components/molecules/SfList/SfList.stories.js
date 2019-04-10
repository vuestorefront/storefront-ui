/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfList from "./SfList.vue";

storiesOf("List", module).add(
  "[slot] Default",
  () => ({
    components: { SfList },
    template: `
    <SfList>
      <SfListItem>Menu Item 1</SfListItem>
      <SfListItemH>Menu Item 2</SfListItem>
      <SfListItem>Menu Item 3</SfListItem>
    </SfList>`
  }),
  {
    info: true
  }
);

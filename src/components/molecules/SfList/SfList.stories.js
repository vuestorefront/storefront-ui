/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfList from "./SfList.vue";
import SfMenuItem from "../SfMenuItem/SfMenuItem.vue";

storiesOf("Molecules|List", module)
  .add(
    "Basic",
    () => ({
      components: { SfList },
      template: `
    <SfList>
      <SfListItem>Menu Item 1</SfListItem>
      <SfListItem>Menu Item 3</SfListItem>
    </SfList>`
    }),
    {
      info: true
    }
  )
  .add(
    "With SfMenuItem",
    () => ({
      components: { SfList, SfMenuItem },
      template: `
  <div style="width: 300px">
    <SfList>
      <SfListItem>
        <SfMenuItem
          label="Lorem ipsum"
          count="30"
        />
      </SfListItem>
      <SfListItem>
        <SfMenuItem
          label="Dolor sit amet"
          count="30"
        />
      </SfListItem>
    </SfList>
  </div>`
    }),
    {
      info: true
    }
  );

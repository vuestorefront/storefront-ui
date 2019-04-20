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
    <SfList>
      <SfListItem>
        <SfMenuItem
          title="Lorem ipsum"
          count="30"
        />
      </SfListItem>
      <SfListItem>
        <SfMenuItem
          title="Dolor sit amet"
          count="30"
        />
      </SfListItem>
    </SfList>`
    }),
    {
      info: true
    }
  );

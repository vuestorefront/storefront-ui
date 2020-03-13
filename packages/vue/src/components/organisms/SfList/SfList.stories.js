/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfList from "./SfList.vue";

import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";

storiesOf("Organisms|List", module).add("Common", () => ({
  components: { SfList, SfMenuItem },
  data() {
    return {
      items: [
        { label: "All", count: "280" },
        { label: "Skirts", count: "11" },
        { label: "Dresses", count: "32" },
        { label: "Belts", count: "101" },
        { label: "Bag", count: "2" },
        { label: "Trainers", count: "22" },
        { label: "Sandals", count: "55" }
      ]
    };
  },
  template: `<SfList :style="{maxWidth: '186px', padding: '1rem'}">
      <SfListItem 
        v-for="item in items" 
        :key="item.label" 
        :style="{margin: '10px 0'}"
      >
        <div>{{item.label}}</div>
      </SfListItem>
    </SfList>`
}));

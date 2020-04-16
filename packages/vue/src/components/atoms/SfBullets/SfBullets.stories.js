import { withKnobs, number } from "@storybook/addon-knobs";
import SfBullets from "./SfBullets.vue";

export default {
  title: "Atoms|Bullets",
  decorators: [withKnobs],
};

export const Common = () => ({
  props: {
    total: {
      default: number("total", 3, {}, "Props"),
    },
  },
  components: { SfBullets },
  data() {
    return {
      current: 1,
    };
  },
  template: `<SfBullets
      :total="total"
      :current="current"
      @click="value => current = value"/>`,
});

export const SlotActive = () => ({
  props: {
    total: {
      default: number("total", 3, {}, "Props"),
    },
  },
  components: { SfBullets },
  data() {
    return {
      current: 1,
    };
  },
  template: `<SfBullets
      :total="total"
      :current="current"
      @click="value => current = value">
      <template #active>
        <li style="width: 10px; height: 10px; background-color:#9EE2B0"></li>
      </template>
    </SfBullets>`,
});

SlotActive.story = {
  name: "[slot] active",
};

export const SlotInactive = () => ({
  props: {
    total: {
      default: number("total", 3, {}, "Props"),
    },
  },
  components: { SfBullets },
  data() {
    return {
      current: 1,
    };
  },
  template: `<SfBullets
      :total="total"
      :current="current"
      @click="value => current = value">
      <template #inactive="{index, go}">
        <li @click="go(index)" style="width: 10px; height: 10px; background-color:#CCC; transform: rotate(45deg)"></li>
      </template>
    </SfBullets>`,
});

SlotInactive.story = {
  name: "[slot] inactive",
};

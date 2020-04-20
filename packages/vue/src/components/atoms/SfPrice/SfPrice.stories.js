import { withKnobs, text } from "@storybook/addon-knobs";
import SfPrice from "./SfPrice.vue";
import SfBadge from "../SfBadge/SfBadge.vue";
export default {
  title: "Atoms|Price",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfPrice },
  props: {
    regular: {
      default: text("regular", "$200.00", "Props"),
    },
    special: {
      default: text("special", "$100.00", "Props"),
    },
  },
  template: `<SfPrice
      :regular="regular"
      :special="special"/>`,
});
export const SlotSpecial = () => ({
  components: {
    SfPrice,
    SfBadge,
  },
  props: {
    regular: {
      default: text("regular", "$200.00", "Props"),
    },
    special: {
      default: text("special", "$100.00", "Props"),
    },
  },
  template: `<SfPrice
      :regular="regular"
      :special="special">
      <template #special="{special}">
        <SfBadge class="color-warning">{{special}}</SfBadge>
      </template>  
    </SfPrice>`,
});
SlotSpecial.story = {
  name: "[slot] special",
};
export const SlotOld = () => ({
  components: {
    SfPrice,
    SfBadge,
  },
  props: {
    regular: {
      default: text("regular", "$200.00", "Props"),
    },
    special: {
      default: text("special", "$100.00", "Props"),
    },
  },
  template: `<SfPrice
      :regular="regular"
      :special="special">
      <template #old="{regular, special}">
        <SfBadge class="color-secondary">{{regular}}</SfBadge>
      </template>
    </SfPrice>`,
});
SlotOld.story = {
  name: "[slot] old",
};
export const SlotRegular = () => ({
  components: {
    SfPrice,
    SfBadge,
  },
  props: {
    regular: {
      default: text("regular", "$200.00", "Props"),
    },
    special: {
      default: text("special", "", "Props"),
    },
  },
  template: `<SfPrice
      :regular="regular"
      :special="special">
      <template #regular="{regular, special}">
        <SfBadge>{{regular}}</SfBadge>
      </template>
    </SfPrice>`,
});
SlotRegular.story = {
  name: "[slot] regular",
};

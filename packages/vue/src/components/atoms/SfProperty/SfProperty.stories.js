import {
  withKnobs,
  text,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfProperty from "./SfProperty.vue";
import SfBadge from "../SfBadge/SfBadge.vue";
export default {
  title: "Atoms|Property",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfProperty },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-property--full-width": "sf-property--full-width",
          "sf-property--value-in-middle": "sf-property--value-in-middle",
          "sf-property--large": "sf-property--large",
          "sf-property--without-suffix": "sf-property--without-suffix",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    name: {
      default: text("name", "Material", "Props"),
    },
    value: {
      default: text("value", "Cotton", "Props"),
    },
  },
  template: `<SfProperty
        :class="customClass"
        :name="name"
        :value="value" />`,
});
export const SlotName = () => ({
  components: { SfProperty },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-property--full-width": "sf-property--full-width",
          "sf-property--value-in-middle": "sf-property--value-in-middle",
          "sf-property--large": "sf-property--large",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    name: {
      default: text("name", "Material", "Props"),
    },
    value: {
      default: text("value", "Cotton", "Props"),
    },
  },
  template: `<SfProperty
      :class="customClass"
      :name="name"
      :value="value">
      <template #name="{name}">
        {{name}}:<br>
      </template>
    </SfProperty>`,
});
SlotName.story = {
  name: "[slot] name",
};
export const SlotValue = () => ({
  components: {
    SfProperty,
    SfBadge,
  },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-property--full-width": "sf-property--full-width",
          "sf-property--value-in-middle": "sf-property--value-in-middle",
          "sf-property--large": "sf-property--large",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    name: {
      default: text("name", "Material", "Props"),
    },
    value: {
      default: text("value", "Cotton", "Props"),
    },
  },
  template: `<SfProperty
      :class="customClass"
      :name="name"
      :value="value">
      <template #value="{value}">
        <SfBadge>{{value}}</SfBadge>
      </template>
    </SfProperty>`,
});
SlotValue.story = {
  name: "[slot] value",
};

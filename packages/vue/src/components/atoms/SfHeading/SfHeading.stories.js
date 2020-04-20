import {
  withKnobs,
  text,
  number,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfHeading from "./SfHeading.vue";
import SfIcon from "../SfIcon/SfIcon.vue";
export default {
  title: "Atoms|Heading",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfHeading },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-heading--underline": "sf-heading--underline",
          "sf-heading--left": "sf-heading--left",
          "sf-heading--right": "sf-heading--right",
        },
        "null",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    level: {
      default: number("level", 2, { min: 1, max: 6 }, "Props"),
    },
    title: {
      default: text("title", "Show how YOU wear it", "Props"),
    },
    subtitle: {
      default: text("subtitle", "#YOURLOOK", "Props"),
    },
  },
  template: `<SfHeading
      :class="customClass"
      :level="level"
      :title="title"
      :subtitle="subtitle"/>`,
});
export const SlotTitle = () => ({
  components: {
    SfHeading,
    SfIcon,
  },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-heading--underline": "sf-heading--underline",
          "sf-heading--left": "sf-heading--left",
          "sf-heading--right": "sf-heading--right",
        },
        "null",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    level: {
      default: number("level", 2, { min: 1, max: 6 }, "Props"),
    },
    title: {
      default: text("title", "Show how YOU wear it", "Props"),
    },
    subtitle: {
      default: text("subtitle", "#YOURLOOK", "Props"),
    },
  },
  template: `<SfHeading
      :class="customClass"
      :level="level"
      :title="title"
      :subtitle="subtitle">
      <template #title="{title}">
        <h2 style="display: flex; align-items: center">
          <SfIcon icon="heart" size="xxs" style="margin-right: 1rem"/> {{title}}
        </h2>
      </template>  
    </SfHeading>`,
});
SlotTitle.story = {
  name: "[slot] title",
};
export const SlotSubtitle = () => ({
  components: {
    SfHeading,
    SfIcon,
  },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-heading--underline": "sf-heading--underline",
          "sf-heading--left": "sf-heading--left",
          "sf-heading--right": "sf-heading--right",
        },
        "null",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    level: {
      default: number("level", 2, { min: 1, max: 6 }, "Props"),
    },
    title: {
      default: text("title", "Show how YOU wear it", "Props"),
    },
    subtitle: {
      default: text("subtitle", "#YOURLOOK", "Props"),
    },
  },
  template: `<SfHeading
      :class="customClass"
      :level="level"
      :title="title"
      :subtitle="subtitle">
      <template #subtitle="{subtitle}">
        <div style="display: flex; align-items: center">
          {{subtitle}} <SfIcon icon="notify" size="xxs" style="margin-left: 1rem"/>
        </div>
      </template>        
    </SfHeading>`,
});
SlotSubtitle.story = {
  name: "[slot] subtitle",
};

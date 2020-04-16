import {
  withKnobs,
  text,
  number,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfSection from "./SfSection.vue";
const StoriesPlaceholder = {
  template: `<div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
    [#default slot content]
  </div>`,
};

export default {
  title: "Molecules|Section",
  decorators: [withKnobs],
};

export const Common = () => ({
  components: { SfSection, StoriesPlaceholder },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-section--underline": "sf-section--underline",
        },
        "sf-section--underline",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    titleHeading: {
      default: text("titleHeading", "Share your look", "Props"),
    },
    subtitleHeading: {
      default: text("subtitleHeading", "#YOURLOOK", "Props"),
    },
    levelHeading: {
      default: number("level-heading", 2, {}, "Props"),
    },
  },
  template: `<SfSection
      :title-heading="titleHeading"
      :subtitle-heading="subtitleHeading"
      :level-heading="levelHeading">
      <StoriesPlaceholder />
    </SfSection>`,
});

export const SlotHeading = () => ({
  components: { SfSection, StoriesPlaceholder },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-section--underline": "sf-section--underline",
        },
        "sf-section--underline",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    titleHeading: {
      default: text("titleHeading", "Share your look", "Props"),
    },
    subtitleHeading: {
      default: text("subtitleHeading", "#YOURLOOK", "Props"),
    },
    levelHeading: {
      default: number("level-heading", 2, {}, "Props"),
    },
  },
  template: `<SfSection
      :title-heading="titleHeading"
      :subtitle-heading="subtitleHeading"
      :level-heading="levelHeading">
      <template #heading="{levelHeading, titleHeading, subtitleHeading}">
        CUSTOM HEADING
      </template>
      <StoriesPlaceholder/>
    </SfSection>`,
});

SlotHeading.story = {
  name: "[slot] heading",
};

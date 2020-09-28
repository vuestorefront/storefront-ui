import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfSection } from "@storefront-ui/vue";
storiesOf("Molecules|Section", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfSection },
    props: {
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
        <div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
          [#default slot content]
        </div>
    </SfSection>`,
  }))
  .add("[slot] heading", () => ({
    components: { SfSection },
    props: {
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
        <div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
          [#default slot content]
        </div>
    </SfSection>`,
  }));

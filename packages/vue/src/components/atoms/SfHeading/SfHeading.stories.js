import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfHeading, SfIcon } from "@storefront-ui/vue";
storiesOf("Atoms|Heading", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfHeading },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-heading--left": "sf-heading--left",
            "sf-heading--right": "sf-heading--right",
          },
          "null",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      level: {
        default: number("level", 3, { min: 1, max: 6 }, "Props"),
      },
      title: {
        default: text("title", "Share Your Look", "Props"),
      },
      description: {
        default: text("description", "#YOURLOOK", "Props"),
      },
    },
    template: `<SfHeading
      :class="customClass"
      :level="level"
      :title="title"
      :description="description"/>`,
  }))
  .add("[slot] title", () => ({
    components: {
      SfHeading,
      SfIcon,
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
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
        default: text("title", "Share Your Look", "Props"),
      },
      description: {
        default: text("description", "#YOURLOOK", "Props"),
      },
    },
    template: `<SfHeading
      :class="customClass"
      :level="level"
      :title="title"
      :description="description">
      <template #title="{title}">
        <h2 style="display: flex; align-items: center">
          <SfIcon icon="heart" size="xxs" style="margin-right: 1rem"/> {{title}}
        </h2>
      </template>  
    </SfHeading>`,
  }))
  .add("[slot] description", () => ({
    components: {
      SfHeading,
      SfIcon,
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
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
        default: text("title", "Share Your Look", "Props"),
      },
      description: {
        default: text("description", "#YOURLOOK", "Props"),
      },
    },
    template: `<SfHeading
      :class="customClass"
      :level="level"
      :title="title"
      :description="description">
      <template #description="{description}">
        <div style="display: flex; align-items: center">
          {{description}} <SfIcon icon="notify" size="xxs" style="margin-left: 1rem"/>
        </div>
      </template>        
    </SfHeading>`,
  }));

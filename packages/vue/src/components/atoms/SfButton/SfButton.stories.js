import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfButton } from "@storefront-ui/vue";
storiesOf("Atoms|Button", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-button--outline": "sf-button--outline",
            "sf-button--underlined": "sf-button--underlined",
            "sf-button--text": "sf-button--text",
            "sf-button--full-width": "sf-button--full-width",
            "sf-button--pure": "sf-button--pure",
            "color-primary": "color-primary",
            "color-secondary": "color-secondary",
            "color-light": "color-light",
            "color-warning": "color-warning",
            "color-danger": "color-danger",
            "color-info": "color-info",
            "color-success": "color-success",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      customLabel: {
        default: text("default", "Shop now", "Slots"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      link: {
        default: text("link", "", "Props"),
      },
      type: {
        default: text("type", "", "Props"),
      },
    },
    components: { SfButton },
    template: `<SfButton
      :class="customClass"
      :disabled="disabled"
      :link="link"
      :type="type">
      {{customLabel}}
    </SfButton>`,
  }))
  .add("Submit button", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-button--outline": "sf-button--outline",
            "sf-button--underlined": "sf-button--underlined",
            "sf-button--text": "sf-button--text",
            "sf-button--full-width": "sf-button--full-width",
            "sf-button--pure": "sf-button--pure",
            "color-primary": "color-primary",
            "color-secondary": "color-secondary",
            "color-light": "color-light",
            "color-warning": "color-warning",
            "color-danger": "color-danger",
            "color-info": "color-info",
            "color-success": "color-success",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      customLabel: {
        default: text("default", "Shop now", "Slots"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      link: {
        default: text("link", "", "Props"),
      },
      type: {
        default: text("type", "submit", "Props"),
      },
    },
    components: { SfButton },
    template: `<SfButton
      :class="customClass"
      :disabled="disabled"
      :link="link"
      :type="type">
      {{customLabel}}
    </SfButton>`,
  }))
  .add("Link as button", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-button--outline": "sf-button--outline",
            "sf-button--underlined": "sf-button--underlined",
            "sf-button--text": "sf-button--text",
            "sf-button--full-width": "sf-button--full-width",
            "sf-button--pure": "sf-button--pure",
            "color-primary": "color-primary",
            "color-secondary": "color-secondary",
            "color-warning": "color-warning",
            "color-danger": "color-danger",
            "color-info": "color-info",
            "color-success": "color-success",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      customLabel: {
        default: text("default", "Shop now", "Slots"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      link: {
        default: text("link", "https://www.storefrontui.io/", "Props"),
      },
    },
    components: { SfButton },
    template: `<SfButton
      :class="customClass"
      :disabled="disabled"
      :link="link">
      {{customLabel}}
    </SfButton>`,
  }));

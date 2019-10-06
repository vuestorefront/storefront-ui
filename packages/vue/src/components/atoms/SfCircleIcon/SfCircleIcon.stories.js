import { storiesOf } from "@storybook/vue";
import SfCircleIcon from "./SfCircleIcon.vue";
import { generateStorybookTable } from "@/helpers";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$sf-circle-icon-background-primary",
      "$c-green-primary",
      "circle icon background"
    ],
    [
      "$sf-circle-icon-background-secondary",
      "$c-dark-primary",
      "circle icon background"
    ],
    ["$sf-circle-icon-icon-color", "$c-white", "warning badge color"],
    ["$sf-circle-icon-size", "3.25rem !default", "size of icon"],
    ["$sf-circle-icon-big-size", "3.25rem !default", "large size icon"],
    ["$sf-circle-icon-small-size", "1.625rem !default", "small size icon"],
    [
      "$sf-circle-icon-background-small",
      "$c-gray-secondary",
      "icon background color"
    ],
    [
      "$sf-circle-icon-background-small-hover",
      "$c-dark-secondary",
      "icon background color on hover"
    ]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-circle-icon--secondary", "change color to dark"],
    [".sf-ciricle-button--small", "change size, color and hover / active state"]
  ]
};

storiesOf("Atoms|CircleIcon", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        icon: {
          default: text("icon (prop)", "home")
        },
        colorIcon: {
          default: text("colorIcon (prop)", "white")
        },
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-circle-icon--small": "sf-circle-icon--small",
              "sf-circle-icon--big": "sf-circle-icon--big",
              "color-primary": "color-primary",
              "color-secondary": "color-secondary",
              "color-warning": "color-warning",
              "color-danger": "color-danger",
              "color-info": "color-info",
              "color-success": "color-success"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      components: { SfCircleIcon },
      template: `<SfCircleIcon
        :icon="icon"
        :class="customClass" />`
    }),
    {
      info: {
        summary: `
        <p>Rounded button with icon as content.</p>
        <h2> Usage </h2>
        <pre><code>import { SfCircleIcon } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
        `
      }
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfCircleIcon },
      template: `<SfCircleIcon>
        <img alt="Menu" src='assets/storybook/menu.svg'>
      </SfCircleIcon>`
    }),
    {
      info: {
        summary:
          "Use this slot if passing image source is not enough for you (e.g. you want to inline SVG icon). Slot content will replace the default icon."
      }
    }
  );

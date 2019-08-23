import { storiesOf } from "@storybook/vue";
import SfCircleIcon from "./SfCircleIcon.vue";
import { generateStorybookTable } from "@/helpers";
import { withKnobs, text, select } from "@storybook/addon-knobs";

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
          default: text("icon (prop)", "assets/storybook/home.svg")
        },
        alt: {
          default: text("alt (prop)", "Home")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-circle-icon--small", "sf-circle-icon--secondary"],
            "null"
          )
        }
      },
      components: { SfCircleIcon },
      template: `<sf-circle-icon :icon="icon" :alt="alt" :class="customClass" />`
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
      template: `<sf-circle-icon><img src='assets/storybook/menu.svg'></sf-circle-icon>`
    }),
    {
      info: {
        summary:
          "Use this slot if passing image source is not enough for you (e.g. you want to inline SVG icon). Slot content will replace the default icon."
      }
    }
  );

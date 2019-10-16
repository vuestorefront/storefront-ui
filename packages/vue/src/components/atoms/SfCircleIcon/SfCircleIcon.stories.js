import { storiesOf } from "@storybook/vue";
import { generateStorybookTable } from "@/helpers";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfCircleIcon from "./SfCircleIcon.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$circle-icon-background",
      "$c-green-primary",
      "background color for circle icon"
    ],
    ["$circle-icon-size", "3.25rem", "size for circle icon"],
    ["$circle-icon-size-small", "1.625rem", "size for small circle icon"],
    ["$circle-icon-size-big", "4rem", "size for big circle icon"]
  ]
};
const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    ["sf-circle-button--small", "transform normal circle icon to small"],
    ["sf-circle-button--big", "transform normal circle icon to big"]
  ]
};

const summary = `<h2> Usage </h2>
<pre><code>import { SfCircleIcon } from "@storefront-ui/vue"</code></pre>
${generateStorybookTable(scssTableConfig, "SCSS variables")}
${generateStorybookTable(cssTableConfig, "CSS modifiers")}`;

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
        summary
      }
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfCircleIcon },
      template: `<SfCircleIcon>
        <img src='assets/storybook/menu.svg'>
      </SfCircleIcon>`
    }),
    {
      info: {
        summary
      }
    }
  );

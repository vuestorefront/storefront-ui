import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfAlert from "./SfAlert.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$sf-alert-padding", "0.625rem", "padding of alert"],
    ["$sf-alert-font-size", "0.875rem", "alert font-size"],
    ["$sf-alert__text-margin", "0", "alert text margin"],
    ["$sf-alert__text-font-size", "0.875rem", "font-size of alert text"],
    ["$sf-alert__text-padding-left", "0.625rem", "alert text padding left"],
    [
      "$sf-alert--info-background-color",
      "$c-yellow-secondary",
      "color for alert background"
    ],
    ["$sf-alert--info-color", "$c-yellow-primary", "color for text and icon"],
    [
      "$sf-alert--warning-background-color",
      "$c-pink-secondary",
      "color for alert background"
    ],
    ["sf-alert--warning-color", "$c-pink-primary", "color for text and icon"],
    [
      "$sf-alert--alert-background-color",
      "$c-blue-secondary",
      "color for alert background"
    ],
    ["$sf-alert--alert-color", "$c-blue-primary", "color for text and icon"]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-alert--info", "sets yellow color for alert"],
    [".sf-alert--warning", "sets pink color for alert"],
    [".sf-alert--alert", "sets blue color for alert"]
  ]
};

storiesOf("Molecules|Alert", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfAlert },
      props: {
        message: {
          default: text("message (prop)", "Message prop")
        },
        icon: {
          default: select("icon (prop)", [
            true,
            false,
            "/assets/profile.svg",
            "https://img.icons8.com/material/4ac144/256/camera.png"
          ])
        },
        type: {
          default: select("type (prop)", ["alert", "warning", "info"])
        }
      },
      template: `
      <SfAlert
        :message="message"
        :icon="icon"
        :type="type">
      </SfAlert>
    `
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import SfAlert from "@storefrontui/vue/dist/SfAlert.vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
        `
      }
    }
  )
  .add(
    "[slot] Icon",
    () => ({
      components: { SfAlert },
      template: `
      <SfAlert message="Message prop">
        <template slot="icon">
          <img src="assets/storybook/doge.svg" style="height: 25px; margin-right: 10px;"/>
        </template>
      </SfAlert>
    `
    }),
    {
      info: true,
      knobs: {
        escapeHTML: false
      }
    }
  )
  .add(
    "[slot] Message",
    () => ({
      components: { SfAlert },
      template: `
      <SfAlert>
        <template slot="message">
          <span class="sf-alert__text">Custom message <b>with custom HTML</b></span>
        </div>
      </SfAlert>
    `
    }),
    {
      info: true,
      knobs: {
        escapeHTML: false
      }
    }
  );

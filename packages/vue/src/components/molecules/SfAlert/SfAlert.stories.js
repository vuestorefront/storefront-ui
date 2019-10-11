import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfAlert from "./SfAlert.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$alert-font-family", "$body-font-family-secondary", ""],
    ["$alert-font-size", "$font-size-regular-mobile", ""],
    ["$alert-font-size-desktop", "$font-size-big-desktop", ""],
    ["$alert-font-weight", "$body-font-weight-secondary", ""],
    ["$alert-line-height", "1.6", ""],
    ["$alert__message-margin-left", "0.625rem", ""]
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
          default: text("message (prop)", "Low in stock")
        },
        type: {
          default: select(
            "type (prop)",
            ["secondary", "info", "success", "warning", "danger"],
            "secondary"
          )
        }
      },
      template: `<SfAlert
        :type="type"
        :message="message"
         />`
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfAlert } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  )
  .add(
    "[slot] Icon",
    () => ({
      components: { SfAlert },
      template: `<SfAlert message="Message prop">
        <template #icon>
          <img src="assets/storybook/doge.svg" style="height: 25px; margin-right: 10px;"/>
        </template>
      </SfAlert>`
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
      template: `<SfAlert>
        <template #message>
          <span class="sf-alert__message">Custom message <b>with custom HTML</b></span>
        </template>
      </SfAlert>`
    }),
    {
      info: true,
      knobs: {
        escapeHTML: false
      }
    }
  );

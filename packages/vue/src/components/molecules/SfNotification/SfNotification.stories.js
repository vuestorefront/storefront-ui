// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfNotification from "./SfNotification.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$notification-max-width-desktop",
      "35rem",
      "max-width notification on desktop"
    ],
    [
      "$notification-border-radius-desktop",
      "5px",
      "border-radius notification on desktop"
    ],
    [
      "$notification-font-family",
      "$body-font-family-primary",
      "font-family for notification"
    ],
    [
      "$notification-font-family-desktop",
      "$body-font-family-secondary",
      "font-family for notification on desktop"
    ],
    [
      "$notification-font-size",
      "$font-size-regular-desktop",
      "font-size for notification"
    ],
    [
      "$notification-font-weight",
      "$body-font-weight-secondary",
      "font-weight for notification"
    ],
    [
      "$notification-font-weight-desktop",
      "$body-font-weight-primary",
      "font-weight for notification on desktop"
    ],
    [
      "$notification-box-shadow-desktop",
      "0 8px 11px rgba(0, 0, 0, 0.1)",
      "box-shadow for notification on desktop"
    ],
    [
      "$notification__title-font-size-desktop",
      "$font-size-big-desktop",
      "font-size fot title on desktop"
    ],
    ["$notification__title-font-weight", "300", "font-weight for title"],
    [
      "$notification__title-font-weight-desktop",
      "700",
      "font-weight for title on desktop"
    ],
    ["$notification__action-font-weight", "500", "font-weight for action"]
  ]
};

storiesOf("Molecules|Notification", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          isOpen: true
        };
      },
      props: {
        title: {
          default: text("title (prop)", "Added to Cart")
        },
        message: {
          default: text(
            "message (prop)",
            "This is informative message for the user."
          )
        },
        action: {
          default: text("action (prop)", "View cart")
        },
        type: {
          default: select(
            "type (prop)",
            ["success", "info", "secondary", "danger"],
            "secondary"
          )
        }
      },
      components: { SfNotification },
      template: `<SfNotification 
        @click:close="isOpen = false"
        :visible="isOpen"
        :title="title"                    
        :message="message"
        :action="action"
        :type="type"       
      />`,
      mounted() {
        document.body.style.setProperty("margin", "0px");
      }
    }),
    {
      info: {
        summary: `<p>Component description.</p>
            <h2>Usage</h2>
            <pre><code>import { SfNotification } from "@storefront-ui/vue"</code></pre>
            ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
      }
    }
  );

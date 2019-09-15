// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfNotification from "./SfNotification.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$notification__message-padding-left", "0.625rem", "left padding for text"],
    ["$notification--info-color", "$c-dark-primary", "text and icon color for info version"],
    ["$notification--warning-color", "#d12727", "text and icon color for warning version"],
    ["$notification--alert-color", "#0468db", "text and icon color for alert version"],
    ["$notification--success-color", "#128830", "text and icon color for success version"],
    ["$notification-mobile-padding", "$spacer-big", "padding on mobile"],
    ["$notification-background-size", "cover", "size of the background"],
    ["$notification-background-position", "bottom left", "position of the background"],
    ["$notification__title-font-size", "3rem", "font size of the title"]
  ]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-notification--left", "aligns content to the left"],
    [".sf-notification--right", "aligns content to the right"],
    [".sf-notification--info", "to set blue color for notification message"],
    [".sf-notification--alert", "to set red color for notification message"],
    [".sf-notification--warning", "to set default color for notification message"],
    [".sf-notification--success", "to set green color for notification message"]
  ]
};

storiesOf("Molecules|Notification", module)
  .addDecorator(withKnobs)
  .add(
    "basic",
    () => ({
      props: {
        title: {
          default: text("title (prop)", "Added to Cart")
        },
        subtitle: {
          default: text("subtitle (prop)", "This informative message for the user View cart")
        },
        // background: {
        //   default: text("background (prop)", "#e1e3e2")
        // },
        icon: {
          default: text("icon (prop)", "added_to_cart")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            [
              "null",
              "sf-notification--left",
              "sf-notification--right",
              "sf-notification--info",
              "sf-notification--alert",
              "sf-notification--warning",
              "sf-notification--success"
            ],
            "null"
          )
        }
      },
      components: { SfNotification },
      template: `<SfNotification
        :title="title"
        :subtitle="subtitle"
        :background="backgroundColor"
        :icon="icon"
        :class="customClass"
      />`        
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfNotification } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}`
      }
    }
  )
  .add(
    "[slot] title",
    () => ({
      components: { SfNotification },
      template: `<SfNotification
        title="Title prop"
        subtitle="Subtitle prop"
        icon="public/assets/added_to_cart.png">
        <header name="message" class="sf-notification__heading">
          <component :is="h${level}" class="sf-notification__title">
              <slot name="title" v-bind="{ title }">{{ title }}</slot>
          </component>
        </header>   
      </SfNotification>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] subtitle",
    () => ({
      components: { SfNotification },
      template: `<SfNotification
        title="Title prop"
        subtitle="Subtitle prop"
        icon="public/assets/added_to_cart.png">
        <header name="message" class="sf-notification__heading">          
          <div v-if="hasSubtitle" class="sf-notification__subtitle">
              <slot name="subtitle" v-bind="{ subtitle }">{{ subtitle }}</slot>
          </div>
        </header>   
      </SfNotification>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] icon",
    () => ({
      components: { SfNotification },
      template: `<SfNotification
        title="Title prop"
        subtitle="Subtitle prop"
        icon="public/assets/added_to_cart.png">
          <slot name="icon" v-bind="{ icon }">
            <SfIcon class="sf-notification--${type}"></SfIcon>
        </slot>   
      </SfNotification>`
    }),
    {
      info: true
    }
  )

import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import SfAlert from "./SfAlert.vue";

storiesOf("Alert", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
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
      info: true
    }
  )
  .add(
    "Slots (custom html)",
    () => ({
      components: { SfAlert },
      props: {
        message: {
          default: text("message (slot)", "<h1>slot <i>message</i></h1>")
        },
        icon: {
          default: text(
            "icon (slot)",
            `<img src="https://img.icons8.com/material/4ac144/256/camera.png" />`
          )
        },
        main: {
          default: text("default (slot)", "")
        }
      },
      template: `
      <SfAlert>
        <template slot="icon">
          <img src="assets/storybook/added_to_cart.svg" />
        </template>
        <template slot="message">
          <p>Custom message</p>
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

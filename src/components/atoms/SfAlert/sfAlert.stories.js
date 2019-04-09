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
    "[slot] Icon",
    () => ({
      components: { SfAlert },
      template: `
      <SfAlert message="Message prop">
        <template slot="icon">
          <img src="assets/storybook/added_to_cart.svg"/>
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
      <SfAlert icon="/assets/profile.svg">
        <template slot="message">
          <h2>Custom message</h2>
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

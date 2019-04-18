import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfAlert from "./SfAlert.vue";

storiesOf("Molecules|Alert", module)
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
      notes,
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
      notes,
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
          <span>Custom message <b>with custom HTML</b></span>
        </div>
      </SfAlert>
    `
    }),
    {
      notes,
      info: true,
      knobs: {
        escapeHTML: false
      }
    }
  );

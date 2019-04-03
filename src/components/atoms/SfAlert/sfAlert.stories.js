import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import SfAlert from "./SfAlert.vue";

storiesOf("Alert", module)
  .addDecorator(withKnobs)
  .add("Props", () => ({
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
  }))
  .add("Slots", () => ({
    components: { SfAlert },
    props: {
      message: {
        default: text("message (slot)", "slot message")
      },
      icon: {
        default: text(
          "icon (slot)",
          "https://img.icons8.com/material/4ac144/256/camera.png"
        )
      }
    },
    template: `
      <SfAlert 
        :message="message" 
        :icon="icon">
        <template slot="icon" :icon="icon">
          <img slot-scope="{ icon }" :src="icon" />
        </template>
        <template slot="message">
          <h1>{{ message }}</h1>
        </template>
      </SfAlert>
    `
  }));

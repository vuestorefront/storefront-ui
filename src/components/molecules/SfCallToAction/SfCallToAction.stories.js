import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import SfCallToAction from "./SfCallToAction.vue";

export default storiesOf("CallToAction", module)
  .addDecorator(withKnobs)
  .add("Props", () => ({
    components: { SfCallToAction },
    props: {
      message: {
        default: text("message (prop)", "Message prop")
      },
      buttonText: {
        default: text("buttonText (prop)", "ButtonText prop")
      }
    },
    template: `
      <SfCallToAction
        :message="message"
        :button-text="buttonText"
      />
    `
  }))
  .add("Slots (custom markup)", () => ({
    components: { SfCallToAction },
    template: `
      <SfCallToAction
        message="How cool are those?"
        button-text="Check out"
      >
        <template #title="{ title }">
          <h1> {{ title }} </h1>
        </template>
        <template #call-to-action>
          <button>Custom CTA</button>
        </template>
      </SfBanner>
    `
  }));

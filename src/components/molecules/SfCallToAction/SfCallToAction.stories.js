import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfCallToAction from "./SfCallToAction.vue";

export default storiesOf("CallToAction", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
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
    }),
    {
      notes,
      info: true
    }
  )
  .add(
    "[slot] message",
    () => ({
      components: { SfCallToAction },
      template: `
      <SfCallToAction
        button-text="Check out"
      >
        <template #title="{ title }">
          <h1> {{ title }} </h1>
        </template>
      </SfCallToAction>
    `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] call-to-action",
    () => ({
      components: { SfCallToAction },
      template: `
      <SfCallToAction
        message="How cool are those?"
      >
        <template #call-to-action>
          <button>Custom CTA</button>
        </template>
      </SfCallToAction>
    `
    }),
    {
      notes,
      info: true
    }
  );

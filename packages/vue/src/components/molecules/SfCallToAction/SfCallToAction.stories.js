import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";
import SfCallToAction from "./SfCallToAction.vue";

storiesOf("Molecules|CallToAction", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      components: { SfCallToAction },
      props: {
        title: {
          default: text("title (prop)", "Subscribe to Newsletters")
        },
        description: {
          default: text(
            "description (prop)",
            "Be aware of upcoming sales and events. Receive gifts and special offers!"
          )
        },
        buttonText: {
          default: text("buttonText (prop)", "Subscripe")
        },
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-call-to-action--secondary": "sf-call-to-action--secondary",
              "sf-call-to-action--light": "sf-call-to-action--light"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      template: `<div style="max-width:1240px"><SfCallToAction
        :title="title"
        :button-text="buttonText"
        :description="description"
        :class="customClass"
        image="assets/storybook/homepage/newsletter.png"/></div>`
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfCallToAction } from "@storefront-ui/vue"</code></pre>`
      }
    }
  )
  .add(
    "[slot] title",
    () => ({
      components: { SfCallToAction },
      template: `<SfCallToAction
        button-text="Check out"
        description="Description prop lorem ipsum dolor sit amet">
        <template #title>
          <h1> Lorem ipsum </h1>
        </template>
      </SfCallToAction>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] description",
    () => ({
      components: { SfCallToAction },
      template: `<SfCallToAction
        title="Title prop"
        button-text="Check out">
        <template #description>
          <p> Description slot lorem ipsum dolor sit amet</p>
        </template>
      </SfCallToAction>`
    }),
    {
      info: true
    }
  )

  .add(
    "[slot] action",
    () => ({
      components: { SfCallToAction },
      template: `<SfCallToAction
        title="Title prop"
        description="Description prop lorem ipsum dolor sit amet">
        <template #button>
          <button>Custom CTA</button>
        </template>
      </SfCallToAction>`
    }),
    {
      info: true
    }
  );

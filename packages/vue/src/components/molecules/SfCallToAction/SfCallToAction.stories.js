import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import SfCallToAction from "./SfCallToAction.vue";

storiesOf("Molecules|CallToAction", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      components: { SfCallToAction },
      props: {
        title: {
          default: text("title (prop)", "Title prop")
        },
        description: {
          default: text(
            "description (prop)",
            "Description prop lorem ipsum dolor sit amet"
          )
        },
        buttonText: {
          default: text("buttonText (prop)", "ButtonText prop")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            [
              "null",
              "sf-call-to-action--secondary",
              "sf-call-to-action--light"
            ],
            "null"
          )
        }
      },
      template: `
      <SfCallToAction
        :title="title"
        :button-text="buttonText"
        :description="description"
        :class="customClass"
      />
    `
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
      template: `
      <SfCallToAction
        button-text="Check out"
        description="Description prop lorem ipsum dolor sit amet"
      >
        <template #title>
          <h1> Lorem ipsum </h1>
        </template>
      </SfCallToAction>
    `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] description",
    () => ({
      components: { SfCallToAction },
      template: `
      <SfCallToAction
        title="Title prop"
        button-text="Check out"
      >
        <template #description>
          <p> Description slot lorem ipsum dolor sit amet</p>
        </template>
      </SfCallToAction>
    `
    }),
    {
      info: true
    }
  )

  .add(
    "[slot] action",
    () => ({
      components: { SfCallToAction },
      template: `
      <SfCallToAction
        title="Title prop"
        description="Description prop lorem ipsum dolor sit amet"
      >
        <template #action>
          <button>Custom CTA</button>
        </template>
      </SfCallToAction>
    `
    }),
    {
      info: true
    }
  );

import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import SfBanner from "./SfBanner.vue";

export default storiesOf("Banner", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      components: { SfBanner },
      props: {
        title: {
          default: text("title (prop)", "Title prop")
        },
        subtitle: {
          default: text("subtitle (prop)", "Subtitle prop")
        },
        description: {
          default: text("description (prop)", "Descriptiom prop")
        },
        buttonText: {
          default: text("buttonText (prop)", "Button text")
        },
        background: {
          default: text("background (prop)", "#e1e3e2")
        },
        image: {
          default: text("image (prop)", "assets/storybook/Banner1.png")
        }
      },
      template: `
      <SfBanner
        :title="title"
        :description="description"
        :subtitle="subtitle"
        :button-text="buttonText"
        :background="background"
        :image="image"
      />
    `
    }),
    {
      info: true
    }
  )
  .add(
    "CSS Modifiers",
    () => ({
      components: { SfBanner },
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            [
              "null",
              "sf-banner--left",
              "sf-banner--top",
              "sf-banner--bottom",
              "sf-banner--secondary"
            ],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      template: `
      <SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        :class="customClass"
      />
    `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] title",
    () => ({
      components: { SfBanner },
      template: `
      <SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        image="assets/storybook/Banner1.png"
      >
        <template #title="{ title }">
          <h1> {{ title }} </h1>
        </template>
      </SfBanner>
    `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] subtitle",
    () => ({
      components: { SfBanner },
      template: `
      <SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        image="assets/storybook/Banner1.png"
      >
        <template #subtitle="{ subtitle }">
          <b> {{ subtitle }} </b>
        </template>
      </SfBanner>
    `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] description",
    () => ({
      components: { SfBanner },
      template: `
      <SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        image="assets/storybook/Banner1.png"
      >
        <template #description="{ description }">
          <b> {{ description }} </b>
        </template>
      </SfBanner>
    `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] call-to-action",
    () => ({
      components: { SfBanner },
      template: `
      <SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        image="assets/storybook/Banner1.png"
      >
        <template #call-to-action>
          <button>Custom CTA</button>
        </template>
      </SfBanner>
    `
    }),
    {
      info: true
    }
  );

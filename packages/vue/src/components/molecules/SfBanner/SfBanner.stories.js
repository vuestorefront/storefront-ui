import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfBanner from "./SfBanner.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$banner-padding",
      "(calc( #{$spacer-extra-big} * 2)) (4rem)",
      "padding for banner"
    ],
    ["$banner-background-size", "cover", "background size for banner"],
    [
      "$banner-background-position",
      "bottom left",
      "background position for banner"
    ],
    [
      "$banner-align-items",
      "flex-end",
      "container displays as flex, you can customize here how items should be aligned"
    ],
    ["$banner-width", "100%", "width of banner"],
    ["$banner-mobile-padding", "1.25rem", "banner padding on mobile"],
    [
      "$banner__subtitle-font-family",
      "$body-font-family-primary",
      "font-family for subtitle"
    ],
    ["$banner__subtitle-font-size", "1.5rem", "font-size of subtitle"],
    ["$banner__subtitle-font-weight", "300", "font-weight of subtitle"],
    ["$banner__subtitle-color", "$c-dark-secondary", "text color for subtitle"],
    ["$banner__subtitle-text-transform", "none", "text trnasform for subtitle"],
    [
      "banner-mobile__subtitle-font-size",
      "0.875rem",
      "font-size of subtitle on mobile"
    ],
    [
      "$banner__title-text-transform",
      "uppercase",
      "text trnasform for title text"
    ],
    ["$banner__title-font-weight", "300", "font-weight of title"],
    ["$banner__title-font-size", "3rem", "font-size of title"],
    [
      "$banner__title-font-family",
      "$body-font-family-secondary",
      "font-family of title"
    ],
    ["$banner__title-color", "$c-dark-primary", "color of title text"],
    [
      "$banner__call-to-action-font-size",
      "0.875rem",
      "call to action font-size"
    ],
    [
      "$banner__call-to-action-background-color",
      "$c-dark-primary",
      "background-color for call to action"
    ]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-banner--top", "aligns content to top (visible on mobile)"],
    [".sf-banner--bottom", "aligns content to bottom (visible on mobile)"],
    [".sf-banner--left", "aligns content to left"],
    [".sf-banner--secondary", "changes button color to accent"]
  ]
};

storiesOf("Molecules|Banner", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfBanner },
      props: {
        title: {
          default: text("title (prop)", "Eco Sandals")
        },
        subtitle: {
          default: text("subtitle (prop)", "Summer shoes")
        },
        description: {
          default: text(
            "description (prop)",
            "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort."
          )
        },
        buttonText: {
          default: text("buttonText (prop)", "Shop Now")
        },
        background: {
          default: text("background (prop)", "#e1e3e2")
        },
        image: {
          default: text("image (prop)", "assets/storybook/Banner1.png")
        },
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
            "null"
          )
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
        :class="customClass"
      />
    `
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfBanner } from "@storefrontui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
        `
      }
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

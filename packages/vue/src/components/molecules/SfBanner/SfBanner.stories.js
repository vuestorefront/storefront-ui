import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfBanner from "./SfBanner.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$banner-padding", "$spacer-extra-big", "padding for banner"],
    ["$banner-background-size", "cover", "background size for banner"],
    [
      "$banner-background-position",
      "bottom left",
      "background position for banner"
    ],
    ["$banner-mobile-padding", "$spacer-big", "banner padding on mobile"],
    [
      "$banner__subtitle-font-family",
      "$body-font-family-primary",
      "font-family for subtitle"
    ],
    ["$banner__subtitle-font-size", "1.5rem", "font-size of subtitle"],
    ["$banner__subtitle-font-weight", "300", "font-weight of subtitle"],
    ["$banner__subtitle-color", "$c-dark-variant", "text color for subtitle"],
    ["$banner__subtitle-text-transform", "none", "text transform for subtitle"],
    [
      "banner-mobile__subtitle-font-size",
      "0.875rem",
      "font-size of subtitle on mobile"
    ],
    [
      "$banner__title-text-transform",
      "uppercase",
      "text transform for title text"
    ],
    ["$banner__title-font-weight", "300", "font-weight of title"],
    ["$banner__title-font-size", "3rem", "font-size of title"],
    [
      "$banner__title-font-family",
      "$body-font-family-secondary",
      "font-family of title"
    ],
    ["$banner__title-color", "$c-dark", "color of title text"],
    [
      "$banner__description-font-family",
      "$body-font-family-secondary",
      "font-family for subtitle"
    ],
    ["$banner__description-font-size", "1.125rem", "font-size of description"],
    ["$banner__description-color", "$c-dark", "text color for description"],
    ["$banner__description-font-weight", "300", "font-weight of description"],
    [
      "$banner__description-text-transform",
      "none",
      "text transform for subtitle"
    ],
    [
      "$banner__call-to-action-font-size",
      "0.875rem",
      "call to action font-size"
    ],
    [
      "$banner__call-to-action-background-color",
      "$c-dark",
      "background-color for call to action"
    ]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-banner--top", "aligns content to top (visible on mobile)"],
    [".sf-banner--bottom", "aligns content to bottom (visible on mobile)"],
    [".sf-banner--center", "aligns content to y center (visible on mobile)"],
    [".sf-banner--left", "aligns content to left"],
    [".sf-banner--secondary", "changes button color to accent"],
    [".sf-banner--container-medium", "changes container width to 75%"],
    [".sf-banner--container-full", "changes container width to 100%"]
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
          default: text("image (prop)", "assets/storybook/Banner1.jpg")
        },
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-banner--left": "sf-banner--left",
              "sf-banner--top": "sf-banner--top",
              "sf-banner--bottom": "sf-banner--bottom",
              "sf-banner--center": "sf-banner--center",
              "sf-banner--secondary": "sf-banner--secondary",
              "sf-banner--container-medium": "sf-banner--container-medium",
              "sf-banner--container-full": "sf-banner--container-full"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      template: `<div style="max-width: 1240px;">
        <SfBanner
                :title="title"
                :description="description"
                :subtitle="subtitle"
                :button-text="buttonText"
                :background="background"
                :image="image"
                :class="customClass"
              />
        </div>`
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfBanner } from "@storefront-ui/vue"</code></pre>
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
      template: `<SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        image="assets/storybook/Banner1.jpg">
        <template #title="{ title }">
          <h1>{{ title }}</h1>
        </template>
      </SfBanner>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] subtitle",
    () => ({
      components: { SfBanner },
      template: `<SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        image="assets/storybook/Banner1.jpg">
        <template #subtitle="{ subtitle }">
          <b>{{ subtitle }}</b>
        </template>
      </SfBanner>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] description",
    () => ({
      components: { SfBanner },
      template: `<SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        image="assets/storybook/Banner1.jpg">
        <template #description="{ description }">
          <b> {{ description }} </b>
        </template>
      </SfBanner>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] call-to-action",
    () => ({
      components: { SfBanner },
      template: `<SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        image="assets/storybook/Banner1.jpg"
      >
        <template #call-to-action>
          <button>Custom CTA</button>
        </template>
      </SfBanner>`
    }),
    {
      info: true
    }
  );

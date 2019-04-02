import { storiesOf } from "@storybook/vue";

import SfBanner from "./SfBanner.vue";
const slotConfig = {
  titleSlot: "<b>Custom HTML</b>",
  subtitleSlot: "<b>Custom HTML</b>",
  descriptionSlot: "<b>Custom HTML</b>",
  CTASlot: "<b>Custom HTML</b>"
};

const template = (className = "", slotConfig, bannerImage = "Banner1.png") => `
<div style="display: flex;">
  <SfBanner class="${className}" style="background-image: url('/img/${bannerImage}')">
    <template slot="title">
      ${slotConfig.titleSlot}
    </template>
    <template slot="subtitle">
      ${slotConfig.subtitleSlot}
    </template>
    <template slot="description">
      ${slotConfig.descriptionSlot}
    </template>
    <template slot="call-to-action">
      ${slotConfig.CTASlot}
    </template>
  </SfBanner>
</div>`;

export default storiesOf("Banner", module)
  .add("(props) all filled - default markup", () => ({
    components: { SfBanner },
    template: `
      <SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        image="/storybook/Banner1.png"
      />
    `
  }))
  .add("(slots) all filled - custom markup", () => ({
    components: { SfBanner },
    template: `
      <SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        image="/storybook/Banner1.png"
      >
        <template #title="{ title }">
          <h1> {{ title }} </h1>
        </template>
        <template #subtitle="{ subtitle }">
          <b> {{ subtitle }} </b>
        </template>
        <template #description="{ description }">
          <b> {{ description }} </b>
        </template>
        <template #call-to-action>
          <button>Custom CTA</button>
        </template>
      </SfBanner>
    `
  }))
  .add(
    "(CSS) sf-banner--left",
    () => ({
      components: { SfBanner },
      template: `
      <SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        class="sf-banner--left"
      />
    `
    }),
    {
      notes: `This CSS modifier is appliable only on desktop view`
    }
  )
  .add(
    "(CSS) sf-banner--top",
    () => ({
      components: { SfBanner },
      template: `
      <SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        class="sf-banner--top"
      />
    `
    }),
    {
      notes: `This CSS modifier is appliable only on mobile view`
    }
  )
  .add(
    "(CSS) sf-banner--bottom",
    () => ({
      components: { SfBanner },
      template: `
      <SfBanner
        title="Title prop"
        description="Description property filled with some random text just to show how long it can be. Then some additional text because why not."
        subtitle="Subtitle prop"
        button-text="Button Text"
        background="#e1e3e2"
        class="sf-banner--bottom"
      />
    `
    }),
    {
      notes: `This CSS modifier is appliable only on mobile view`
    }
  );

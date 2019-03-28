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
  .add("default banner", () => ({
    components: { SfBanner },
    template: template("", slotConfig)
  }))
  .add("with modifier: top (mobile)", () => ({
    components: { SfBanner },
    template: template("sf-banner--top", slotConfig)
  }))
  .add("with modifier: bottom (mobile)", () => ({
    components: { SfBanner },
    template: template("sf-banner--bottom", slotConfig)
  }))
  .add("with modifier: left", () => ({
    components: { SfBanner },
    template: template("sf-banner--left", slotConfig, "Banner2.png")
  }))
  .add("with modifier: right", () => ({
    components: { SfBanner },
    template: template("sf-banner--right", slotConfig)
  }))
  .add("with slots", () => ({
    components: { SfBanner },
    template: template("", slotConfig)
  }));

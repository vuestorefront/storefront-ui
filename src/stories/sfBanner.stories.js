import { storiesOf } from "@storybook/vue";

import SfBanner from "../components/molecules/SfBanner/SfBanner.vue";
const slotConfig = {
  titleSlot: "ECO SANDALS",
  subtitleSlot: "Summer shoes",
  descriptionSlot:
    "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
  buttonSlot: "shop now"
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
    <template slot="button">
      ${slotConfig.buttonSlot}
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
  .add("with slot: all", () => ({
    components: { SfBanner },
    template: template("", slotConfig)
  }))
  .add("with slot: without description", () => ({
    components: { SfBanner },
    template: template("", {
      ...slotConfig,
      descriptionSlot: ""
    })
  }))
  .add("with slot: without button", () => ({
    components: { SfBanner },
    template: template("", {
      ...slotConfig,
      buttonSlot: ""
    })
  }))
  .add("with slot: without subtitle", () => ({
    components: { SfBanner },
    template: template("", {
      ...slotConfig,
      subtitleSlot: ""
    })
  }));

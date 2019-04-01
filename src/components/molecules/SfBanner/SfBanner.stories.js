import { storiesOf } from "@storybook/vue";

import SfBanner from "./SfBanner.vue";
const slotConfig = {
  titleSlot: "<b>Custom Title</b>",
  subtitleSlot: "<b>Custom subTitle</b>",
  descriptionSlot: "<b>Custom description</b>",
  CTASlot: "<b>Custom call to action</b>"
};

const template = (
  className = "",
  slotConfig,
  bannerImage = "Banner1.png",
  noProps = false
) => `
<div style="display: flex;">
  <SfBanner 
    title="title"
    subtitle="subtitle"
    description="description"
    buttonText="buttonText"
    class="${className}" 
    style="background-image: url('assets/img/${bannerImage}'); width: 100%;">
    ${
      slotConfig.titleSlot
        ? `<template slot="title">
      ${slotConfig.titleSlot}
    </template>`
        : ""
    }
    ${
      slotConfig.subtitleSlot
        ? `<template slot="subtitle">
      ${slotConfig.subtitleSlot}
    </template>`
        : ""
    }
    ${
      slotConfig.descriptionSlot
        ? `<template slot="description">
      ${slotConfig.descriptionSlot}
    </template>`
        : ""
    }
    ${
      slotConfig.CTASlot
        ? `<template slot="call-to-action">
      ${slotConfig.CTASlot}
    </template>`
        : ""
    }
  </SfBanner>
</div>`;

export default storiesOf("Banner", module)
  .add("default banner", () => ({
    components: { SfBanner },
    template: template("", {})
  }))
  .add("with modifier: top (mobile)", () => ({
    components: { SfBanner },
    template: template("sf-banner--top", {})
  }))
  .add("with modifier: bottom (mobile)", () => ({
    components: { SfBanner },
    template: template("sf-banner--bottom", {})
  }))
  .add("with modifier: left", () => ({
    components: { SfBanner },
    template: template("sf-banner--left", {}, "Banner2.png")
  }))
  .add("with modifier: right", () => ({
    components: { SfBanner },
    template: template("sf-banner--right", {})
  }))
  .add("with slots", () => ({
    components: { SfBanner },
    template: template("", slotConfig, "Banner2.png", true)
  }));

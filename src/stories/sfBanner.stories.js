import { storiesOf } from "@storybook/vue";

import SfBanner from "../components/molecules/SfBanner/SfBanner.vue";

const template = (
  className = "",
  slotConfig = {
    titleSlot: "ECO SANDALS",
    subtitleSlot: "Summer shoes",
    descriptionSlot:
      "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
    buttonSlot: "shop now"
  }
) => `
<div style="display: flex;">
  <SfBanner class="${className}">
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
    template: template("")
  }))
  .add("with modifier: top (mobile)", () => ({
    components: { SfBanner },
    template: template("sf-banner--top")
  }))
  .add("with modifier: bottom (mobile)", () => ({
    components: { SfBanner },
    template: template("sf-banner--bottom")
  }))
  .add("with modifier: left", () => ({
    components: { SfBanner },
    template: template("sf-banner--left")
  }))
  .add("with modifier: right", () => ({
    components: { SfBanner },
    template: template("")
  }))
  .add("with slot: all", () => ({
    components: { SfBanner },
    template: template("")
  }))
  .add("with slot: without description", () => ({
    components: { SfBanner },
    template: template("", {
      titleSlot: "ECO SANDALS",
      subtitleSlot: "Summer shoes",
      descriptionSlot: "",
      buttonSlot: "shop now"
    })
  }))
  .add("with slot: without button", () => ({
    components: { SfBanner },
    template: template("", {
      titleSlot: "ECO SANDALS",
      subtitleSlot: "Summer shoes",
      descriptionSlot:
        "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
      buttonSlot: ""
    })
  }))
  .add("with slot: without subtitle", () => ({
    components: { SfBanner },
    template: template("", {
      titleSlot: "ECO SANDALS",
      subtitleSlot: "",
      descriptionSlot:
        "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
      buttonSlot: "shop now"
    })
  }));

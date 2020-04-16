import {
  withKnobs,
  text,
  color,
  object,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfBanner from "./SfBanner.vue";

export default {
  title: "Molecules|Banner",
  decorators: [withKnobs],
};

export const Common = () => ({
  components: { SfBanner },
  props: {
    customClass: {
      default: options(
        "CSS Modifiers",
        {
          "sf-banner--right": "sf-banner--right",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    title: {
      default: text("title", "Eco Sandals", "Props"),
    },
    subtitle: {
      default: text("subtitle", "Summer shoes", "Props"),
    },
    description: {
      default: text(
        "description",
        "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
        "Props"
      ),
    },
    buttonText: {
      default: text("buttonText", "Shop Now", "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: "/assets/storybook/SfBanner/Banner2.jpg",
          desktop: "/assets/storybook/SfBanner/Banner2.jpg",
        },
        "Props"
      ),
    },
    background: {
      default: color("background", "#e1e3e2", "Props"),
    },
  },
  template: `<div style="max-width: 77.5rem">
      <SfBanner 
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background"
      />
    </div>`,
});

export const SlotSubtitle = () => ({
  components: { SfBanner },
  props: {
    customClass: {
      default: options(
        "CSS Modifiers",
        {
          "sf-banner--right": "sf-banner--right",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    title: {
      default: text("title", "Eco Sandals", "Props"),
    },
    subtitle: {
      default: text("subtitle", "Summer shoes", "Props"),
    },
    description: {
      default: text(
        "description",
        "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
        "Props"
      ),
    },
    buttonText: {
      default: text("buttonText", "Shop Now", "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: "/assets/storybook/SfBanner/Banner2.jpg",
          desktop: "/assets/storybook/SfBanner/Banner2.jpg",
        },
        "Props"
      ),
    },
    background: {
      default: color("background", "#e1e3e2", "Props"),
    },
  },
  template: `<div style="max-width: 77.5rem">
      <SfBanner 
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #subtitle="{subtitle}">
          <div style="font-size: 1rem">CUSTOM SUBTITLE</div>
        </template>
      </SfBanner>
    </div>`,
});

SlotSubtitle.story = {
  name: "[slot] subtitle",
};

export const SlotTitle = () => ({
  components: { SfBanner },
  props: {
    customClass: {
      default: options(
        "CSS Modifiers",
        {
          "sf-banner--right": "sf-banner--right",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    title: {
      default: text("title", "Eco Sandals", "Props"),
    },
    subtitle: {
      default: text("subtitle", "Summer shoes", "Props"),
    },
    description: {
      default: text(
        "description",
        "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
        "Props"
      ),
    },
    buttonText: {
      default: text("buttonText", "Shop Now", "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: "/assets/storybook/SfBanner/Banner2.jpg",
          desktop: "/assets/storybook/SfBanner/Banner2.jpg",
        },
        "Props"
      ),
    },
    background: {
      default: color("background", "#e1e3e2", "Props"),
    },
  },
  template: `<div style="max-width: 77.5rem">
      <SfBanner 
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #title="{title}">
          CUSTOM TITLE
        </template>
      </SfBanner>
    </div>`,
});

SlotTitle.story = {
  name: "[slot] title",
};

export const SlotDescription = () => ({
  components: { SfBanner },
  props: {
    customClass: {
      default: options(
        "CSS Modifiers",
        {
          "sf-banner--right": "sf-banner--right",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    title: {
      default: text("title", "Eco Sandals", "Props"),
    },
    subtitle: {
      default: text("subtitle", "Summer shoes", "Props"),
    },
    description: {
      default: text(
        "description",
        "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
        "Props"
      ),
    },
    buttonText: {
      default: text("buttonText", "Shop Now", "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: "/assets/storybook/SfBanner/Banner2.jpg",
          desktop: "/assets/storybook/SfBanner/Banner2.jpg",
        },
        "Props"
      ),
    },
    background: {
      default: color("background", "#e1e3e2", "Props"),
    },
  },
  template: `<div style="max-width: 77.5rem">
      <SfBanner 
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #description="{description}">
          CUSTOM DESCRIPTION
        </template>
      </SfBanner>
    </div>`,
});

SlotDescription.story = {
  name: "[slot] description",
};

export const SlotCallToAction = () => ({
  components: { SfBanner },
  props: {
    customClass: {
      default: options(
        "CSS Modifiers",
        {
          "sf-banner--right": "sf-banner--right",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    title: {
      default: text("title", "Eco Sandals", "Props"),
    },
    subtitle: {
      default: text("subtitle", "Summer shoes", "Props"),
    },
    description: {
      default: text(
        "description",
        "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
        "Props"
      ),
    },
    buttonText: {
      default: text("buttonText", "Shop Now", "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: "/assets/storybook/SfBanner/Banner2.jpg",
          desktop: "/assets/storybook/SfBanner/Banner2.jpg",
        },
        "Props"
      ),
    },
    background: {
      default: color("background", "#e1e3e2", "Props"),
    },
  },
  template: `<div style="max-width: 77.5rem">
      <SfBanner 
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #call-to-action="{buttonText}">
          <button>CUSTOM CALL TO ACTION</button>
        </template>
      </SfBanner>
    </div>`,
});

SlotCallToAction.story = {
  name: "[slot] call-to-action",
};

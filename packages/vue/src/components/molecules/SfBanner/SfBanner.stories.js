import { SfBanner } from "@storefront-ui/vue";
import banner from "../../../../public/assets/storybook/SfBanner/Banner2.jpg";

export default {
  title: "Components/Molecules/Banner",
  component: SfBanner,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "banner-display": { value: "flex", control: "text" },
      "banner-justify-content": { value: "", control: "text" },
      "banner-width": { value: "100%", control: "text" },
      "banner-height": { value: "21.4375rem", control: "text" },
      "banner-background": {
        value:
          "var(--banner-background-image, var(--_banner-background-image)) var(--banner-background-color, var(--_banner-background-color, transparent)) no-repeat var(--banner-background-position, 0% 0%)",
        control: "text",
      },
      "banner-background-size": { value: "cover", control: "text" },
      "banner-align-items": { value: "flex-start", control: "text" },
      "banner-wrapper-justify-content": {
        value: "flex-start",
        control: "text",
      },
      "banner-wrapper-flex-direction": { value: "column", control: "text" },
      "banner-padding": { value: "var(--spacer-xl)", control: "text" },
      "banner-wrapper-width": { value: "100%", control: "text" },
      "banner-subtitle-margin": { value: "0", control: "text" },
      "banner-color": {
        value: "var(--banner-subtitle-color, var(--c-dark-variant))",
        control: "text",
      },
      "banner-subtitle-font": { value: "", control: "text" },
      "banner-subtitle-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "banner-subtitle-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "banner-subtitle-font-line-height": { value: "1.4", control: "text" },
      "banner-subtitle-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "banner-subtitle-text-transform": { value: "uppercase", control: "text" },
      "banner-title-margin": {
        value: "var(--spacer-2xs) 0 0 0",
        control: "text",
      },
      "banner-title-font": { value: "", control: "text" },
      "banner-title-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "banner-title-font-size": {
        value: "var(--h2-font-size)",
        control: "text",
      },
      "banner-title-font-line-height": { value: "1.4", control: "text" },
      "banner-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "banner-title-text-transform": { value: "uppercase", control: "text" },
      "banner-description-display": { value: "none", control: "text" },
      "banner-description-margin": {
        value: "var(--spacer-sm) 0 var(--spacer-base) 0",
        control: "text",
      },
      "banner-description-text-align": { value: "left", control: "text" },
      "banner-description-font": { value: "", control: "text" },
      "banner-description-font-weight": {
        value: "var(--font-weight--light)",
        control: "text",
      },
      "banner-description-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "banner-description-font-line-height": { value: "1.6", control: "text" },
      "banner-description-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "banner-display-call-to-action": { value: "none", control: "text" },
      "_banner-background-image": { value: "", control: "text" },
      "banner-background-position": {
        value: "60%",
        control: "text",
      },
      "button-background": {
        value: "transparent",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-box-shadow-opacity": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-color": {
        value: "var(--c-light-variant)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "banner-subtitle-color": {
        value: "var(--c-gray)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-padding": {
        value: "var(--spacer-sm) var(--spacer-xl)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The banner component which features various text levels, a background and a button.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["sf-banner--right", ""],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    title: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Banner title",
      defaultValue: "",
    },
    subtitle: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Banner subtitle (at the top)",
      defaultValue: "",
    },
    description: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Text content",
      defaultValue: "",
    },
    buttonText: {
      control: "text",
      table: {
        category: "Props",
      },
      description:
        "Text that will be displayed inside the button. You can replace the button  with 'call- to - action' slot ",
      defaultValue: "",
    },
    link: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Link to be used in call to action button if necessary",
      defaultValue: "",
    },
    background: {
      control: {
        type: "color",
      },
      table: {
        category: "Props",
      },
      description: "Background color in HEX (eg #FFFFFF)",
      defaultValue: "",
    },
    image: {
      control: "text",
      table: {
        category: "Props",
      },
      description:
        "Background image. Influenced by $banner-background-size, $banner-background-position CSS props.",
    },
    click: {
      action: "Button clicked!",
      table: { category: "Events", type: { summary: null } },
      description: "Emits click event when button is clicked",
    },
  },
  args: {
    image: banner,
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfBanner },
  props: Object.keys(argTypes),
  template: `
  <SfBanner 
    :class="classes"
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :button-text="buttonText"
    :link="link"
    :image="image"
    :background="background"
    @click="click"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Eco Sandals",
  subtitle: "Summer shoes",
  description:
    "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
  buttonText: "Shop Now",
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Eco Sandals",
};

export const OnlyDescription = Template.bind({});
OnlyDescription.args = {
  description:
    "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
};

export const OnlySubtitle = Template.bind({});
OnlySubtitle.args = {
  subtitle: "Summer shoes",
};

export const OnlyCallToAction = Template.bind({});
OnlyCallToAction.args = {
  buttonText: "Shop Now",
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  background: "#e1e3e2",
  ...Common.args,
  image: "",
};

export const OnTheRight = Template.bind({});
OnTheRight.args = {
  ...Common.args,
  background: "#e1e3e2",
  classes: "sf-banner--right",
  image: "",
};

export const WithTitleSlot = (args, { argTypes }) => ({
  components: { SfBanner },
  props: Object.keys(argTypes),
  template: `
  <SfBanner 
  :class="classes"
  :title="title"
  :subtitle="subtitle"
  :description="description"
  :button-text="buttonText"
  :link="link"
  :image="image"
  :background="background">
    <template #title="{title}">
      CUSTOM TITLE
    </template>
  </SfBanner>`,
});
WithTitleSlot.args = { ...Common.args };

export const WithSubtitleSlot = (args, { argTypes }) => ({
  components: { SfBanner },
  props: Object.keys(argTypes),
  template: `
  <SfBanner 
  :class="classes"
  :title="title"
  :subtitle="subtitle"
  :description="description"
  :button-text="buttonText"
  :link="link"
  :image="image"
  :background="background">
    <template #subtitle="{subtitle}">
      <div style="font-size: 1rem">CUSTOM SUBTITLE</div>
    </template>
  </SfBanner>`,
});
WithSubtitleSlot.args = { ...Common.args };

export const WithDescriptionSlot = (args, { argTypes }) => ({
  components: { SfBanner },
  props: Object.keys(argTypes),
  template: `
  <SfBanner 
  :class="classes"
  :title="title"
  :subtitle="subtitle"
  :description="description"
  :button-text="buttonText"
  :link="link"
  :image="image"
  :background="background">
    <template #description="{description}">
      CUSTOM DESCRIPTION
    </template>
  </SfBanner>`,
});
WithDescriptionSlot.args = { ...Common.args };

export const WithCallToActionSlot = (args, { argTypes }) => ({
  components: { SfBanner },
  props: Object.keys(argTypes),
  template: `
  <SfBanner 
  :class="classes"
  :title="title"
  :subtitle="subtitle"
  :description="description"
  :button-text="buttonText"
  :link="link"
  :image="image"
  :background="background">
    <template #call-to-action="{buttonText}">
      <button>CUSTOM CALL TO ACTION</button>
    </template>
  </SfBanner>`,
});
WithCallToActionSlot.args = { ...Common.args };

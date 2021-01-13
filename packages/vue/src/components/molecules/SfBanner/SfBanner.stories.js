import { SfBanner } from "@storefront-ui/vue";
import banner from "../../../../public/assets/storybook/SfBanner/Banner2.jpg";

export default {
  title: "Components/Molecules/Banner",
  component: SfBanner,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["sf-banner--right", ""],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    title: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
    },
    subtitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
    },
    description: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
    },
    buttonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
    },
    link: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
    },
    background: {
      control: {
        type: "color",
      },
      table: {
        category: "Props",
      },
      defaultValue: "",
    },
    image: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    click: {
      action: "Button clicked!",
      table: { category: "Events" },
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

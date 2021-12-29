import { SfMyNewsletter } from "@storefront-ui/vue";

export default {
  title: "Components/Templates/MyNewsletter",
  component: SfMyNewsletter,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "tabs-title-display": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "tabs-content-padding": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "tabs-content-border-width": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-width": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Component with sign in for newsletter. Part of account. Can be filled with other content.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    tabTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "My newsletter",
      description: "Label for tab title",
    },
    tabDescription: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue:
        "Set up your newsletter and we will send you information about new products and trends from the sections you selected every week.",
      description: "Tab description",
    },
    formTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Sections that interest you",
      description: "Label for from title",
    },
    buttonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Save changes",
      description: "Label for button text",
    },
    newsletterSections: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: ["Woman", "Man", "Children"],
      description: "Labels for newsletter sections",
    },
    ["saveChanges"]: {
      name: "save-changes",
      action: "save-changes event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits save-changes event with chosen options when button is clicked",
    },
    ["checkboxClicked"]: {
      name: "checkbox-clicked",
      action: "checkbox-clicked event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits checkbox-clicked event when checkbox is marked",
    },
    ["save-changes"]: {
      table: {
        disable: true,
      },
    },
    ["checkbox-clicked"]: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfMyNewsletter },
  template: `<SfMyNewsletter
      :tabTitle="tabTitle"
      :tabDescription="tabDescription"
      :form-title="formTitle"
      :newsletter-sections="newsletterSections"
      :buttonText="buttonText"
      @save-changes="this['saveChanges']"
      @checkbox-clicked="this['checkboxClicked']"
    />`,
});

export const Common = Template.bind({});

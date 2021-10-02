import { SfMyNewsletter } from "@storefront-ui/vue";

export default {
  title: "Components/Templates/MyNewsletter",
  component: SfMyNewsletter,
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
    saveChanges: {
      action: "Changes saved",
      table: { category: "Events" },
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
      @save-changes="saveChanges"
    />`,
});

export const Common = Template.bind({});

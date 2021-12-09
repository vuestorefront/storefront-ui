import { SfSection } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Section",
  component: SfSection,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "section-margin": {
        value: "calc(var(--spacer-lg) * 2) 0 var(--spacer-lg) 0",
        control: "text",
      },
      "section-content-margin": {
        value: "calc(var(--spacer-lg) * 2) 0 0 0",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "Full-width section for content.",
      },
    },
  },
  argTypes: {
    titleHeading: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      description: "Heading title",
    },
    subtitleHeading: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      description: "Heading subtitle",
    },
    levelHeading: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: 2,
        },
      },
      defaultValue: 2,
      description: "Heading tag level",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Slot to replace section content",
    },
    heading: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Slot for section heading, replacing default SfHeading component",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSection },
  props: Object.keys(argTypes),
  template: `
  <SfSection
    :title-heading="titleHeading"
    :subtitle-heading="subtitleHeading"
    :level-heading="levelHeading">
      <div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
        [#default slot content]
      </div>
  </SfSection>`,
});

export const Common = Template.bind({});
Common.args = {
  titleHeading: "Share your look",
  subtitleHeading: "#YOURLOOK",
};

export const UseHeadingSlot = (args, { argTypes }) => ({
  components: { SfSection },
  props: Object.keys(argTypes),
  template: `
  <SfSection
    :title-heading="titleHeading"
    :subtitle-heading="subtitleHeading"
    :level-heading="levelHeading">
    <template #heading="{levelHeading, titleHeading, subtitleHeading}">
      CUSTOM HEADING
    </template>
    <div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
      [#default slot content]
    </div>
  </SfSection>`,
});
UseHeadingSlot.args = { ...Common.args };

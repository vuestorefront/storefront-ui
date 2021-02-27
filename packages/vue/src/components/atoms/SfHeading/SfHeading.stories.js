import { SfHeading, SfIcon } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Heading",
  component: SfHeading,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-heading--underline",
          "sf-heading--left",
          "sf-heading--right",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    level: {
      control: {
        type: "number",
        range: {
          min: 1,
          max: 6,
        },
      },
      table: {
        category: "Props",
      },
    },
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    description: {
      control: "text",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfHeading },
  props: Object.keys(argTypes),
  template: `
  <SfHeading
    :class="classes"
    :level="level"
    :title="title"
    :description="description"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  level: 3,
  title: "Share your look",
  description: "#YOURLOOK",
};

export const WithLabelSlot = (args, { argTypes }) => ({
  components: { SfHeading, SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfHeading
    :class="classes"
    :level="level"
    :title="title"
    :description="description">
    <template #title="{title}">
      <h2 style="display: flex; align-items: center">
        <SfIcon icon="heart" size="xxs" style="margin-right: 1rem"/> {{title}}
      </h2>
    </template>  
  </SfHeading>`,
});
WithLabelSlot.args = { ...Common.args };

export const WithDescriptionSlot = (args, { argTypes }) => ({
  components: { SfHeading, SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfHeading
    :class="classes"
    :level="level"
    :title="title"
    :description="description">
    <template #description="{description}">
      <div style="display: flex; align-items: center">
        {{description}} <SfIcon icon="gift" size="xxs" style="margin-left: 1rem"/>
      </div>
    </template>        
  </SfHeading>`,
});
WithDescriptionSlot.args = { ...Common.args };

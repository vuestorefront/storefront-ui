import { SfCard } from "@storefront-ui/vue";
import cardImg from "../../../../public/assets/storybook/SfCard/card.jpg";

export default {
  title: "Components/Molecules/Card",
  component: SfCard,
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    titleLevel: {
      control: "number",
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
    link: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    buttonText: {
      control: "text",
      table: {
        category: "Props",
      },
    },
  },
  args: {
    image: cardImg,
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfCard },
  props: Object.keys(argTypes),
  template: `
  <SfCard
    :title="title"
    :titleLevel="titleLevel"
    :image="image"
    :description="description"
    :link="link"
    :buttonText="buttonText"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Baby Care",
  titleLevel: 3,
  description:
    "Read how to take care of your baby, see our products available, clothes and suggestions how stay healthy.",
  link: "",
  buttonText: "Learn more",
};

export const WithDetailsSlot = (args, { argTypes }) => ({
  components: { SfCard },
  props: Object.keys(argTypes),
  template: `
  <SfCard
    :title="title"
    :titleLevel="titleLevel"
    :image="image"
    :link="link"
    :buttonText="buttonText"
  >
    <template #details="{details}">
      <div style="position: absolute; bottom: -30%;">
        CUSTOM DETAILS
      </div>
    </template>
  </SfCard>`,
});
WithDetailsSlot.args = { ...Common.args };

export const WithActionSlot = (args, { argTypes }) => ({
  components: { SfCard },
  props: Object.keys(argTypes),
  template: `
  <SfCard
    :title="title"
    :titleLevel="titleLevel"
    :image="image"
    :description="description"
  >
    <template #action="{action}">CUSTOM ACTION</template>
  </SfCard>`,
});
WithActionSlot.args = { ...Common.args };

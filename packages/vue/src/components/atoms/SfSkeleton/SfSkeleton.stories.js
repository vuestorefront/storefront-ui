import { SfSkeleton } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Skeleton",
  component: SfSkeleton,
  parameters: {
    docs: {
      description: {
        component:
          "The skeleton of the component to show instead of target component during loading.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-skeleton--no-animation",
          "sf-skeleton--fade",
          "sf-skeleton--pulsate",
        ],
      },
      table: {
        category: "CSS modifiers",
      },
      description:
        "Classes to define component animation. Also animation can be disabled by `sf-skeleton--no-animation` class.",
    },
    type: {
      control: {
        type: "select",
        options: ["paragraph", "avatar", "input", "button", "image"],
      },
      table: {
        category: "Props",
      },
      defaultValue: "paragraph",
      description:
        "Defines shape for SfSkeleton. Available values: 'paragraph', 'image', 'button', 'input', 'avatar'",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSkeleton },
  props: Object.keys(argTypes),
  template: `<SfSkeleton :type="type" style="max-width: 500px;" :class="classes" />`,
});

export const Common = Template.bind({});

export const Image = (args, { argTypes }) => ({
  components: { SfSkeleton },
  props: Object.keys(argTypes),
  template: `<SfSkeleton type="image" style="max-width: 500px" :class="classes" />
    `,
});
Image.args = { ...Common.args };

export const ParagrapInputAndButton = (args, { argTypes }) => ({
  components: { SfSkeleton },
  props: Object.keys(argTypes),
  template: `
    <div style="max-width: 500px;">
      <SfSkeleton type="paragraph" :class="classes" />
      <SfSkeleton type="input" :class="classes" />
      <SfSkeleton type="button" style="margin: 0 auto;" :class="classes" />
    </div>`,
});
ParagrapInputAndButton.args = { ...Common.args };

export const AvatarAndParagraphs = (args, { argTypes }) => ({
  components: { SfSkeleton },
  props: Object.keys(argTypes),
  template: `
    <div style="max-width: 300px;">
      <SfSkeleton type="avatar" style="margin: 0 auto;" :class="classes" />
      <SfSkeleton type="paragraph" :class="classes" />
      <SfSkeleton type="paragraph" :class="classes" />
      <SfSkeleton type="paragraph" :class="classes" />
    </div>`,
});
AvatarAndParagraphs.args = { ...Common.args };

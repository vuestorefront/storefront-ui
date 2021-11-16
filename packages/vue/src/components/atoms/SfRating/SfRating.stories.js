import { icons } from "@storefront-ui/shared/icons/icons";
import { SfRating, SfIcon } from "@storefront-ui/vue";
const iconsNames = Object.keys(icons);

export default {
  title: "Components/Atoms/Rating",
  component: SfRating,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "icon-size": {
        value: "0.875rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-color": {
        value: "var(--c-primary)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-color-negative": {
        value: "var(--c-gray-variant)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The component for displaying score-based user ratings. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    max: {
      control: {
        type: "number",
        range: {
          min: 0,
        },
      },
      defaultValue: 5,
      table: {
        category: "Props",
      },
      description: "Maximum score",
    },
    score: {
      control: {
        type: "number",
        range: {
          min: 0,
        },
      },
      table: {
        category: "Props",
      },
      description: "Score (obviously must be less than maximum)",
    },
    icon: {
      control: {
        type: "select",
        options: iconsNames,
      },
      defaultValue: "star",
      table: {
        category: "Props",
      },
      description:
        "It can be single SVG path (string) or array of SVG paths or icon name from our icons list(such as 'star`)",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfRating },
  props: Object.keys(argTypes),
  template: `<SfRating :max="max" :score="score" :icon="icon" />`,
});

export const Common = Template.bind({});
Common.args = {
  score: 3,
};

export const WithMax = Template.bind({});
WithMax.args = {
  ...Common.args,
  max: 6,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Common.args,
  icon: "heart",
};

export const WithIconPositiveSlot = (args, { argTypes }) => ({
  components: { SfRating, SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfRating
    :max="max"
    :score="score"
    :icon="icon">
    <template #icon-positive>
      <SfIcon style="display: inline-block;" color="primary" size="xxs" view-box="0 0 1000 1000" icon="M160.72 103.87c-41.08 10.95-57.06 23.96-74.18 59.11-18.49 38.12-25.33 73.73-20.77 106.36 6.85 45.88 23.51 87.41 58.43 146.07l25.56 42.91-1.6 18.95c-.91 10.5-4.34 31.04-7.53 45.42-3.42 14.38-6.85 36.29-8.22 48.39-1.37 13.01-4.11 26.47-6.85 32.87-7.99 18.03-23.96 37.89-44.96 56.14l-20.31 17.58-14.61 36.06c-22.6 56.15-25.33 64.13-30.13 90.15-2.28 13.24-4.79 25.56-5.48 27.39-1.37 3.42 14.61 23.05 21.68 26.93 5.71 2.97 14.61-1.14 19.86-8.9 2.74-4.33 3.88-11.18 4.11-25.33 0-17.58 1.14-21.68 10.73-45.42 5.93-14.38 13.24-28.76 16.43-31.95 12.55-13.01 28.99-20.31 69.84-30.81 21.91-5.48 42.91-11.41 46.79-12.78 5.71-2.05 7.08-1.83 9.59 1.37 4.11 5.48 3.65 11.64-1.6 39.25-2.51 12.78-4.56 27.84-4.56 33.32 0 20.54 25.56 59.57 68.01 104.07l17.57 18.49 27.16-.68c26.25-.68 27.16-.91 31.73-6.62 3.88-5.48 4.11-6.85 1.37-12.33-4.56-9.36-13.69-15.06-26.7-16.66-11.18-1.6-12.55-2.51-31.04-22.6-20.31-21.91-23.51-27.84-21-40.17 1.83-9.59 23.51-41.31 41.77-61.4 10.27-11.18 17.57-21.91 23.51-35.15 7.99-17.12 9.59-19.17 15.29-19.4 72.81-2.05 93.8-3.88 106.36-8.45l13.01-4.79 20.08 5.71c53.87 14.84 49.53 12.78 50.21 22.59 1.37 15.75-8.67 78.74-15.75 99.51-5.94 17.57-6.62 22.82-6.62 47.02 0 24.42.46 28.07 4.79 33.55 4.57 5.71 5.48 5.93 28.07 5.93 26.25 0 28.76-1.14 28.76-13.92 0-6.62-1.6-9.82-6.85-14.15-3.65-3.2-8.9-6.62-11.41-7.3-9.36-2.97-3.88-18.94 24.88-73.95 36.75-70.75 41.54-75.55 72.58-75.55 10.96 0 21.91-1.37 28.3-3.88l10.73-3.65 14.61 10.5c15.98 11.18 29.21 24.88 29.21 29.9 0 4.33 15.29 17.8 73.04 64.36 26.93 21.91 54.78 44.5 61.62 50.21 6.85 5.94 16.66 12.55 21.91 14.83 5.02 2.28 13.92 8.45 19.63 13.47l10.5 9.13h24.43c23.74 0 24.42-.23 31.04-6.62 8.67-8.9 8.45-14.15-1.37-22.82-7.3-6.39-9.59-7.08-22.6-7.08H945.4l-18.26-18.94c-39.94-41.08-58.2-63.45-73.26-89.93-23.74-41.31-22.82-36.52-23.74-111.61l-.68-66.19 7.76-15.29c8.44-16.66 22.59-31.27 39.71-41.31 8.67-5.25 14.83-6.62 33.55-8.22 12.55-1.14 23.74-2.51 24.88-3.19.91-.69 6.62-9.59 12.55-19.86 7.76-13.01 10.5-20.08 9.58-23.74-.68-2.97-7.99-13.46-15.98-23.51-8.22-10.04-15.52-21-16.43-24.19-2.06-8.45-21-24.88-36.29-31.27l-12.78-5.48.68-22.82c.68-22.37.46-22.82-4.34-22.37-3.19.46-5.25-.91-5.71-3.42-.68-2.97-7.76 2.74-27.16 21.68-23.05 22.6-28.3 26.7-47.7 35.6-16.66 7.99-26.47 14.61-41.54 28.3-10.94 9.84-27.15 21.71-36.05 26.5-14.83 8.22-17.34 8.9-34.46 8.67-10.04 0-30.36-2.05-44.96-4.56-14.61-2.51-36.97-5.71-49.53-7.08-12.55-1.37-51.12-6.85-85.59-12.55-95.17-15.06-102.48-15.98-151.78-15.75-32.64 0-57.52 1.6-87.64 5.25l-42 5.02-12.33-6.39c-15.29-7.76-41.54-31.5-49.3-44.73-13.01-22.14-31.27-88.78-31.27-113.66.23-24.88 11.87-62.08 23.51-74.63 10.73-11.64 37.43-19.86 52.95-16.43 8.22 1.83 17.8 7.99 24.88 15.75 6.62 7.3 16.43 6.39 20.77-2.06s4.34-23.51.23-31.72c-4.34-8.45-21.68-23.96-33.09-29.67-10.95-5.71-35.83-6.4-53.86-1.38z" />
    </template>  
  </SfRating>`,
});
WithIconPositiveSlot.args = { ...Common.args };

export const WithIconNegativeSlot = (args, { argTypes }) => ({
  components: { SfRating, SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfRating
    :max="max"
    :score="score"
    :icon="icon">
    <template #icon-negative>
      <SfIcon style="display: inline-block;" color="secondary" size="xxs" view-box="0 0 441.23 441.23" icon="M440.651 132.739a9.005 9.005 0 00-5.054-5.171L396.39 111.75c-2.435-12.666-12.056-22.81-24.436-26.008l-2.115-24.363a9 9 0 00-15.634-5.267l-10.062 11.099-6.22-21.766a8.998 8.998 0 00-8.341-6.521 8.972 8.972 0 00-8.773 5.928L274.34 173.047l-172.199 8.039c-35.296 2.121-68.735-16.765-85.167-48.119-2.309-4.402-7.748-6.102-12.149-3.794a9 9 0 00-3.794 12.149c14.69 28.03 40.708 47.75 70.541 54.93-3.097 3.609-9.751 12.554-13.642 26.617-4.231 15.291-5.756 39.667 9.801 70.619L42.499 327.76a8.996 8.996 0 00-1.603 6.968l11.105 60.218a9 9 0 008.851 7.367h11.312a9.002 9.002 0 008.855-10.611l-7.032-38.627 74.401-55.853c.131-.099-.126.107 0 0 7.114-5.975 12.278-12.556 15.972-19.322 38.777 6.808 91.844 16.02 125.857 21.498l14.986 95.314a9 9 0 008.891 7.602h9.308a9 9 0 009-9V296.56c8.449-5.77 11.469-15.42 13.472-24.871.063-.297 20.022-92.416 20.022-92.416 3.762.627 7.561.956 11.388.956 26.356 0 50.492-15.431 62.987-40.271a8.998 8.998 0 00.38-7.219z" />
    </template>  
  </SfRating>`,
});

WithIconNegativeSlot.args = { ...Common.args };

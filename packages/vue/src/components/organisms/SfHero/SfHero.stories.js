import { SfHero, SfCimage } from "@storefront-ui/vue";

export default {
  title: "Components/Organisms/Hero",
  component: SfHero,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-hero-item--position-bg-top-right",
          "sf-hero-item--position-bg-bottom-right",
          "sf-hero-item--position-bg-bottom-left",
          "sf-hero-item--align-right",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    sliderOptions: {
      control: "object",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfHero },
  props: Object.keys(argTypes),
  data() {
    return {
      title: "Colorful summer dresses are already in store",
      image: "/assets/storybook/SfHero/hero.png",
      subtitle: "Summer Collection 2019",
      buttonText: "Learn more",
      background: "#ECEFF1",
    };
  },
  template: `
  <SfHero
    :style="{maxWidth: '1240px', margin: 'auto'}"
  >
    <SfHeroItem
        :class="classes"
        :title="title"
        :subtitle="subtitle"
        :button-text="buttonText"
        :image="image"
        :background="background"
    />
    <SfHeroItem
        :class="classes"
        title="Colorful summer dresses are already in store"
        subtitle="Summer Collection 2019"
        button-text="Learn more"
        image="/assets/storybook/SfHero/hero.png"
        background="#FCE4EC"
    />
  </SfHero>`,
});

export const Common = Template.bind({});
Common.args = {};

export const WithCloudinaryImage = (args, { argTypes }) => ({
  components: {
    SfHero,
    SfCimage,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      title: "Colorful summer dresses are already in store",
      subtitle: "Summer Collection 2019",
      buttonText: "Learn more",
      cloud: { cloudName: "demo" },
      alt: "animals",
      placeholder: "SfHero with SfCimage",
      transformations: [
        {
          resize: {
            width: 1240,
            height: 586,
            type: "fill",
          },
          gravity: "center",
        },
      ],
    };
  },
  template: `
  <SfHero
    :style="{maxWidth: '1240px', margin: 'auto'}"
  >
    <SfHeroItem
      :class="classes"
      :title="title"
      :subtitle="subtitle"
      :button-text="buttonText"
    >
      <template #withImgTag>
        <SfCimage
          public-id="dog"
          :cloud="cloud"
          :alt="alt"
          :placeholder="placeholder"
          :transformations="transformations"
        />
      </template>
    </SfHeroItem>
    <SfHeroItem
      :class="classes"
      title="Colorful summer dresses are already in store"
      subtitle="Summer Collection 2019"
      button-text="Learn more"
    >
      <template #withImgTag>
        <SfCimage
          public-id="brown_sheep"
          :cloud="cloud"
          :alt="alt"
          :placeholder="placeholder"
          :transformations="transformations"
        />
      </template>
    </SfHeroItem>
  </SfHero>`,
});
WithCloudinaryImage.args = { ...Common.args };

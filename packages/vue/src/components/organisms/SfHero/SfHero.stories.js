import { SfHero, SfCimage } from "@storefront-ui/vue";
import SfHeroItem from "./_internal/SfHeroItem.vue";

export default {
  title: "Components/Organisms/Hero",
  component: SfHeroItem,
  parameters: {
    docs: {
      description: {
        component:
          "Full-width hero component with autoplay and navigation arrows. Built from main component - SfHero and internal component - SfHeroItem.",
      },
    },
  },
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
      description: "CSS classes to modify component styling",
    },
    sliderOptions: {
      control: "object",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: `{
            type: "slider",
            rewind: true,
            autoplay: 5000,
            perView: 1,
            gap: 0,
          }`,
        },
      },
      defaultValue: {
        type: "slider",
        rewind: true,
        autoplay: 5000,
        perView: 1,
        gap: 0,
      },
      description:
        "Slider options from [glide.js documentation](https://glidejs.com/docs/).",
    },
    title: {
      control: "text",
      table: {
        category: "Props for SfHeroItem component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Hero item title (for SfHeroItem component)",
    },
    subtitle: {
      control: "text",
      table: {
        category: "Props for SfHeroItem component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Hero item subtitle at the top (for SfHeroItem component)",
    },
    buttonText: {
      control: "text",
      table: {
        category: "Props for SfHeroItem component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description:
        "Text that will be displayed inside the button. You can replace the button  with 'call- to - action' slot (for SfHeroItem component)",
    },
    background: {
      control: "text",
      table: {
        category: "Props for SfHeroItem component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Background color (for SfHeroItem component)",
    },
    image: {
      control: "text",
      table: {
        category: "Props for SfHeroItem component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Background image path(for SfHeroItem component)",
    },
    link: {
      control: "text",
      table: {
        category: "Props for SfHeroItem component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description:
        "Link to be used in button if necessary (for SfHeroItem component)",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfHero },
  props: Object.keys(argTypes),
  data() {
    return {
      imageTitle: "Colorful summer dresses are already in store",
      imageUrl: "/assets/storybook/SfHero/hero.png",
      imageSubtitle: "Summer Collection 2019",
      imageButtonText: "Learn more",
      imageBackground: "#ECEFF1",
    };
  },
  template: `
  <SfHero
    :style="{maxWidth: '1240px', margin: 'auto'}"
  >
    <SfHeroItem
        :class="classes"
        :title="imageTitle"
        :subtitle="imageSubtitle"
        :button-text="imageButtonText"
        :image="imageUrl"
        :background="imageBackground"
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
      imageTitle: "Colorful summer dresses are already in store",
      imageSubtitle: "Summer Collection 2019",
      imageButtonText: "Learn more",
      cloud: { cloudName: "demo" },
      alt: "animals",
      placeholder: "blur",
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
      :title="imageTitle"
      :subtitle="imageSubtitle"
      :button-text="imageButtonText"
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

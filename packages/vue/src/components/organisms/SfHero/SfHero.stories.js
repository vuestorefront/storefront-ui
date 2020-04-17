import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  color,
  object,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfHero from "./SfHero.vue";
storiesOf("Organisms|Hero", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfHero },
    props: {
      customClass: {
        default: options(
          "customClass",
          {
            "sf-hero-item--position-bg-top-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-right":
              "sf-hero-item--position-bg-bottom-right",
            "sf-hero-item--position-bg-bottom-left":
              "sf-hero-item--position-bg-bottom-left",
            "sf-hero-item--align-right": "sf-hero-item--align-right",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text(
          "title",
          "Colorful summer dresses are already in store",
          "Props"
        ),
      },
      subtitle: {
        default: text("subtitle", "Summer Collection 2019", "Props"),
      },
      buttonText: {
        default: text("buttonText", "Lear more", "Props"),
      },
      image: {
        default: object(
          "image",
          {
            mobile: "/assets/storybook/SfHero/hero.png",
            desktop: "/assets/storybook/SfHero/hero.png",
          },
          "Props"
        ),
      },
      background: {
        default: color("background", "#ECEFF1", "Props"),
      },
    },
    template: `<SfHero
        :style="{maxWidth: '1240px', margin: 'auto'}">
      <SfHeroItem
          :class="customClass"
          :title="title"
          :subtitle="subtitle"
          :button-text="buttonText"
          :image="image"
          :background="background"
      />
      <SfHeroItem
          title="Colorful summer dresses are already in store"
          subtitle="Summer Collection 2019"
          button-text="Learn more"
          image="/assets/storybook/SfHero/hero.png"
          background="#FCE4EC"
      />
    </SfHero>`,
  }))
  .add("[slot] prev", () => ({
    components: { SfHero },
    props: {
      customClass: {
        default: options(
          "customClass",
          {
            "sf-hero-item--position-bg-top-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-left":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--align-right": "sf-hero-item--position-bg-top-right",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text(
          "title",
          "Colorful summer dresses are already in store",
          "Props"
        ),
      },
      subtitle: {
        default: text("subtitle", "Summer Collection 2019", "Props"),
      },
      buttonText: {
        default: text("buttonText", "Lear more", "Props"),
      },
      image: {
        default: object(
          "image",
          {
            mobile: "/assets/storybook/SfHero/hero.png",
            desktop: "/assets/storybook/SfHero/hero.png",
          },
          "Props"
        ),
      },
      background: {
        default: color("background", "#ECEFF1", "Props"),
      },
    },
    template: `<SfHero
        :style="{maxWidth: '1240px', margin: 'auto'}">
      <template #prev="{go}">
        <button @click="go">PREV</button>
      </template>
      <SfHeroItem 
        :class="customClass"
        :title="title"
        :subtitle="subtitle"
        :button-text="buttonText"
        :image="image"
        :background="background"
      />
      <SfHeroItem
          title="Colorful summer dresses are already in store"
          subtitle="Summer Collection 2019"
          button-text="Learn more"
          image="/assets/storybook/SfHero/hero.png"
          background="#FCE4EC"
      />
    </SfHero>`,
  }))
  .add("[slot] next", () => ({
    components: { SfHero },
    props: {
      customClass: {
        default: options(
          "customClass",
          {
            "sf-hero-item--position-bg-top-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-left":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--align-right": "sf-hero-item--position-bg-top-right",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text(
          "title",
          "Colorful summer dresses are already in store",
          "Props"
        ),
      },
      subtitle: {
        default: text("subtitle", "Summer Collection 2019", "Props"),
      },
      buttonText: {
        default: text("buttonText", "Lear more", "Props"),
      },
      image: {
        default: object(
          "image",
          {
            mobile: "/assets/storybook/SfHero/hero.png",
            desktop: "/assets/storybook/SfHero/hero.png",
          },
          "Props"
        ),
      },
      background: {
        default: color("background", "#ECEFF1", "Props"),
      },
    },
    template: `<SfHero
        :style="{maxWidth: '1240px', margin: 'auto'}">
      <template #next="{go}">
        <button @click="go">NEXT</button>
      </template>
      <SfHeroItem
          :class="customClass"
          :title="title"
          :subtitle="subtitle"
          :button-text="buttonText"
          :image="image"
          :background="background"
      />
      <SfHeroItem
          title="Colorful summer dresses are already in store"
          subtitle="Summer Collection 2019"
          button-text="Learn more"
          image="/assets/storybook/SfHero/hero.png"
          background="#FCE4EC"
      />
    </SfHero>`,
  }))
  .add("[slot] bullets", () => ({
    components: { SfHero },
    props: {
      customClass: {
        default: options(
          "customClass",
          {
            "sf-hero-item--position-bg-top-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-left":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--align-right": "sf-hero-item--position-bg-top-right",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text(
          "title",
          "Colorful summer dresses are already in store",
          "Props"
        ),
      },
      subtitle: {
        default: text("subtitle", "Summer Collection 2019", "Props"),
      },
      buttonText: {
        default: text("buttonText", "Lear more", "Props"),
      },
      image: {
        default: object(
          "image",
          {
            mobile: "/assets/storybook/SfHero/hero.png",
            desktop: "/assets/storybook/SfHero/hero.png",
          },
          "Props"
        ),
      },
      background: {
        default: color("background", "#ECEFF1", "Props"),
      },
    },
    template: `<SfHero
        :style="{maxWidth: '1240px', margin: 'auto'}">
      <template #bullets="{ numberOfPages, page, go }">
        CUSTOM BULLETS
      </template>
      <SfHeroItem
          :class="customClass"
          :title="title"
          :subtitle="subtitle"
          :button-text="buttonText"
          :image="image"
          :background="background"
      />
      <SfHeroItem
          title="Colorful summer dresses are already in store"
          subtitle="Summer Collection 2019"
          button-text="Learn more"
          image="/assets/storybook/SfHero/hero.png"
          background="#FCE4EC"
      />
    </SfHero>`,
  }))
  .add("[slot] subtitle", () => ({
    components: { SfHero },
    props: {
      customClass: {
        default: options(
          "customClass",
          {
            "sf-hero-item--position-bg-top-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-left":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--align-right": "sf-hero-item--position-bg-top-right",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text(
          "title",
          "Colorful summer dresses are already in store",
          "Props"
        ),
      },
      subtitle: {
        default: text("subtitle", "Summer Collection 2019", "Props"),
      },
      buttonText: {
        default: text("buttonText", "Lear more", "Props"),
      },
      image: {
        default: object(
          "image",
          {
            mobile: "/assets/storybook/SfHero/hero.png",
            desktop: "/assets/storybook/SfHero/hero.png",
          },
          "Props"
        ),
      },
      background: {
        default: color("background", "#ECEFF1", "Props"),
      },
    },
    template: `<SfHero
        :style="{maxWidth: '1240px', margin: 'auto'}">
      <SfHeroItem
        :class="customClass"
        :title="title"
        :subtitle="subtitle"
        :button-text="buttonText"
        :image="image"
        :background="background"
      >
        <template #subtitle="{subtitle}">
          CUSTOM SUBTITLE
        </template>
      </SfHeroItem>
    </SfHero>`,
  }))
  .add("[slot] title", () => ({
    components: { SfHero },
    props: {
      customClass: {
        default: options(
          "customClass",
          {
            "sf-hero-item--position-bg-top-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-left":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--align-right": "sf-hero-item--position-bg-top-right",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text(
          "title",
          "Colorful summer dresses are already in store",
          "Props"
        ),
      },
      subtitle: {
        default: text("subtitle", "Summer Collection 2019", "Props"),
      },
      buttonText: {
        default: text("buttonText", "Lear more", "Props"),
      },
      image: {
        default: object(
          "image",
          {
            mobile: "/assets/storybook/SfHero/hero.png",
            desktop: "/assets/storybook/SfHero/hero.png",
          },
          "Props"
        ),
      },
      background: {
        default: color("background", "#ECEFF1", "Props"),
      },
    },
    template: `<SfHero
        :style="{maxWidth: '1240px', margin: 'auto'}">
      <SfHeroItem
          :class="customClass"
          :title="title"
          :subtitle="subtitle"
          :button-text="buttonText"
          :image="image"
          :background="background"
      >
        <template #title="{title}">
          CUSTOM TITLE
        </template>
      </SfHeroItem>
    </SfHero>`,
  }))
  .add("[slot] call-to-action", () => ({
    components: { SfHero },
    props: {
      customClass: {
        default: options(
          "customClass",
          {
            "sf-hero-item--position-bg-top-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-right":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--position-bg-bottom-left":
              "sf-hero-item--position-bg-top-right",
            "sf-hero-item--align-right": "sf-hero-item--position-bg-top-right",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text(
          "title",
          "Colorful summer dresses are already in store",
          "Props"
        ),
      },
      subtitle: {
        default: text("subtitle", "Summer Collection 2019", "Props"),
      },
      buttonText: {
        default: text("buttonText", "Lear more", "Props"),
      },
      image: {
        default: object(
          "image",
          {
            mobile: "/assets/storybook/SfHero/hero.png",
            desktop: "/assets/storybook/SfHero/hero.png",
          },
          "Props"
        ),
      },
      background: {
        default: color("background", "#ECEFF1", "Props"),
      },
    },
    template: `<SfHero
        :style="{maxWidth: '1240px', margin: 'auto'}">
      <SfHeroItem
          :class="customClass"
          :title="title"
          :subtitle="subtitle"
          :button-text="buttonText"
          :image="image"
          :background="background"
      >
        <template #call-to-action="{buttonText}">
          CUSTOM CALL TO ACTION
        </template>
      </SfHeroItem>
    </SfHero>`,
  }));

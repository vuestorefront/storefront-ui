import "./SfImage.stories.scss";
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number, object } from "@storybook/addon-knobs";
import SfImage from "./SfImage.vue";

storiesOf("Atoms|Image", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      src: {
        default: text(
          "src",
          "/assets/storybook/SfImage/product-216x326.jpg",
          "Props"
        ),
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Attributes"),
      },
      srcsets: {
        default: object(
          "srcsets",
          [
            {
              src: "/assets/storybook/SfImage/product-109x164.webp",
              width: 109,
              breakpoint: 480,
            },
            {
              src: "/assets/storybook/SfImage/product-216x326.jpg",
              width: 1200,
              breakpoint: 1200,
            },
            {
              src: "/assets/storybook/SfImage/product-109x164.webp",
              width: "400px",
              breakpoint: 768,
            },
          ],
          "Props"
        ),
      },
      width: {
        default: number("width", 216, {}, "Props"),
      },
      height: {
        default: number("height", 326, {}, "Props"),
      },
    },
    components: { SfImage },
    template: `<SfImage
        :src="src"
        :srcsets="srcsets"
        :width="width"
        :height="height"
        :alt="alt"
      />`,
  }))
  .add("With src only", () => ({
    props: {
      src: {
        default: text(
          "src",
          "/assets/storybook/SfImage/product-216x326.jpg",
          "Props"
        ),
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Attributes"),
      },
      width: {
        default: text("width", "", "Props"),
      },
      height: {
        default: text("height", "", "Props"),
      },
      srcsets: {
        default: object("srcsets", [], "Props"),
      },
    },
    components: { SfImage },
    template: `<SfImage
      :src="src"
      :srcsets="srcsets"
      :width="width"
      :height="height"
      :alt="alt"
    />`,
  }))
  .add("With breakpoints", () => ({
    props: {
      src: {
        default: text(
          "src",
          "/assets/storybook/SfImage/product-216x326.jpg",
          "Props"
        ),
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Attributes"),
      },
      srcsets: {
        default: object(
          "srcsets with breakpoints",
          [
            {
              src: "/assets/storybook/SfImage/product-109x164.webp",
              width: 109,
              breakpoint: 480,
            },
            {
              src: "/assets/storybook/SfImage/product-216x326.jpg",
              width: 1200,
              breakpoint: 1200,
            },
            {
              src: "/assets/storybook/SfImage/product-109x164.webp",
              width: "400px",
              breakpoint: 768,
            },
          ],
          "Props"
        ),
      },
      width: {
        default: text("width", "", "Props"),
      },
      height: {
        default: text("height", "", "Props"),
      },
    },
    components: { SfImage },
    template: `<SfImage
        :src="src"
        :srcsets="srcsets"
        :width="width"
        :height="height"
        :alt="alt"
      />`,
  }))
  .add("With resolutions", () => ({
    props: {
      src: {
        default: text(
          "src",
          "/assets/storybook/SfImage/product-216x326.jpg",
          "Props"
        ),
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Attributes"),
      },
      srcsets: {
        default: object(
          "srcsets with resolutions",
          [
            {
              src: "/assets/storybook/SfImage/product-109x164.webp",
              resolution: 1,
            },
            {
              src: "/assets/storybook/SfImage/product-216x326.jpg",
              resolution: 1.5,
            },
            {
              src: "/assets/storybook/SfImage/product-109x164.webp",
              resolution: 2,
            },
          ],
          "Props"
        ),
      },
      width: {
        default: text("width", "", "Props"),
      },
      height: {
        default: text("height", "", "Props"),
      },
    },
    components: { SfImage },
    template: `<SfImage
        :src="src"
        :srcsets="srcsets"
        :width="width"
        :height="height"
        :alt="alt"
      />`,
  }))
  .add("With accessibility", () => ({
    props: {
      src: {
        default: text(
          "src",
          "/assets/storybook/SfImage/product-216x326.jpg",
          "Props"
        ),
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Attributes"),
      },
      width: {
        default: text("width", "", "Props"),
      },
      height: {
        default: text("height", "", "Props"),
      },
    },
    components: { SfImage },
    template: `<div>
      <p>
        <span style="color:red">Red</span> highlight when no Alt text found.
      </p>
      <SfImage
        :src="src"
        :srcsets="srcsets"
        :width="width"
        :height="height"
        :alt="alt"
      >Text</SfImage>
      </div>`,
  }));

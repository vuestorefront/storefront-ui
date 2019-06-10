// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import notes from "./README.md";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import SfIcon from "./SfIcon.vue";

storiesOf("Atoms|Icon", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-icon--color-primary", "sf-icon--color-secondary"],
            "null"
          )
        },
        path: {
          default: text(
            "path (prop)",
            "M10 0C4.48561 0 0 4.48561 0 10C0 15.5144 4.48561 20 10 20C15.5144 20 20 15.5144 20 10C20 4.48561 15.5144 0 10 0ZM10 1.46341C14.7237 1.46341 18.5366 5.27634 18.5366 10C18.5366 14.7237 14.7237 18.5366 10 18.5366C5.27634 18.5366 1.46341 14.7237 1.46341 10C1.46341 5.27634 5.27634 1.46341 10 1.46341ZM10 2.68293C9.59605 2.68293 9.26829 3.01068 9.26829 3.41463V10C9.26829 10.2706 9.41597 10.5059 9.63415 10.6326L14.9161 13.6814C15.2658 13.8834 15.7126 13.7643 15.9146 13.4146C16.1166 13.065 15.9975 12.6181 15.6478 12.4161L10.7317 9.58078V3.41468C10.7317 3.01073 10.404 2.68298 10 2.68298V2.68293Z"
          )
        },
        color: {
          default: text("color (prop)", "#774dd7")
        },
        size: {
          default: text("size (prop)", "sm")
        }
      },
      components: { SfIcon },
      template: `<sf-icon
        :class="customClass"
        :path="path"
        :color="color"
        :size="size"
      />`
    }),
    {
      info: {
        summary: `
        <p>Component for rendering SVG path as icon.</p>
        <h2> Usage </h2>
        <pre><code>import SfIcon from "@storefrontui/vue/dist/SfIcon.vue"</code></pre>
        `
      },
      notes
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfIcon },
      template: `<sf-icon><img src='assets/cart.svg' alt="Cart icon"></sf-icon>`
    }),
    {
      info: {
        summary: "Use this slot if passing icon SVG path is not enough. **Note** that need to provide also alt attribute or arial-label."
      },
      notes
    }
  )
  .add(
    "[slot] with size",
    () => ({
      components: { SfIcon },
      props: {
        size: {
          default: text("size (prop)", "sm")
        }
      },
      template: `<sf-icon :size="size">
        <img src='assets/cart.svg' alt="Cart icon">
      </sf-icon>`
    }),
    {
      info: {
        summary: ""
      },
      notes
    }
  );

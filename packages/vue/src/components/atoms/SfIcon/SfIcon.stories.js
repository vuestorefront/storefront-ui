// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import { icons } from "@/assets/icons";
import SfIcon from "./SfIcon.vue";

const tableHeaderConfig = ["NAME", "DEFAULT"];

const sizes = [
  ["xxs", "1rem"],
  ["xs", "1.4rem"],
  ["sm", "1.625rem"],
  ["md", "1.8rem"],
  ["lg", "2rem"],
  ["xl", "2.2rem"],
  ["xxl", "2.5rem"],
  ["xl3", "2.8rem"],
  ["xl4", "3.25rem"]
];

const colors = [
  ["primary", "$c-green-primary"],
  ["secondary", "$c-dark-primary"],
  ["white", "$c-white"],
  ["black", "$c-black (!default)"],
  ["accent", "$c-accent-secondary"],
  ["gray-primary", "$c-gray-primary"],
  ["gray-secondary", "$c-gray-secondary"],
  ["light-primary", "$c-light-primary"],
  ["light-secondary", "$c-light-secondary"],
  ["pink-primary", "$c-pink-primary"],
  ["pink-secondary", "$c-pink-secondary"],
  ["yellow-primary", "$c-yellow-primary"],
  ["yellow-secondary", "$c-yellow-secondary"],
  ["blue-primary", "$c-blue-primary"],
  ["blue-secondary", "$c-blue-secondary"]
];

const iconsList = (() => {
  //TODO: Get icon svg files all in black color as default.
  const needInverted = ["add_to_cart", "added_to_cart", "check", "close"];

  return Object.keys(icons).map(icon => [
    icon,
    `<img alt="${icon}" width="20px" height="20px" src="assets/${icon}.svg" ${
      needInverted.includes(icon) ? 'style="filter:invert(1);"' : ""
    }/>`
  ]);
})();

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [
      ".sf-icon--color-<palette>",
      "Change color to a specific preset pallete (see above)"
    ],
    [
      ".sf-icon--size-<size>",
      "Change size to specific preset size (see above)"
    ],
    ["--icon-color: <color>", "Modify CSS Variable for icon color"],
    ["--icon-size: <size>", "Modify CSS Variable for icon size"]
  ]
};

storiesOf("Atoms|Icon", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
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
        },
        viewBox: {
          default: text("viewBox (prop)", "0 0 24 24")
        }
      },
      components: { SfIcon },
      template: `<sf-icon
        :class="customClass"
        :path="path"
        :color="color"
        :size="size"
        :viewBox="viewBox"
      />`
    }),
    {
      info: {
        summary: `
        <p>Component for rendering icon from SVG path(s) or icon name from our icons list.</p>
        <h2> Usage </h2>
        <pre><code>import { SfIcon } from "@storefront-ui/vue"</code></pre>
        <h3>SCSS variables</h3>
        ${generateStorybookTable(
          {
            tableHeadConfig: tableHeaderConfig,
            tableBodyConfig: sizes
          },
          "`$sf-icon-sizes` - map of icon sizes"
        )} 
        ${generateStorybookTable(
          {
            tableHeadConfig: tableHeaderConfig,
            tableBodyConfig: colors
          },
          "`$sf-icon-colors` - map of icon colors"
        )}   
        ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
        `
      }
    }
  )
  .add(
    "[path] - Icons list",
    () => ({
      props: {
        path: {
          default: text("path (prop)", "add_to_cart")
        },
        color: {
          default: text("color (prop)", "pink-primary")
        },
        size: {
          default: text("size (prop)", "sm")
        },
        viewBox: {
          default: text("viewBox (prop)", "0 0 24 24")
        }
      },
      components: { SfIcon },
      template: `<sf-icon
        :path="path"
        :color="color"
        :size="size"
        :viewBox="viewBox"
      />`
    }),
    {
      info: {
        summary: `
        <p>Choose an icon from this list and pass it as path for rendering.</p>
        <h2> Icons list </h2>
        ${generateStorybookTable(
          {
            tableHeadConfig: tableHeaderConfig,
            tableBodyConfig: iconsList
          },
          "`path` - icon name or SVG path(s)"
        )}
        `
      }
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfIcon },
      template: `<sf-icon><img src='assets/empty_cart.svg' alt="Cart icon"></sf-icon>`
    }),
    {
      info: {
        summary:
          "Use this slot if passing icon SVG path is not enough. **Note** that need to provide also alt attribute or arial-label."
      }
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
        <img src='assets/empty_cart.svg' alt="Cart icon">
      </sf-icon>`
    }),
    {
      info: {
        summary:
          "Render custom image as icon using slot, and pass `size` to customize the icon's size."
      }
    }
  );

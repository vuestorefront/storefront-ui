// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, object, text } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfStore from "./SfStore.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$sf-store__media-width", "5.125rem", "Store card media width"],
    ["$sf-store__media-height", "7rem", "Store card media height"],
    ["$sf-store__media-margin", "0 1.25rem 0 0", "Store card media margin"],
    [
      "$sf-store__item-font-size",
      "$font-size-extra-small-desktop",
      "Store card font size"
    ],
    [
      "$sf-store__name-font-size",
      "$font-size-regular-desktop",
      "Store name font size"
    ],
    [
      "$sf-store__name-font-weight",
      "$h1-font-weight-desktop",
      "Store name font weight"
    ],
    ["$sf-store__color-primary", "$c-dark-primary", "Store card primary color"],
    [
      "$sf-store__color-secondary",
      "$c-gray-secondary",
      "Store card secondary color"
    ],
    [
      "$sf-store__font-family-primary",
      "$body-font-family-primary",
      "Store card primary font family"
    ],
    [
      "$sf-store__font-family-secondary",
      "$body-font-family-secondary",
      "Store card secondary font family"
    ]
  ]
};

storiesOf("Molecules|Store", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        latlng: {
          default: object("latlng", [47.5104387, 19.0444433])
        },
        name: {
          default: text("name", "My Store")
        },
        address: {
          default: text("address", "Store address 100228 NY")
        },
        phone: {
          default: text("phone", "(70) 881 9463")
        },
        email: {
          default: text("email", "some@email.com")
        },
        picture: {
          default: text("picture", "https://picsum.photos/200/300")
        }
      },
      components: { SfStore },
      template: `
        <sf-store :name="name" :picture="picture" :address="address" :phone="phone" :email="email" :latlng="latlng" />
      `
    }),
    {
      info: {
        summary: `
          \`SfStore\` is a part of SfStoreLocator, and it allow to add stores to the map and the list at the same time.
          Deeply configurable both with props and scss variables
          <h2> Usage </h2>
          <pre><code>import { SfStore } from "@storefrontui/vue"</code></pre>
          ${generateStorybookTable(scssTableConfig, "SCSS variables")}
          `
      }
    }
  );

// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfCollectedProduct from "./SfCollectedProduct.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$collected-product-max-width",
      "350px",
      "Maximum width on Collected Product"
    ],
    [
      ("$collected-product-box-shadow--hover",
      "0px 4px 35px rgba(168, 172, 176, 0.19)",
      "Shadow for Collected Product visible on desktop")
    ],
    [
      ("$collected-product__remove-size",
      "1.625rem",
      "Remove icon size on mobile")
    ],
    [
      ("$collected-product__remove-size-desktop",
      "0.875rem",
      "Remove icon size on desktop")
    ],
    [
      ("$collected-product__remove-background",
      "$c-gray-variant",
      "Remove icon background on desktop")
    ],
    [
      ("$collected-product__remove-background--hover",
      "$c-dark-variant",
      "Remove icon background hover on desktop")
    ],
    [
      ("$collected-product__select-quantity-width",
      "3.125rem",
      "Quantity selector width")
    ],
    [
      ("$collected-product__select-quantity-height",
      "1.875rem",
      "Quantity selector height")
    ]
  ]
};

storiesOf("Organisms|CollectedProduct", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      data() {
        return {
          qty: "1"
        };
      },
      props: {
        image: {
          default: text(
            "image (prop)",
            "/assets/storybook/homepage/productB.jpg"
          )
        },
        title: {
          default: text("title (prop)", "Product name")
        },
        regularPrice: {
          default: text("regularPrice (prop)", "$10,99")
        },
        specialPrice: {
          default: text("specialPrice (prop)", "$5,99")
        },
        stock: {
          default: number("stock (prop)", 99)
        }
      },
      components: { SfCollectedProduct },
      template: `    <SfCollectedProduct
        :image="image"
        :title="title"
        :specialPrice="specialPrice"
        :regularPrice="regularPrice"
        :stock="stock"
        v-model="qty">
        <template #configuration>
          <div :style="{marginTop: '20px'}">
            @slot configuration
          </div>
        </template>
        <template #actions>
          <div :style="{marginTop: 'auto'}">
            @slot actions
          </div>
        </template>
      </SfCollectedProduct>`
    }),
    {
      info: {
        summary: `
        <p>Component for rendering Collected Product.</p>
        <h2> Usage </h2>
        <pre><code>import { SfCollectedProduct } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS Variables")}`
      }
    }
  );

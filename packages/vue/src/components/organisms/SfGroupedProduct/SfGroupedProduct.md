# component-description

Grouped Product component

# common-usage

<br>
<SfGroupedProduct>
  <SfGroupedProductItem
    qty="2"
    image="https://deploy-preview-415--storefrontui-storybook.netlify.com/assets/storybook/product-white.png"
    title="Leave white brooch"
    :stock="10"
    price-regular="$10.99"
    price-special=""
  >
    <template #details>
      <div style="color: #a3a5ad">MSD23-345-324</div>
    </template>
    <template #configuration>
      <div style="margin-left: auto;">
        <div>White</div>
      </div>
    </template>
  </SfGroupedProductItem>
  <SfGroupedProductItem
    qty="4"
    image="https://deploy-preview-415--storefrontui-storybook.netlify.com/assets/storybook/product-black.png"
    title="Leave black brooch"
    :stock="10"
    price-regular="$10.99"
    price-special=""
  >
    <template #details>
      <div style="color: #a3a5ad">MSD23-345-324</div>
    </template>
    <template #configuration>
      <div style="margin-left: auto;">
        <div>Black</div>
      </div>
    </template>
  </SfGroupedProductItem>
</SfGroupedProduct>

```html
<template>
  <SfGroupedProduct :settings="{ type: 'slider' }">
    <SfGroupedProductItem
    v-for="(product, key) in groupedProducts"
    :key="key"
    v-model="product.qty"
    :image="product.image"
    :title="product.title"
    :stock="product.stock"
    :price-regular="product.regularPrice"
    :price-special="product.specialPrice"
    >
  </SfGroupedProductItem>
</SfGroupedProduct>
</template>
<script>
  import { SfGroupedProduct } from "@storefront-ui/vue";
  export default {
    components: {
      SfGroupedProduct
    },
    data() {
      return {
        groupedProducts: [
        {
          image: "/assets/storybook/product-white.png",
          title: "Leave white brooch",
          sku: "MSD23-345-324",
          priceSpecial: "",
          priceRegular: "$10,99",
          stock: 99,
          qty: "0",
          attributes: [
          {
            name: "color",
            value: "White"
          }
          ]
        },
        {
          image: "/assets/storybook/product-green.png",
          title: "Leave green brooch",
          sku: "MSD23-345-325",
          priceSpecial: "",
          priceRegular: "$11,99",
          qty: "0",
          stock: 99,
          attributes: [
          {
            name: "color",
            value: "Green"
          }
          ]
        },
        ]
      };
    }
  };
</script>
```

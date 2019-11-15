# component-description
Grouped Product component

# common-usage
<br>
<SfGrupedProduct>
  <SfGroupedProductItem
    qty="2"
    image="https://deploy-preview-415--storefrontui-storybook.netlify.com/assets/storybook/product-white.png"
    title="Leave white brooch"
    :stock="10"
    price-regular="$10.99"
    price-special=""
  />
  <SfGroupedProductItem
      qty="4"
      image="https://deploy-preview-415--storefrontui-storybook.netlify.com/assets/storybook/product-black.png"
      title="Leave black brooch"
      :stock="10"
      price-regular="$10.99"
      price-special=""
    />
</SfGrupedProduct>

```html 
<template>
  <SfGroupedProduct>
    <SfGroupedProductItem
    v-for="(product, key) in groupedProducts"
    :key="key"
    v-model="product.qty"
    :image="product.image"
    :title="product.title"
    :stock="product.stock"
    :price-regular="product.regularPrice"
    :price-special="product.specialPrice">
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
          // some container for grouped product items
        ]
      }
    }
  }
</script>
```

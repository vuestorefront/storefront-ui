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
    regular-price="$10.99"
    special-price=""
  />
  <SfGroupedProductItem
      qty="4"
      image="https://deploy-preview-415--storefrontui-storybook.netlify.com/assets/storybook/product-black.png"
      title="Leave black brooch"
      :stock="10"
      regular-price="$10.99"
      special-price=""
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
    :regular-price="product.regularPrice"
    :special-price="product.specialPrice">
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

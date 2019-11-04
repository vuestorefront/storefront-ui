# component-description
Grouped Product component.

# common-usage
<br>
<SfGroupedProduct>
  <SfGroupedProductItem
  qty="1"
  image="https://deploy-preview-415--storefrontui-storybook.netlify.com/assets/storybook/product-white.png"
  title="Leave white brooch"
  sku="MSD23-345-324"
  regularPrice="$10,99"
  stock="10"
  :attributes="[{color: 'White'}]"/>
  <SfGroupedProductItem
    qty="1"
    image="https://deploy-preview-415--storefrontui-storybook.netlify.com/assets/storybook/product-black.png"
    title="Leave black brooch"
    sku="MSD23-345-325"
    regularPrice="$10,99"
    stock="10"
    :attributes="[{color: 'Black'}]"/>
</SfGroupedProduct>

```html 
<template>
 <SfGroupedProduct v-model="groupedProduct">
   <SfGroupedProductItem 
     v-for="(product, key) in groupedProduct"
     :key="key"
     :qty="product.qty"
     :image="product.image"
     :placeholderImage="imageSetup.placeholderImage"
     :lazyImage="imageSetup.lazyImage"
     :pictureBreakpointImage="imageSetup.pictureBreakpointImage"
     :title="product.title"
     :sku="product.sku"
     :specialPrice="product.specialPrice"
     :regularPrice="product.regularPrice"
     :stock="product.stock"
    :attributes="product.attributes"/>
 </SfGroupedProduct>
</template>

<script>
import { SfGroupedProduct } from '@storefront-ui/vue'

export default {
  components: { SfGroupedProduct },
  data() {
    return {
      groupedProduct: [
        // some container for you products, used for v-model
      ],
      imageSetup: {
        placeholderImage: "",
        lazyImage: true,
        pictureBreakpointImage: 576
      }
    };
  }
}
</script>
```

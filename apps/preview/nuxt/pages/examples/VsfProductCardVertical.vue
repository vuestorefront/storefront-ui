<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfProductCardVertical
        :image="imageModel"
        :alt="altModel"
        :label="labelModel"
        :price="priceModel"
        :oldPrice="oldPriceModel"
        :size="sizeModel"
        :link="linkModel"
        :badge="badgeModel"
        :outOfStock="outOfStockModel"
        :inCart="inCartModel"
        :description="descriptionModel"
        :ratingValue="ratingValueModel"
        :maxRatingValue="maxRatingValueModel"
        :reviews="reviewsModel"
        :withButton="withButtonModel"
        :addToCartLabel="addToCartLabelModel"
        :seeSimilarLabel="seeSimilarLabelModel"
        @seeSimilar="handleSeeSimilar"
        @addToCart="handleAddToCart"
        @addToWishlist="handleAddToWishlist"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VsfProductCardVertical, { VsfProductCardVerticalSizes } from '../../output/blocks/VsfProductCardVertical/VsfProductCardVertical.vue'
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import img from '../../assets/images/product-card.webp';

export default defineComponent({
  name: 'VsfProductCardVerticalExample',
  components: {
    VsfProductCardVertical,
    Controls,
  },
  setup() {
    const handleAddToCart = () => console.log('Added to cart!');
    const handleAddToWishlist = () => console.log('Added to wishlist!');
    const handleSeeSimilar = () => console.log('See similar clicked!');

    return prepareControls(
      [
      {
        title: 'Image',
        type: 'text',
        propType: "string",
        modelName: 'imageModel',
      },
      {
        title: 'Alt',
        type: 'text',
        propType: "string",
        modelName: 'altModel',
      },
      {
        title: 'Label',
        type: 'text',
        propType: "string",
        modelName: 'labelModel',
      },
      {
        title: 'Price',
        type: 'text',
        propType: "string",
        modelName: 'priceModel',
      },
      {
        title: 'Old Price',
        type: 'text',
        propType: "string",
        modelName: 'oldPriceModel',
      },
      {
        title: 'size',
        type: 'select',
        modelName: 'sizeModel',
        options: Object.keys(VsfProductCardVerticalSizes),
        propDefaultValue: VsfProductCardVerticalSizes.base,
        propType: 'string',
      },
      {
        title: 'Link',
        type: 'text',
        propType: "string",
        modelName: 'linkModel',
      },
      {
        title: 'badge',
        type: 'text',
        propType: "string",
        modelName: 'badgeModel',
      },
      {
        title: 'description',
        type: 'text',
        propType: "string",
        modelName: 'descriptionModel',
      },
      {
        title: 'Add to cart label',
        type: 'text',
        propType: "string",
        modelName: 'addToCartLabelModel',
      },
      {
        title: 'See similar label',
        type: 'text',
        propType: "string",
        modelName: 'seeSimilarLabelModel',
      },
      {
        title: 'In cart',
        type: 'text',
        propType: "number",
        modelName: 'inCartModel',
      },
      {
        title: 'Out of stock',
        type: 'boolean',
        propType: "boolean",
        modelName: 'outOfStockModel',
      },
      {
        title: 'With button',
        type: 'boolean',
        propType: "boolean",
        modelName: 'withButtonModel',
      },
    ],
      {
        imageModel: img,
        altModel: ref('Product image'),
        labelModel: ref('The standard chunk of Lorem Ipsum'),
        priceModel: ref('$2,345.99'),
        oldPriceModel: ref('$3,132.99'),
        sizeModel: ref('sm'),
        linkModel: ref('/'),
        badgeModel: ref('30%'),
        outOfStockModel: ref(false),
        inCartModel: ref(0),
        descriptionModel: ref('There are many variations of passages of Lorem Ipsum available'),
        ratingValueModel: ref(3),
        maxRatingValueModel: ref(5),
        reviewsModel: ref(-1),
        withButtonModel: ref(false),
        addToCartLabelModel: ref('Add'),
        seeSimilarLabelModel: ref('See similar'),
        handleAddToCart,
        handleAddToWishlist,
        handleSeeSimilar,
      },
    );
  },
});
</script>

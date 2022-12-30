<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfProductCard
        :image-src="imageSrc"
        :image-attr="imageAttr"
        :title="title"
        :price="price"
        :old-price="oldPrice"
        :size="size"
        :link="link"
        :link-tag="componentToShow"
        :out-of-stock="outOfStock"
        :out-of-stock-label="outOfStockLabel"
        :in-cart="inCart"
        :description="description"
        :rating-value="ratingValue"
        :max-rating-value="maxRatingValue"
        :reviews-amount="reviewsAmount"
        :similar-label="similarLabel"
        :add-to-cart-label="addToCartLabel"
        :badge-text="badgeText"
        :vertical="vertical"
        :aria-label-add-to-wishlist="ariaLabelAddToWishlist"
        :aria-label-badge="ariaLabelBadge"
        :aria-label-add-to-basket="ariaLabelAddToBasket"
        @add-to-cart="handleAddToCart"
        @add-to-wishlist="handleAddToWishlist"
        @see-similar="handleSeeSimilar"
        @see-reviews="handleReviewsClick"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch, resolveComponent, computed } from 'vue';
import {
  VsfProductCard,
  VsfProductCardSizes,
  VsfProductCardLinkTags,
} from '@storefront-ui/vue/components/VsfProductCard/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import productImage from '../fixture/product-card.webp';

export default defineComponent({
  name: 'VsfProductCardExample',
  components: {
    VsfProductCard,
    Controls,
  },

  setup() {
    const newAddToCartLabel = ref('');
    const windowWidth = ref(0);
    const onWindowResize = (): void => {
      windowWidth.value = window.innerWidth;
    };
    onMounted(() => {
      onWindowResize();
      window.addEventListener('resize', onWindowResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', onWindowResize);
    });

    watch(
      windowWidth,
      (newWindowWidth) => {
        if (newWindowWidth < 768) {
          newAddToCartLabel.value = 'Add';
        } else {
          newAddToCartLabel.value = 'Add to cart';
        }
      },
      { immediate: true },
    );

    const componentToShow = computed(() => {
      return resolveComponent('a');
    });

    return {
      handleAddToCart: (e: Event) => {
        console.log('Added to cart: ', e);
      },
      handleAddToWishlist: (e: Event) => {
        console.log('Added to wishlist: ', e);
      },
      handleSeeSimilar: (e: Event) => {
        console.log('See similar clicked: ', e);
      },
      handleReviewsClick: (e: Event) => {
        console.log('Reviews clicked: ', e);
      },
      componentToShow,
      ...prepareControls(
        [
          {
            type: 'text',
            propType: 'string',
            modelName: 'imageSrc',
          },
          {
            type: 'json',
            propType: 'object',
            modelName: 'imageAttr',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'title',
          },
          {
            type: 'text',
            propType: 'number',
            modelName: 'ratingValue',
          },
          {
            type: 'text',
            propType: 'number',
            modelName: 'maxRatingValue',
          },
          {
            type: 'text',
            propType: 'number',
            modelName: 'reviewsAmount',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'price',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'oldPrice',
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfProductCardSizes),
            propDefaultValue: VsfProductCardSizes.responsive,
            propType: 'string',
          },
          {
            type: 'select',
            modelName: 'linkTag',
            options: Object.keys(VsfProductCardLinkTags),
            propDefaultValue: VsfProductCardLinkTags.a,
            description: 'Explicitly set component tag',
          },
          {
            type: 'json',
            propType: 'string, object',
            modelName: 'link',
            description: 'It can be a string for <a> element or an object for <NuxtLink> properties',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'description',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'inCart',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'addToCartLabel',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'similarLabel',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'badgeText',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'outOfStock',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'outOfStockLabel',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'vertical',
            propDefaultValue: true,
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'ariaLabelAddToWishlist',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'ariaLabelBadge',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'ariaLabelAddToBasket',
          },
        ],
        {
          imageSrc: ref(productImage),
          imageAttr: ref({ alt: 'image', loading: 'lazy' }),
          title: ref('The standard chunk of Lorem Ipsum'),
          price: ref('$2,345.99'),
          oldPrice: ref('$3,132.99'),
          size: ref(VsfProductCardSizes.responsive),
          link: ref('/'),
          linkTag: ref(VsfProductCardLinkTags.a),
          outOfStock: ref(false),
          outOfStockLabel: ref('Out of stock'),
          inCart: ref(''),
          description: ref('There are many variations of passages of Lorem Ipsum available'),
          ratingValue: ref(0),
          maxRatingValue: ref(5),
          reviewsAmount: ref(123),
          addToCartLabel: ref(newAddToCartLabel),
          similarLabel: ref('See similar'),
          badgeText: ref('Sale'),
          vertical: ref(true),
          ariaLabelAddToWishlist: ref('Add The standard chunk of Lorem Ipsum to wishlist'),
          ariaLabelBadge: ref('-30% discount'),
          ariaLabelAddToBasket: ref('Add The standard chunk of Lorem Ipsum to the basket'),
        },
      ),
    };
  },
});
</script>

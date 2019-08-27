<template>
  <div id="product">
    <SfSection titleHeading="Match it with">
      <SfCarousel :settings="{ gap: 0 }" class="product-carousel">
        <SfCarouselItem v-for="(product, i) in products" :key="i">
          <SfProductCard
            :title="product.title"
            :image="product.image"
            :regular-price="product.price.regular"
            :rating="product.rating.score"
            class="product-card"
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
    <SfSection titleHeading="You might also like">
      <SfCarousel :settings="{ gap: 0 }" class="product-carousel">
        <SfCarouselItem v-for="(product, i) in products" :key="i">
          <SfProductCard
            :title="product.title"
            :image="product.image"
            :regular-price="product.price.regular"
            :rating="product.rating.score"
            class="product-card"
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
  </div>
</template>
<script>
import { SfSection, SfCarousel, SfProductCard } from "@storefront-ui/vue";

export default {
  name: "Product",
  data() {
    return {
      products: [
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productA.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productC.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productA.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productC.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productA.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        }
      ]
    };
  },
  components: {
    SfSection,
    SfCarousel,
    SfProductCard
  }
};
</script>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefront-ui/shared/styles/helpers/visibility";

#product {
  max-width: 1240px;
  margin: auto;
  padding: 0 $spacer-big;
  box-sizing: border-box;
  @media screen and (min-width: $desktop-min) {
    padding: 0;
  }
}
</style>

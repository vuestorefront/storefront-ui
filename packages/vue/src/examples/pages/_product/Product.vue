<template>
  <div id="product">
    <div class="product-info">
      <div class="product-gallery"></div>
      <div class="product-details">
        <h1>Cashmere Sweater</h1>
        <div class="product-details__sub">
          <SfPrice regular-price="$ 50,00" />
          <SfRating score="4" />
        </div>
        <p class="product-details__description">
          Find stunning women cocktail and party dresses. Stand out in lace and
          metallic cocktail dresses and party dresses from all your favorite
          brands.
        </p>
      </div>
    </div>

    <SfSection :heading="{ title: 'You may also like' }">
      <SfCarousel>
        <SfCarouselItem v-for="i in 6" :key="i">
          <SfProductCard
            title="Cream Beach Bag"
            regular-price="10,99 $"
            :rating="5"
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
  </div>
</template>

<script>
import {
  SfCarousel,
  SfProductCard,
  SfPrice,
  SfRating,
  SfSection
} from "../../../../index.js";

export default {
  data() {
    return {};
  },
  components: {
    SfCarousel,
    SfProductCard,
    SfSection,
    SfPrice,
    SfRating
  }
};
</script>

<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefront-ui/shared/styles/helpers/visibility";

#product {
  box-sizing: border-box;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
}
.product-info {
  display: flex;
  align-items: flex-start;
}
.product-gallery,
.product-details {
  width: 50%;
  display: inline-block;
}

.product-details {
  &__sub {
    display: flex;
    justify-content: space-between;
  }
}
</style>

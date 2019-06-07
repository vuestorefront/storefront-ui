<template>
  <div id="product">
    <div class="product-info">
      <div class="product-gallery">
      </div>
      <div class="product-details">
        <h1>Cashmere Sweater</h1>
        <div class="product-details__sub">
          <SfPrice regular-price="$ 50,00" />
          <SfRating score="4" />
        </div>
        <p class="product-details__description">
          Find stunning women cocktail and party dresses. 
          Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
        </p>
      </div>
    </div>

    <div class="responsive-section">
      <h2>Match it with</h2>
      <div class="responsive-section__content">
        <SfCarousel>
        <SfCarouselItem
            v-for="i in 6"
            :key="i"
          >
          <SfProductCard
            title="Cream Beach Bag"
            :price="{ regularPrice: '10,99 $' }"
            :rating="{ max: 5, score: 4 }"
          />
        </SfCarouselItem>
        </SfCarousel>
      </div>
    </div>
    <div class="responsive-section">
      <h2>You may also like</h2>
      <div class="responsive-section__content">
        <SfCarousel>
        <SfCarouselItem
            v-for="i in 6"
            :key="i"
          >
          <SfProductCard
            title="Cream Beach Bag"
            :price="{ regularPrice: '10,99 $' }"
            :rating="{ max: 5, score: 4 }"
          />
        </SfCarouselItem>
        </SfCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import SfCarousel from '@/components/organisms/SfCarousel/SfCarousel.vue'
import SfProductCard from '@/components/molecules/SfProductCard/SfProductCard.vue'
import SfPrice from '@/components/atoms/SfPrice/SfPrice.vue'
import SfRating from '@/components/atoms/SfRating/SfRating.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    SfCarousel,
    SfProductCard,
    SfPrice,
    SfRating
  }
}
</script>

<style lang="scss" scoped>
@import "../../../css/variables.scss";
@import "../../../utilities/css-helpers/visibility.scss";

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
.product-gallery, .product-details {
  width: 50%;
  display: inline-block;
}

.product-details {
  &__sub {
    display: flex;
    justify-content: space-between;
  }
}

.responsive-section {
  h2 {
    text-align: center
  }
  padding: $spacer-extra-big 0;
}

</style>

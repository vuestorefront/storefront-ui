<template>
  <div id="category">
    <transition name="slide-left">
      <SfSidebar
        v-show="isFilterSidebarOpen"
        @close="isFilterSidebarOpen = false"
        >Filters sidebar</SfSidebar
      >
    </transition>
    <div class="row">
      <div class="col-md-2">
        <h3>Clothing</h3>
        <SfList>
          <SfListItem>
            <SfFilter label="All" value="all" count="280" />
          </SfListItem>
          <SfListItem>
            <SfFilter label="Skirts" value="skirts" count="23" />
          </SfListItem>
          <SfListItem>
            <SfFilter label="Sweaters" value="sweaters" count="54" />
          </SfListItem>
          <SfListItem>
            <SfFilter label="Dresses" value="dresses" count="34" />
          </SfListItem>
          <SfListItem>
            <SfFilter label="T-shirts" value="t-shirts" count="56" />
          </SfListItem>
          <SfListItem>
            <SfFilter label="Pants" value="pants" count="7" />
          </SfListItem>
          <SfListItem>
            <SfFilter label="Underwear" value="underwear" count="12" />
          </SfListItem>
        </SfList>
        <h3>Accesorries</h3>
        <h3>Shoes</h3>
      </div>
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-3" v-for="i in 14" :key="i">
            <SfProductCard
              title="Cream Beach Bag"
              :price="{ regularPrice: '10,99 $' }"
              :rating="{ max: 5, score: 4 }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SfSidebar from "@/components/molecules/SfSidebar/SfSidebar.vue";
import SfButton from "@/components/atoms/SfButton/SfButton.vue";
import SfList from "@/components/molecules/SfList/SfList.vue";
import SfFilter from "@/components/molecules/SfFilter/SfFilter.vue";
import SfProductCard from "@/components/molecules/SfProductCard/SfProductCard.vue";

import "./flexboxgrid.css";

export default {
  data() {
    return {
      isFilterSidebarOpen: true,
      product: {
        max: 5,
        score: 4
      }
    };
  },
  components: {
    SfSidebar,
    SfList,
    SfFilter,
    SfProductCard
  }
};
</script>

<style>
#category {
  box-sizing: border-box;
  max-width: 1200px;
  margin: auto;
}
</style>

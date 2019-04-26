<template>
  <div id="category">
    <div class="navbar">
      <div class="navbar__title desktop-only">
        <h2>Categories</h2>
      </div>
      <div class="navbar__controls">
        <SfButton
          class="navbar__filters-btn"
          :class="{ 'navbar__filters-btn--active': isFilterSidebarOpen }"
          @click="isFilterSidebarOpen = true"
        >
          <FiltersIcon />
          Filters
        </SfButton>
      </div>
    </div>

    <div class="main">
      <div class="sidebar desktop-only">
        <h3>Clothing</h3>
        <SfList class="sidebar__category-list">
          <SfListItem>
            <SfMenuItem label="All" count="280" />
          </SfListItem>
          <SfListItem>
            <SfMenuItem label="Skirts" count="23" />
          </SfListItem>
          <SfListItem>
            <SfMenuItem label="Sweaters" count="54" />
          </SfListItem>
          <SfListItem>
            <SfMenuItem label="Dresses" count="34" />
          </SfListItem>
          <SfListItem>
            <SfMenuItem label="T-shirts" count="56" />
          </SfListItem>
          <SfListItem>
            <SfMenuItem label="Pants" count="7" />
          </SfListItem>
          <SfListItem>
            <SfMenuItem label="Underwear" count="12" />
          </SfListItem>
        </SfList>
        <h3>Accesorries</h3>
        <h3>Shoes</h3>
      </div>
      <div class="products">
        <div class="grid">
          <div class="grid__item" v-for="i in 6" :key="i">
            <SfProductCard
              title="Cream Beach Bag"
              :price="{ regularPrice: '10,99 $' }"
              :rating="{ max: 5, score: 4 }"
            />
          </div>
        </div>
        <div class="pagination">
          <SfPagination :current.sync="currentPage" :total="20" :visible="5" />
        </div>
      </div>
    </div>

    <transition name="slide-left">
      <SfSidebar
        v-show="isFilterSidebarOpen"
        @close="isFilterSidebarOpen = false"
      >
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
      </SfSidebar>
    </transition>
  </div>
</template>

<script>
import SfSidebar from "@/components/molecules/SfSidebar/SfSidebar.vue";
import SfButton from "@/components/atoms/SfButton/SfButton.vue";
import SfList from "@/components/organisms/SfList/SfList.vue";
import SfMenuItem from "@/components/molecules/SfMenuItem/SfMenuItem.vue";
import SfFilter from "@/components/molecules/SfFilter/SfFilter.vue";
import SfProductCard from "@/components/molecules/SfProductCard/SfProductCard.vue";
import SfPagination from "@/components/molecules/SfPagination/SfPagination.vue";
import FiltersIcon from "./components/FiltersIcon.vue";

export default {
  data() {
    return {
      isFilterSidebarOpen: false,
      currentPage: 2
    };
  },
  components: {
    SfButton,
    SfSidebar,
    SfList,
    SfFilter,
    SfProductCard,
    SfPagination,
    SfMenuItem,
    FiltersIcon
  }
};
</script>

<style lang="scss" scoped>
@import "../../../css/variables.scss";
@import "../../../utilities/css-helpers/visibility.scss";

#category {
  box-sizing: border-box;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
}

.navbar {
  border-top: 1px solid $c-border;
  border-bottom: 1px solid $c-border;
  height: 75px;
  &__title {
    display: inline-flex;
    align-items: center;
    border-right: 1px solid $c-border;
    width: 20%;
    box-sizing: border-box;
  }
  &__controls {
    display: inline-flex;
    padding-left: $spacer-extra-big;
    width: 80%;
    box-sizing: border-box;
  }
  &__filters-btn {
    color: white;
    color: inherit;
    font-size: $font-size-small-desktop;
    text-transform: none;
    background: transparent;
    padding: 0;
    align-items: center;
    display: flex;
    svg {
      margin-right: 10px;
      fill: $c-gray-secondary;
    }
    &:hover,
    &--active {
      color: $c-accent-primary;
      svg {
        fill: $c-accent-primary;
      }
    }
  }
}

.main {
  display: flex;
}
.sidebar {
  border-right: 1px solid $c-border;
  padding-right: $spacer-extra-big;
  width: 20%;
  box-sizing: border-box;
  &__category-list li:hover,
  &__category-item--active {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }
}

.products {
  box-sizing: border-box;
  @media (min-width: $desktop-min) {
    width: 80%;
    padding: $spacer-big;
  }
}

.grid {
  padding-bottom: $spacer-extra-big;
  display: flex;
  flex-flow: row wrap;
  &__item {
    display: flex;
    width: 50%;
    justify-content: center;
    @media (min-width: $desktop-min) {
      width: 25%;
    }
  }
}
.pagination {
  @media (min-width: $desktop-min) {
    padding-top: $spacer-extra-big;
  }
}
</style>

<template>
  <div id="category">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div class="navbar section">
      <div class="navbar__aside desktop-only">
        <SfHeading :level="3" title="Categories" class="navbar__title" />
      </div>
      <div class="navbar__main">
        <SfButton
          class="sf-button--text navbar__filters-button"
          @click="isFilterSidebarOpen = true"
        >
          <SfIcon size="32px" color="#BEBFC4" icon="filter" />
          Filters
        </SfButton>
        <div class="navbar__sort desktop-only">
          <span class="navbar__label">Sort by:</span>
          <SfSelect v-model="sortBy" class="navbar__select">
            <SfSelectOption
              v-for="option in sortByOptions"
              :key="option.value"
              :value="option.value"
              class="sort-by__option"
              >{{ option.label }}</SfSelectOption
            >
          </SfSelect>
        </div>
        <div class="navbar__counter">
          <span class="navbar__label desktop-only">Products found: </span>
          <span class="desktop-only">280</span>
          <span class="navbar__label mobile-only">280 Items</span>
        </div>
        <div class="navbar__view">
          <span class="navbar__view-label desktop-only">View</span>
          <SfIcon
            class="navbar__view-icon"
            :color="isGridView ? '#1D1F22' : '#BEBFC4'"
            icon="tiles"
            size="32px"
            role="button"
            aria-label="Change to grid view"
            :aria-pressed="isGridView"
            @click="isGridView = true"
          />
          <SfIcon
            class="navbar__view-icon"
            :color="!isGridView ? '#1D1F22' : '#BEBFC4'"
            icon="list"
            size="32px"
            role="button"
            aria-label="Change to list view"
            :aria-pressed="!isGridView"
            @click="isGridView = false"
          />
        </div>
      </div>
    </div>
    <div class="main section">
      <div class="sidebar desktop-only">
        <SfAccordion :open="sidebarAccordion[0].header" :show-chevron="false">
          <SfAccordionItem
            v-for="(accordion, i) in sidebarAccordion"
            :key="i"
            :header="accordion.header"
          >
            <template>
              <SfList class="list">
                <SfListItem
                  v-for="(item, j) in accordion.items"
                  :key="j"
                  class="list__item"
                >
                  <SfMenuItem :label="item.label" :count="item.count" />
                </SfListItem>
              </SfList>
            </template>
          </SfAccordionItem>
        </SfAccordion>
      </div>
      <div class="products">
        <transition-group
          v-if="isGridView"
          appear
          name="products__slide"
          tag="div"
          class="products__grid"
        >
          <SfProductCard
            v-for="(product, i) in products"
            :key="product.id"
            :style="{ '--index': i }"
            :title="product.title"
            :image="product.image"
            :regular-price="product.price.regular"
            :special-price="product.price.special"
            :max-rating="product.rating.max"
            :score-rating="product.rating.score"
            :is-on-wishlist="product.isOnWishlist"
            class="products__product-card"
            @click:wishlist="toggleWishlist(i)"
          >
            <template #options>
              <SfColorPicker
                :is-open="product.isOpen"
                label="Choose color"
                class="color-picker mobile-only"
                @click:toggle="product.isOpen = !product.isOpen"
              >
                <SfColor
                  v-for="color in product.colors"
                  :key="color.name"
                  style="margin: 0.4375rem;"
                  :color="color.color"
                  :selected="color.selected"
                  @click="color.selected = !color.selected"
                />
              </SfColorPicker>
            </template>
          </SfProductCard>
        </transition-group>
        <transition-group
          v-else
          appear
          name="products__slide"
          tag="div"
          class="products__list"
        >
          <SfProductCardHorizontal
            v-for="(product, i) in products"
            :key="product.id"
            :style="{ '--index': i }"
            :title="product.title"
            :description="product.description"
            :image="product.image"
            :regular-price="product.price.regular"
            :special-price="product.price.special"
            :max-rating="product.rating.max"
            :reviews-count="product.reviewsCount"
            :score-rating="product.rating.score"
            :is-on-wishlist="product.isOnWishlist"
            class="products__product-card-horizontal"
            @click:wishlist="toggleWishlist(i)"
          />
        </transition-group>
        <SfPagination
          class="products__pagination desktop-only"
          :current="currentPage"
          :total="4"
          :visible="5"
          @click="
            (page) => {
              currentPage = page;
            }
          "
        />
      </div>
    </div>
    <SfSidebar
      :visible="isFilterSidebarOpen"
      title="Filters"
      class="sidebar-filters"
      @close="isFilterSidebarOpen = false"
    >
      <div class="filters desktop-only">
        <SfHeading
          :level="4"
          title="Collection"
          class="filters__title sf-heading--left"
        />
        <SfFilter
          v-for="filter in filters.collection"
          :key="filter.value"
          :label="filter.label"
          :count="filter.count"
          :selected="filter.selected"
          class="filters__item"
          @change="filter.selected = !filter.selected"
        />
        <SfHeading
          :level="4"
          title="Color"
          class="filters__title sf-heading--left"
        />
        <div class="filters__colors">
          <SfColor
            v-for="filter in filters.color"
            :key="filter.value"
            :color="filter.color"
            :selected="filter.selected"
            class="filters__color"
            @click="filter.selected = !filter.selected"
          />
        </div>
        <SfHeading
          :level="4"
          title="Size"
          class="filters__title sf-heading--left"
        />
        <SfFilter
          v-for="filter in filters.size"
          :key="filter.value"
          :label="filter.label"
          :count="filter.count"
          :selected="filter.selected"
          class="filters__item"
          @change="filter.selected = !filter.selected"
        />
        <SfHeading
          :level="4"
          title="Price"
          class="filters__title sf-heading--left"
        />
        <SfFilter
          v-for="filter in filters.price"
          :key="filter.value"
          :label="filter.label"
          :count="filter.count"
          :selected="filter.selected"
          class="filters__item"
          @change="filter.selected = !filter.selected"
        />
        <SfHeading
          :level="4"
          title="Material"
          class="filters__title sf-heading--left"
        />
        <SfFilter
          v-for="filter in filters.material"
          :key="filter.value"
          :value="filter.value"
          :label="filter.label"
          :selected="filter.selected"
          class="filters__item"
          @change="filter.selected = !filter.selected"
        />
      </div>
      <SfAccordion class="filters mobile-only">
        <SfAccordionItem header="Collection" class="filters__accordion-item">
          <SfFilter
            v-for="filter in filters.collection"
            :key="filter.value"
            :label="filter.label"
            :count="filter.count"
            :selected="filter.selected"
            class="filters__item"
            @change="filter.selected = !filter.selected"
          />
        </SfAccordionItem>
        <SfAccordionItem header="Color" class="filters__accordion-item">
          <SfFilter
            v-for="filter in filters.color"
            :key="filter.value"
            :label="filter.label"
            :color="filter.color"
            :selected="filter.selected"
            class="filters__item"
            @change="filter.selected = !filter.selected"
          />
        </SfAccordionItem>
        <SfAccordionItem header="Size" class="filters__accordion-item">
          <SfFilter
            v-for="filter in filters.size"
            :key="filter.value"
            :label="filter.label"
            :count="filter.count"
            :selected="filter.selected"
            class="filters__item"
            @change="filter.selected = !filter.selected"
          />
        </SfAccordionItem>
        <SfAccordionItem header="Price" class="filters__accordion-item">
          <SfFilter
            v-for="filter in filters.price"
            :key="filter.value"
            :label="filter.label"
            :count="filter.count"
            :selected="filter.selected"
            class="filters__item"
            @change="filter.selected = !filter.selected"
          />
        </SfAccordionItem>
        <SfAccordionItem header="Material" class="filters__accordion-item">
          <SfFilter
            v-for="filter in filters.material"
            :key="filter.value"
            :value="filter.value"
            :label="filter.label"
            :selected="filter.selected"
            class="filters__item"
            @change="filter.selected = !filter.selected"
          />
        </SfAccordionItem>
      </SfAccordion>
      <template #content-bottom>
        <div class="filters__buttons">
          <SfButton
            class="sf-button--full-width"
            @click="isFilterSidebarOpen = false"
            >Done</SfButton
          >
          <SfButton
            class="sf-button--full-width filters__button-clear"
            @click="clearAllFilters"
            >Clear all</SfButton
          >
        </div>
      </template>
    </SfSidebar>
  </div>
</template>
<script>
import {
  SfHeading,
  SfSidebar,
  SfButton,
  SfList,
  SfIcon,
  SfMenuItem,
  SfFilter,
  SfProductCard,
  SfProductCardHorizontal,
  SfPagination,
  SfAccordion,
  SfSelect,
  SfBreadcrumbs,
  SfColor,
  SfColorPicker,
} from "@storefront-ui/vue";
export default {
  components: {
    SfHeading,
    SfButton,
    SfSidebar,
    SfIcon,
    SfList,
    SfFilter,
    SfProductCard,
    SfProductCardHorizontal,
    SfPagination,
    SfMenuItem,
    SfAccordion,
    SfSelect,
    SfBreadcrumbs,
    SfColor,
    SfColorPicker,
  },
  data() {
    return {
      currentPage: 1,
      sortBy: "price-up",
      isFilterSidebarOpen: false,
      isGridView: true,
      sortByOptions: [
        {
          value: "latest",
          label: "Latest",
        },
        {
          value: "price-up",
          label: "Price from low to high",
        },
        {
          value: "price-down",
          label: "Price from high to low",
        },
      ],
      sidebarAccordion: [
        {
          header: "Clothing",
          items: [
            { label: "All", count: "280" },
            { label: "Skirts", count: "23" },
            { label: "Sweaters", count: "54" },
            { label: "Dresses", count: "34" },
            { label: "T-shirts", count: "56" },
            { label: "Pants", count: "7" },
            { label: "Underwear", count: "12" },
          ],
        },
        {
          header: "Accesorries",
          items: [
            { label: "All", count: "280" },
            { label: "Skirts", count: "23" },
            { label: "Sweaters", count: "54" },
            { label: "Dresses", count: "34" },
            { label: "T-shirts", count: "56" },
            { label: "Pants", count: "7" },
            { label: "Underwear", count: "12" },
          ],
        },
        {
          header: "Shoes",
          items: [
            { label: "All", count: "280" },
            { label: "Skirts", count: "23" },
            { label: "Sweaters", count: "54" },
            { label: "Dresses", count: "34" },
            { label: "T-shirts", count: "56" },
            { label: "Pants", count: "7" },
            { label: "Underwear", count: "12" },
          ],
        },
      ],
      products: [
        {
          title: "Cream Beach Bag",
          id: 1,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$50.00", special: "$20.00" },
          rating: { max: 5, score: 5 },
          reviewsCount: 8,
          isOnWishlist: true,
          colors: [
            { color: "#EDCBB9", name: "beige", selected: true },
            { color: "#ABD9D8", name: "mint1", selected: false },
            { color: "#DB5593", name: "pink1", selected: false },
            { color: "#ABD9D8", name: "mint2", selected: false },
            { color: "#DB5593", name: "pink2", selected: false },
          ],
        },
        {
          title: "Cream Beach Bag",
          id: 2,
          isOpen: false,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isOnWishlist: false,
          colors: [
            { color: "#EDCBB9", name: "beige", selected: true },
            { color: "#ABD9D8", name: "mint1", selected: false },
            { color: "#DB5593", name: "pink1", selected: false },
            { color: "#ABD9D8", name: "mint2", selected: false },
            { color: "#DB5593", name: "pink2", selected: false },
          ],
        },
        {
          title: "Cream Beach Bag",
          id: 3,
          isOpen: false,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isOnWishlist: false,
          colors: [
            { color: "#EDCBB9", name: "beige", selected: true },
            { color: "#ABD9D8", name: "mint1", selected: false },
            { color: "#DB5593", name: "pink1", selected: false },
            { color: "#ABD9D8", name: "mint2", selected: false },
            { color: "#DB5593", name: "pink2", selected: false },
          ],
        },
        {
          title: "Cream Beach Bag",
          id: 4,
          isOpen: false,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isOnWishlist: false,
          colors: [
            { color: "#EDCBB9", name: "beige", selected: true },
            { color: "#ABD9D8", name: "mint1", selected: false },
            { color: "#DB5593", name: "pink1", selected: false },
            { color: "#ABD9D8", name: "mint2", selected: false },
            { color: "#DB5593", name: "pink2", selected: false },
          ],
        },
        {
          title: "Cream Beach Bag",
          id: 5,
          isOpen: false,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isOnWishlist: false,
          colors: [
            { color: "#EDCBB9", name: "beige", selected: true },
            { color: "#ABD9D8", name: "mint1", selected: false },
            { color: "#DB5593", name: "pink1", selected: false },
            { color: "#ABD9D8", name: "mint2", selected: false },
            { color: "#DB5593", name: "pink2", selected: false },
          ],
        },
        {
          title: "Cream Beach Bag",
          id: 6,
          isOpen: false,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isOnWishlist: false,
          colors: [
            { color: "#EDCBB9", name: "beige", selected: true },
            { color: "#ABD9D8", name: "mint1", selected: false },
            { color: "#DB5593", name: "pink1", selected: false },
            { color: "#ABD9D8", name: "mint2", selected: false },
            { color: "#DB5593", name: "pink2", selected: false },
          ],
        },
        {
          title: "Cream Beach Bag",
          id: 7,
          isOpen: false,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 6,
          isOnWishlist: false,
        },
        {
          title: "Cream Beach Bag",
          id: 8,
          isOpen: false,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isOnWishlist: false,
        },
      ],
      filters: {
        collection: [
          {
            label: "Summer fly",
            value: "summer-fly",
            count: "10",
            selected: false,
          },
          {
            label: "Best 2018",
            value: "best-2018",
            count: "23",
            selected: false,
          },
          {
            label: "Your choice",
            value: "your-choice",
            count: "54",
            selected: false,
          },
        ],
        color: [
          { label: "Red", value: "red", color: "#990611", selected: false },
          { label: "Black", value: "black", color: "#000000", selected: false },
          {
            label: "Yellow",
            value: "yellow",
            color: "#DCA742",
            selected: false,
          },
          { label: "Blue", value: "blue", color: "#004F97", selected: false },
          { label: "Navy", value: "navy", color: "#656466", selected: false },
        ],
        size: [
          { label: "Size 2 (XXS)", value: "xxs", count: "10", selected: false },
          { label: "Size 4-6 (XS)", value: "xs", count: "23", selected: false },
          { label: "Size 8-10 (S)", value: "s", count: "54", selected: false },
          {
            label: "Size 12-14 (M)",
            value: "m",
            count: "109",
            selected: false,
          },
          { label: "Size 16-18 (L)", value: "l", count: "23", selected: false },
          {
            label: "Size 20-22(XL)",
            value: "xl",
            count: "12",
            selected: false,
          },
          {
            label: "Size 24-26 (XXL)",
            value: "xxl",
            count: "2",
            selected: false,
          },
        ],
        price: [
          {
            label: "Under $200",
            value: "under-200",
            count: "23",
            selected: false,
          },
          {
            label: "Under $300",
            value: "under-300",
            count: "54",
            selected: false,
          },
        ],
        material: [
          { label: "Cotton", value: "coton", count: "33", selected: false },
          { label: "Silk", value: "silk", count: "73", selected: false },
        ],
      },
      breadcrumbs: [
        {
          text: "Home",
          route: {
            link: "#",
          },
        },
        {
          text: "Women",
          route: {
            link: "#",
          },
        },
      ],
    };
  },
  methods: {
    updateFilter() {},
    clearAllFilters() {
      const filters = Object.keys(this.filters);
      filters.forEach((name) => {
        const prop = this.filters[name];
        prop.forEach((value) => {
          value.selected = false;
        });
      });
    },
    toggleWishlist(index) {
      this.products[index].isOnWishlist = !this.products[index].isOnWishlist;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#category {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: 0 auto;
  }
}
.main {
  &.section {
    padding: var(--spacer-xs);
    @include for-desktop {
      padding: 0;
    }
  }
}
.breadcrumbs {
  padding: var(--spacer-base) var(--spacer-base) var(--spacer-base)
    var(--spacer-sm);
}
.navbar {
  position: relative;
  display: flex;
  border: 1px solid var(--c-light);
  border-width: 0 0 1px 0;
  @include for-desktop {
    border-width: 1px 0 1px 0;
  }
  &.section {
    padding: var(--spacer-sm);
    @include for-desktop {
      padding: 0;
    }
  }
  &__aside,
  &__main {
    display: flex;
    align-items: center;
    padding: var(--spacer-sm) 0;
  }
  &__aside {
    flex: 0 0 15%;
    padding: var(--spacer-sm) var(--spacer-sm);
    border: 1px solid var(--c-light);
    border-width: 0 1px 0 0;
  }
  &__main {
    flex: 1;
    padding: 0;
    @include for-desktop {
      padding: var(--spacer-xs) var(--spacer-xl);
    }
  }
  &__title {
    --heading-title-font-weight: var(--font-light);
    --heading-title-font-size: var(--font-xl);
  }
  &__filters-button {
    display: flex;
    align-items: center;
    svg {
      fill: var(--c-text-muted);
      transition: fill 150ms ease;
    }
    &:hover {
      svg {
        fill: var(--c-primary);
      }
    }
  }
  &__label {
    font-family: var(--font-family-secondary);
    font-weight: var(--font-normal);
    color: var(--c-text-muted);
    margin: 0 var(--spacer-2xs) 0 0;
  }
  &__select {
    --select-padding: 0 var(--spacer-lg) 0 var(--spacer-2xs);
    --select-margin: 0;
  }
  &__sort {
    display: flex;
    align-items: center;
    margin: 0 auto 0 var(--spacer-2xl);
  }
  &__counter {
    font-family: var(--font-family-secondary);
    margin: auto;
    @include for-desktop {
      margin: auto 0 auto auto;
    }
  }
  &__view {
    display: flex;
    align-items: center;
    margin: 0 var(--spacer-xl);
    @include for-desktop {
      margin: 0 0 0 var(--spacer-2xl);
    }
    &-icon {
      cursor: pointer;
    }
    &-label {
      margin: 0 var(--spacer-sm) 0 0;
      font: var(--font-medium) var(--font-xs) / 1.6 var(--font-family-secondary);
      text-decoration: underline;
    }
  }
}
.sort-by {
  --select-dropdown-z-index: 1;
  flex: unset;
  width: 11.875rem;
}
.main {
  display: flex;
}
.sidebar {
  flex: 0 0 15%;
  padding: var(--spacer-sm);
  border: 1px solid var(--c-light);
  border-width: 0 1px 0 0;
}
.sidebar-filters {
  --sidebar-title-display: none;
  --sidebar-top-padding: 0;
  @include for-desktop {
    --sidebar-content-padding: 0 var(--spacer-xl);
    --sidebar-bottom-padding: 0 var(--spacer-xl);
  }
}
.list {
  --menu-item-font-size: var(--font-sm);
  &__item {
    &:not(:last-of-type) {
      --list-item-margin: 0 0 var(--spacer-sm) 0;
    }
  }
}
.products {
  box-sizing: border-box;
  flex: 1;
  margin: 0;
  &__grid,
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__grid {
    justify-content: space-between;
  }
  &__product-card {
    --product-card-max-width: 50%;
    flex: 1 1 50%;
  }
  &__product-card-horizontal {
    flex: 0 0 100%;
  }
  &__slide-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  &__slide-enter-active {
    transition: all 0.2s ease;
    transition-delay: calc(0.1s * var(--index));
  }
  @include for-desktop {
    margin: var(--spacer-sm) 0 0 var(--spacer-sm);
    &__pagination {
      display: flex;
      justify-content: center;
      margin: var(--spacer-xl) 0 0 0;
    }
    &__product-card-horizontal {
      margin: var(--spacer-lg) 0;
    }
    &__product-card {
      flex: 1 1 25%;
    }
    &__list {
      margin: 0 0 0 var(--spacer-sm);
    }
  }
}
.filters {
  &__title {
    --heading-title-font-size: var(--font-xl);
    margin: var(--spacer-xl) 0 var(--spacer-base) 0;
    &:first-child {
      margin: calc(var(--spacer-xl) + var(--spacer-base)) 0 var(--spacer-xs) 0;
    }
  }
  &__color {
    margin: var(--spacer-xs) var(--spacer-xs) var(--spacer-xs) 0;
  }
  &__item {
    --filter-label-color: var(--c-secondary-variant);
    --filter-count-color: var(--c-secondary-variant);
    --checkbox-padding: 0 var(--spacer-sm) 0 var(--spacer-xl);
    padding: var(--spacer-sm) 0;
    border-bottom: 1px solid var(--c-light);
    &:last-child {
      border-bottom: 0;
    }
    @include for-desktop {
      --checkbox-padding: 0;
      margin: var(--spacer-sm) 0;
      border: 0;
      padding: 0;
    }
  }
  &__accordion-item {
    --accordion-item-content-padding: 0;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    width: 100vw;
  }
  &__buttons {
    margin: var(--spacer-sm) 0;
  }
  &__button-clear {
    --button-background: var(--c-light);
    --button-color: var(--c-dark-variant);
    margin: var(--spacer-xs) 0 0 0;
  }
}
</style>

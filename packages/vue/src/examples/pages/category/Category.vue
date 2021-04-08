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
          aria-label="Filters"
          @click="isFilterSidebarOpen = true"
        >
          <SfIcon
            size="24px"
            color="#43464E"
            icon="filter2"
            class="navbar__filters-icon"
          />
          Filters
        </SfButton>
        <div class="navbar__sort desktop-only">
          <span class="navbar__label">Sort by:</span>
          <SfComponentSelect v-model="sortBy" class="navbar__select">
            <SfComponentSelectOption
              v-for="option in sortByOptions"
              :key="option.value"
              :value="option.value"
              class="sort-by__option"
              >{{ option.label }}</SfComponentSelectOption
            >
          </SfComponentSelect>
        </div>
        <div class="navbar__counter">
          <span class="navbar__label desktop-only">Products found: </span>
          <span class="desktop-only">280</span>
          <span class="navbar__label smartphone-only">280 Items</span>
        </div>
        <div class="navbar__view">
          <span class="navbar__view-label desktop-only">View</span>
          <SfIcon
            class="navbar__view-icon"
            :color="'#43464E'"
            icon="tiles"
            size="12px"
            role="button"
            aria-label="Change to grid view"
            :aria-pressed="isGridView"
            @click="isGridView = true"
          />
          <SfIcon
            class="navbar__view-icon"
            :color="'#43464E'"
            icon="list"
            size="12px"
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
        <SfAccordion :open="sidebarAccordion[0].header" :show-chevron="true">
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
            :is-in-wishlist="product.isInWishlist"
            :show-add-to-cart-button="true"
            class="products__product-card"
            @click:wishlist="toggleWishlist(i)"
          />
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
            :is-in-wishlist="product.isInWishlist"
            class="products__product-card-horizontal"
            @click:wishlist="toggleWishlist(i)"
          >
            <template #configuration>
              <SfProperty
                class="desktop-only"
                name="Size"
                value="XS"
                style="margin: 0 0 1rem 0"
              />
              <SfProperty class="desktop-only" name="Color" value="white" />
            </template>
            <template #actions>
              <SfButton
                class="sf-button--text desktop-only"
                style="margin: 0 0 1rem auto; display: block"
                @click="$emit('click:add-to-wishlist')"
              >
                Save for later
              </SfButton>
              <SfButton
                class="sf-button--text desktop-only"
                style="margin: 0 0 0 auto; display: block"
                @click="$emit('click:add-to-compare')"
              >
                Add to compare
              </SfButton>
            </template>
          </SfProductCardHorizontal>
        </transition-group>
        <SfPagination
          class="products__pagination"
          :current="currentPage"
          :total="4"
          :visible="5"
          @click="
            (page) => {
              currentPage = page;
            }
          "
        />
        <div class="products__show-on-page desktop-only">
          <span class="products__show-on-page__label">Show on page:</span>
          <SfSelect class="products__items-per-page">
            <SfSelectOption
              v-for="option in showOnPage"
              :key="option"
              :value="option"
              class="products__items-per-page__option"
            >
              {{ option }}
            </SfSelectOption>
          </SfSelect>
        </div>
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
      <SfAccordion class="filters smartphone-only">
        <SfAccordionItem header="Show on page" class="filters__accordion-item">
          <template #additional-info>
            <span class="filters__chosen"> {{ displayOnPage }} items </span>
          </template>
          <SfRadio
            v-for="value in showOnPage"
            :key="value"
            v-model="displayOnPage"
            :value="value"
            :label="value"
            class="filters__item"
          />
        </SfAccordionItem>
        <SfAccordionItem header="Sort by" class="filters__accordion-item">
          <template #additional-info>
            <span class="filters__chosen">
              {{ sortBy }}
            </span>
          </template>
          <SfRadio
            v-for="sort in sortByOptions"
            :key="sort.value"
            v-model="sortBy"
            :value="sort.value"
            :label="sort.label"
            class="filters__item"
          />
        </SfAccordionItem>
        <SfAccordionItem header="Category" class="filters__accordion-item">
          <template #additional-info>
            <span class="filters__chosen">
              {{ category }}
            </span>
          </template>
          <SfRadio
            v-for="cat in sidebarAccordion"
            :key="cat.header"
            v-model="category"
            :value="cat.header"
            :label="cat.header"
            class="filters__item"
          />
        </SfAccordionItem>
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
  SfComponentSelect,
  SfBreadcrumbs,
  SfColor,
  SfProperty,
  SfRadio,
  SfSelect,
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
    SfComponentSelect,
    SfBreadcrumbs,
    SfColor,
    SfProperty,
    SfRadio,
    SfSelect,
  },
  data() {
    return {
      currentPage: 1,
      sortBy: "Latest",
      isFilterSidebarOpen: false,
      isGridView: true,
      category: "Clothing",
      displayOnPage: "40",
      sortByOptions: [
        {
          value: "Latest",
          label: "Latest",
        },
        {
          value: "Price-up",
          label: "Price from low to high",
        },
        {
          value: "Price-down",
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
          header: "Accessorries",
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
      showOnPage: ["20", "40", "60"],
      products: [
        {
          title: "Cream Beach Bag",
          id: 1,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 5 },
          reviewsCount: 8,
          isInWishlist: true,
        },
        {
          title: "Cream Beach Bag",
          id: 2,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false,
        },
        {
          title: "Cream Beach Bag",
          id: 3,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false,
        },
        {
          title: "Cream Beach Bag",
          id: 4,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false,
        },
        {
          title: "Cream Beach Bag",
          id: 5,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false,
        },
        {
          title: "Cream Beach Bag",
          id: 6,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false,
        },
        {
          title: "Cream Beach Bag",
          id: 7,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 6,
          isInWishlist: false,
        },
        {
          title: "Cream Beach Bag",
          id: 8,
          description:
            "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$50.00" },
          rating: { max: 5, score: 4 },
          reviewsCount: 8,
          isInWishlist: false,
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
      this.products[index].isInWishlist = !this.products[index].isInWishlist;
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
    display: flex;
    padding: 0;
    @include for-desktop {
      padding: var(--spacer-xs) var(--spacer-xl);
    }
  }
  &__title {
    --heading-title-font-weight: var(--font-weight--semibold);
    --heading-title-font-size: var(--font-size--xl);
  }
  &__filters-icon {
    margin: 0 0 0 var(--spacer-2xs);
    order: 1;
    @include for-desktop {
      margin: 0 var(--spacer-xs) 0 0;
      order: 0;
    }
  }
  &__filters-button {
    display: flex;
    align-items: center;
    --button-font-size: var(--font-size--base);
    --button-text-decoration: none;
    --button-color: var(--c-link);
    --button-font-weight: var(--font-weight--normal);
    @include for-mobile {
      --button-font-weight: var(--font-weight--medium);
      margin-right: var(--spacer-sm);
      order: 1;
    }
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
    font-family: var(--font-family--secondary);
    font-weight: var(--font-weight--normal);
    color: var(--c-text-muted);
    @include for-desktop {
      margin: 0 var(--spacer-2xs) 0 0;
    }
  }
  &__select {
    --component-select-width: 220px;
    --component-select-padding: 0;
    --component-select-selected-padding: 0 var(--spacer-lg) 0 var(--spacer-2xs);
    --component-select-margin: 0;
    --component-select-error-message-height: 0;
  }
  &__sort {
    display: flex;
    align-items: center;
    margin: 0 auto 0 var(--spacer-2xl);
  }
  &__counter {
    font-family: var(--font-family--secondary);
    margin: auto;
    @include for-desktop {
      margin: auto 0 auto auto;
    }
  }
  &__view {
    display: flex;
    order: -1;
    align-items: center;
    margin: 0;
    @include for-desktop {
      margin: 0 0 0 var(--spacer-2xl);
      order: 0;
    }
    &-icon {
      cursor: pointer;
      margin: 0 var(--spacer-base) 0 var(--spacer-sm);
      @include for-desktop {
        margin: 0 var(--spacer-base) 0 0;
      }
      &:last-child {
        margin: 0;
      }
    }
    &-label {
      margin: 0 var(--spacer-sm) 0 0;
      font: var(--font-weight--normal) var(--font-size--base) / 1.6
        var(--font-family--secondary);
      text-decoration: none;
      color: var(--c-link);
    }
  }
}
.sort-by {
  --component-select-dropdown-z-index: 1;
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
  --menu-item-font-size: var(--font-size--sm);
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
    justify-content: center;
    @include for-desktop {
      justify-content: space-between;
    }
  }
  &__product-card {
    --product-card-max-width: 11rem;
    --product-card-title-margin: var(--spacer-2xs) 0 0 0;
    --price-regular-font-line-height: 1;
    margin-bottom: var(--spacer-sm);
    ::v-deep .sf-product-card__price {
      margin: var(--spacer-2xs) 0 var(--spacer-xs);
    }
    flex: 1 1 50%;
    @include for-desktop {
      margin-bottom: 0;
      --product-card-max-width: 50%;
      --product-card-title-margin: var(--spacer-base) 0 0 0;
    }
  }
  &__product-card-horizontal {
    margin-bottom: var(--spacer-sm);
    flex: 0 0 100%;
    ::v-deep .sf-product-card-horizontal__wishlist-icon {
      .sf-icon {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  &__slide-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  &__slide-enter-active {
    transition: all 0.2s ease;
    transition-delay: calc(0.1s * var(--index));
  }
  &__pagination {
    display: flex;
    justify-content: center;
    margin: var(--spacer-base) 0;
  }
  @include for-desktop {
    margin: var(--spacer-sm) 0 0 var(--spacer-sm);
    &__pagination {
      justify-content: flex-start;
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
  &__show-on-page {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    &__label {
      font-family: var(--font-family--secondary);
      font-size: var(--font-size--sm);
    }
  }
}
.filters {
  &__title {
    --heading-title-font-size: var(--font-size--xl);
    margin: var(--spacer-xl) 0 var(--spacer-base) 0;
    &:first-child {
      margin: calc(var(--spacer-xl) + var(--spacer-base)) 0 var(--spacer-xs) 0;
    }
  }
  &__colors {
    display: flex;
  }
  &__color {
    margin: var(--spacer-xs) var(--spacer-xs) var(--spacer-xs) 0;
  }
  &__chosen {
    color: var(--c-text-muted);
    font-weight: var(--font-weight--normal);
    font-family: var(--font-family--secondary);
    position: absolute;
    right: var(--spacer-xl);
  }
  &__item {
    --radio-container-padding: 0 var(--spacer-sm) 0 var(--spacer-xl);
    --radio-background: transparent;
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

<template>
  <div id="default">
    <SfHeader
      :logo="shopLogo"
      :title="shopName"
      active-icon="account"
      is-sticky
    >
      <template #navigation>
        <SfHeaderNavigationItem
          v-for="(category, key) in shopRootCategories"
          :key="key"
          @mouseover="currentCategoryTitle = category.title"
          @mouseleave="currentCategoryTitle = null"
        >
          <SfLink>
            {{ category.title }}
          </SfLink>
          <SfMegaMenu
            :visible="
              currentCategoryTitle && category.title === currentCategoryTitle
            "
            class="mega-menu"
            :title="category.title"
          >
            <SfMegaMenuColumn
              v-for="(subcategory, index) in category.subcategories"
              :key="index"
              :title="subcategory.title"
            >
              <SfList>
                <SfListItem
                  v-for="(subcategoryChild,
                  childIndex) in subcategory.subcategories"
                  :key="childIndex"
                >
                  <SfMenuItem :label="subcategoryChild.title"></SfMenuItem>
                </SfListItem>
              </SfList>
            </SfMegaMenuColumn>
          </SfMegaMenu>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>
    <Home />
    <SfFooter>
      <SfFooterColumn
        v-for="(column, key) in footerColumns"
        :key="key"
        :title="column.title"
      >
        <SfList>
          <SfListItem v-for="(menuItem, index) in column.items" :key="index">
            <SfMenuItem :label="menuItem" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
    </SfFooter>
    <SfBottomNavigation v-if="isMobile" class="bottom-navigation">
      <SfBottomNavigationItem
        :icon="'home'"
        :label="'Home'"
        :icon-active="'home_fill'"
      />
      <SfBottomNavigationItem
        :icon="'menu'"
        :label="'Menu'"
        icon-size="20px"
        @click="changeVisibility"
      />
      <SfBottomNavigationItem
        :icon="'heart'"
        :icon-active="'heart_fill'"
        :label="'Heart'"
        icon-size="20px"
      />
      <SfBottomNavigationItem
        :icon="'profile'"
        :icon-active="'profile_fill'"
        :label="'Profile'"
        icon-size="20px"
      />
      <SfBottomNavigationItem label="Basket" icon="add_to_cart" is-floating />
    </SfBottomNavigation>
    <SfSidebar
      :visible="isVisible"
      :overlay="false"
      :title="currentCategoryName[currentCategoryName.length - 1]"
      :persistent="true"
      @close="prevCategory()"
    >
      <SfMenuItem v-for="(category, index) in currentCategory" :key="index">
        <template #label>
          <SfLink :link="category.link">
            {{ category.title }}
          </SfLink>
        </template>
        <template #mobile-nav-icon>
          <SfIcon
            v-if="category.subcategories"
            icon="chevron_right"
            size="14px"
            @click="nextCategory(category, index)"
          />
          <span v-else></span>
        </template>
      </SfMenuItem>
    </SfSidebar>
  </div>
</template>
<script>
import {
  SfHeader,
  SfFooter,
  SfList,
  SfMenuItem,
  SfMegaMenu,
  SfLink,
  SfSidebar,
  SfIcon,
  SfBottomNavigation,
} from "@storefront-ui/vue";
import Home from "../../pages/home/Home.vue";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
export default {
  name: "Default",
  components: {
    SfHeader,
    SfFooter,
    SfList,
    SfMenuItem,
    SfMegaMenu,
    SfLink,
    SfBottomNavigation,
    SfSidebar,
    SfIcon,
    Home,
  },
  data() {
    return {
      shopLogo: {
        mobile: { url: "/assets/logo.svg" },
        desktop: { url: "/assets/logo.svg" },
      },
      shopName: "Storefront UI",
      isVisible: false,
      currentCategoryTitle: null,
      currentCategoryName: [],
      currentCategoryPath: [],
      currentCategory: [],
      shopRootCategories: [
        {
          title: "Clothing",
          link: "/clothing",
          subcategories: [
            {
              title: "Skirts",
              link: "/skirts",
              subcategories: [
                {
                  title: "Long",
                  link: "/long",
                },
                {
                  title: "Short",
                  link: "/short",
                },
              ],
            },
            {
              title: "Sweaters",
              link: "/sweaters",
              subcategories: [
                {
                  title: "Long",
                  link: "/long",
                },
                {
                  title: "Short",
                  link: "/short",
                },
              ],
            },
            {
              title: "Dresses",
              link: "/dresses",
              subcategories: [
                {
                  title: "Long",
                  link: "/long",
                },
                {
                  title: "Short",
                  link: "/short",
                },
              ],
            },
          ],
        },
        {
          title: "Accesories",
          link: "/accesories",
          subcategories: [
            {
              title: "Bags & Purses",
              link: "/skirts",
              subcategories: [
                {
                  title: "Long",
                  link: "/long",
                },
                {
                  title: "Short",
                  link: "/short",
                },
              ],
            },
            {
              title: "Belts",
              link: "/belts",
              subcategories: [
                {
                  title: "Long",
                  link: "/long",
                },
                {
                  title: "Short",
                  link: "/short",
                },
              ],
            },
            {
              title: "Gloves",
              link: "/gloves",
              subcategories: [
                {
                  title: "Long",
                  link: "/long",
                },
                {
                  title: "Short",
                  link: "/short",
                },
              ],
            },
          ],
        },
        {
          title: "Shoes",
          link: "/shoes",
          subcategories: [
            {
              title: "Boots",
              link: "/boots",
              subcategories: [
                {
                  title: "Long",
                  link: "/long",
                },
                {
                  title: "Short",
                  link: "/short",
                },
              ],
            },
            {
              title: "Heels",
              link: "/heels",
              subcategories: [
                {
                  title: "Long",
                  link: "/long",
                },
                {
                  title: "Short",
                  link: "/short",
                },
              ],
            },
            {
              title: "Flat shoes",
              link: "/flat",
              subcategories: [
                {
                  title: "Long",
                  link: "/long",
                },
                {
                  title: "Short",
                  link: "/short",
                },
              ],
            },
          ],
        },
      ],
      footerColumns: [
        {
          title: "About us",
          items: ["Who we are", "Quality in the details", "Customer Reviews"],
        },
        {
          title: "Departments",
          items: ["Women fashion", "Men fashion", "Kidswear", "Home"],
        },
        {
          title: "Help",
          items: ["Customer service", "Size guide", "Contact us"],
        },
        {
          title: "Payment & delivery",
          items: ["Purchase terms", "Guarantee"],
        },
      ],
    };
  },
  computed: {
    ...mapMobileObserver(),
  },
  mounted() {
    this.currentCategory = this.shopRootCategories;
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
  methods: {
    changeVisibility() {
      this.isVisible = !this.isVisible;
    },
    nextCategory({ title }, index) {
      this.currentCategoryPath.push(index);
      this.currentCategoryName.push(title);
      this.getCurrentCategory();
    },
    prevCategory() {
      this.currentCategoryPath.length
        ? this.currentCategoryPath.pop()
        : this.changeVisibility();
      this.currentCategoryName.pop();
      this.getCurrentCategory();
    },
    getCurrentCategory() {
      this.currentCategory = this.shopRootCategories;
      this.currentCategoryPath.forEach((index) => {
        this.currentCategory = this.currentCategory[index].subcategories;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.mega-menu {
  position: absolute;
  left: 0;
  width: 100%;
  top: 100%;
}
.bottom-navigation {
  --bottom-navigation-z-index: 2;
}
</style>

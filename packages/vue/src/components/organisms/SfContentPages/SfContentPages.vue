<template>
  <div class="sf-content-pages">
    <SfBar
      :back="isActive"
      :title="active ? active : title"
      class="mobile-only"
      @click:back="updatePage()"
    />
    <section
      :class="{ 'sf-content-pages__section--is-active': isActive }"
      class="sf-content-pages__section"
    >
      <div class="sf-content-pages__sidebar">
        <h1 class="sf-content-pages__title desktop-only">{{ title }}</h1>
        <div v-for="(category, key) in categories" :key="key">
          <h2 v-if="category.title" class="sf-content-pages__category-title">
            {{ category.title }}
          </h2>
          <SfList class="sf-content-pages__list">
            <SfListItem
              v-for="page in category.items"
              :key="page.title"
              class="sf-content-pages__list-item"
            >
              <!-- @slot Custom menu-item markup -->
              <slot name="menu-item" v-bind="{ updatePage, page, active }">
                <SfMenuItem
                  :class="{ 'sf-menu-item--is-active': page.title === active }"
                  :label="page.title"
                  class="sf-content-pages__menu"
                  @click="updatePage(page.title)"
                >
                  <template #icon>
                    <SfIcon
                      v-if="page.icon"
                      :icon="page.icon"
                      class="sf-menu-item__icon"
                      color="#686d7d"
                      size="xxs"
                    />
                  </template>
                </SfMenuItem>
              </slot>
            </SfListItem>
          </SfList>
        </div>
      </div>
      <div class="sf-content-pages__content">
        <!-- @slot Slot for Content Page -->
        <slot />
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import SfContentPage from "./_internal/SfContentPage.vue";
import SfContentCategory from "./_internal/SfContentCategory.vue";
Vue.component("SfContentPage", SfContentPage);
Vue.component("SfContentCategory", SfContentCategory);
import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfBar from "../../molecules/SfBar/SfBar.vue";
export default {
  name: "SfContentPages",
  components: {
    SfList,
    SfMenuItem,
    SfIcon,
    SfBar
  },
  props: {
    /**
     * Pages title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Active page
     */
    active: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      items: [],
      isMobile: false,
      desktopMin: 1024
    };
  },
  computed: {
    categories() {
      const items = [];
      const orphans = { items: [] };
      const reduceOrphans = () => {
        if (orphans.items.length > 0) {
          const category = { ...orphans };
          items.push(category);
          orphans.items = [];
        }
      };
      this.items.forEach(item => {
        if (item.items) {
          reduceOrphans();
          const category = { ...item };
          items.push(category);
          return;
        }
        orphans.items.push(item);
      });
      reduceOrphans();
      return items;
    },
    isActive() {
      return this.active.length > 0;
    }
  },
  provide() {
    const provided = {};
    Object.defineProperty(provided, "active", {
      get: () => this.active
    });
    return { provided };
  },
  watch: {
    isMobile(mobile) {
      if (mobile) {
        this.$emit("click:change", "");
        return;
      }
      this.$emit("click:change", this.categories[0].items[0].title);
    }
  },
  mounted() {
    this.isMobileHandler();
    window.addEventListener("resize", this.isMobileHandler, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.isMobileHandler, {
      passive: true
    });
  },
  methods: {
    updatePage(title) {
      /**
       * Active page updated event
       *
       * @event click:change
       * @type String
       */
      this.$emit("click:change", title);
    },
    isMobileHandler() {
      if (typeof window === "undefined" || typeof document === "undefined")
        return;
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        this.desktopMin;
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfContentPages.scss";
</style>

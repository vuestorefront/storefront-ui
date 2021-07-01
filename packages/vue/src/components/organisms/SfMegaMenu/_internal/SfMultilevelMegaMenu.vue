<template>
  <div>
    <SfBar
      :title="active || categoryTitle"
      :back="true"
      class="sf-mega-menu__bar smartphone-only"
      @click:back="backHandler"
    >
    </SfBar>
    <div class="sf-mega-menu__content">
      <div class="smartphone-only">
        <slot name="mobile">
          <SfList>
            <SfListItem
              v-for="(subcategory, i) in childCategories"
              :key="`${subcategory.title}-${i}`"
            >
              <SfMenuItem
                class="sf-mega-menu-column__header"
                :label="subcategory.title"
                @click="toggleHandler(subcategory)"
              />
            </SfListItem>
          </SfList>
        </slot>
      </div>
      <div class="desktop-only">
        <SfMegaMenuMultilevelColumn :categories="childCategories" :depth="0" />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
Vue.component("SfMegaMenuMultilevelColumn", SfMegaMenuMultilevelColumn);
import SfMenuItem from "../../../molecules/SfMenuItem/SfMenuItem.vue";
import SfBar from "../../../molecules/SfBar/SfBar.vue";
import SfList from "../../SfList/SfList";
import SfMegaMenuMultilevelColumn from "./SfMegaMenuMultilevelColumn";

export default {
  name: "SfMultilevelMegaMenu",
  components: {
    SfMenuItem,
    SfBar,
    SfList,
    SfMegaMenuMultilevelColumn,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    categories: {
      type: [Object, Array],
      default: () => {},
    },
  },
  data() {
    return {
      active: "",
      childCategories: this.categories,
      categoryTree: [],
    };
  },
  computed: {
    categoryTitle() {
      return this.title ? this.title : this.subcategories.title;
    },
  },
  methods: {
    toggleHandler(subcategory) {
      if (!subcategory.subcategories) return;
      this.categoryTree.push({
        title: this.active,
        subcategory: subcategory,
        subcategories: this.childCategories,
      });
      this.active = subcategory.title;
      this.childCategories = subcategory.subcategories;
    },
    backHandler() {
      if (!this.categoryTree.length) {
        this.$emit("close");
        return;
      }
      this.active = this.categoryTree[this.categoryTree.length - 1].title;
      this.childCategories =
        this.categoryTree[this.categoryTree.length - 1].subcategories;
      this.categoryTree.pop();
    },
  },
};
</script>

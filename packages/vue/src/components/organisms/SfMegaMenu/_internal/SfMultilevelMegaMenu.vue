<template>
  <div>
    <SfBar
      :title="active || categoryTitle"
      :back="true"
      class="sf-mega-menu__bar"
      @click:back="backHandler"
    >
    </SfBar>
    <div class="sf-mega-menu__content">
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
    </div>
  </div>
</template>
<script>
import SfMenuItem from "../../../molecules/SfMenuItem/SfMenuItem.vue";
import SfBar from "../../../molecules/SfBar/SfBar.vue";
import SfList from "../../SfList/SfList";
export default {
  name: "SfMultilevelMegaMenu",
  components: {
    SfMenuItem,
    SfBar,
    SfList,
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
      showSubcategories: false,
      active: "",
      childCategories: this.categories,
      parent: {},
      categoryTree: [],
    };
  },
  computed: {
    categoryTitle() {
      return this.title ? this.title : this.subcategories.title;
    },
  },
  methods: {
    toggleCategory() {
      return (this.showSubcategories = !this.showSubcategories);
    },
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

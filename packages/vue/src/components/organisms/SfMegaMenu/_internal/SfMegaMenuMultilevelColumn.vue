<template>
  <div>
    <div
      class="sf-mega-menu-multilevel-column"
      :class="`sf-mega-menu-multilevel-column--${depth}`"
    >
      <SfList>
        <SfListItem
          v-for="(subcategory, i) in categories"
          :key="`${subcategory.title}-${i}`"
          @parent.native="toggleActive(parentItem, subcategory.title)"
        >
          <SfMenuItem
            class="sf-mega-menu-column__header"
            :label="subcategory.title"
            :class="{ 'is-open': active }"
            @mouseenter.native="$emit('parent', parent)"
          />
          <SfMegaMenuMultilevelColumn
            v-if="subcategory.subcategories"
            :categories="subcategory.subcategories"
            :depth="depth + 1"
            :parent="subcategory.title"
          />
        </SfListItem>
      </SfList>
    </div>
  </div>
</template>
<script>
import SfMenuItem from "../../../molecules/SfMenuItem/SfMenuItem.vue";
import SfList from "../../SfList/SfList";
import SfMegaMenuMultilevelColumn from "./SfMegaMenuMultilevelColumn";

export default {
  name: "SfMegaMenuMultilevelColumn",
  components: {
    SfMenuItem,
    SfList,
    SfMegaMenuMultilevelColumn,
  },
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    depth: {
      type: Number,
      default: 0,
    },
    parent: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      active: "",
      categoryTree: this.categories,
    };
  },
  // mounted() {
  //   this.categoryTree.push(this.active);
  //   console.log(this.categoryTree)
  // },
  methods: {
    toggleActive(parentItem, title) {
      console.log(parentItem, title);
      parentItem === title ? (this.active = true) : "";
    },
  },
};
</script>

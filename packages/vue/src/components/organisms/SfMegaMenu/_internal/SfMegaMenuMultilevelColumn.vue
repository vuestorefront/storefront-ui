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
        >
          <SfMenuItem
            class="sf-mega-menu-column__header"
            :label="subcategory.title"
            :class="{ 'is-open': active }"
            @mouseenter.native="setActive"
            @mouseleave.native="deactivate"
          />
          <SfMegaMenuMultilevelColumn
            v-if="subcategory.subcategories"
            :categories="subcategory.subcategories"
            :depth="depth + 1"
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
  },
  data() {
    return {
      active: false,
      index: 0,
    };
  },
  methods: {
    setActive() {
      this.active = true;
      console.log(this.depth, this.$parent);
      this.$parent.setActive;
    },
    deactivate() {
      this.active = false;
      this.$parent.deactivate;
    },
  },
};
</script>

<template>
  <SfListItem>
    <component
      :is="toggleComponent"
      :title="title"
      :back="true"
      :class="{ 'sf-mega-menu__bar': toggleComponent === 'SfBar' }"
      @click="toggleComponent === 'SfMenuItem' ? toggleCategory : ''"
    >
    </component>
    <div class="sf-mega-menu__content">
      <SfList>
        <SfMultilevelMegaMenu
          v-for="(subcategory, i) in subcategories.subcategories"
          v-show="toggleCategory"
          :key="`${subcategory.title}-${i}`"
          :subcategories="subcategory.subcategories"
          :title="subcategory.title"
          class="sf-mega-menu-column__header"
        />
      </SfList>
    </div>
  </SfListItem>
</template>
<script>
import SfMenuItem from "../../../molecules/SfMenuItem/SfMenuItem.vue";
import SfBar from "../../../molecules/SfBar/SfBar.vue";
import SfList from "../../SfList/SfList";
import SfMultilevelMegaMenu from "./SfMultilevelMegaMenu";
export default {
  name: "SfMultilevelMegaMenu",
  components: {
    SfMenuItem,
    SfBar,
    SfList,
    SfMultilevelMegaMenu,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subcategories: {
      type: [Object, Array],
      default: () => {},
    },
  },
  data() {
    return {
      showSubcategories: false,
    };
  },
  computed: {
    toggleComponent() {
      console.log(this.subcategories);
      return this.subcategories.find(
        (subcategory) => subcategory.title === this.title
      )
        ? "SfMenuItem"
        : "SfBar";
    },
  },
  methods: {
    toggleCategory() {
      this.showSubcategories = !this.showSubcategories;
    },
  },
};
</script>

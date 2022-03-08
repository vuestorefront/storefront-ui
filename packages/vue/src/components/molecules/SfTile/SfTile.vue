<template>
  <SfLink :link="link" class="sf-tile" :style="style">
    <slot name="title" v-bind="{ title }">
      <SfHeading
        :class="{ 'display-none': !title }"
        class="sf-tile__title"
        :level="3"
        :title="title"
      />
    </slot>
  </SfLink>
</template>
<script>
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
import SfLink from "../../atoms/SfLink/SfLink.vue";
export default {
  name: "SfTile",
  components: {
    SfHeading,
    SfLink,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    background: {
      type: [String, Object],
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
  computed: {
    style() {
      if (typeof this.background === String) {
        return {
          "--tile-background": `url('${this.background}')`,
        };
      } else {
        return {
          "--tile-background": `url(${this.background["desktop"]})`,
          "--tile-background-mobile": `url(${this.background["mobile"]})`,
        };
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfTile.scss";
</style>

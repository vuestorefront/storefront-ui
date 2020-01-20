<template>
  <div class="sf-footer-column">
    <div class="sf-footer-column__title" @click="toggle(title)">
      {{ title }}
      <div class="sf-footer-column__chevron">
        <SfChevron :class="{ 'sf-chevron--top': open }" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="open" class="sf-footer-column__content">
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
export default {
  name: "SfFooterColumn",
  components: { SfChevron },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    open() {
      return this.$parent.open.includes(this.title);
    }
  },
  mounted() {
    this.$parent.items.push(this.title);
  },
  methods: {
    toggle(payload) {
      this.$parent.toggle(payload);
    }
  }
};
</script>

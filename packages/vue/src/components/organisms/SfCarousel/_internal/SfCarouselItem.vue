<template>
  <li tabindex="0" v-focus class="sf-carousel-item glide__slide">
    <slot />
  </li>
</template>
<script>
import { focus } from "../../../../utilities/directives/focus-directive.js";
export default {
  name: "SfCarouselItem",
  directives: { focus },
};
</script>

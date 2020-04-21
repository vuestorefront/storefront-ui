<template>
  <li v-focus tabindex="0" class="sf-list__item">
    <!-- @slot -->
    <slot />
  </li>
</template>
<script>
import { focus } from "../../../../utilities/directives/focus-directive.js";
export default {
  name: "SfListItem",
  directives: { focus },
};
</script>
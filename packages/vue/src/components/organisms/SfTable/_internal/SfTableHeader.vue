<template>
  <th v-focus tabindex="0" class="sf-table__header">
    <slot />
  </th>
</template>
<script>
import { focus } from "../../../../utilities/directives/focus-directive.js";
export default {
  name: "SfTableHeader",
  directives: { focus },
};
</script>

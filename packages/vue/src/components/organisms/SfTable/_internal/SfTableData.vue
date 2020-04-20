<template>
  <td v-focus tabindex="0" class="sf-table__data">
    <slot />
  </td>
</template>
<script>
import { focus } from "../../../../utilities/directives/focus-directive.js";
export default {
  name: "SfTableData",
  directives: { focus },
};
</script>

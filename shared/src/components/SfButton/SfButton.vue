<template>
  <div>
    <button v-focus class="button-lg outline-violet">
      Hello world
    </button>
    <input v-focus type="text" class="outline-violet">
  </div>
</template>

<script>
import { focus } from '../../utils/focus-directive.js'
export default {
  directives: {
    focus
  }
}
</script>

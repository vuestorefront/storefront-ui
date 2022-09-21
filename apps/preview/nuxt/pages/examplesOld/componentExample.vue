<template>
  <div class="e-page">
    <div class="e-page-component">
      Your component example here
      <Button text="yay my component has been mounted"/>
    </div>
    <div class="e-page-controls">
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here<br>
      your controls here
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Button from '../../output/blocks/Button.vue'

export default defineComponent({
  name: 'ComponentExample',
  components: {
    Button
  }
});
</script>

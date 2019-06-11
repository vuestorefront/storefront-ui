<template>
  <div id="app">
    <SfButton>Hello World</SfButton>
  </div>
</template>

<script>
import { SfButton } from "@storefrontui/vue"
import "@storefrontui/vue/src/css/_all.scss"

export default {
  name: 'app',
  components: {
    SfButton
  }
}
</script>

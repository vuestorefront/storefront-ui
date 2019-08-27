<template>
  <span> {{ message }} </span>
</template>

<script>
export default {
  data () {
    return { 
      expanded: false
    }
  },
  props: {
    message: {
      default: 'see example'
    }
  }
}
</script>
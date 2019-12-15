# component-description
Bar component for mobile components.

# common-usage
<br>


```html 
<template>
  <SfBar 
    :title="title"
    :back="true"
    @click:back=""
    :close="false"
    @click:close=""
   />
</template>

<script>
import { SfBar } from '@storefront-ui/vue'

export default {
  components: {
    SfBar
  }, 
  data(){
    return {
       title: "Dresses"
    }
  }
}
</script>
```

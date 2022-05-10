<template>
  <div>
    <p>Progress Linear</p>
    <SfProgressLinear class="mb-5" :value="value" />
    <p>Progress SM</p>
    <SfProgressSM :value="value" />
    <p>Progress Base</p>
    <SfProgressBase :value="value" />
    <p>Progress LG</p>
    <SfProgressLG :value="value" />
    <p>Progress XL</p>
    <SfProgressXL :value="value" />
    <p>Progress 2XL</p>
    <SfProgress2XL :value="value" />
    <p>Progress 3XL</p>
    <SfProgress3XL :value="value" />
    Hello nuxt
    <SfDivider />
    <SfCheckbox name="checkbox" />
    <SfCheckboxRight name="checkbox" />
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import SfDivider from '../components/SfDivider/SfDivider.vue'
import SfProgress3XL from '../components/SfProgress/SfProgress3XL.vue'
import SfProgressXL from '../components/SfProgress/SfProgressXL.vue'
import SfProgress2XL from '../components/SfProgress/SfProgress2XL.vue'
import SfProgressLG from '../components/SfProgress/SfProgressLG.vue'
import SfProgressSM from '../components/SfProgress/SfProgressSM.vue'
import SfProgressLinear from '../components/SfProgress/SfProgressLinear.vue'

export default {
  name: 'IndexPage',
  components: {
    SfDivider,
    SfProgressXL,
    SfProgress2XL,
    SfProgressLG,
    SfProgressSM,
    SfProgress3XL,
    SfProgressLinear
  },
  setup () {
    const value = ref(0)

    const loadProgress = setInterval(() => {
      value.value = value.value + 10
      if (value.value >= 100) {
        clearInterval(loadProgress)
      }
    }, 1000)

    return {
      value
    }
  }
}
</script>

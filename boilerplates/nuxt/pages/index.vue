<template>
  <div>
      <SfButtonPrimary @click="onClick">
    <p>Progress Linear</p>
    <ProgressLinear class="mb-5" :value="value" />
    <p>Progress SM</p>
    <ProgressSm :value="value" />
    <p>Progress Base</p>
    <ProgressBase :value="value" />
    <p>Progress LG</p>
    <ProgressLg :value="value" />
    <p>Progress XL</p>
    <ProgressXl :value="value" />
    <p>Progress 2XL</p>
    <Progress2Xl :value="value" />
    <p>Progress 3XL</p>
    <Progress3Xl :value="value" />
    Hello nuxt
    <DividerBase />
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import DividerBase from '../components/Divider/DividerBase.vue'
import Progress3Xl from '../components/Progress/Progress3Xl.vue'
import ProgressXl from '../components/Progress/ProgressXl.vue'
import Progress2Xl from '../components/Progress/Progress2Xl.vue'
import ProgressBase from '../components/Progress/ProgressBase.vue'
import ProgressLg from '../components/Progress/ProgressLg.vue'
import ProgressSm from '../components/Progress/ProgressSm.vue'
import ProgressLinear from '../components/Progress/ProgressLinear.vue'

export default {
  name: 'IndexPage',
  components: {
    DividerBase,
    ProgressXl,
    Progress2Xl,
    ProgressBase,
    ProgressLg,
    ProgressSm,
    Progress3Xl,
    ProgressLinear
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

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
    <p>Primary button</p>
    <div class="flex items-center m-10 gap-x-8">
      <SfButtonPrimary @click="onClick">
        Hello
      </SfButtonPrimary>
      <SfButtonPrimary :disabled="true" @click="onClick">
        Hello
      </SfButtonPrimary>
    </div>
    <p>Secondary button</p>
    <div class="flex items-center m-10 gap-x-8">
      <SfButtonSecondary @click="onClick">
        Hello
      </SfButtonSecondary>
      <SfButtonSecondary :disabled="true" @click="onClick">
        Hello
      </SfButtonSecondary>
    </div>
    <p>Tertiary button</p>
    <div class="flex items-center m-10 gap-x-8">
      <SfButtonTertiary @click="onClick">
        Hello
      </SfButtonTertiary>
      <SfButtonTertiary :disabled="true" @click="onClick">
        Hello
      </SfButtonTertiary>
    </div>
    <p>Destroy button</p>
    <div class="flex items-center m-10 gap-x-8">
      <SfButtonDestroy @click="onClick">
        Hello
      </SfButtonDestroy>
      <SfButtonDestroy :disabled="true" @click="onClick">
        Hello
      </SfButtonDestroy>
    </div>
    <p>Destroy button secondary</p>
    <div class="flex items-center m-10 gap-x-8">
      <SfButtonDestroySecondary @click="onClick">
        Hello
      </SfButtonDestroySecondary>
      <SfButtonDestroySecondary :disabled="true" @click="onClick">
        Hello
      </SfButtonDestroySecondary>
    </div>
    <p>Destroy button tertiary</p>
    <div class="flex items-center m-10 gap-x-8">
      <SfButtonDestroyTertiary @click="onClick">
        Hello
      </SfButtonDestroyTertiary>
      <SfButtonDestroyTertiary :disabled="true" @click="onClick">
        Hello
      </SfButtonDestroyTertiary>
    </div>
    <p>Rounded button</p>
    <div class="flex items-center m-10 gap-x-8">
      <SfButtonRounded aria-label="Dot button" @click="onClick">
        <svg class="w-4 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
        </svg>
      </SfButtonRounded>
      <SfButtonRounded aria-label="Dot button" :disabled="true" @click="onClick">
        <svg class="w-4 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
        </svg>
      </SfButtonRounded>
    </div>
    Hello nuxt
    <SfDivider />
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import SfButtonPrimary from '../components/SfButton/SfButtonPrimary.vue'
import SfButtonSecondary from '../components/SfButton/SfButtonSecondary.vue'
import SfButtonTertiary from '../components/SfButton/SfButtonTertiary.vue'
import SfButtonDestroy from '../components/SfButton/SfButtonDestroy.vue'
import SfButtonDestroySecondary from '../components/SfButton/SfButtonDestroySecondary.vue'
import SfButtonDestroyTertiary from '../components/SfButton/SfButtonDestroyTertiary.vue'
import SfButtonRounded from '../components/SfButton/SfButtonRounded.vue'
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
    SfButtonPrimary,
    SfButtonSecondary,
    SfButtonTertiary,
    SfButtonDestroy,
    SfButtonDestroySecondary,
    SfButtonDestroyTertiary,
    SfButtonRounded,
    SfProgressXL,
    SfProgress2XL,
    SfProgressLG,
    SfProgressSM,
    SfProgress3XL,
    SfProgressLinear
  },
  setup () {
    const onClick = () => console.log('Clicked button')
    const value = ref(0)

    const loadProgress = setInterval(() => {
      value.value = value.value + 10
      if (value.value >= 100) {
        clearInterval(loadProgress)
      }
    }, 1000)

    return {
      SfButtonPrimary,
      SfButtonSecondary,
      SfButtonTertiary,
      SfButtonDestroy,
      SfButtonDestroySecondary,
      SfButtonDestroyTertiary,
      SfButtonRounded,
      onClick,
      value
    }
  }
}
</script>

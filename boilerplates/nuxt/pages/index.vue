<template>
  <div>
    <p>Primary button</p>
    <div class="flex items-center gap-x-8 m-10">
      <SfButtonPrimary @click="onClick">
        Hello
      </SfButtonPrimary>
      <SfButtonPrimary :disabled="true" @click="onClick">
        Hello
      </SfButtonPrimary>
    </div>
    <p>Secondary button</p>
    <div class="flex items-center gap-x-8 m-10">
      <SfButtonSecondary @click="onClick">
        Hello
      </SfButtonSecondary>
      <SfButtonSecondary :disabled="true" @click="onClick">
        Hello
      </SfButtonSecondary>
    </div>
    <p>Tertiary button</p>
    <div class="flex items-center gap-x-8 m-10">
      <SfButtonTertiary @click="onClick">
        Hello
      </SfButtonTertiary>
      <SfButtonTertiary :disabled="true" @click="onClick">
        Hello
      </SfButtonTertiary>
    </div>
    <p>Destroy button</p>
    <div class="flex items-center gap-x-8 m-10">
      <SfButtonDestroy @click="onClick">
        Hello
      </SfButtonDestroy>
      <SfButtonDestroy :disabled="true" @click="onClick">
        Hello
      </SfButtonDestroy>
    </div>
    <p>Destroy button secondary</p>
    <div class="flex items-center gap-x-8 m-10">
      <SfButtonDestroySecondary @click="onClick">
        Hello
      </SfButtonDestroySecondary>
      <SfButtonDestroySecondary :disabled="true" @click="onClick">
        Hello
      </SfButtonDestroySecondary>
    </div>
    <p>Destroy button tertiary</p>
    <div class="flex items-center gap-x-8 m-10">
      <SfButtonDestroyTertiary @click="onClick">
        Hello
      </SfButtonDestroyTertiary>
      <SfButtonDestroyTertiary :disabled="true" @click="onClick">
        Hello
      </SfButtonDestroyTertiary>
    </div>
    <p>Rounded button</p>
    <div class="flex items-center gap-x-8 m-10">
      <SfButtonRounded aria-label="Dot button" @click="onClick">
        <img :src="dotSvg" alt="Dot icon">
      </SfButtonRounded>
      <SfButtonRounded aria-label="Dot button" :disabled="true" @click="onClick">
        <img :src="dotSvg" alt="Dot icon">
      </SfButtonRounded>
    </div>
  </div>
</template>

<script>
import SfButtonPrimary from '../components/SfButton/SfButtonPrimary.vue'
import SfButtonSecondary from '../components/SfButton/SfButtonSecondary.vue'
import SfButtonTertiary from '../components/SfButton/SfButtonTertiary.vue'
import SfButtonDestroy from '../components/SfButton/SfButtonDestroy.vue'
import SfButtonDestroySecondary from '../components/SfButton/SfButtonDestroySecondary.vue'
import SfButtonDestroyTertiary from '../components/SfButton/SfButtonDestroyTertiary.vue'
import SfButtonRounded from '../components/SfButton/SfButtonRounded.vue'
import dotSvg from '../assets/dot.svg'

export default {
  name: 'IndexPage',
  setup () {
    const onClick = () => console.log('Clicked button')
    return {
      SfButtonPrimary,
      SfButtonSecondary,
      SfButtonTertiary,
      SfButtonDestroy,
      SfButtonDestroySecondary,
      SfButtonDestroyTertiary,
      SfButtonRounded,
      dotSvg,
      onClick
    }
  }
}
</script>

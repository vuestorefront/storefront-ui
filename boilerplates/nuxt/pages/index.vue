<template>
  <div>
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
    <SfCheckbox name="checkbox" />
    <SfCheckboxRight name="checkbox" />
    <div class="flex items-center m-10 gap-x-8">
      <SfTooltip />
    </div>
    <div class="flex items-center m-10 gap-x-8">
      <SfTooltipBottom />
    </div>
    <div class="flex items-center m-10 gap-x-8">
      <SfTooltipRight />
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
import SfDivider from '../components/SfDivider/SfDivider.vue'
import SfCheckbox from '../components/SfCheckbox/SfCheckbox.vue'
import SfCheckboxRight from '../components/SfCheckbox/SfCheckboxRight.vue'
import SfTooltip from '../components/SfTooltip/SfTooltip.vue'
import SfTooltipBottom from '../components/SfTooltip/SfTooltipBottom.vue'
import SfTooltipRight from '../components/SfTooltip/SfTooltipRight.vue'

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
    SfTooltip,
    SfTooltipBottom,
    SfTooltipRight
  },
  setup () {
    const onClick = () => console.log('Clicked button')
    return {
      SfCheckbox,
      SfCheckboxRight,
      SfButtonPrimary,
      SfButtonSecondary,
      SfButtonTertiary,
      SfButtonDestroy,
      SfButtonDestroySecondary,
      SfButtonDestroyTertiary,
      SfButtonRounded,
      onClick,
      SfTooltip,
      SfTooltipBottom
    }
  }
}
</script>

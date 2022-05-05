<template>
  <fieldset
    aria-required="true"
    aria-invalid="true"
    aria-describedby="errorMessage"
    role="radiogroup"
    class="flex flex-col"
  >
    <SfRadio
      name="radio-group-1"
      :invalid="true"
    />
    <SfRadio name="radio-group-2" />
    <span
      id="errorMessage"
      class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
    >Error message</span>
  </fieldset>
</template>

<script>
import SfRadio from './SfRadio.vue'
export default {
  name: 'SfRadioGroup',
  components: {
    SfRadio
  }
}
</script>

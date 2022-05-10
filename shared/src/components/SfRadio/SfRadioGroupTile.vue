<template>
  <fieldset
    aria-required="true"
    aria-invalid="true"
    aria-describedby="errorMessage"
    role="radiogroup"
    class="flex flex-col"
  >
    <SfRadioTile
      name="radio-group-tile-1"
      :invalid="true"
      value="one"
    />
    <SfRadioTile
      name="radio-group-tile-2"
      value="two"
    />
    <span
      id="errorMessage"
      class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
    >Error message</span>
  </fieldset>
</template>

<script>
import SfRadioTile from './SfRadioTile.vue'
export default {
  name: 'SfRadioGroupTile',
  components: {
    SfRadioTile
  }
}
</script>

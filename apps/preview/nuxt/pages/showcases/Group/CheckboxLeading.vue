<template>
  <SfGroup
    :invalid="invalid"
  >
    <span class="flex justify-between">
      <label
        v-for="({label, hint, value}, i) in checkboxes" :key="i"
        class="text-base text-gray-900 cursor-pointer font-body "
      >
        <SfCheckbox
        v-model="modelValue"
        :value="value"
        :array="checkboxes"
        :invalid="invalid"
        class="peer"/>
        {{ label }}
        <span class="block" >
          {{ hint }}
        </span>
      </label>
    </span>
  </SfGroup>
  <SfButton @click="invalid = !invalid">Invalid</SfButton>
</template>
<script lang="ts" setup>
import { SfCheckbox, SfGroup, SfButton } from '@storefront-ui/vue';
import { ref } from 'vue';

const checkboxes = [
  {
    label: 'Label',
    hint: 'hint',
    value: 'value-1'
  },
  {
    label: 'Label',
    hint: 'hint',
    value: 'value-2'
  },{
    label: 'Label',
    hint: 'hint',
    value: 'value-3'
  },{
    label: 'Label',
    hint: 'hint',
    value: 'value-4'
  },{
    label: 'Label',
    hint: 'hint',
    value: 'value-5'
  },
]

const modelValue = ref([]);
const invalid = ref(false);


</script>

<template>
  <div>
    <p :id="labelId">Select rating</p>
    <SfRatingButton v-model="modelValue" :aria-labelledby="labelId">
      <template #default="{ isFilled, iconSize }">
        <SfIconFavoriteFilled
          v-if="isFilled"
          role="none"
          :size="iconSize"
          class="text-red-700 cursor-pointer peer-disabled:cursor-default peer-disabled:text-neutral-500 peer-focus-visible:outline"
        />
        <SfIconFavorite
          v-else
          role="none"
          :size="iconSize"
          class="text-neutral-500 cursor-pointer peer-disabled:cursor-default peer-disabled:text-neutral-400 peer-focus-visible:outline"
        />
      </template>
    </SfRatingButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfRatingButton, SfIconFavorite, SfIconFavoriteFilled, useId } from '@storefront-ui/vue';
const labelId = useId();
const modelValue = ref();
</script>

<template>
  <article class="w-full p-4 border rounded-md">
    <header class="flex flex-col items-start pb-4 md:flex-row md:justify-between">
      <div class="flex items-start">
        <img :src="reviewAvatar" alt="Review avatar" class="p-0.5" />
        <div class="flex-col pl-2">
          <span class="text-sm text-neutral-900">Karla</span>
          <span class="flex items-center pr-2 text-xs text-neutral-500">
            <SfRating :value="5" :max="5" size="xs" class="mr-2" />
            2 days ago
          </span>
        </div>
      </div>
      <p class="flex items-center text-xs truncate text-primary-700">
        <SfIconCheck size="xs" class="mr-1" /> Verified purchase
      </p>
    </header>
    <div class="text-sm text-neutral-900">I love them</div>
  </article>
</template>

<script lang="ts" setup>
import { SfRating, SfIconCheck } from '@storefront-ui/vue';
import reviewAvatar from '@assets/review_avatar.png';
</script>

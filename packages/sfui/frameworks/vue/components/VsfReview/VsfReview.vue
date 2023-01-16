<script lang="ts" setup>
import { computed, ref, toRefs } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
  author: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
  charLimit: {
    type: Number,
    default: 700,
  },
  showMoreText: {
    type: String,
    default: 'Read more',
  },
  showLessText: {
    type: String,
    default: 'Read less',
  },
});
const { content, charLimit } = toRefs(props);

const isCollapsed = ref(true);
const isButtonVisible = computed(() => content.value.length > charLimit.value);
const truncatedContent = computed(() =>
  isButtonVisible.value && isCollapsed.value ? `${content.value.substring(0, charLimit.value)}...` : content.value,
);
</script>

<template>
  <div class="vsf-review">
    <p class="vsf-review__title">{{ title }}</p>
    <div class="vsf-review__data">
      <div class="vsf-review__data-leading">
        <slot name="rating" />
        <p class="vsf-review__data-date">{{ date }}</p>
      </div>
      <div class="vsf-review__data-trailing">
        <p class="vsf-review__data-author">{{ author }}</p>
        <slot name="authorSuffix" />
      </div>
    </div>
    <div class="vsf-review__content">{{ truncatedContent }}</div>
    <button v-if="isButtonVisible" type="button" class="vsf-review__expand-button" @click="isCollapsed = !isCollapsed">
      {{ isCollapsed ? showMoreText : showLessText }}
    </button>
    <slot name="actions" />
  </div>
</template>

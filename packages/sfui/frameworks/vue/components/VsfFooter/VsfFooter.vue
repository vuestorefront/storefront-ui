<script setup lang="ts">
import { PropType } from 'vue';
import type { VsfCategoriesType, VsfContactOptionsType, VsfLinkType } from './types';
import type { TagOrComponent } from '../../utils/types';

defineProps({
  categories: {
    type: Array as PropType<VsfCategoriesType[]>,
    default: () => [],
  },
  socialMedia: {
    type: Array as PropType<VsfLinkType[]>,
    default: () => [],
  },
  companyName: {
    type: String,
    default: '',
  },
  contactOptions: {
    type: Array as PropType<VsfContactOptionsType[]>,
    default: () => [],
  },
  bottomLinks: {
    type: Array as PropType<VsfLinkType[]>,
    default: () => [],
  },
});

const linkTag = (tag: TagOrComponent | undefined) => tag ?? 'a';
</script>

<template>
  <footer class="vsf-footer">
    <div class="vsf-footer__wrapper--categories">
      <template v-for="category in categories" :key="category.label">
        <div class="vsf-footer__categories">
          <span class="vsf-footer__label--category">{{ category.label }}</span>
          <template v-for="subcategory in category?.subcategories" :key="subcategory.label">
            <component
              :is="linkTag(subcategory.linkTag)"
              v-bind="subcategory.bindings"
              class="vsf-footer__label--subcategory"
            >
              {{ subcategory.label }}
            </component>
          </template>
        </div>
      </template>
    </div>
    <div class="vsf-footer__wrapper--contact">
      <template v-for="contactOption in contactOptions" :key="contactOption.label">
        <div class="vsf-footer__contact">
          <slot :name="`${contactOption.iconName}Icon`" />
          <component
            :is="linkTag(contactOption.linkTag)"
            v-bind="contactOption.bindings"
            class="vsf-footer__label--contact"
          >
            {{ contactOption.label }}
          </component>
          <template v-for="detail in contactOption.details" :key="detail">
            <span class="vsf-footer__contact--option">{{ detail }}</span>
          </template>
        </div>
      </template>
    </div>
    <div class="vsf-footer__wrapper--social-media">
      <template v-for="social in socialMedia" :key="social.label">
        <div class="vsf-footer__social-media">
          <component :is="linkTag(social.linkTag)" v-bind="social.bindings" class="vsf-footer__label--social-media">
            <slot :name="`${social.label?.toLowerCase()}Icon`" />
          </component>
        </div>
      </template>
      <div class="vsf-footer__bottom-links">
        <template v-for="bottomLink in bottomLinks" :key="bottomLink.label">
          <component
            :is="linkTag(bottomLink.linkTag)"
            v-bind="bottomLink.bindings"
            class="vsf-footer__label--bottom-links"
          >
            {{ bottomLink.label }}
          </component>
        </template>
      </div>
      <span class="vsf-footer__company-name">{{ companyName }}</span>
    </div>
  </footer>
</template>

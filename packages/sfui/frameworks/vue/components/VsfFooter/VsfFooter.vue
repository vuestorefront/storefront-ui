<script setup lang="ts">
import { PropType } from 'vue';
import { VsfFooterColumnType, VsfFooterLabelType } from '../../shared/types';
import { VsfFooterLabel, VsfFooterColumn, VsfFooterSocialMedia } from './index';
import type { VsfCategoriesType, VsfContactOptionsType, VsfLinkType } from './types';

defineProps({
  categories: {
    type: Array as PropType<VsfCategoriesType[]>,
    default: () => [],
  },
  contactOptions: {
    type: Array as PropType<VsfContactOptionsType[]>,
    default: () => [],
  },
  socialMedia: {
    type: Array as PropType<VsfLinkType[]>,
    default: () => [],
  },
  bottomLinks: {
    type: Array as PropType<VsfLinkType[]>,
    default: () => [],
  },
  companyName: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <footer class="vsf-footer">
    <div class="vsf-footer__section--top">
      <slot name="categories">
        <template v-for="category in categories" :key="category.label">
          <VsfFooterColumn>
            <VsfFooterLabel :type="VsfFooterLabelType.category">{{ category.label }}</VsfFooterLabel>
            <template v-for="subcategory in category?.subcategories" :key="subcategory.label">
              <VsfFooterLabel :type="VsfFooterLabelType.subcategory">
                <slot name="subcategoryLink" :subcategory="subcategory" />
              </VsfFooterLabel>
            </template>
          </VsfFooterColumn>
        </template>
      </slot>
    </div>
    <div class="vsf-footer__section--middle">
      <slot name="contact">
        <template v-for="contactOption in contactOptions" :key="contactOption.label">
          <VsfFooterColumn :type="VsfFooterColumnType.middle">
            <slot name="contactIcon" :contact-option="contactOption" />
            <VsfFooterLabel :type="VsfFooterLabelType.contact">
              <slot name="contactLabel" :contact-option="contactOption" />
            </VsfFooterLabel>
            <template v-for="detail in contactOption.details" :key="detail">
              <VsfFooterLabel :type="VsfFooterLabelType.contactDescription">{{ detail }}</VsfFooterLabel>
            </template>
          </VsfFooterColumn>
        </template>
      </slot>
    </div>
    <div class="vsf-footer__section--bottom">
      <slot name="socialMedia">
        <VsfFooterSocialMedia>
          <template v-for="social in socialMedia" :key="social.label">
            <VsfFooterLabel :type="VsfFooterLabelType.socialMedia">
              <slot name="socialItem" :social="social" />
            </VsfFooterLabel>
          </template>
        </VsfFooterSocialMedia>
      </slot>
      <div class="vsf-footer__bottom-links">
        <slot name="bottomLinks">
          <template v-for="bottomLink in bottomLinks" :key="bottomLink.label">
            <VsfFooterLabel :type="VsfFooterLabelType.bottomLinks">
              <slot name="bottomLink" :bottom-link="bottomLink" />
            </VsfFooterLabel>
          </template>
        </slot>
      </div>
      <span class="vsf-footer__label--company-name">
        {{ companyName }}
      </span>
    </div>
  </footer>
</template>

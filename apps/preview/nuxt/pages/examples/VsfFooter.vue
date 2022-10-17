<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfFooter :company-name="companyNameModel">
        <template #categories>
          <template v-for="category in categoriesModel" :key="category.label">
            <VsfFooterColumn>
              <VsfFooterLabel :type="VsfFooterLabelType.category">{{ category.label }}</VsfFooterLabel>
              <template v-for="subcategory in category?.subcategories" :key="subcategory.label">
                <VsfFooterLabel :type="VsfFooterLabelType.subcategory">
                  <component :is="linkTag(subcategory.linkTag)" v-bind="subcategory.bindings">
                    {{ subcategory.label }}
                  </component>
                </VsfFooterLabel>
              </template>
            </VsfFooterColumn>
          </template>
        </template>
        <template #contact>
          <template v-for="contactOption in contactOptionsModel" :key="contactOption.label">
            <VsfFooterColumn :type="VsfFooterColumnType.middle">
              <VsfIconHelp v-if="contactOption.iconName === 'help'" size="lg" />
              <VsfIconChat v-if="contactOption.iconName === 'chat'" size="lg" />
              <VsfIconPhone v-if="contactOption.iconName === 'phone'" size="lg" />
              <VsfFooterLabel :type="VsfFooterLabelType.contact">
                <component :is="linkTag(contactOption.linkTag)" v-bind="contactOption.bindings">
                  {{ contactOption.label }}
                </component>
              </VsfFooterLabel>
              <template v-for="detail in contactOption.details" :key="detail">
                <VsfFooterLabel :type="VsfFooterLabelType.contactDescription">{{ detail }}</VsfFooterLabel>
              </template>
            </VsfFooterColumn>
          </template>
        </template>
        <template #socialMedia>
          <VsfFooterSocialMedia>
            <template v-for="social in socialMediaModel" :key="social.label">
              <VsfFooterLabel :type="VsfFooterLabelType.socialMedia">
                <component :is="linkTag(social.linkTag)" v-bind="social.bindings">
                  <VsfIconFacebook v-if="social.label === 'Facebook'" />
                  <VsfIconTwitter v-if="social.label === 'Twitter'" />
                  <VsfIconInstagram v-if="social.label === 'Instagram'" />
                  <VsfIconPinterest v-if="social.label === 'Pinterest'" />
                  <VsfIconYoutube v-if="social.label === 'Youtube'" />
                </component>
              </VsfFooterLabel>
            </template>
          </VsfFooterSocialMedia>
        </template>
        <template #bottomLinks>
          <template v-for="bottomLink in bottomLinksModel" :key="bottomLink.label">
            <VsfFooterLabel :type="VsfFooterLabelType.bottomLinks">
              <component :is="linkTag(bottomLink.linkTag)" v-bind="bottomLink.bindings">
                {{ bottomLink.label }}
              </component>
            </VsfFooterLabel>
          </template>
        </template>
        <template #companyName>
          {{ companyNameModel }}
        </template>
      </VsfFooter>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, resolveComponent } from 'vue';
import VsfFooter, {
  VsfFooterColumn,
  VsfFooterSocialMedia,
  VsfFooterLabel,
} from '@sfui/sfui/frameworks/vue/components/VsfFooter/index';
import {
  VsfIconHelp,
  VsfIconChat,
  VsfIconPhone,
  VsfIconFacebook,
  VsfIconTwitter,
  VsfIconPinterest,
  VsfIconYoutube,
  VsfIconInstagram,
} from '@sfui/sfui/frameworks/vue/components/VsfIcons/index';
import type { TagOrComponent } from '@sfui/sfui/frameworks/vue/utils/types';
import { VsfFooterLabelType, VsfFooterColumnType } from '@sfui/sfui/shared/types/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfFooterExample',
  components: {
    VsfFooter,
    VsfFooterColumn,
    VsfFooterLabel,
    VsfFooterSocialMedia,
    Controls,
    VsfIconHelp,
    VsfIconChat,
    VsfIconPhone,
    VsfIconFacebook,
    VsfIconTwitter,
    VsfIconPinterest,
    VsfIconYoutube,
    VsfIconInstagram,
    VsfFooterLabelType,
    VsfFooterColumnType,
  },
  setup() {
    const componentToShow = computed(() => {
      return resolveComponent('NuxtLink');
    });
    const linkTag = (tag: TagOrComponent | undefined) => tag ?? 'a';
    const categories = [
      {
        label: 'How to buy',
        subcategories: [
          {
            label: 'Payment methods',
            linkTag: componentToShow,
            bindings: { to: '/payment' },
          },
          {
            label: 'Order pickup',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Purchase status',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Track orders',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Returns',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
        ],
      },
      {
        label: 'Help',
        subcategories: [
          {
            label: 'Help centers',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Security & fraud',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Feedback',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Contact',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
        ],
      },
      {
        label: 'Services',
        subcategories: [
          {
            label: 'Gift cards',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Order pickup',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Purchase status',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Track orders',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
        ],
      },
      {
        label: 'About',
        subcategories: [
          {
            label: 'About us',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Order pickup',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Purchase status',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Track orders',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
          {
            label: 'Returns',
            linkTag: componentToShow,
            bindings: { to: '/' },
          },
        ],
      },
    ];
    const socialMedia = [
      {
        label: 'Facebook',
        bindings: { href: '/' },
      },
      {
        label: 'Twitter',
        bindings: { href: '/' },
      },
      {
        label: 'Instagram',
        bindings: { href: '/' },
      },
      {
        label: 'Pinterest',
        bindings: { href: '/' },
      },
      {
        label: 'Youtube',
        bindings: { href: '/' },
      },
    ];
    const contactOptions = [
      {
        label: 'Help center',
        bindings: { href: '/' },
        details: ['Find answers online anytime'],
        iconName: 'help',
      },
      {
        label: 'Live chat',
        bindings: { href: '/' },
        details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
        iconName: 'chat',
      },
      {
        label: '1 234 567 8901',
        bindings: { href: '/' },
        details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
        iconName: 'phone',
      },
    ];
    const bottomLinks = [
      {
        label: 'Terms',
        linkTag: componentToShow,
        bindings: { to: '/' },
      },
      {
        label: 'Privacy policy',
        linkTag: componentToShow,
        bindings: { to: '/' },
      },
    ];
    return {
      linkTag,
      VsfFooterLabelType,
      VsfFooterColumnType,
      ...prepareControls(
        [
          {
            type: 'json',
            modelName: 'categoriesModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'json',
            modelName: 'socialMediaModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'json',
            modelName: 'contactOptionsModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'json',
            modelName: 'bottomLinksModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'text',
            modelName: 'companyNameModel',
            propDefaultValue: '',
            propType: 'string',
          },
        ],
        {
          categoriesModel: ref(categories),
          socialMediaModel: ref(socialMedia),
          companyNameModel: ref('© 2022 Vue Storefront'),
          bottomLinksModel: ref(bottomLinks),
          contactOptionsModel: ref(contactOptions),
        },
      ),
    };
  },
});
</script>

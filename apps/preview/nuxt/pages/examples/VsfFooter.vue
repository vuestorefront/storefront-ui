<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfFooter
        :categories="categoriesModel"
        :contact-options="contactOptionsModel"
        :social-media="socialMediaModel"
        :bottom-links="bottomLinksModel"
        :company-name="companyNameModel"
      >
        <template #subcategoryLink="{ subcategory }">
          <component :is="linkTag(subcategory.linkTag)" v-bind="subcategory.bindings">
            {{ subcategory.label }}
          </component>
        </template>
        <template #contactIcon="{ contactOption }">
          <VsfIconHelp v-if="contactOption.iconName === 'help'" size="lg" />
          <VsfIconChat v-if="contactOption.iconName === 'chat'" size="lg" />
          <VsfIconPhone v-if="contactOption.iconName === 'phone'" size="lg" />
        </template>
        <template #contactLabel="{ contactOption }">
          <component :is="linkTag(contactOption.linkTag)" v-bind="contactOption.bindings">
            {{ contactOption.label }}
          </component>
        </template>
        <template #socialItem="{ social }">
          <component :is="linkTag(social.linkTag)" v-bind="social.bindings">
            <VsfIconFacebook v-if="social.label === 'Facebook'" />
            <VsfIconTwitter v-if="social.label === 'Twitter'" />
            <VsfIconInstagram v-if="social.label === 'Instagram'" />
            <VsfIconPinterest v-if="social.label === 'Pinterest'" />
            <VsfIconYoutube v-if="social.label === 'Youtube'" />
          </component>
        </template>
        <template #bottomLink="{ bottomLink }">
          <component :is="linkTag(bottomLink.linkTag)" v-bind="bottomLink.bindings">
            {{ bottomLink.label }}
          </component>
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
import VsfFooter from '@sfui/sfui/frameworks/vue/components/VsfFooter/index';
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
import type { TagOrComponent } from '@sfui/sfui/frameworks/vue/shared/utils/types';
import { VsfFooterLabelType, VsfFooterColumnType } from '@sfui/shared/types/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfFooterExample',
  components: {
    VsfFooter,
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

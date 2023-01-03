<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfFooter v-bind="state">
      <template #subcategoryLink="{ subcategory }">
        <component :is="linkTag(subcategory.linkTag)" v-bind="subcategory.bindings">
          {{ subcategory.label }}
        </component>
      </template>
      <template #divider>
        <VsfDivider />
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
  </ComponentExample>
</template>

<script lang="ts">
import { computed, defineComponent, ref, resolveComponent } from 'vue';
import { VsfFooter } from '@storefront-ui/vue/components/VsfFooter/index';
import {
  VsfIconHelp,
  VsfIconChat,
  VsfIconPhone,
  VsfIconFacebook,
  VsfIconTwitter,
  VsfIconPinterest,
  VsfIconYoutube,
  VsfIconInstagram,
} from '@storefront-ui/vue/components/VsfIcons/index';
import type { TagOrComponent } from '@storefront-ui/vue/shared/types';
import { VsfFooterLabelType, VsfFooterColumnType } from '@storefront-ui/shared/types/index';
import VsfDivider from '@storefront-ui/vue/components/VsfDivider/VsfDivider.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfFooterExample',
  components: {
    VsfFooter,
    ComponentExample,
    VsfDivider,
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
            modelName: 'categories',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'json',
            modelName: 'socialMedia',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'json',
            modelName: 'contactOptions',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'json',
            modelName: 'bottomLinks',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'text',
            modelName: 'companyName',
            propDefaultValue: '',
            propType: 'string',
          },
        ],
        {
          categories: ref(categories),
          socialMedia: ref(socialMedia),
          companyName: ref('© 2022 Vue Storefront'),
          bottomLinks: ref(bottomLinks),
          contactOptions: ref(contactOptions),
        },
      ),
    };
  },
});
</script>

<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfFooter :company-name="companyNameModel">
        <template #categories>
          <template v-for="category in categoriesModel" :key="category.label">
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
        </template>
        <template #contact>
          <template v-for="contactOption in contactOptionsModel" :key="contactOption.label">
            <div class="vsf-footer__contact">
              <VsfIconHelp v-if="contactOption.iconName === 'help'" size="lg" />
              <VsfIconChat v-if="contactOption.iconName === 'chat'" size="lg" />
              <VsfIconPhone v-if="contactOption.iconName === 'phone'" size="lg" />
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
        </template>
        <template #socialMedia>
          <template v-for="social in socialMediaModel" :key="social.label">
            <div class="vsf-footer__social-media">
              <component :is="linkTag(social.linkTag)" v-bind="social.bindings" class="vsf-footer__label--social-media">
                <VsfIconFacebook v-if="social.label === 'Facebook'" />
                <VsfIconTwitter v-if="social.label === 'Twitter'" />
                <VsfIconInstagram v-if="social.label === 'Instagram'" />
                <VsfIconPinterest v-if="social.label === 'Pinterest'" />
                <VsfIconYoutube v-if="social.label === 'Youtube'" />
              </component>
            </div>
          </template>
        </template>
        <template #bottomLinks>
          <template v-for="bottomLink in bottomLinksModel" :key="bottomLink.label">
            <component
              :is="linkTag(bottomLink.linkTag)"
              v-bind="bottomLink.bindings"
              class="vsf-footer__label--bottom-links"
            >
              {{ bottomLink.label }}
            </component>
          </template>
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
import VsfFooter from '@sfui/sfui/frameworks/vue/components/VsfFooter/VsfFooter.vue';
import VsfIconHelp from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconHelp.vue';
import VsfIconChat from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconChat.vue';
import VsfIconPhone from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconPhone.vue';
import VsfIconFacebook from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconFacebook.vue';
import VsfIconTwitter from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconTwitter.vue';
import VsfIconPinterest from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconPinterest.vue';
import VsfIconYoutube from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconYoutube.vue';
import VsfIconInstagram from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconInstagram.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import type { TagOrComponent } from '@sfui/sfui/frameworks/vue/utils/types';

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
      ...prepareControls(
        [
          {
            title: 'Categories',
            type: 'json',
            modelName: 'categoriesModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            title: 'Social media',
            type: 'json',
            modelName: 'socialMediaModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            title: 'Contact options',
            type: 'json',
            modelName: 'contactOptionsModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            title: 'Bottom links',
            type: 'json',
            modelName: 'bottomLinksModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            title: 'Company name',
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

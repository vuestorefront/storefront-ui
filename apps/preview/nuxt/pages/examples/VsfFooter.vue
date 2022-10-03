<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfFooter
        :categories="categoriesModel"
        :social-media="socialMediaModel"
        :contact-options="contactOptionsModel"
        :company-name="companyNameModel"
        :bottom-links="bottomLinksModel"
      >
        <template #helpIcon>
          <VsfIconHelp size="lg" />
        </template>
        <template #chatIcon>
          <VsfIconChat size="lg" />
        </template>
        <template #phoneIcon>
          <VsfIconPhone size="lg" />
        </template>
        <template #facebookIcon>
          <VsfIconFacebook />
        </template>
        <template #twitterIcon>
          <VsfIconTwitter />
        </template>
        <template #pinterestIcon>
          <VsfIconPinterest />
        </template>
        <template #youtubeIcon>
          <VsfIconYoutube />
        </template>
        <template #instagramIcon>
          <VsfIconInstagram />
        </template>
      </VsfFooter>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
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
      },
      {
        label: 'Live chat',
        bindings: { href: '/' },
        details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
      },
      {
        label: '1 234 567 8901',
        bindings: { href: '/' },
        details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
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
    return prepareControls(
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
    );
  },
});
</script>

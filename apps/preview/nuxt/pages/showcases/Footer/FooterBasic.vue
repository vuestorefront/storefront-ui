<template>
  <div class="pt-10 bg-neutral-100">
    <div
      class="grid justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(4,1fr)] px-4 md:px-6 pb-10 max-w-[1536px] mx-auto"
    >
      <div v-for="category in categories" :key="category.label" class="min-w-[25%] xs:min-w-[50%] xs:pb-4">
        <div class="text-lg font-medium leading-7 text-neutral-900 font-body">{{ category.label }}</div>
        <p
          v-for="subcategory in category.subcategories"
          :key="subcategory.label"
          class="py-2 typography-text-sm font-body"
        >
          <SfLink
            class="no-underline text-neutral-600 hover:underline hover:text-neutral-900 active:underline active:text-neutral-900"
            variant="secondary"
            :href="subcategory.link"
          >
            {{ subcategory.label }}
          </SfLink>
        </p>
      </div>
    </div>
    <hr />
    <div class="py-10 md:flex md:mx-auto max-w-[1536px]">
      <div v-for="contactOption in contactOptions" :key="contactOption.label" class="mx-auto my-4 text-center">
        <component :is="contactOption.icon" size="lg" />
        <p class="py-1 my-2 font-medium typography-text-lg font-body">
          <SfLink
            variant="secondary"
            class="no-underline text-neutral-600 hover:underline hover:text-neutral-900 active:underline active:text-neutral-900"
            :href="contactOption.link"
          >
            {{ contactOption.label }}
          </SfLink>
        </p>
        <p v-for="option in contactOption.details" :key="option" class="text-sm leading-5 text-neutral-600 font-body">
          {{ option }}
        </p>
      </div>
    </div>
    <div class="bg-neutral-900 justify-end px-4 py-10 md:flex md:py-6 max-w-[1536px] mx-auto">
      <div class="flex justify-center py-2 md:self-start">
        <p v-for="social in socialMedia" :key="social.label" class="mr-4">
          <SfButton
            as="a"
            variant="tertiary"
            class="text-white active:text-white hover:text-white hover:!bg-neutral-500 active:!bg-transparent"
            :href="social.link"
            :aria-label="`Go to ${social.label} page`"
          >
            <component :is="social.icon" />
          </SfButton>
        </p>
      </div>
      <div class="flex justify-center gap-6 py-2 my-4 md:ml-auto md:my-0">
        <p v-for="bottomLink in bottomLinks" :key="bottomLink.label" class="flex items-center font-body">
          <SfLink
            variant="secondary"
            class="text-white no-underline active:text-white active:underline hover:text-white hover:underline"
            :href="bottomLink.link"
          >
            {{ bottomLink.label }}
          </SfLink>
        </p>
      </div>
      <p class="flex items-center justify-center py-2 text-sm leading-5 text-center text-white/50 font-body md:ml-6">
        @2023 Vue Storefront
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  SfIconContactSupport,
  SfIconFacebook,
  SfIconHelp,
  SfIconInstagram,
  SfIconCall,
  SfIconPinterest,
  SfIconTwitter,
  SfIconYoutube,
  SfButton,
  SfLink,
} from '@storefront-ui/vue';
const categories = [
  {
    label: 'How to buy',
    subcategories: [
      {
        label: 'Payment methods',
        link: '/payment',
      },
      {
        label: 'Order pickup',
        link: '/order',
      },
      {
        label: 'Purchase status',
        link: '/purchase',
      },
      {
        label: 'Track orders',
        link: '/track',
      },
      {
        label: 'Returns',
        link: '/returns',
      },
    ],
  },
  {
    label: 'Help',
    subcategories: [
      {
        label: 'Help centers',
        link: '/help',
      },
      {
        label: 'Security & fraud',
        link: '/security',
      },
      {
        label: 'Feedback',
        link: '/feedback',
      },
      {
        label: 'Contact',
        link: '/contact',
      },
    ],
  },
  {
    label: 'Services',
    subcategories: [
      {
        label: 'Gift cards',
        link: '/gift',
      },
      {
        label: 'Order pickup',
        link: '/order',
      },
      {
        label: 'Purchase status',
        link: '/purchase',
      },
      {
        label: 'Track orders',
        link: '/track',
      },
    ],
  },
  {
    label: 'About',
    subcategories: [
      {
        label: 'About us',
        link: '/about',
      },
      {
        label: 'Order pickup',
        link: '/order',
      },
      {
        label: 'Purchase status',
        link: '/purchase',
      },
      {
        label: 'Track orders',
        link: '/track',
      },
      {
        label: 'Returns',
        link: '/returns',
      },
    ],
  },
];
const socialMedia = [
  {
    label: 'Facebook',
    link: '/facebook',
    icon: SfIconFacebook,
  },
  {
    label: 'Twitter',
    link: '/twitter',
    icon: SfIconTwitter,
  },
  {
    label: 'Instagram',
    link: '/instagram',
    icon: SfIconInstagram,
  },
  {
    label: 'Pinterest',
    link: '/pinterest',
    icon: SfIconPinterest,
  },
  {
    label: 'Youtube',
    link: '/youtube',
    icon: SfIconYoutube,
  },
];
const contactOptions = [
  {
    label: 'Help center',
    link: '/help',
    details: ['Find answers online anytime'],
    icon: SfIconHelp,
  },
  {
    label: 'Live chat',
    link: '/live',
    details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
    icon: SfIconContactSupport,
  },
  {
    label: '1 234 567 8901',
    link: '/tel',
    details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
    icon: SfIconCall,
  },
];
const bottomLinks = [
  {
    label: 'Terms',
    link: '/terms',
  },
  {
    label: 'Privacy policy',
    link: '/privacy',
  },
];
</script>

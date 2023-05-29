<template>
  <footer class="pt-10 bg-neutral-100">
    <div
      class="grid justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(4,1fr)] px-4 md:px-6 pb-10 max-w-[1536px] mx-auto"
    >
      <div v-for="{ label, subcategories } in categories" :key="label" class="grid grid-cols xs:pb-4">
        <div class="ml-4 text-lg font-medium leading-7 text-neutral-900 font-body">{{ label }}</div>
        <SfListItem
          v-for="{ subcategoryLabel, link } in subcategories"
          :key="subcategoryLabel"
          class="py-2 !bg-transparent typography-text-sm font-body"
        >
          <SfLink
            class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
            variant="secondary"
            :href="link"
          >
            {{ subcategoryLabel }}
          </SfLink>
        </SfListItem>
      </div>
    </div>
    <hr />
    <div class="py-10 md:flex md:mx-auto max-w-[1536px]">
      <div v-for="{ label, icon, link, details } in contactOptions" :key="label" class="mx-auto my-4 text-center">
        <component :is="icon" size="lg" />
        <p class="py-1 my-2 font-medium typography-text-lg font-body">
          <SfLink
            variant="secondary"
            class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
            :href="link"
          >
            {{ label }}
          </SfLink>
        </p>
        <p v-for="option in details" :key="option" class="leading-5 typography-text-sm text-neutral-600 font-body">
          {{ option }}
        </p>
      </div>
    </div>
    <div class="bg-neutral-900 justify-end px-4 py-10 md:flex md:py-6 max-w-[1536px] mx-auto">
      <div class="flex justify-center py-2 gap-x-4 md:self-start">
        <SfButton
          v-for="{ label, link, icon } in socialMedia"
          :key="label"
          tag="a"
          square
          variant="tertiary"
          class="text-white active:text-white hover:text-white hover:!bg-neutral-500 active:!bg-transparent"
          :href="link"
          :aria-label="`Go to ${label} page`"
        >
          <component :is="icon" />
        </SfButton>
      </div>
      <div class="flex items-center justify-center gap-6 py-2 my-4 md:ml-auto md:my-0">
        <SfLink
          v-for="{ label, link } in bottomLinks"
          :key="label"
          variant="secondary"
          class="text-white no-underline typography-text-sm active:text-white active:underline hover:text-white hover:underline"
          :href="link"
        >
          {{ label }}
        </SfLink>
      </div>
      <p
        class="flex items-center justify-center py-2 leading-5 text-center typography-text-sm text-white/50 font-body md:ml-6"
      >
        @2023 Vue Storefront
      </p>
    </div>
  </footer>
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
  SfListItem,
} from '@storefront-ui/vue';
const categories = [
  {
    label: 'How to buy',
    subcategories: [
      {
        subcategoryLabel: 'Payment methods',
        link: '#',
      },
      {
        subcategoryLabel: 'Order pickup',
        link: '#',
      },
      {
        subcategoryLabel: 'Purchase status',
        link: '#',
      },
      {
        subcategoryLabel: 'Track orders',
        link: '#',
      },
      {
        subcategoryLabel: 'Returns',
        link: '#',
      },
    ],
  },
  {
    label: 'Help',
    subcategories: [
      {
        subcategoryLabel: 'Help centers',
        link: '#',
      },
      {
        subcategoryLabel: 'Security & fraud',
        link: '#',
      },
      {
        subcategoryLabel: 'Feedback',
        link: '#',
      },
      {
        subcategoryLabel: 'Contact',
        link: '#',
      },
    ],
  },
  {
    label: 'Services',
    subcategories: [
      {
        subcategoryLabel: 'Gift cards',
        link: '#',
      },
      {
        subcategoryLabel: 'Order pickup',
        link: '#',
      },
      {
        subcategoryLabel: 'Purchase status',
        link: '#',
      },
      {
        subcategoryLabel: 'Track orders',
        link: '#',
      },
    ],
  },
  {
    label: 'About',
    subcategories: [
      {
        subcategoryLabel: 'About us',
        link: '#',
      },
      {
        subcategoryLabel: 'Order pickup',
        link: '#',
      },
      {
        subcategoryLabel: 'Purchase status',
        link: '#',
      },
      {
        subcategoryLabel: 'Track orders',
        link: '#',
      },
      {
        subcategoryLabel: 'Returns',
        link: '#',
      },
    ],
  },
];
const socialMedia = [
  {
    label: 'Facebook',
    link: '#',
    icon: SfIconFacebook,
  },
  {
    label: 'Twitter',
    link: '#',
    icon: SfIconTwitter,
  },
  {
    label: 'Instagram',
    link: '#',
    icon: SfIconInstagram,
  },
  {
    label: 'Pinterest',
    link: '#',
    icon: SfIconPinterest,
  },
  {
    label: 'Youtube',
    link: '#',
    icon: SfIconYoutube,
  },
];
const contactOptions = [
  {
    label: 'Help center',
    link: '#',
    details: ['Find answers online anytime'],
    icon: SfIconHelp,
  },
  {
    label: 'Live chat',
    link: '#',
    details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
    icon: SfIconContactSupport,
  },
  {
    label: '1 234 567 8901',
    link: '#',
    details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
    icon: SfIconCall,
  },
];
const bottomLinks = [
  {
    label: 'Terms',
    link: '#',
  },
  {
    label: 'Privacy policy',
    link: '#',
  },
];
</script>

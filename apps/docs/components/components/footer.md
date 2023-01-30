---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Footer

The Footer component is an inseparable element of every page. It can contains list of useful links, contact details and links to other pages connected to the website like links to social media.

The Footer is not made of single component but a couple of them to let you compose it from smaller pieces. This one is an entry point for full implementation.

<Generate style="height: 900px" />

<!-- react -->
## Props

| Prop name   | Type      | Default value | Possible values                        |
| ----------- |-----------| ------------- | -------------------------------------- |
| className | string    |             |                                        |                                        |
| children | ReactNode |             |                                        |                                        |
<!-- end react -->

## Subcomponents
<!-- react -->
* [FooterBottomLinks](footerbottomlinks)
* [FooterSection](footersection)
<!-- end react -->
* [FooterColumn](footercolumn)
* [FooterLabel](footerlabel)
* [FooterSocialMedia](footersocialmedia)

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfFooter/VsfFooter.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfFooter/VsfFooter.tsx
<!-- end react -->


## Full implementation
<!-- react -->
```tsx
<VsfFooter>
  <VsfFooterSection type={VsfFooterSectionType.top}>
    <VsfFooterColumn>
      <VsfFooterLabel type={VsfFooterLabelType.category}>Category 1</VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
    </VsfFooterColumn>
    <VsfFooterColumn>
      <VsfFooterLabel type={VsfFooterLabelType.category}>Category 2</VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
    </VsfFooterColumn>
    <VsfFooterColumn>
      <VsfFooterLabel type={VsfFooterLabelType.category}>Category 3</VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
    </VsfFooterColumn>
    <VsfFooterColumn>
      <VsfFooterLabel type={VsfFooterLabelType.category}>Category 4</VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
    </VsfFooterColumn>
  </VsfFooterSection>
  <VsfFooterSection type={VsfFooterSectionType.middle}>
    <VsfFooterColumn type={VsfFooterColumnType.middle}>
      <VsfIconHelp size={VsfIconSize.lg} />
      <VsfFooterLabel type={VsfFooterLabelType.contact}>
        label 1
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.contactDescription}>
        description
      </VsfFooterLabel>
    </VsfFooterColumn>
    <VsfFooterColumn type={VsfFooterColumnType.middle}>
      <VsfIconChat size={VsfIconSize.lg} />
      <VsfFooterLabel type={VsfFooterLabelType.contact}>
        label 2
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.contactDescription}>
        description
      </VsfFooterLabel>
    </VsfFooterColumn>
    <VsfFooterColumn type={VsfFooterColumnType.middle}>
      <VsfIconPhone size={VsfIconSize.lg} />
      <VsfFooterLabel type={VsfFooterLabelType.contact}>
        label 3
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.contactDescription}>
        description
      </VsfFooterLabel>
    </VsfFooterColumn>
  </VsfFooterSection>
  <VsfFooterSection type={VsfFooterSectionType.bottom}>
    <VsfFooterSocialMedia>
      <VsfFooterLabel type={VsfFooterLabelType.socialMedia}>
        <a><VsfIconFacebook /></a>
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.socialMedia}>
        <a><VsfIconTwitter /></a>
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.socialMedia}>
        <a><VsfIconInstagram /></a>
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.socialMedia}>
        <a><VsfIconPinterest /></a>
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.socialMedia}>
        <a><VsfIconYoutube /></a>
      </VsfFooterLabel>
    </VsfFooterSocialMedia>
    <VsfFooterBottomLinks>
      <VsfFooterLabel type={VsfFooterLabelType.bottomLinks}>
        <a>Link 1</a>
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.bottomLinks}>
        <a>Link 2</a>
      </VsfFooterLabel>
    </VsfFooterBottomLinks>
    <VsfFooterLabel type={VsfFooterLabelType.companyName}>© 2022 Vue Storefront</VsfFooterLabel>
  </VsfFooterSection>
</VsfFooter>
```
<!-- end react -->
<!-- vue -->
```vue
<script setup>
    const categories = [
      {
        label: 'How to buy',
        subcategories: [
          {
            label: 'Payment methods',
            linkTag: 'a',
            bindings: { to: '/payment' },
          },
          {
            label: 'Order pickup',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Purchase status',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Track orders',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Returns',
            linkTag: 'a',
            bindings: { to: '/' },
          },
        ],
      },
      {
        label: 'Help',
        subcategories: [
          {
            label: 'Help centers',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Security & fraud',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Feedback',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Contact',
            linkTag: 'a',
            bindings: { to: '/' },
          },
        ],
      },
      {
        label: 'Services',
        subcategories: [
          {
            label: 'Gift cards',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Order pickup',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Purchase status',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Track orders',
            linkTag: 'a',
            bindings: { to: '/' },
          },
        ],
      },
      {
        label: 'About',
        subcategories: [
          {
            label: 'About us',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Order pickup',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Purchase status',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Track orders',
            linkTag: 'a',
            bindings: { to: '/' },
          },
          {
            label: 'Returns',
            linkTag: 'a',
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
        linkTag: 'a',
        bindings: { to: '/' },
      },
      {
        label: 'Privacy policy',
        linkTag: 'a',
        bindings: { to: '/' },
      },
    ];
</script>
<template>
  <VsfFooter
    :categories="categories"
    :contact-options="contactOptions"
    :social-media="socialMedia"
    :bottom-links="bottomLinks"
    company-name="© 2022 Vue Storefront"
  >
    <template #subcategoryLink="{ subcategory }">
      <a>{{ subcategory.label }}</a>
    </template>
    <template #contactIcon="{ contactOption }">
      <VsfIconHelp v-if="contactOption.iconName === 'help'" size="lg" />
      <VsfIconChat v-if="contactOption.iconName === 'chat'" size="lg" />
      <VsfIconPhone v-if="contactOption.iconName === 'phone'" size="lg" />
    </template>
    <template #contactLabel="{ contactOption }">
      <a>{{ contactOption.label }}</a>
    </template>
    <template #socialItem="{ social }">
      <a>
        <VsfIconFacebook v-if="social.label === 'Facebook'" />
        <VsfIconTwitter v-if="social.label === 'Twitter'" />
        <VsfIconInstagram v-if="social.label === 'Instagram'" />
        <VsfIconPinterest v-if="social.label === 'Pinterest'" />
        <VsfIconYoutube v-if="social.label === 'Youtube'" />
      </a>
    </template>
    <template #bottomLink="{ bottomLink }">
      <a>{{ bottomLink.label }}</a>
    </template>
  </VsfFooter>
</template>
```
<!-- end vue -->

<template>
  <div>
    <NavbarTop />
    <Nuxt />
    <FooterBase :categories="footerCategories" />
    <NavbarBottom class="small:hidden" />
  </div>
</template>

<script>
import NavbarBottom from '../components/NavbarBottom/NavbarBottomBranded.vue';
import FooterBase from '../components/FooterBase.vue';
import NavbarTop from '../components/NavbarTop/NavbarTopBrandedCounter.vue';

export default {
  name: 'DefaultLayout',
  components: {
    NavbarBottom,
    FooterBase,
    NavbarTop
  },
  setup() {
    const footerCategories = [
      {
        title: 'How to buy',
        subtitles: [
          'Payment methods',
          'Order pickup',
          'Purchase status',
          'Track orders',
          'Returns'
        ]
      },
      {
        title: 'Help',
        subtitles: [
          'Help centers',
          'Security & fraud',
          'Feedback',
          'Contact'
        ]
      },
      {
        title: 'Services',
        subtitles: [
          'Gift cards',
          'Order pickup',
          'Purchase status',
          'Track orders',
          'Returns'
        ]
      },
      {
        title: 'About',
        subtitles: [
          'About us',
          'Order pickup',
          'Purchase status',
          'Track orders',
          'Returns'
        ]
      }
    ];

    return {
      footerCategories
    };
  }
};
</script>

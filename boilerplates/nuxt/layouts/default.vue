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
        category: 'How to buy',
        subcategories: [
          'Payment methods',
          'Order pickup',
          'Purchase status',
          'Track orders',
          'Returns'
        ]
      },
      {
        category: 'Help',
        subcategories: [
          'Help centers',
          'Security & fraud',
          'Feedback',
          'Contact'
        ]
      },
      {
        category: 'Services',
        subcategories: [
          'Gift cards',
          'Order pickup',
          'Purchase status',
          'Track orders',
          'Returns'
        ]
      },
      {
        category: 'About',
        subcategories: [
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

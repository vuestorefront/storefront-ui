<template>
  <Fullscreen>
    <VsfPage class="-mt-7" />
  </Fullscreen>
</template>

<script>
import Fullscreen from '@theme/layouts/Fullscreen.vue';
import VsfPage from '@theme/components/VsfPage.vue';
export default {
  name: 'AtomLayout',
  components: {
    Fullscreen,
    VsfPage,
  },
};
</script>

<template>
  <div class="login">
    <Login v-if="isLoginOpen" @close="isLoginOpen = false"> </Login>
    <SfButton @click="isLoginOpen = true" v-if="!isLoginOpen">Login</SfButton>
  </div>
</template>

<script>
import Login from "@storefront-ui/vue/src/examples/pages/login/Login";
import { SfButton } from "@storefront-ui/vue";
export default {
  components: {
    Login,
    SfButton
  },
  data() {
    return {
      isLoginOpen: false
    };
  }
};
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  .sf-button {
    --button-border-radius: var(--spacer);
    margin: var(--spacer-extra-big);
  }
}
</style>

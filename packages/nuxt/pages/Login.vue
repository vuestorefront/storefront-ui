<template>
  <div class="login">
    <Login/>
  </div>
</template>

<script>
import Login from "@storefront-ui/vue/src/components/pages/login/Login";
export default {
  components: {
    Login
  }
};
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
}
</style>

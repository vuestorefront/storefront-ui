import Login from "./Login.vue";

export default {
  title: "Pages|Login & Sign in",
};

export const Common = () => ({
  components: { Login },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Login />`,
});

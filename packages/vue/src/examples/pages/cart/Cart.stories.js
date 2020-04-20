import Cart from "./Cart";
export default {
  title: "Pages|Cart",
};
export const Common = () => ({
  components: { Cart },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Cart />`,
});

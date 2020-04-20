import Product from "./Product";
export default {
  title: "Pages|Product",
};
export const Common = () => ({
  components: { Product },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Product />`,
});

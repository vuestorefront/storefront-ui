import Category from "./Category";

export default {
  title: "Pages|Category",
};

export const Common = () => ({
  components: { Category },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Category />`,
});

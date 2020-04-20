import Home from "./Home";
export default {
  title: "Pages|Home",
};
export const Common = () => ({
  components: { Home },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Home />`,
});

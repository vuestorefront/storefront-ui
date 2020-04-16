import Static from "./Static";

export default {
  title: "Pages|Static",
};

export const Common = () => ({
  components: { Static },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Static />`,
});

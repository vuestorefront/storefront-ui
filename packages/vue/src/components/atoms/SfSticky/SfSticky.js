export default {
  name: "SfSticky",
  data() {
    return {
      width: "100%",
      isSticky: false,
      isBound: false
    };
  },
  computed: {
    parent() {
      return this.$el.parentElement;
    },
    padding() {
      const computedStyle = window.getComputedStyle(this.parent);
      return {
        top: parseInt(computedStyle["padding-top"]),
        right: parseInt(computedStyle["padding-right"]),
        bottom: parseInt(computedStyle["padding-bottom"]),
        left: parseInt(computedStyle["padding-left"])
      };
    },
    top() {
      return this.parent.offsetTop + this.$el.offsetTop;
    },
    parentHeight() {
      return (
        this.parent.offsetHeight - (this.padding.top + this.padding.bottom)
      );
    },
    bottom() {
      return this.top + this.parentHeight - this.$el.offsetHeight;
    },
    width() {}
  },
  watch: {
    isSticky(val) {
      console.log({ isStisky: val });
    }
  },
  methods: {},
  mounted: function() {
    this.parent.style.position = "relative";
    window.addEventListener(
      "scroll",
      () => {
        this.isSticky = false;
        this.isBound = false;

        this.parent.style.bottom = "auto";
        this.width = "100%";

        if (window.scrollY >= this.top) {
          this.width = `${this.parent.offsetWidth -
            (this.padding.left + this.padding.right)}px`;
          this.isBound = false;
          this.isSticky = true;
        }

        if (window.scrollY >= this.bottom) {
          this.isBound = true;
          this.isSticky = false;
          this.parent.style.bottom = `${this.padding.bottom}px`;
        }
      },
      { passive: true }
    );
  },
  beforeDestroy: function() {}
};

export default {
  name: "SfSticky",
  data() {
    return {
      offsetY: -1,
      parentBottom: -1,
      scrollY: -1,
      bottom: "unset"
    };
  },
  computed: {
    parent() {
      return this.$el.parentElement;
    },
    parentPadding() {
      const computedStyle = window.getComputedStyle(this.parent);
      return {
        top: parseInt(computedStyle["padding-top"]),
        right: parseInt(computedStyle["padding-right"]),
        bottom: parseInt(computedStyle["padding-bottom"]),
        left: parseInt(computedStyle["padding-left"]),
        x:
          parseInt(computedStyle["padding-right"]) +
          parseInt(computedStyle["padding-left"]),
        y:
          parseInt(computedStyle["padding-top"]) +
          parseInt(computedStyle["padding-bottom"])
      };
    },
    isSticky() {
      return this.scrollY >= this.offsetY && this.scrollY < this.parentBottom;
    },
    isBound() {
      return this.scrollY >= this.parentBottom;
    }
  },
  watch: {
    isBound(value) {
      if (value) {
        this.bottom = `${this.parentPadding.bottom}px`;
        return;
      }
      this.bottom = "unset";
    }
  },
  methods: {
    scrollHandler () {
      this.scrollY = window.scrollY;
    },
    resizeHandler () {
      this.$el.style.maxWidth = `${this.parent.offsetWidth -
      this.parentPadding.x}px`;
      this.offsetY = this.$el.parentElement.offsetTop;
    }
  },
  mounted: function() {
    this.parent.style.position = "relative";

    this.offsetY = this.$el.parentElement.offsetTop;
    this.parentBottom =
      this.parent.offsetHeight +
      this.offsetY -
      (this.$el.offsetHeight + this.parentPadding.y);

    this.$el.style.maxWidth = `${this.parent.offsetWidth -
      this.parentPadding.x}px`;
    this.parent.style.minHeight = `${this.$el.offsetHeight}px`;

    window.addEventListener(
      "scroll",
      this.scrollHandler,
      { passive: true }
    );
    window.addEventListener(
      "resize",
      this.resizeHandler,
      { passive: true }
    );
  },
  beforeDestroy: function() {}
};

export default {
  name: "SfSticky",
  data() {
    return {
      top: 0,
      height: 0,
      width: 0,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      parentTop: 0,
      parentHeight: 0,
      scrollY: 0,
      isSticky: false,
      isBound: false
    };
  },
  computed: {
    maxWidth() {
      return this.width - (this.padding.right + this.padding.left);
    },
    scrollBegin() {
      return this.parentTop + this.top;
    },
    scrollEnd() {
      return (
        this.parentHeight + this.parentTop - this.height - this.padding.bottom
      );
    }
  },
  watch: {
    scrollY() {
      this.toggleSticky();
      this.toggleBound();
    },
    parentTop() {
      this.$el.style.bottom = "";
      this.$el.parentElement.style.paddingTop = "";

      this.isSticky = false;
      this.isBound = false;

      this.computedPadding();
      this.parentHeight = this.$el.parentElement.offsetHeight;
    },
    isSticky(state) {
      if (state) {
        if (this.$el.nextSibling) {
          this.$el.parentElement.style.paddingTop = `${this.height +
            this.padding.top}px`;
        }
      } else {
        if (this.$el.nextSibling && this.scrollY <= this.parentTop + this.top) {
          this.$el.parentElement.style.paddingTop = "";
        }
      }
    },
    isBound(state) {
      if (state) {
        this.$el.style.bottom = `${this.padding.bottom}px`; //if parent have padding
      } else {
        this.$el.style.bottom = "";
      }
    }
  },
  methods: {
    scrollHandler() {
      this.scrollY = Math.ceil(window.scrollY);
    },
    resizeHandler() {
      console.error("resizeHandler");
      this.width = this.$el.parentElement.offsetWidth;
      this.parentTop = this.$el.parentElement.offsetTop;
    },
    toggleSticky() {
      if (
        this.scrollY >= this.parentTop + this.top &&
        this.scrollY < this.scrollEnd
      ) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    toggleBound() {
      if (this.scrollY >= this.scrollEnd && this.scrollBegin < this.scrollEnd) {
        this.isBound = true;
      } else {
        this.isBound = false;
      }
    },
    computedPadding() {
      const computed = window.getComputedStyle(this.$el.parentElement);
      return {
        top: parseInt(computed["padding-top"]),
        right: parseInt(computed["padding-right"]),
        bottom: parseInt(computed["padding-bottom"]),
        left: parseInt(computed["padding-left"])
      };
    }
  },
  mounted: function() {
    this.$el.parentElement.style.position = "relative";

    this.padding = this.computedPadding();
    this.parentTop = this.$el.parentElement.offsetTop;
    this.top = this.$el.offsetTop;
    this.parentHeight = this.$el.parentElement.offsetHeight;

    this.height = this.$el.offsetHeight;
    this.width = this.$el.parentElement.offsetWidth;

    window.addEventListener("scroll", this.scrollHandler, { passive: true });
    window.addEventListener("resize", this.resizeHandler, { passive: true });
  },
  beforeDestroy: function() {
    window.removeEventListener("scroll", this.scrollHandler);
    window.removeEventListener("resize", this.resizeHandler);
  }
};

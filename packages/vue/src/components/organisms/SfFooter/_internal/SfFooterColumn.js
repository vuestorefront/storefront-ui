import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";

export default {
  name: "SfFooterColumn",
  props: {
    /**
     * Column heading
     */
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isActive: false,
      hasAdditionalContentPadding: true,
      hasAdditionalInline: false
    };
  },
  components: {
    SfChevron
  },
  mounted: function() {
    this.hasAdditionalContentPadding = this.$el.classList.contains(
      "sf-footer__item-padding"
    );
    this.hasAdditionalInline = this.$el.classList.contains("sf-footer__inline");
  },
  methods: {
    tabClick() {
      this.isActive = !this.isActive;
    }
  }
};

import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";

export default {
  name: "SfFooterColumn",
  props: {
    /**
     * Footer column heading
     */
    title: {
      type: String
    }
  },
  data() {
    return {
      isActive: false,
      hasAdditionalContentPadding: false,
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

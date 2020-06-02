<template>
  <div class="sf-rating">
    <!--@slot custom icon for finalScore. Provide single icon that will be automatically repeated -->
    <slot v-for="index in parseInt(finalScore, 10)" name="icon-positive">
      <SfIcon
        :key="`p${index}`"
        size="0.875rem"
        class="sf-rating__icon"
        :icon="icon"
      />
    </slot>
    <!--@slot custom icon for partially positive finalScore. -->
    <slot name="icon-fraction">
      <!-- <SfIcon
        v-if="score % 1 !== 0"
        size="0.875rem"
        class="sf-rating__icon sf-rating__icon--fraction-postive"
        icon="star"
      />
      <SfIcon
        v-if="score % 1 !== 0"
        size="0.875rem"
        class="sf-rating__icon sf-rating__icon--fraction-negative"
        icon="star"
      /> -->
      <SfIcon v-if="score % 1 !== 0" class="sf-rating__icon" size="0.875rem">
        <svg>
          <defs>
            <linearGradient
              :id="finalScore - Math.floor(finalScore)"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop
                :offset="finalScore - Math.floor(finalScore)"
                stop-color="var(--icon-color)"
              />
              <stop offset="0" stop-color="var(--icon-color-negative)" />
            </linearGradient>
          </defs>
          <path
            v-for="(path, index) in iconPaths"
            :key="index"
            :d="path"
            :fill="fillUrl(finalScore - Math.floor(finalScore))"
            style="height: 100%;"
          />
        </svg>
      </SfIcon>
    </slot>
    <!--@slot custom icon for negative (left) finalScore. Provide single icon that will be automatically repeated -->
    <slot
      v-for="index in parseInt(finalMax, 10) -
      Math.ceil(parseFloat(finalScore, 10))"
      name="icon-negative"
    >
      <SfIcon
        :key="`n${index}`"
        size="0.875rem"
        class="sf-rating__icon sf-rating__icon--negative"
        :icon="icon"
      />
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import icons from "@storefront-ui/shared/icons/icons";
const SF_ICONS = Object.keys(icons);
export default {
  name: "SfRating",
  components: {
    SfIcon,
  },
  props: {
    /**
     * Maximum score
     */
    max: {
      type: Number,
      default: 5,
    },
    /**
     * Score (obviously must be less than maximum)
     */
    score: {
      type: Number,
      default: 1,
    },
    icon: {
      type: String,
      default: "star",
    },
  },
  computed: {
    finalScore() {
      if (!this.score) {
        return 0;
      } else if (this.score < 0) {
        return 0;
      } else if (this.score > this.max && this.max > 0) {
        return this.max;
      } else if (this.max <= 0) {
        return 0;
      } else {
        return this.score;
      }
    },
    finalMax() {
      return !this.max || this.max <= 0 ? 1 : this.max;
    },
    isSFIcons() {
      if (typeof this.icon === "string") {
        return SF_ICONS.includes(this.icon.trim());
      } else return null;
    },
    iconPaths() {
      if (this.isSFIcons) {
        return icons[this.icon].paths;
      } else {
        return Array.isArray(this.icon) ? this.icon : [this.icon];
      }
    },
  },
  methods: {
    fillUrl(index) {
      return "url(#" + index + ")";
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfRating.scss";
</style>

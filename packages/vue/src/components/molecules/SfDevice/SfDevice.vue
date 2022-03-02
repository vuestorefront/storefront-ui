<template>
  <div class="sf-device">
    <div class="sf-device__wrapper">
      <div class="sf-device__morph" @click="clicked">
        <div class="sf-device__screen">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const devices = ["mobile", "tablet", "laptop", "detect"];

export default {
  name: "SfDevice",
  props: {
    device: {
      type: String,
      default: "detect",
      validator: (propValue) => {
        return devices.includes(propValue);
      },
    },
    switchOnClick: {
      type: Boolean,
      default: false,
    },
    switchInterval: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      i: 0,
      morphEl: null,
      intervalID: -1,
      devices: devices,
      classes: ["sf-device__mobile", "sf-device__tablet", "sf-device__laptop"],
    };
  },
  mounted() {
    this.morphEl = this.$el.querySelector(".sf-device__morph");

    if (this.device === "detect") {
      if (typeof window.matchMedia !== "undefined") {
        const isMobile = window.matchMedia(
          "only screen and (max-width: 480px)"
        ).matches;
        const isTablet = window.matchMedia(
          "only screen and (max-width: 768px)"
        ).matches;

        if (isMobile) {
          this.i = 0;
        } else if (isTablet) {
          this.i = 1;
        } else {
          this.i = 2;
        }
      } else {
        this.i = 2;
      }
    } else {
      this.i = this.devices.indexOf(this.device);
    }

    this.morphEl.classList.add(this.classes[this.i]);

    if (this.switchInterval > 0 && !this.switchOnClick) {
      this.toggleMorph();
    }
  },
  methods: {
    clicked() {
      this.switchOnClick && this.toggleMorph();
    },
    toggleMorph() {
      if (this.switchInterval > 0) {
        if (this.intervalID === -1) {
          this.morph();
          this.intervalID = setInterval(this.morph, this.switchInterval);
        } else {
          clearInterval(this.intervalID);
          this.intervalID = -1;
        }
      } else {
        this.morph();
      }
    },
    morph() {
      this.morphEl.className = "";

      if (this.i > this.classes.length - 2) {
        this.i = 0;
      } else {
        this.i++;
      }

      this.morphEl.classList.add(this.classes[this.i]);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfDevice.scss";
</style>

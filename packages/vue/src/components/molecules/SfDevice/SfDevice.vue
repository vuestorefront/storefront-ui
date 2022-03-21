<template>
  <div class="sf-device" :style="cssVars">
    <div :class="cssClass" @click="clicked">
      <div class="sf-device__screen">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
const allowedDevices = ["mobile", "tablet", "laptop"];

export default {
  name: "SfDevice",
  props: {
    mobileScale: {
      type: Number,
      default: 1,
    },
    tabletScale: {
      type: Number,
      default: 1,
    },
    laptopScale: {
      type: Number,
      default: 1,
    },
    detectDevice: {
      type: Boolean,
      default: false,
    },
    defaultDevice: {
      type: String,
      default: allowedDevices[0],
      validator: (propValue) => {
        return allowedDevices.includes(propValue);
      },
    },
    switchableDevices: {
      type: Array,
      default: () => allowedDevices,
      validator: (propValue) => {
        return propValue.every((element) => allowedDevices.includes(element));
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
      intervalID: -1,
      devices: this.switchableDevices,
      device: this.defaultDevice,
    };
  },
  computed: {
    cssVars() {
      return {
        "--mobile-scale": this.mobileScale,
        "--tablet-scale": this.tabletScale,
        "--laptop-scale": this.laptopScale,
      };
    },
    cssClass() {
      return `sf-device__${this.device}`;
    },
  },
  mounted() {
    if (this.detectDevice && typeof window.matchMedia !== "undefined") {
      if (window.matchMedia("only screen and (max-width: 480px)").matches) {
        this.device = "mobile";
      } else if (
        window.matchMedia("only screen and (max-width: 768px)").matches
      ) {
        this.device = "tablet";
      } else {
        this.device = "laptop";
      }
    }

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
      this.device =
        this.devices[
          (this.devices.indexOf(this.device) + 1) % this.devices.length
        ];
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfDevice.scss";
</style>

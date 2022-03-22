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
export const defaultDevices = [
  {
    name: "phone",
    mediaQuery: "only screen and (max-width: 480px)",
    scale: 0.5,
  },
  {
    name: "tablet",
    mediaQuery: "only screen and (max-width: 768px)",
    scale: 0.8,
  },
  {
    name: "laptop",
    mediaQuery: "only screen",
    scale: 1.0,
  },
];

export const defaultDeviceNames = defaultDevices.map((device) => device.name);

let config = {
  name: "SfDevice",
  props: {
    detectDevice: {
      type: Boolean,
      default: false,
    },
    defaultDevice: {
      type: String,
      default: defaultDevices[0].name,
      validator: (propValue) => {
        return defaultDevices.find((device) => device.name === propValue);
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
    switchDevices: {
      type: Array,
      default: () => defaultDeviceNames,
      validator: (propValue) => {
        return propValue.every((value) =>
          defaultDevices.find((device) => device.name === value)
        );
      },
    },
  },
  data: function () {
    return {
      intervalID: -1,
      devices: defaultDevices.filter((device) =>
        this.switchDevices.includes(device.name)
      ),
      device: defaultDevices.find(
        (device) => this.defaultDevice === device.name
      ),
    };
  },
  computed: {
    cssVars() {
      let scaleObj = {};
      defaultDeviceNames.forEach((deviceName) => {
        scaleObj[`--${deviceName}-scale`] = this[`${deviceName}Scale`];
      });
      return scaleObj;
    },
    cssClass() {
      return `sf-device__${this.device.name}`;
    },
  },
  mounted() {
    if (this.detectDevice && typeof window.matchMedia !== "undefined") {
      this.devices.forEach((device) => {
        if (window.matchMedia(device.mediaQuery).matches) {
          this.device = device;
        }
      });
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
defaultDevices.forEach((device) => {
  config.props[`${device.name}Scale`] = {
    type: Number,
    default: 1.0,
  };
});
export default config;
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfDevice.scss";
</style>

<template>
  <div class="sf-store">
    <SfDivider class="sf-store__divider-first" />
    <div class="sf-store__item">
      <div class="sf-store__media" @click="centerOn(latlng)">
        <!-- @slot Use this slot to show media elements -->
        <slot name="media">
          <SfImage :src="picture" :alt="`${name} picture`" tabindex="0" />
        </slot>
      </div>
      <div class="sf-store__info">
        <div class="sf-store__heading">
          <!-- @slot Use this slot to show heading -->
          <slot name="heading">
            <div class="sf-store__heading-name" tabindex="0">
              {{ name }}
            </div>
            <div
              v-if="distance"
              class="sf-store__heading-distance"
              tabindex="0"
            >
              <span>{{ distance }}km</span> away from you
            </div>
          </slot>
        </div>
        <!-- @slot This is the default slot of the component, placed on the right of the picture -->
        <slot>
          <div v-if="address" class="sf-store__address" tabindex="0">
            {{ address }}
          </div>
          <div v-if="phone" class="sf-store__phone">
            <SfIcon icon="phone" size="13px" color="green-primary" />
            <span tabindex="0">{{ phone }}</span>
          </div>
          <div v-if="email" class="sf-store__email">
            <SfIcon icon="mail" size="13px" color="green-primary" />
            <span tabindex="0">{{ email }}</span>
          </div>
        </slot>
      </div>
    </div>
    <SfDivider />
  </div>
</template>
<script>
import SfImage from "../../../atoms/SfImage/SfImage.vue";
import SfDivider from "../../../atoms/SfDivider/SfDivider.vue";
import SfIcon from "../../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfStore",
  inject: [
    "registerStore",
    "removeStore",
    "centerOn",
    "locatorData",
    "getGeoDistance"
  ],
  components: {
    SfImage,
    SfDivider,
    SfIcon
  },
  props: {
    /**
     * Name of the store
     */
    latlng: {
      type: Array,
      default: () => []
    },
    /**
     * Name of the store
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * Url of the picture of the store
     */
    picture: {
      type: [String, Object],
      default: null
    },
    /**
     * Address of the store
     */
    address: {
      type: String,
      default: ""
    },
    /**
     * Phone number of the store
     */
    phone: {
      type: String,
      default: null
    },
    /**
     * Email of the store
     */
    email: {
      type: String,
      default: null
    }
  },
  computed: {
    distance() {
      if (this.locatorData && this.locatorData.userPosition) {
        const dictLatLng = {
          lat: this.latlng[0],
          lng: this.latlng[1]
        };
        return this.getGeoDistance(this.locatorData.userPosition, dictLatLng);
      }
      return null;
    }
  },
  created() {
    if (this.registerStore) {
      this.registerStore(this.$props);
    }
  },
  beforeDestroy() {
    if (this.removeStore) {
      this.removeStore(this.$props);
    }
  }
};
</script>

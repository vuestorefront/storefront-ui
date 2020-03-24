<template>
  <div class="sf-store">
    <div v-if="distance" class="sf-store__distance" tabindex="0">
      <span>{{ distance }}km</span> away from you
    </div>
    <div class="sf-store__media" @click="centerOn(latlng)">
      <sf-image
        :src="picture"
        :alt="`${name} picture`"
        tabindex="0"
        :width="82"
        :height="112"
      />
    </div>
    <div class="sf-store__item-info">
      <div class="sf-store__item-info-heading">
        <div class="sf-store__name" tabindex="0">
          {{ name }}
        </div>
        <!--            <div-->
        <!--              v-if="distance"-->
        <!--              class="sf-store__item-info-heading-distance desktop-only"-->
        <!--              tabindex="0"-->
        <!--            >-->
        <!--              <span>{{ distance }}km</span> away from you-->
        <!--            </div>-->
      </div>
      <div v-if="address" class="sf-store__address" tabindex="0">
        {{ address }}
      </div>
      <div class="sf-store__item-info-contact">
        <div v-if="phone" class="sf-store__property">
          <sf-icon
            icon="phone"
            size="13px"
            color="green-primary"
            class="sf-store__property-icon"
          />
          <span tabindex="0">{{ phone }}</span>
        </div>
        <div v-if="email" class="sf-store__property">
          <sf-icon
            icon="mail"
            size="13px"
            color="green-primary"
            class="sf-store__property-icon"
          />
          <span tabindex="0">{{ email }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SfImage from "../../../atoms/SfImage/SfImage.vue";
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

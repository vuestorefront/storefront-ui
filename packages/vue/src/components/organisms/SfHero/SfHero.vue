<template>
  <div class="sf-hero">
    <div ref="glide" class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides sf-hero__slides">
          <!--@slot default slot for SfHeroItem tags -->
          <slot />
        </ul>
      </div>
    </div>
    <div v-if="numberOfPages > 1 && client" class="sf-hero__control--left">
      <!--@slot slot for icon moving to the previous item -->
      <slot name="prev" v-bind="{ go: () => go('prev') }">
        <SfButton class="sf-button--pure" @click.stop="go('prev')">
          <SfArrow
            class="sf-arrow sf-arrow--transparent"
            aria-label="previous"
          />
        </SfButton>
      </slot>
    </div>
    <div v-if="numberOfPages > 1 && client" class="sf-hero__control--right">
      <!-- @slot slot for icon moving to the next item  -->
      <slot name="next" v-bind="{ go: () => go('next') }">
        <SfButton class="sf-button--pure" @click.stop="go('next')">
          <SfArrow
            class="sf-arrow sf-arrow--right sf-arrow--transparent"
            aria-label="next"
          />
        </SfButton>
      </slot>
    </div>
    <div v-if="numberOfPages > 1 && client" class="sf-hero__bullets">
      <!--@slot custom markup for pagination bullets -->
      <slot name="bullets" v-bind="{ numberOfPages, page, go }">
        <SfBullets
          :total="numberOfPages"
          :current="page - 1"
          @click="go($event)"
        />
      </slot>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import SfHeroItem from "./_internal/SfHeroItem.vue";
import SfArrow from "../../atoms/SfArrow/SfArrow.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfBullets from "../../atoms/SfBullets/SfBullets.vue";
import Glide from "@glidejs/glide";
import { isClient } from "../../../utilities/helpers";
Vue.component("SfHeroItem", SfHeroItem);
export default {
  name: "SfHero",
  components: {
    SfArrow,
    SfBullets,
    SfButton,
  },
  props: {
    /**
     * Slider options like glide.js (https://glidejs.com/docs/)
     */
    sliderOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      client: isClient,
      glide: null,
      defaultOptions: {
        type: "slider",
        rewind: true,
        autoplay: 5000,
        perView: 1,
        gap: 0,
      },
    };
  },
  computed: {
    mergedOptions() {
      return {
        ...this.defaultOptions,
        ...this.sliderOptions,
      };
    },
    numberOfPages() {
      return this.$slots.default
        ? this.$slots.default.filter((slot) => slot.tag).length
        : 0;
    },
    page() {
      if (this.glide) {
        return this.glide.index + 1;
      }
      return 1;
    },
  },
  mounted() {
    if (this.numberOfPages) {
      this.$nextTick(() => {
        if (!this.$slots.default) return;
        const glide = new Glide(this.$refs.glide, this.mergedOptions);
        glide.mount();
        this.glide = glide;
      });
    }
  },
  methods: {
    go(direct) {
      if (!this.glide) return;
      switch (direct) {
        case "prev":
          this.glide.go("<");
          break;
        case "next":
          this.glide.go(">");
          break;
        default:
          this.glide.go(`=${direct}`);
          break;
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfHero.scss";
</style>

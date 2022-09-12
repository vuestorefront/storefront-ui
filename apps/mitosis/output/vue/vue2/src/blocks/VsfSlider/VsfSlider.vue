<template>
  <div class="grid grid-flow-col w-fit items-center gap-4">
    <vsf-button
      variant="secondary"
      v-if="useHasChevronsProp"
      :classes="
        classStringFromArray([
          'slider-button w-12 h-12',
          !prevChevronVisibility && 'invisible',
        ])
      "
      :isRoundedFull="true"
      @click="go('prev')"
    >
      <span class="w-6 h-6">
        <vsf-icon-chevron-left class="slider-chevron"></vsf-icon-chevron-left>
      </span>
    </vsf-button>

    <div
      ref="sliderRef"
      @scroll="setChevrons($event)"
      :class="
        _classStringToObject(
          classStringFromArray([
            'slider-items-container grid grid-flow-col overflow-x-auto overscroll-contain scroll-smooth snap-x gap-4 pb-3',
            !useHasScrollbarProp && 'no-scrollbar',
          ])
        )
      "
    >
      <slot />
    </div>

    <vsf-button
      variant="secondary"
      v-if="useHasChevronsProp"
      :classes="
        classStringFromArray([
          'slider-button w-12-h12',
          !nextChevronVisibility && 'invisible',
        ])
      "
      :isRoundedFull="true"
      @click="go('next')"
    >
      <span class="w-6 h-6">
        <vsf-icon-chevron-right class="slider-chevron"></vsf-icon-chevron-right>
      </span>
    </vsf-button>
  </div>
</template>

<script>
import { classStringFromArray } from "../../functions/domUtils";
import VsfButton from "../VsfButton/VsfButton.vue";
import VsfIconChevronLeft from "../VsfIcons/VsfIconChevronLeft.vue";
import VsfIconChevronRight from "../VsfIcons/VsfIconChevronRight.vue";
const DEFAULT_VALUES: Required<VsfSliderProps> = {
  children: "",
  hasChevrons: true,
  hasScrollbar: true,
};

export default {
  name: "vsf-slider",
  components: {
    "vsf-button": VsfButton,
    "vsf-icon-chevron-left": VsfIconChevronLeft,
    "vsf-icon-chevron-right": VsfIconChevronRight,
  },
  props: ["hasChevrons", "hasScrollbar"],

  data: () => ({
    prevChevronVisibility: false,
    nextChevronVisibility: true,
    classStringFromArray,
  }),

  computed: {
    useHasChevronsProp() {
      return this.hasChevrons ?? DEFAULT_VALUES.hasChevrons;
    },
    useHasScrollbarProp() {
      return this.hasScrollbar ?? DEFAULT_VALUES.hasScrollbar;
    },
  },

  methods: {
    go(direct) {
      if (direct === "next") {
        this.$refs.sliderRef.scrollLeft +=
          this.$refs.sliderRef?.children[0]?.getBoundingClientRect()?.width;
      } else {
        this.$refs.sliderRef.scrollLeft -=
          this.$refs.sliderRef?.children[0]?.getBoundingClientRect()?.width;
      }
    },
    setChevrons(e) {
      const maxScrollLeft = e.target.scrollWidth - e.target.clientWidth;
      this.prevChevronVisibility = e.target.scrollLeft !== 0;
      this.nextChevronVisibility = e.target.scrollLeft !== maxScrollLeft;
    },
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>

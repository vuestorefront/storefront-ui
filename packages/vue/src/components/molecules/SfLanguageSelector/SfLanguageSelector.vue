<template>
  <div class="sf-language-selector">
    <SfOverlay
      :visible="isOpen"
      class="sf-language-selector__overlay mobile-only"
      @click="close"
    />
    <transition name="sf-language-selector">
      <nav
        v-show="isOpen"
        role="dialog"
        aria-modal="true"
        aria-labelledby="Language Selector"
        class="sf-language-selector__container"
      >
        <slot name="title">
          <div v-if="title" class="sf-language-selector__title">
            {{ title }}
          </div>
        </slot>
        <slot name="close-desktop">
          <SfCircleIcon
            class="sf-circle-icon--small sf-language-selector__close-desktop desktop-only"
            aria-label="Close"
            icon="cross"
            @click="close"
          />
        </slot>
        <SfList class="sf-language-selector__list">
          <SfListItem
            v-for="item in items"
            :key="item"
            class="sf-language-selector__list-item"
          >
            <SfButton
              class="sf-button--full-width sf-button--underlined sf-language-selector__language-button"
              :aria-label="item.language"
              @click="isOpen = !isOpen"
            >
              <slot name="icon" />
              {{ item.country }}
              <span>{{ item.language }}</span>
            </SfButton>
          </SfListItem>
        </SfList>
        <slot name="close-mobile">
          <SfButton
            class="sf-button--full-width mobile-only sf-language-selector__close"
            aria-label="Close"
            @click="close"
            >Cancel</SfButton
          >
        </slot>
      </nav>
    </transition>
  </div>
</template>
<script>
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfList from "../../organisms/SfList/SfList.vue";
export default {
  name: "SfLanguageSelector",
  components: { SfList, SfOverlay, SfButton, SfCircleIcon },
  props: {
    /**
     * Language Selector is open
     */
    isOpen: {
      type: Boolean,
      default: false,
    },
    /**
     * Items
     */
    items: {
      type: [Array, Object],
      default: () => {
        [];
      },
    },
    /**
     * Title for Language Selector content.
     */
    title: {
      type: String,
      default: "",
    },
  },
  watch: {
    isOpen: {
      handler(value) {
        if (typeof window === "undefined" || typeof document === "undefined")
          return;
        if (value) {
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },
      immediate: true,
    },
  },
  methods: {
    close() {
      this.$emit("click:close");
    },
    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfLanguageSelector.scss";
</style>

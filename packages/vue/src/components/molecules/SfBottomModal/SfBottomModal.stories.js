import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options,
} from "@storybook/addon-knobs";

import {
  SfBottomModal,
  SfButton,
  SfImage,
  SfList,
  SfCharacteristic,
} from "@storefront-ui/vue";

storiesOf("Molecules|BottomModal", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      title: {
        default: text("title", "Title", "Props"),
      },
    },
    components: {
      SfBottomModal,
      SfButton,
    },
    data() {
      return {
        isOpen: false,
      };
    },
    template: `<div>
    <div style="position: relative;">
      <SfButton @click="isOpen = !isOpen">
      Open bottom modal
      </SfButton>
      <SfBottomModal :is-open="isOpen" :title="title" @click:close="isOpen = !isOpen"> 
          YOUR CONTENT
      </SfBottomModal>
    </div>
  </div>`,
  }))
  .add("[example]: Language Selector", () => ({
    props: {
      title: {
        default: text("title", "Choose language", "Props"),
      },
    },
    components: {
      SfBottomModal,
      SfButton,
      SfImage,
      SfList,
      SfCharacteristic,
    },
    data() {
      return {
        isMobile: false,
        isOpen: false,
        items: [
          { country: "Poland", language: "Polish" },
          { country: "Poland", language: "Polish" },
          { country: "Poland", language: "Polish" },
        ],
      };
    },
    computed: {
      customStyleForContent() {
        return this.isMobile ? {} : { display: "flex" };
      },
      customStyleForContainer() {
        return this.isMobile ? {} : { "--bottom-modal-height": "100vh" };
      },
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <=
        1023;
      window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1023px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      mobileHandler(event) {
        this.isMobile = event.matches;
      },
    },
    template: `<div>
    <div style="position: relative;">
      <SfButton :style="{'background': 'transparent', padding: 0, '--button-box-shadow': 'none'}" @click="isOpen = !isOpen">
        <SfImage src="/assets/storybook/SfBottomModal/flag.png" alt="Flag of the USA"/>
      </SfButton>
      <SfBottomModal :style="customStyleForContainer" :is-open="isOpen" :title="title" @click:close="isOpen = !isOpen"> 
          <SfList :style="customStyleForContent">
            <SfListItem v-for="(item, index) in items" :key="index"
            >
              <SfButton
                :style="{'background': 'transparent', 'color': 'var(--c-text-muted)','--button-box-shadow': 'none'}"
                class="sf-button--full-width"
                :aria-label="item.language"
                @click="isOpen = !isOpen"
              >
                <SfCharacteristic style="text-align: left" icon="heart_fill" :description="item.language">
                  <template #title>
                    <span class="desktop-only">{{ item.country }}</span>
                  </template>
                  <template #icon>
                    <SfImage :style="{'--image-width': '20px', 'margin-right': '1rem', 'border': '1px solid var(--c-light)', 'border-radius': '50%'}" src="/assets/storybook/SfBottomModal/flag-pl.png"/>
                  </template>
                </SfCharacteristic>
              </SfButton>
            </SfListItem>
          </SfList>
      </SfBottomModal>
    </div>
  </div>`,
  }));

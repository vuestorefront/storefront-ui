import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options,
} from "@storybook/addon-knobs";

import { SfLanguageSelector, SfButton, SfImage } from "@storefront-ui/vue";

storiesOf("Molecules|LanguageSelector", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-language-selector--modifier": "sf-language-selector--modifier",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text("title", "Select your language", "Props"),
      },
    },
    components: { SfLanguageSelector, SfButton, SfImage },
    data() {
      return {
        isOpen: false,
        items: [
          { country: "Poland", language: "Polish" },
          { country: "Poland", language: "Polish" },
          { country: "Poland", language: "Polish" },
        ],
      };
    },
    template: `<div>
    <div style="position: relative;">
      <SfButton class="sf-button--pure" :style="{'background': 'transparent', padding: 0, '--button-box-shadow': 'none'}" @click="isOpen = !isOpen">
        <SfImage src="/assets/storybook/SfLanguageSelector/flag.png" alt="Flag of the USA"/>
      </SfButton>
      <SfLanguageSelector :items="items" :class="customClass" :is-open="isOpen" :title="title" @click:close="isOpen = !isOpen"> 
        <template #icon>
          <SfImage src="/assets/storybook/SfLanguageSelector/flag.png" />
        </template>
      </SfLanguageSelector>
    </div>
  </div>`,
  }));

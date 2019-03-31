import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfButton from "./../../src/components/atoms/SfButton/SfButton.vue";

export default storiesOf("Transitions", module)
  .add("fade in-out", () => ({
    components: { SfButton },
    template: `
    <div>
      <sf-button v-on:click="show = !show">
        Fade in-out
      </sf-button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }))
  .add("fade in slide out", () => ({
    components: { SfButton },
    template: `
    <div>
      <sf-button v-on:click="show = !show">
        Fade in slide out
      </sf-button>
      <transition name="fade-slide">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }))
  .add("fade in slide y out", () => ({
    components: { SfButton },
    template: `
    <div>
      <sf-button v-on:click="show = !show">
        Fade in slide y out
      </sf-button>
      <transition name="fade-slide-y">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }))
  .add("slide in-out", () => ({
    components: { SfButton },
    template: `
    <div>
      <sf-button v-on:click="show = !show">
        Slide in-out
      </sf-button>
      <transition name="slide">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }))
  .add("slide y in-out", () => ({
    components: { SfButton },
    template: `
    <div>
      <sf-button v-on:click="show = !show">
        Slide y in-out
      </sf-button>
      <transition name="slide-y">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }));

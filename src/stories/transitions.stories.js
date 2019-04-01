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
        Fade
      </sf-button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }))
  .add("slide left", () => ({
    components: { SfButton },
    template: `
    <div>
      <sf-button v-on:click="show = !show">
        Slide
      </sf-button>
      <transition name="slide">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }))
  .add("slide right", () => ({
    components: { SfButton },
    template: `
    <div>
      <sf-button v-on:click="show = !show">
        Slide inverse
      </sf-button>
      <transition name="slide-inverse">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }))
  .add("collapse bottom", () => ({
    components: { SfButton },
    template: `
    <div>
      <sf-button v-on:click="show = !show">
        Collapse
      </sf-button>
      <transition name="collapse">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }))
  .add("collapse top", () => ({
    components: { SfButton },
    template: `
    <div>
      <sf-button v-on:click="show = !show">
        Collapse inverse
      </sf-button>
      <transition name="collapse-inverse">
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
        Fade/slide
      </sf-button>
      <transition name="fade-slide">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }))
  .add("fade in collapse out", () => ({
    components: { SfButton },
    template: `
    <div>
      <sf-button v-on:click="show = !show">
        Fade/collapse
      </sf-button>
      <transition name="fade-collapse">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }));

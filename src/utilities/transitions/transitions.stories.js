import { storiesOf } from "@storybook/vue";
import { linkTo } from "@storybook/addon-links";

import SfButton from "./../../../src/components/atoms/SfButton/SfButton.vue";

export default storiesOf("Utilities|Transitions", module)
  .add(
    "fade in-out",
    () => ({
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
        show: false
      })
    }),
    {
      info: true
    }
  )
  .add(
    "slide left",
    () => ({
      components: { SfButton },
      template: `
    <div>
      <sf-button v-on:click="show = !show">
        Slide left
      </sf-button>
      <transition name="slide(left)">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
      data: () => ({
        show: false
      })
    }),
    {
      info: true
    }
  )
  .add(
    "slide right",
    () => ({
      components: { SfButton },
      template: `
    <div>
      <sf-button v-on:click="show = !show">
        Slide right
      </sf-button>
      <transition name="slide(right)">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
      data: () => ({
        show: false
      })
    }),
    {
      info: true
    }
  )
  .add(
    "collapse top",
    () => ({
      components: { SfButton },
      template: `
    <div>
      <sf-button v-on:click="show = !show">
        Collapse top
      </sf-button>
      <transition name="collapse(top)">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
      data: () => ({
        show: false
      })
    }),
    {
      info: true
    }
  )
  .add(
    "collapse bottom",
    () => ({
      components: { SfButton },
      template: `
    <div>
      <sf-button v-on:click="show = !show">
        Collapse bottom
      </sf-button>
      <transition name="collapse(bottom)">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
      data: () => ({
        show: false
      })
    }),
    {
      info: true
    }
  )
  .add(
    "fade in slide out",
    () => ({
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
        show: false
      })
    }),
    {
      info: true
    }
  )
  .add(
    "fade in collapse out",
    () => ({
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
        show: false
      })
    }),
    {
      info: true
    }
  );

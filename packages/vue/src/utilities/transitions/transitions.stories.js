import { storiesOf } from "@storybook/vue";
import SfButton from "./../../../src/components/atoms/SfButton/SfButton.vue";
export default storiesOf("Utilities|Transitions", module)
  .add(
    "fade in-out",
    () => ({
      components: { SfButton },
      template: `
    <div>
      <SfButton v-on:click="show = !show">
        Fade
      </SfButton>
      <transition name="sf-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
      data: () => ({
        show: false,
      }),
    }),
    {
      info: true,
    }
  )
  .add(
    "slide left",
    () => ({
      components: { SfButton },
      template: `
    <div>
      <SfButton v-on:click="show = !show">
        Slide left
      </SfButton>
      <transition name="sf-slide-left">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
      data: () => ({
        show: false,
      }),
    }),
    {
      info: true,
    }
  )
  .add(
    "slide right",
    () => ({
      components: { SfButton },
      template: `
    <div>
      <SfButton v-on:click="show = !show">
        Slide right
      </SfButton>
      <transition name="sf-slide-right">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
      data: () => ({
        show: false,
      }),
    }),
    {
      info: true,
    }
  )
  .add(
    "collapse top",
    () => ({
      components: { SfButton },
      template: `
    <div>
      <SfButton v-on:click="show = !show">
        Collapse top
      </SfButton>
      <transition name="sf-collapse-top">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
      data: () => ({
        show: false,
      }),
    }),
    {
      info: true,
    }
  )
  .add(
    "collapse bottom",
    () => ({
      components: { SfButton },
      template: `
    <div>
      <SfButton v-on:click="show = !show">
        Collapse bottom
      </SfButton>
      <transition name="sf-collapse-bottom">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
      data: () => ({
        show: false,
      }),
    }),
    {
      info: true,
    }
  );

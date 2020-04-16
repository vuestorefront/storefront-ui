import SfButton from "./../../../src/components/atoms/SfButton/SfButton.vue";

export default {
  title: "Utilities|Transitions",
};

export const FadeInOut = () => ({
  components: { SfButton },
  template: `
<div>
  <SfButton v-on:click="show = !show">
    Fade
  </SfButton>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>`,
  data: () => ({
    show: false,
  }),
});

FadeInOut.story = {
  name: "fade in-out",

  parameters: {
    info: true,
  },
};

export const SlideLeft = () => ({
  components: { SfButton },
  template: `
<div>
  <SfButton v-on:click="show = !show">
    Slide left
  </SfButton>
  <transition name="slide-left">
    <p v-if="show">hello</p>
  </transition>
</div>`,
  data: () => ({
    show: false,
  }),
});

SlideLeft.story = {
  name: "slide left",

  parameters: {
    info: true,
  },
};

export const SlideRight = () => ({
  components: { SfButton },
  template: `
<div>
  <SfButton v-on:click="show = !show">
    Slide right
  </SfButton>
  <transition name="slide-right">
    <p v-if="show">hello</p>
  </transition>
</div>`,
  data: () => ({
    show: false,
  }),
});

SlideRight.story = {
  name: "slide right",

  parameters: {
    info: true,
  },
};

export const CollapseTop = () => ({
  components: { SfButton },
  template: `
<div>
  <SfButton v-on:click="show = !show">
    Collapse top
  </SfButton>
  <transition name="collapse-top">
    <p v-if="show">hello</p>
  </transition>
</div>`,
  data: () => ({
    show: false,
  }),
});

CollapseTop.story = {
  name: "collapse top",

  parameters: {
    info: true,
  },
};

export const CollapseBottom = () => ({
  components: { SfButton },
  template: `
<div>
  <SfButton v-on:click="show = !show">
    Collapse bottom
  </SfButton>
  <transition name="collapse-bottom">
    <p v-if="show">hello</p>
  </transition>
</div>`,
  data: () => ({
    show: false,
  }),
});

CollapseBottom.story = {
  name: "collapse bottom",

  parameters: {
    info: true,
  },
};

export const FadeInSlideOut = () => ({
  components: { SfButton },
  template: `
<div>
  <SfButton v-on:click="show = !show">
    Fade/slide
  </SfButton>
  <transition name="fade-slide">
    <p v-if="show">hello</p>
  </transition>
</div>`,
  data: () => ({
    show: false,
  }),
});

FadeInSlideOut.story = {
  name: "fade in slide out",

  parameters: {
    info: true,
  },
};

export const FadeInCollapseOut = () => ({
  components: { SfButton },
  template: `
<div>
  <SfButton v-on:click="show = !show">
    Fade/collapse
  </SfButton>
  <transition name="fade-collapse">
    <p v-if="show">hello</p>
  </transition>
</div>`,
  data: () => ({
    show: false,
  }),
});

FadeInCollapseOut.story = {
  name: "fade in collapse out",

  parameters: {
    info: true,
  },
};

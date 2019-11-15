import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  color,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfCallToAction from "./SfCallToAction.vue";

storiesOf("Molecules|CallToAction", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfCallToAction },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-banner--secondary": "sf-banner--secondary",
            "sf-banner--light": "sf-banner-light"
          },
          "",
          { display: "multi-select" }
        )
      },
      title: {
        default: text("title (prop)", "Subscribe to Newsletters")
      },
      description: {
        default: text(
          "description (prop)",
          "Be aware of upcoming sales and events. Receive gifts and special offers!"
        )
      },
      buttonText: {
        default: text("button-text (prop)", "Subscribe")
      },
      image: {
        default: text(
          "image (prop)",
          "assets/storybook/homepage/newsletter.jpg"
        )
      },
      background: {
        default: color("background (prop)", "#e1e3e2")
      }
    },
    template: `<div style="max-width: 1024px">
      <SfCallToAction 
      :class="customClass"
      :title="title"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background"/>
    </div>`
  }))
  .add("[slot] title", () => ({
    components: { SfCallToAction },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-banner--secondary": "sf-banner--secondary",
            "sf-banner--light": "sf-banner-light"
          },
          "",
          { display: "multi-select" }
        )
      },
      title: {
        default: text("title (prop)", "Subscribe to Newsletters")
      },
      description: {
        default: text(
          "description (prop)",
          "Be aware of upcoming sales and events. Receive gifts and special offers!"
        )
      },
      buttonText: {
        default: text("button-text (prop)", "Subscribe")
      },
      image: {
        default: text(
          "image (prop)",
          "assets/storybook/homepage/newsletter.jpg"
        )
      },
      background: {
        default: color("background (prop)", "#e1e3e2")
      }
    },
    template: `<div style="max-width: 1024px">
      <SfCallToAction 
      :class="customClass"
      :title="title"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #title="{title}">
          CUSTOM TITLE
         </template>
      </SfCallToAction>
    </div>`
  }))
  .add("[slot] description", () => ({
    components: { SfCallToAction },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-banner--secondary": "sf-banner--secondary",
            "sf-banner--light": "sf-banner-light"
          },
          "",
          { display: "multi-select" }
        )
      },
      title: {
        default: text("title (prop)", "Subscribe to Newsletters")
      },
      description: {
        default: text(
          "description (prop)",
          "Be aware of upcoming sales and events. Receive gifts and special offers!"
        )
      },
      buttonText: {
        default: text("button-text (prop)", "Subscribe")
      },
      image: {
        default: text(
          "image (prop)",
          "assets/storybook/homepage/newsletter.jpg"
        )
      },
      background: {
        default: color("background (prop)", "#e1e3e2")
      }
    },
    template: `<div style="max-width: 1024px">
      <SfCallToAction 
      :class="customClass"
      :title="title"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #description="{description}">
          CUSTOM DESCRIPTION
         </template>
      </SfCallToAction>
    </div>`
  }))
  .add("[slot] button", () => ({
    components: { SfCallToAction },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-banner--secondary": "sf-banner--secondary",
            "sf-banner--light": "sf-banner-light"
          },
          "",
          { display: "multi-select" }
        )
      },
      title: {
        default: text("title (prop)", "Subscribe to Newsletters")
      },
      description: {
        default: text(
          "description (prop)",
          "Be aware of upcoming sales and events. Receive gifts and special offers!"
        )
      },
      buttonText: {
        default: text("button-text (prop)", "Subscribe")
      },
      image: {
        default: text(
          "image (prop)",
          "assets/storybook/homepage/newsletter.jpg"
        )
      },
      background: {
        default: color("background (prop)", "#e1e3e2")
      }
    },
    template: `<div style="max-width: 1024px">
      <SfCallToAction 
      :class="customClass"
      :title="title"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #button="{buttonText}">
          <button>CUSTOM BUTTON</button>
         </template>
      </SfCallToAction>
    </div>`
  }));

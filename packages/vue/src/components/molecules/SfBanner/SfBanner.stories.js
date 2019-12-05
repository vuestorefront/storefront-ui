import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  color,
  object,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfBanner from "./SfBanner.vue";

storiesOf("Molecules|Banner", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfBanner },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-banner--left": "sf-banner--left",
            "sf-banner--slim": "sf-banner-slim"
          },
          "",
          { display: "multi-select" }
        )
      },
      title: {
        default: text("title (prop)", "Eco Sandals")
      },
      subtitle: {
        default: text("subtitle (prop)", "Summer shoes")
      },
      description: {
        default: text(
          "description (prop)",
          "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort."
        )
      },
      buttonText: {
        default: text("button-text (prop)", "Shop Now")
      },
      image: {
        default: object("image (prop)", {
          small: "/assets/storybook/Banner1.jpg",
          normal: "/assets/storybook/Banner1.jpg"
        })
      },
      background: {
        default: color("background (prop)", "#e1e3e2")
      }
    },
    template: `<div style="max-width: 77.5rem">
      <SfBanner 
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background"
      />
    </div>`
  }))
  .add("[slot] subtitle", () => ({
    components: { SfBanner },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-banner--left": "sf-banner--left",
            "sf-banner--slim": "sf-banner-slim"
          },
          "",
          { display: "multi-select" }
        )
      },
      title: {
        default: text("title (prop)", "Eco Sandals")
      },
      subtitle: {
        default: text("subtitle (prop)", "Summer shoes")
      },
      description: {
        default: text(
          "description (prop)",
          "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort."
        )
      },
      buttonText: {
        default: text("button-text (prop)", "Shop Now")
      },
      image: {
        default: object("image (prop)", {
          small: "/assets/storybook/Banner1.jpg",
          normal: "/assets/storybook/Banner1.jpg"
        })
      },
      background: {
        default: color("background (prop)", "#e1e3e2")
      }
    },
    template: `<div style="max-width: 77.5rem">
      <SfBanner 
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #subtitle="{subtitle}">
          <div style="font-size: 1rem">CUSTOM SUBTITLE</div>
        </template>
      </SfBanner>
    </div>`
  }))
  .add("[slot] title", () => ({
    components: { SfBanner },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-banner--left": "sf-banner--left",
            "sf-banner--slim": "sf-banner-slim"
          },
          "",
          { display: "multi-select" }
        )
      },
      title: {
        default: text("title (prop)", "Eco Sandals")
      },
      subtitle: {
        default: text("subtitle (prop)", "Summer shoes")
      },
      description: {
        default: text(
          "description (prop)",
          "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort."
        )
      },
      buttonText: {
        default: text("button-text (prop)", "Shop Now")
      },
      image: {
        default: object("image (prop)", {
          small: "/assets/storybook/Banner1.jpg",
          normal: "/assets/storybook/Banner1.jpg"
        })
      },
      background: {
        default: color("background (prop)", "#e1e3e2")
      }
    },
    template: `<div style="max-width: 77.5rem">
      <SfBanner 
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #title="{title}">
          CUSTOM TITLE
        </template>
      </SfBanner>
    </div>`
  }))
  .add("[slot] description", () => ({
    components: { SfBanner },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-banner--left": "sf-banner--left",
            "sf-banner--slim": "sf-banner-slim"
          },
          "",
          { display: "multi-select" }
        )
      },
      title: {
        default: text("title (prop)", "Eco Sandals")
      },
      subtitle: {
        default: text("subtitle (prop)", "Summer shoes")
      },
      description: {
        default: text(
          "description (prop)",
          "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort."
        )
      },
      buttonText: {
        default: text("button-text (prop)", "Shop Now")
      },
      image: {
        default: object("image (prop)", {
          small: "/assets/storybook/Banner1.jpg",
          normal: "/assets/storybook/Banner1.jpg"
        })
      },
      background: {
        default: color("background (prop)", "#e1e3e2")
      }
    },
    template: `<div style="max-width: 77.5rem">
      <SfBanner 
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #description="{description}">
          CUSTOM DESCRIPTION
        </template>
      </SfBanner>
    </div>`
  }))
  .add("[slot] call-to-action", () => ({
    components: { SfBanner },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-banner--left": "sf-banner--left",
            "sf-banner--slim": "sf-banner-slim"
          },
          "",
          { display: "multi-select" }
        )
      },
      title: {
        default: text("title (prop)", "Eco Sandals")
      },
      subtitle: {
        default: text("subtitle (prop)", "Summer shoes")
      },
      description: {
        default: text(
          "description (prop)",
          "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort."
        )
      },
      buttonText: {
        default: text("button-text (prop)", "Shop Now")
      },
      image: {
        default: object("image (prop)", {
          small: "/assets/storybook/Banner1.jpg",
          normal: "/assets/storybook/Banner1.jpg"
        })
      },
      background: {
        default: color("background (prop)", "#e1e3e2")
      }
    },
    template: `<div style="max-width: 77.5rem">
      <SfBanner 
      :class="customClass"
      :title="title"
      :subtitle="subtitle"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #call-to-action="{buttonText}">
          <button>CUSTOM CALL TO ACTION</button>
        </template>
      </SfBanner>
    </div>`
  }));

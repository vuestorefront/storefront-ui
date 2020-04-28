import { storiesOf } from "@storybook/vue";
import { withKnobs, text, color } from "@storybook/addon-knobs";
import { SfCallToAction } from "@storefront-ui/vue";
storiesOf("Molecules|CallToAction", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfCallToAction },
    props: {
      title: {
        default: text("title", "Subscribe to Newsletters", "Props"),
      },
      description: {
        default: text(
          "description",
          "Be aware of upcoming sales and events. Receive gifts and special offers!",
          "Props"
        ),
      },
      buttonText: {
        default: text("buttonText", "Subscribe", "Props"),
      },
      image: {
        default: text("image", "assets/storybook/Home/newsletter.jpg", "Props"),
      },
      background: {
        default: color("background", "#e1e3e2", "Props"),
      },
    },
    template: `<div style="max-width: 1240px">
      <SfCallToAction      
      :title="title"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background"/>
    </div>`,
  }))
  .add("[slot] title", () => ({
    components: { SfCallToAction },
    props: {
      title: {
        default: text("title", "Subscribe to Newsletters", "Props"),
      },
      description: {
        default: text(
          "description",
          "Be aware of upcoming sales and events. Receive gifts and special offers!",
          "Props"
        ),
      },
      buttonText: {
        default: text("buttonText", "Subscribe", "Props"),
      },
      image: {
        default: text("image", "assets/storybook/Home/newsletter.jpg", "Props"),
      },
      background: {
        default: color("background", "#e1e3e2", "Props"),
      },
    },
    template: `<div style="max-width: 1240px">
      <SfCallToAction      
      :title="title"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #title="{title}">
          CUSTOM TITLE
         </template>
      </SfCallToAction>
    </div>`,
  }))
  .add("[slot] description", () => ({
    components: { SfCallToAction },
    props: {
      title: {
        default: text("title", "Subscribe to Newsletters", "Props"),
      },
      description: {
        default: text(
          "description",
          "Be aware of upcoming sales and events. Receive gifts and special offers!",
          "Props"
        ),
      },
      buttonText: {
        default: text("buttonText", "Subscribe", "Props"),
      },
      image: {
        default: text("image", "assets/storybook/Home/newsletter.jpg", "Props"),
      },
      background: {
        default: color("background", "#e1e3e2", "Props"),
      },
    },
    template: `<div style="max-width: 1240px">
      <SfCallToAction      
      :title="title"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #description="{description}">
          CUSTOM DESCRIPTION
         </template>
      </SfCallToAction>
    </div>`,
  }))
  .add("[slot] button", () => ({
    components: { SfCallToAction },
    props: {
      title: {
        default: text("title", "Subscribe to Newsletters", "Props"),
      },
      description: {
        default: text(
          "description",
          "Be aware of upcoming sales and events. Receive gifts and special offers!",
          "Props"
        ),
      },
      buttonText: {
        default: text("buttonText", "Subscribe", "Props"),
      },
      image: {
        default: text("image", "assets/storybook/Home/newsletter.jpg", "Props"),
      },
      background: {
        default: color("background", "#e1e3e2", "Props"),
      },
    },
    template: `<div style="max-width: 1240px">
      <SfCallToAction      
      :title="title"
      :description="description"
      :button-text="buttonText"
      :image="image"
      :background="background">
        <template #button="{buttonText}">
          <button>CUSTOM BUTTON</button>
         </template>
      </SfCallToAction>
    </div>`,
  }));

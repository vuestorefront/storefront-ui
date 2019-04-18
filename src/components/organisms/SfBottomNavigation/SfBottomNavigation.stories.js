import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import SfBottomNavigation from "./SfBottomNavigation.vue";
import notes from "./README.md";

export default storiesOf("Organisms | BottomNavigation", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      components: { SfBottomNavigation },
      props: {
        item: {
          default: select("item (prop)", [
            "/assets/storybook/home.svg",
            "/assets/storybook/search.svg",
            "/assets/storybook/heart.svg",
            "/assets/storybook/profile.svg"
          ])
        },
        current: {
          default: text("current (prop)", false)
        }
      },
      template: `
      <SfBottomNavigation
        :item="item"
        :current="current">
        </SfBottomNavigation>
    `
    }),
    {
      notes,
      info: true
    }
  )
  .add(
    "[slot] Item",
    () => ({
      components: { SfBottomNavigation },
      template: `
      <SfBottomNavigation message="Message prop">
        <template slot="items">
          <img src="assets/storybook/home.svg"/>
          <img src="assets/storybook/search.svg"/>
          <img src="assets/storybook/heart.svg"/>
          <img src="assets/storybook/profile.svg"/>
        </template>
        <template slot="floating-icon">
          <img src="assets/storybook/add_to_cart.svg"/>
        </template>
      </SfBottomNavigation>
    `
    }),
    {
      info: true,
      notes,
      knobs: {
        escapeHTML: false
      }
    }
  );

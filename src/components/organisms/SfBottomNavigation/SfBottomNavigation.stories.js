import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import SfBottomNavigation from "./SfBottomNavigation.vue";
import notes from "./README.md";

export default storiesOf("BottomNavigation", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      components: { SfBottomNavigation },
      props: {
        item: text("item (prop)", "assets/storybook/home.svg"),
        current: {
          default: text("current(prop)", "false")
        }
      },
      template: `
      <SfBottomNavigation
        :item="item"
        :current="current"
      />
    `
    }),
    {
      notes,
      info: true
    }
  )
  .add(
    "[slot] items",
    () => ({
      components: { SfBottomNavigation },
      template: `<sf-bottom-navigation><img src='assets/storybook/heart.svg'></sf-bottom-navigation>`
    }),
    {
      info: true
    }
  );

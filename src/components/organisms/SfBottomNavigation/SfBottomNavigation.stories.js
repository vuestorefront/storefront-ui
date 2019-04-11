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
        image: text("image (prop)", "assets/storybook/home.svg"),
        current: {
          default: text("current(prop)", "1")
        }
      },
      template: `
      <SfBottomNavigation
        :image="icon"
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
      template: `
      <SfBottomNavigation
        image="assets/storybook/home.svg"
      >
        <template slot="items">items</template>
      </SfBottomNavigation>
    `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] floating-icon",
    () => ({
      components: { SfBottomNavigation },
      template: `
      <SfBottomNavigation
        floating-icon="assets/storybook/home.svg"
      >
        <template #floating-icon>
          <button>Custom CTA</Floa>
        </template>
      </SfBottomNavigation>
    `
    }),
    {
      notes,
      info: true
    }
  );

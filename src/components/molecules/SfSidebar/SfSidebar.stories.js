// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfSidebar from "./SfSidebar.vue";

storiesOf("Molecules|Sidebar", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        customClass: {
          default: select("CSS Modifier", ["null", "sf-sidebar--right"], "null")
        }
      },
      components: { SfSidebar },
      template: `<SfSidebar :class="customClass">Hello World</SfSidebar>`
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfSidebar },
      template: "<SfSidebar>Hello World</SfSidebar>"
    }),
    {
      info: true,
      notes
    }
  );

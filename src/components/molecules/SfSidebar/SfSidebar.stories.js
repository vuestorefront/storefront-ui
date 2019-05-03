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
        position: {
          default: select(
            "position (prop)",
            ["left (default)", "right"],
            "left (default)"
          )
        },
        button: {
          default: select(
            "button (prop)",
            ["true (default)", "false"],
            "true (default)"
          )
        }
      },
      components: { SfSidebar },
      template: `<SfSidebar :button="button" :position="position">Hello World</SfSidebar>`
    }),
    {
      info: {
        summary:
          "`SfSidebar` will add `overflow: hidden` CSS property to body once instantiated. This is why you should always use `v-if`"
      },
      notes
    }
  );

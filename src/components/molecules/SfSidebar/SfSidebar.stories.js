// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfSidebar from "./SfSidebar.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
storiesOf("Molecules|Sidebar", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          isSidebarOpen: true
        };
      },
      props: {
        position: {
          default: select("position (prop)", ["left", "right"], "left")
        },
        button: {
          default: select("button (prop)", [true, false], true)
        }
      },
      components: { SfSidebar, SfButton },
      template: `
      <div>
      <SfButton @click="isSidebarOpen = true">Open sidebar</SfButton>
      <SfSidebar       
        :visible="isSidebarOpen"
        @close="isSidebarOpen = false"
        :button="button" 
        :position="position"
      >
        Hello World
      </SfSidebar>
      </div>`
    }),
    {
      info: {
        summary:
          "`SfSidebar` will add `overflow: hidden` CSS property to body once instantiated. This is why you should always use `v-if`"
      },
      notes
    }
  );

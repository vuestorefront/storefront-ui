// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  select,
  optionsKnob as options
} from "@storybook/addon-knobs";
import SfSidebar from "./SfSidebar.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

storiesOf("Organisms|Sidebar", module)
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
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-sidebar--right": "sf-sidebar--right"
            },
            "",
            { display: "multi-select" }
          )
        },
        button: {
          default: select("button (prop)", [true, false], true)
        },
        overlay: {
          default: select("overlay (prop)", [true, false], true)
        }
      },
      components: { SfSidebar, SfButton },
      template: `<div>
        <SfButton @click="isSidebarOpen = true">Open sidebar</SfButton>
        <SfSidebar
          @close="isSidebarOpen = false"
          :visible="isSidebarOpen"
          :overlay="overlay"
          :button="button"
          :class="customClass"
        >
          <div style="box-sizing: border-box; padding: 2.5rem; width: 20rem">
            Hello World
          </div>
        </SfSidebar>
      </div>`
    }));

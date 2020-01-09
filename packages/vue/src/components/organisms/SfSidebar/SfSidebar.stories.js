/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  select,
  optionsKnob as options
} from "@storybook/addon-knobs";
import SfSidebar from "./SfSidebar.vue";
import {
  withDataToggle,
  dataToggleMixin
} from "../../../../config/storybook/decorators";
storiesOf("Organisms|Sidebar", module)
  .addDecorator(withKnobs)
  .addDecorator(withDataToggle("isSidebarOpen"))
  .add("Common", () => ({
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-sidebar--right": "sf-sidebar--right"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      button: {
        default: select("button", [true, false], true, "Props")
      },
      overlay: {
        default: select("overlay", [true, false], true, "Props")
      }
    },
    components: { SfSidebar },
    mixins: [dataToggleMixin("isSidebarOpen")],
    template: `
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
      </SfSidebar>`
  }));

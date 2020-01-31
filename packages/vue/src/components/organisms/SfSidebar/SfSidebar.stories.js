/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import {
  withDataToggle,
  dataToggleMixin
} from "../../../../config/storybook/decorators";

import SfSidebar from "./SfSidebar.vue";

storiesOf("Organisms|Sidebar", module)
  .addDecorator(withKnobs)
  .addDecorator(withDataToggle("isSidebarOpen"))
  .add("Common", () => ({
    components: { SfSidebar },
    props: {
      headingTitle: {
        default: text("headingTitle", "My Cart", "Props")
      },
      headingSubtitle: {
        default: text("headingSubtitle", "Order Summary", "Props")
      },
      headingLevel: {
        default: number("headingLevel", 2, {}, "Props")
      },
      overlay: {
        default: boolean("overlay", true, "Props")
      },
      button: {
        default: boolean("button", true, "Props")
      }
    },
    mixins: [dataToggleMixin("isSidebarOpen")],
    template: `<SfSidebar
        :visible="isSidebarOpen"
        @close="isSidebarOpen = false"
        :heading-title="headingTitle"
        :heading-subtitle="headingSubtitle"
        :heading-level="headingLevel"
        :button="button"
        :overlay="overlay"
      >
        Total items: 0
      </SfSidebar>`
  }))
  .add("[slot] title", () => ({
    components: { SfSidebar },
    props: {
      headingTitle: {
        default: text("headingTitle", "My Cart", "Props")
      },
      headingSubtitle: {
        default: text("headingSubtitle", "Order Summary", "Props")
      },
      headingLevel: {
        default: number("headingLevel", 2, {}, "Props")
      },
      overlay: {
        default: boolean("overlay", true, "Props")
      },
      button: {
        default: boolean("button", true, "Props")
      }
    },
    mixins: [dataToggleMixin("isSidebarOpen")],
    template: `<SfSidebar
        :visible="isSidebarOpen"
        @close="isSidebarOpen = false"
        :heading-title="headingTitle"
        :heading-subtitle="headingSubtitle"
        :heading-level="headingLevel"
        :button="button"
        :overlay="overlay"
    >
      <template #title="{headingTitle, headingSubtitle, headingLevel}">
        <div>CUSTOM TITLE</div>
      </template>
      Total items: 0
    </SfSidebar>`
  }))
  .add("[slot] circle-icon", () => ({
    components: { SfSidebar },
    props: {
      headingTitle: {
        default: text("headingTitle", "My Cart", "Props")
      },
      headingSubtitle: {
        default: text("headingSubtitle", "Order Summary", "Props")
      },
      headingLevel: {
        default: number("headingLevel", 2, {}, "Props")
      },
      overlay: {
        default: boolean("overlay", true, "Props")
      },
      button: {
        default: boolean("button", true, "Props")
      }
    },
    mixins: [dataToggleMixin("isSidebarOpen")],
    template: `<SfSidebar
        :visible="isSidebarOpen"
        @close="isSidebarOpen = false"
        :heading-title="headingTitle"
        :heading-subtitle="headingSubtitle"
        :heading-level="headingLevel"
        :button="button"
        :overlay="overlay"
      >
        <template #circle-icon="{close}">
          <div 
            :style="{position: 'absolute', top: '3rem', right: '-30px', fontSize: '42px', cursor: 'pointer'}" 
            @click="close">🙊</div>
        </template>
        Total items: 0
      </SfSidebar>`
  }));

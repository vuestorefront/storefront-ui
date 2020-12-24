import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import {
  withDataToggle,
  dataToggleMixin,
} from "@storefront-ui/vue/config/storybook/decorators";
import { SfSidebar } from "@storefront-ui/vue";
export default {
  title: "Molecules/AddressPicker",
  component: SfAddressPicker,
  argTypes: {
    name: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: 0,
    },
    current: {
      control: "number",
      defaultValue: 0,
      table: {
        category: "Props",
      },
    },
    input: { action: "Address picked", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfAddressPicker },
  props: Object.keys(argTypes),
  template: `<SfBar
  :title="title"
  :back="back"
  :close="close"
/>`,
});

export const Common = Template.bind({});
Common.args = {};
storiesOf("Organisms|Sidebar", module)
  .addDecorator(withKnobs)
  .addDecorator(withDataToggle("isSidebarOpen"))
  .add("Common", () => ({
    components: { SfSidebar },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-sidebar--right": "sf-sidebar--right",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text("title", "My Cart", "Props"),
      },
      subtitle: {
        default: text("subtitle", "", "Props"),
      },
      headingLevel: {
        default: number("headingLevel", 3, {}, "Props"),
      },
      overlay: {
        default: boolean("overlay", true, "Props"),
      },
      button: {
        default: boolean("button", true, "Props"),
      },
      persistent: {
        default: boolean("persistent", false, "Props"),
      },
    },
    mixins: [dataToggleMixin("isSidebarOpen")],
    template: `<SfSidebar
        :visible="isSidebarOpen"
        @close="isSidebarOpen = false"
        :title="title"
        :subtitle="subtitle"
        :heading-level="headingLevel"
        :button="button"
        :overlay="overlay"
        :class="customClass"
        :persistent="persistent"
      >
        Total items: 0
      </SfSidebar>`,
  }))
  .add("On the right", () => ({
    components: { SfSidebar },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-sidebar--right": "sf-sidebar--right",
          },
          "sf-sidebar--right sf-sidebar--icon",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text("title", "My Cart", "Props"),
      },
      subtitle: {
        default: text("subtitle", "", "Props"),
      },
      headingLevel: {
        default: number("headingLevel", 3, {}, "Props"),
      },
      overlay: {
        default: boolean("overlay", true, "Props"),
      },
      button: {
        default: boolean("button", true, "Props"),
      },
      persistent: {
        default: boolean("persistent", false, "Props"),
      },
    },
    mixins: [dataToggleMixin("isSidebarOpen")],
    template: `<SfSidebar
        :visible="isSidebarOpen"
        @close="isSidebarOpen = false"
        :title="title"
        :subtitle="subtitle"
        :heading-level="headingLevel"
        :button="button"
        :overlay="overlay"
        :class="customClass"
        :persistent="persistent"
      >
        Total items: 0
      </SfSidebar>`,
  }))
  .add("[slot] title", () => ({
    components: { SfSidebar },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-sidebar--right": "sf-sidebar--right",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text("title", "My Cart", "Props"),
      },
      subtitle: {
        default: text("subtitle", "", "Props"),
      },
      headingLevel: {
        default: number("headingLevel", 3, {}, "Props"),
      },
      overlay: {
        default: boolean("overlay", true, "Props"),
      },
      button: {
        default: boolean("button", true, "Props"),
      },
      persistent: {
        default: boolean("persistent", false, "Props"),
      },
    },
    mixins: [dataToggleMixin("isSidebarOpen")],
    template: `<SfSidebar
        :visible="isSidebarOpen"
        @close="isSidebarOpen = false"
        :title="title"
        :subtitle="subtitle"
        :heading-level="headingLevel"
        :button="button"
        :overlay="overlay"
        :class="customClass"
        :persistent="persistent"
    >
      <template #title="{title, subtitle, headingLevel}">
        <div>CUSTOM TITLE</div>
      </template>
      Total items: 0
    </SfSidebar>`,
  }))
  .add("[slot] circle-icon", () => ({
    components: { SfSidebar },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-sidebar--right": "sf-sidebar--right",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text("title", "My Cart", "Props"),
      },
      subtitle: {
        default: text("subtitle", "", "Props"),
      },
      headingLevel: {
        default: number("headingLevel", 3, {}, "Props"),
      },
      overlay: {
        default: boolean("overlay", true, "Props"),
      },
      button: {
        default: boolean("button", true, "Props"),
      },
      persistent: {
        default: boolean("persistent", false, "Props"),
      },
    },
    mixins: [dataToggleMixin("isSidebarOpen")],
    template: `<SfSidebar
        :visible="isSidebarOpen"
        @close="isSidebarOpen = false"
        :title="title"
        :subtitle="subtitle"
        :heading-level="headingLevel"
        :button="button"
        :overlay="overlay"
        :class="customClass"
        :persistent="persistent"
      >
        <template #circle-icon="{close}">
          <div 
            :style="{position: 'absolute', top: '3rem', right: '-20px', fontSize: '42px', cursor: 'pointer'}" 
            @click="close">🙊</div>
        </template>
        Total items: 0
      </SfSidebar>`,
  }));

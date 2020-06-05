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
        Jako Akcja Miasto pojawiliśmy się dziś na spacerze szlakiem Olszówki Krzyckiej. Spacer miał miejsce tuż po ogłoszeniu przez miasto zaniechania budowy kolektora w obecnej formie i rozpoczęcia procesu projektowania od nowa. 
Miasto zapowiada: "zaczynamy od białej kartki" (!). Słusznie! Weźmiemy udział w konsultacjach nowego projektu, bo uważamy, że przyroda i retencja są ważniejsze niż rura. Gratulujemy obrońcom Olszówki 🙂
Okazuje się, że jak jest potrzeba, to Wrocław rozmawia, a to bardzo nas cieszy. - W rozmowach uczestniczyli m.in pracownicy MPWiK Wrocław oraz urzędnicy z Zielony Wrocław czy Biura Zrównoważonej Mobilności.
Bardzo dziękujemy Extinction Rebellion Wrocław za pojawienie się podczas spaceru i danie wyraźnego sygnału, że przyglądają się sprawie.
Poniżej link do posta Biuro Prasowe Urzędu Miejskiego Wrocławia z pismem podpisanym przez Prezydent Wrocławia Jacek Sutryk:
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

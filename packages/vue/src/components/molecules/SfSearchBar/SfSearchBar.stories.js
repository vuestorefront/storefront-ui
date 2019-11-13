import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import SfSearchBar from "./SfSearchBar.vue";
import { generateStorybookTable } from "@/helpers";
import {
  withKnobs,
  text,
  select,
  optionsKnob as options
} from "@storybook/addon-knobs";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$search-bar-background-primary", "$c-light", "background color primary"],
    [
      "$search-bar-background-secondary",
      "$c-light-variant",
      "background color secondary"
    ],
    ["$search-bar-placeholder-color", "$c-dark", "placeholder color"],
    [
      "$search-bar-placeholder-color-focus",
      "$c-gray ",
      "placeholder in focus color"
    ],
    ["$search-bar-width", "20rem", "search bar width"],
    ["$search-bar-height", "2.25rem", "search bar height"],
    ["$search-bar-border-radius", "1.6875rem", "border radius for search bar"],
    ["$search-bar-text-align", "center", "text alignment"]
  ]
};

storiesOf("Molecules|SearchBar", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      props: {
        placeholder: {
          default: text("placeholder (prop", "Search for...")
        },
        icon: {
          default: select("icon (prop)", [true, false])
        },
        clearIcon: {
          default: text("image (prop)", "assets/storybook/clear.svg")
        }
      },
      data() {
        return {
          value: ""
        };
      },
      components: { SfSearchBar },
      template: "<SfSearchBar :placeholder='placeholder' v-model='value'/>"
    }),
    {
      info: true
    }
  )
  .add(
    "CSS Modifiers",
    () => ({
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-search-bar--secondary": "sf-search-bar--secondary",
              "sf-search-bar--position-right": "sf-search-bar--position-right",
              "sf-search-bar--position-right-mobile":
                "sf-search-bar--position-right-mobile",
              "sf-search-bar--position-right-desktop":
                "sf-search-bar--position-right-desktop"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      components: { SfSearchBar },
      template: `<SfSearchBar :class="customClass"/>`
    }),
    {
      backgrounds: [{ name: "bcg", value: "#cdcdcd", default: true }],

      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfSearchBar } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
      }
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfSearchBar },
      template: `<SfSearchBar @input="action" @keyup.enter="action" @keyup.esc="action" @blur="blur"></SfSearchBar>`,
      methods: { action: action("changed value"), blur: action("blur") }
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] Icon",
    () => ({
      props: {
        icon: true,
        text: ""
      },
      components: { SfSearchBar },
      template: `
      <SfSearchBar :icon="icon">
        <template #icon>
          <svg class="sf-search-bar__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6679 18.1085L16.0788 14.5457C18.8811 10.9579 18.5864 5.84813 15.3652 2.62884C13.6692 0.933843 11.4063 0 8.99786 0C6.5882 0 4.32646 0.933892 2.63049 2.62884C0.934428 4.32384 0 6.58526 0 8.99222C0 11.4004 0.934477 13.6607 2.63049 15.3556C4.32656 17.0506 6.58938 17.9844 8.99786 17.9844C10.9897 17.9844 12.9568 17.3212 14.5298 16.0677L18.0948 19.6804C18.3157 19.9011 18.5865 20 18.8814 20C19.1762 20 19.4471 19.8771 19.6679 19.6804C20.1107 19.2629 20.1107 18.5507 19.6679 18.1082L19.6679 18.1085ZM15.784 8.99222C15.784 10.8101 15.0714 12.5061 13.7921 13.7836C12.5138 15.061 10.7928 15.7742 8.99779 15.7742C7.20274 15.7742 5.4817 15.062 4.20345 13.7836C2.92516 12.5061 2.21157 10.7861 2.21157 8.99222C2.21157 7.17437 2.92418 5.47833 4.20345 4.20089C5.48174 2.9234 7.20274 2.21025 8.99779 2.21025C10.8168 2.21025 12.5139 2.92242 13.7921 4.20089C15.0704 5.47934 15.784 7.17447 15.784 8.99222Z" fill="#1D1F22"/>
          </svg>
        </template>
      </SfSearchBar>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] without icon",
    () => ({
      props: {
        icon: false
      },
      components: { SfSearchBar },
      template: `
      <SfSearchBar :icon="false">
      </SfSearchBar>`
    }),
    {
      info: true
    }
  );

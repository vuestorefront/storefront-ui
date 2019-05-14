import { storiesOf } from "@storybook/vue";
import notes from "./README.md";
import { action } from "@storybook/addon-actions";
import SfSearchBar from "./SfSearchBar.vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

storiesOf("Atoms|SearchBar", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      props: {
        iconSrc: {
          default: text("iconSrc (prop)", "assets/storybook/search.svg")
        },
        alt: {
          default: text("alt (prop)", "Search")
        },
        placeholder: {
          default: text("placeholder (prop", "Search for items")
        }
      },
      components: { SfSearchBar },
      template:
        "<sf-search-bar :iconSrc='iconSrc' :alt='alt' placeholder='Search for items' v-model='value'/>"
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "CSS Modifiers",
    () => ({
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            [
              "null",
              "sf-search-bar--secondary",
              "sf-search-bar--position-right"
            ],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfSearchBar },
      template:
        "<sf-search-bar icon-src='assets/storybook/search.svg' :class='customClass'/>"
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfSearchBar },
      template: `<sf-search-bar @input="action"><img src='assets/storybook/search.svg'></sf-search-bar>`,
      methods: { action: action("changed value") }
    }),
    {
      info: true,
      notes
    }
  );

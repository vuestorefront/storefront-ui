import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import { SfHighlight, SfList } from "@storefront-ui/vue";
storiesOf("Atoms|Highlight", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfHighlight, SfList },
    props: {
      tag: {
        default: text("tag", "sf-list-item", "Props"),
      },
      content: {
        default: text("content", "Long dresses", "Props"),
      },
      highlighted: {
        default: text("highlighted", "dress", "Props"),
      },
    },
    data() {
      return {
        categories: [
          "Summer dresses",
          "Dresses",
          "Coctail dresses",
          "New dresses",
          "Dresses on SALE",
        ],
      };
    },
    template: `<SfList>
      <SfHighlight
        :tag="tag"
        :content="content"
        :highlighted="highlighted"
      />
      <SfHighlight
        v-for="(category, key) in categories"
        :key="key"
        :tag="tag"
        :content="category"
        :highlighted="highlighted"
      />
    </SfList>`,
  }));

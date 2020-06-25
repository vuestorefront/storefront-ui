import { storiesOf } from "@storybook/vue";
import { withKnobs, text, color, object } from "@storybook/addon-knobs";
import { SfTile } from "@storefront-ui/vue";
storiesOf("Molecules|Tile", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfTile },
    props: {
      title: {
        default: text("title", "Bags", "Props"),
      },
      background: {
        default: object(
          "image",
          {
            mobile: "/assets/storybook/SfTile/tileB-m.jpg",
            desktop: "/assets/storybook/SfTile/tileB.jpg",
          },
          "Props"
        ),
      },
    },
    template: `<SfTile
      :title="title"
      :background="background"
      />`,
  }));

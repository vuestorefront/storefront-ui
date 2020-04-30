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
      image: {
        default: object(
          "image",
          {
            mobile: "/assets/storybook/SfTile/tileB-m.jpg",
            desktop: "/assets/storybook/SfTile/tileB.jpg",
          },
          "Props"
        ),
      },
      background: {
        default: color("background", "#C4C4C4", "Props"),
      },
    },
    template: `<SfTile
      :title="title"
      :image="image"
      :background="background"
      />`,
  }));

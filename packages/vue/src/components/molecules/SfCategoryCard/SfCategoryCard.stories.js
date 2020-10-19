import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  object,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfCategoryCard from "./SfCategoryCard.vue";
storiesOf("Molecules|CategoryCard", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      cardDetails: {
        default: object(
          "cardDetails",
          {
            name: "Personal Care",
            value: "36",
          },
          "Props"
        ),
      },
      background: {
        default: object(
          "background",
          {
            mobile: "assets/storybook/SfCategoryCard/category-cardM.jpg",
            desktop: "assets/storybook/SfCategoryCard/category-cardD.jpg",
          },
          "Props"
        ),
      },
      link: {
        default: text("link", "#", "Props"),
      },
    },
    components: { SfCategoryCard },
    template: `<SfCategoryCard
        :link="link"
        :cardDetails="cardDetails"
        :background="background"
      />`,
  }));

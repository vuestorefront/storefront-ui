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
      label: {
        default: text("label", "Personal Care", "Props"),
      },
      count: {
        default: text("count", "32", "Props"),
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
        :label="label"
        :count="count"
        :background="background"
      />`,
  }));

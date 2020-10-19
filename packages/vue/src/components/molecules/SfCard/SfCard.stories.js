import "./SfCard.stories.scss";
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  object,
  text,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfCard from "./SfCard.vue";
storiesOf("Molecules|Card", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      cardDetails: {
        default: object(
          "cardDetails",
          {
            title: "Baby Care",
            titleLevel: "3",
            description:
              "Read how to take care of your baby, see our products available, clothes and suggestions how stay healthy.",
          },
          "Props"
        ),
      },
      image: {
        default: text("image", "assets/storybook/SfCard/card.jpg", "Props"),
      },
    },
    components: { SfCard },
    template: `<SfCard
        :card-details="cardDetails"
        :image="image"
      />`,
  }));

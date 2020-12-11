import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  object,
  text,
  number,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfCard from "./SfCard.vue";
storiesOf("Molecules|Card", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      image: {
        default: text("image", "assets/storybook/SfCard/card.jpg", "Props"),
      },
      title: {
        default: text("title", "Baby Care", "Props"),
      },
      titleLevel: {
        default: number("titleLevel", 3, { min: 1, max: 6 }, "Props"),
      },
      description: {
        default: text(
          "description",
          "Read how to take care of your baby, see our products available, clothes and suggestions how stay healthy.",
          "Props"
        ),
      },
      link: {
        default: text("link", "", "Props"),
      },
      buttonText: {
        default: text("buttonText", "Learn more", "Props"),
      },
    },
    components: { SfCard },
    template: `<SfCard
        :title="title"
        :titleLevel="titleLevel"
        :image="image"
        :description="description"
        :link="link"
        :buttonText="buttonText"
      />`,
  }));

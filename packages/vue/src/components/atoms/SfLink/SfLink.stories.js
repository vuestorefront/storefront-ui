import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfLink from "./SfLink.vue";
storiesOf("Atoms|Link", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      propsName: {
        default: text("propsName", "", "Props"),
      },
    },
    components: { SfLink },
    template: `<SfLink
        :props-name="propsName"
      />`,
  }));


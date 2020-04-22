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
      link: {
        default: text("link", "https://www.storefrontui.io/", "Props"),
      },
    },
    components: { SfLink },
    template: `<SfLink
        target="_blank"
        :link="link"
      >
      Check this out!
      </SfLink>
      `,
  }));

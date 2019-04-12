/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import VueMarkdown from "vue-markdown";
import README from "../README.md";
import "./styles.scss";
storiesOf("Documentation|Introduction", module)
  .addDecorator(withKnobs)
  .addParameters({
    options: {
      showPanel: false,
      isToolshown: false
    }
  })
  .add(
    "README",
    () => ({
      data() {
        return {
          content: README
        };
      },
      components: { VueMarkdown },
      template: `
      <VueMarkdown class="readme"> {{ content }} </VueMarkdown>
    `
    }),
    {
      info: true
    }
  );

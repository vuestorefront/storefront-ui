/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import "./home.scss";

storiesOf(" |Introduction", module)
  .addDecorator(withKnobs)
  .addParameters({
    options: {
      showPanel: false,
      isToolshown: false
    }
  })
  .add("How to use Storybook", () => ({
    template: `
    <div class="intro">
    <h1>Welcome in StorefrontUI Storybook</h1>
    <p>
      You can use it to browse and play with StorefrontUI components.
      On the left panel you will find every component that is currently available in the library. 
      You can play with props and CSS modifiers of each component from <b>Knobs menu</b> and check available slots. 
      On the <b>notes</b> menu you will find additional information about component such as available SCSS variables.
    </p>
    <p>
    Below you can find useful links that can help you understand the library and Storybook itself.
    </p>
    <ul>
      <li><a href="https://github.com/Divanteltd/storefront-ui" target="_blank">StorefrontUI Github</a></li>
      <li><a href="https://github.com/DivanteLtd/storefront-ui/blob/master/CONTRIBUTING.md" target="_blank">Contribution guide</a></li>
      <li>Documentation (work in progress)</li>
      <li><a href="https://storybook.js.org/docs/basics/introduction/" target="_blank">Storybook docs</a>
    </ul>
    </div>
    `
  }));

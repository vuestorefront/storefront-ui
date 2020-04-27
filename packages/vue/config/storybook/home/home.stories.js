import { storiesOf } from "@storybook/vue";
import "./home.scss";
storiesOf(" |Introduction", module)
  .addParameters({
    options: {
      showPanel: false,
      isToolshown: false,
    },
  })
  .add("How to use Storybook", () => ({
    template: `<div id="intro">
      <h1>StorefrontUI - Customization-first component library</h1>
      <p>
        Welcome to our storybook!
        You can use it to browse and play with StorefrontUI components.
        On the left panel, you will find every component that is currently available in the library.
        You can play with props and CSS modifiers of each component from <b>Knobs menu</b>.
        Components marked as <i>WIP</i> will likely be changed, hence it's not safe to use them.
      </p>
      <p>
        <b>StorefrontUI is currently in BETA which means it is not suitable for production! The package is stable but some breaking changes may occur.</b>
      </p>
      <h2> Join us! </h2>
      <p> StorefrontUI is a completely new approach for component libraries. It is oriented around customization possibilities instead of out of the box possibilities. It's a great goal but it will take a lot of time to achieve it only by ourselves. The project is open source and free to use. If you'd like to support us and join the team, please write to me: <b> filip [at] vuestorefront.io </b> 💚</p>
      <h2> How to start? </h2>
      <ol>
        <li> Add the package:
          <pre>npm install --save @storefront-ui/vue</pre>
          or
          <pre>yarn add @storefront-ui/vue</pre>
        </li>
        <li> Import stylesheets in your main.js or the root component of your application:
          <pre>import "@storefront-ui/vue/styles.scss";</pre>
        </li>
        <li> It's done! Now you can import and use any of the components:
          <pre> import { SfComponentName } from "@storefront-ui/vue"</pre>
        </li>
        <li> You can find detailed information about every component inside each component's story. </li>
      </ol>
      <h2> How to customize? </h2>
      <p>StorefrontUI components can be customized in many ways:</p>
      <ul>
        <li>Global customization through SCSS variables.</li>
        <li>Standard component customization with filling the props.</li>
        <li>Replacement of default HTML with slots.</li>
        <li>Heavy customization with usage of HTML, CSS and JS partials.</li>
      </ul>
      <p>You can find detailed information in <a href="https://github.com/Divanteltd/storefront-ui/blob/master/packages/vue/docs/customization.md">this doc</a>.</p>
      <h2>Useful links</h2>
      <ul>
        <li><a href="https://docs.storefrontui.io" target="_blank">Documentation</a></li>
        <li><a href="https://github.com/Divanteltd/storefront-ui" target="_blank">StorefrontUI Github</a></li>
        <li><a href="https://discord.gg/GS8hqFS" target="_blank">Discord server</a></li>
        <li><a href="https://github.com/DivanteLtd/storefront-ui/blob/master/CONTRIBUTING.md" target="_blank">Contribution guide</a></li>
      </ul>
    </div>`,
  }));

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfButton from "../components/Button/Button.vue";

storiesOf("Button", module)
  .add("with text", () => ({
    components: { SfButton },
    template: '<sf-button @click="action">Hello Button</sf-button>',
    methods: { action: action("clicked") }
  }))
  .add("with JSX", () => ({
    components: { SfButton },
    render() {
      return <sf-button onClick={this.action}>With JSX</sf-button>;
    },
    methods: { action: linkTo("Button", "with some emoji") }
  }))
  .add("with some emoji", () => ({
    components: { SfButton },
    template: '<sf-button @click="action">😀 😎 👍 💯</sf-button>',
    methods: { action: action("clicked") }
  }));

// /* eslint-disable import/no-extraneous-dependencies */
// import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";
// import { withKnobs, text, select } from "@storybook/addon-knobs";
// import notes from "./README.md"
// import SfComponent from "./SfComponent.vue";

// storiesOf("Component", module)
//   .addDecorator(withKnobs)
//   .add(
//     "[slot] default",
//     () => ({
//       components: { SfComponent },
//       template: '<SfComponent @click="action">Hello Button</SfComponent>',
//       methods: { action: action("clicked") }
//     }),
//     {
//       info: true,
//       notes
//     }
//   )
//   .add(
//     "CSS Modifiers",
//     () => ({
//       components: { SfComponent },
//       props: {
//         customClass: {
//           default: select(
//             "CSS Modifier",
//             ["null", "sf-component--secondary", "sf-component--fsomething-else"],
//             "null",
//             "CSS-Modifiers"
//           )
//         }
//       },
//       template: `
//       <SfComponent :class="customClass">Hello world</SfComponent>
//     `
//     }),
//     {
//       info: true,
//       notes
//     }
//   );

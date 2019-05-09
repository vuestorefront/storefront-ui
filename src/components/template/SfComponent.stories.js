// /* eslint-disable import/no-extraneous-dependencies */
// import { storiesOf } from "@storybook/vue";
// import { withKnobs, text, select } from "@storybook/addon-knobs";
// import notes from "./README.md"
// import SfComponent from "./SfComponent.vue";

// storiesOf("Component", module)
//   .addDecorator(withKnobs)
//   .add(
//     "[slot] default",
//     () => ({
//       props: {
//         editableProp: {
//           default: text("(prop) propname")
//         },
//         customClass: {
//           default: select(
//             "CSS Modifier",
//             ["null", "sf-component--modifier"],
//             "null",
//             "CSS-Modifiers"
//           )
//         }
//       },
//       components: { SfComponent },
//       template: `<SfComponent
//         :class="customClass"
//         :
//       >
//         Hello Button<
//       /SfComponent>`
//     }),
//     {
//       info: true,
//       notes
//     }
//   );

// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfSidebar from "./SfSidebar.vue";

storiesOf("Molecules|Sidebar", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-sidebar--right"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfSidebar },
      template: `<SfSidebar :class="customClass">Hello World</SfSidebar>`
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "[CSS] Right",
    () => ({
      components: { SfSidebar },
      template: "<SfSideba class='sf-sidebar--right'r>Hello World</SfSidebar>"
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfSidebar },
      template: "<SfSidebar>Hello World</SfSidebar>"
    }),
    {
      info: true,
      notes
    }
  );
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

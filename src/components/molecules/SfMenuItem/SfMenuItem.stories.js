import { storiesOf } from "@storybook/vue";

import SfMenuItem from "./SfMenuItem.vue";
import { withKnobs, text } from "@storybook/addon-knobs";

export default storiesOf("MenuItem", module)
  .addDecorator(withKnobs)
  .add("Props", () => ({
    components: { SfMenuItem },
    props: {
      title: {
        default: text("title (prop)", "Title prop")
      },
      count: {
        default: text("count (prop)", "Count prop")
      }
    },
    template: `
      <div style="width: 300px; background-color: #eee;">
        <SfMenuItem
          :title="title"
          :count="count"
        />
      </div>
    `
  }))
  .add("Slots (left icon)", () => ({
    components: { SfMenuItem },
    props: {
      title: {
        default: text("title (prop)", "Title prop")
      },
      count: {
        default: text("count (prop)", "Count prop")
      }
    },
    template: `
      <div style="width: 300px; background-color: #eee;">
        <SfMenuItem :title="title" :count="count">
          <img class="sf-menu-item-icon sf-menu-item-icon--left" src="/assets/newsletter.svg" alt="" slot="iconLeft" />
        </SfMenuItem>
      </div>
    `
  }));

import { storiesOf } from "@storybook/vue";
import { withKnobs, number } from "@storybook/addon-knobs";

import SfPagination from "./SfPagination.vue";

storiesOf("Molecules|Pagination", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfPagination },
    props: {
      current: {
        default: number("current (prop)", 2)
      },
      visible: {
        default: number("visible (prop)", 5)
      },
      total: {
        default: number("total (prop)", 12)
      }
    },
    template: `<SfPagination
        :current="current"
        :visible="visible"
        :total="total"/>`
  }))
  .add("[slot] default", () => ({
    components: { SfPagination },
    props: {
      current: {
        default: number("current (prop)", 2)
      },
      visible: {
        default: number("visible (prop)", 5)
      },
      total: {
        default: number("total (prop)", 12)
      }
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total">
        <!-- -->
    </SfPagination>`
  }))
  .add("[slot] prev", () => ({
    components: { SfPagination },
    props: {
      current: {
        default: number("current (prop)", 2)
      },
      visible: {
        default: number("visible (prop)", 5)
      },
      total: {
        default: number("total (prop)", 12)
      }
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total">
      <template #prev>
        <!-- -->
      </template>
    </SfPagination>`
  }))
  .add("[slot] next", () => ({
    components: { SfPagination },
    props: {
      current: {
        default: number("current (prop)", 2)
      },
      visible: {
        default: number("visible (prop)", 5)
      },
      total: {
        default: number("total (prop)", 12)
      }
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total">
      <template #next>
        <!-- -->
      </template>
    </SfPagination>`
  }))
  .add("[slot] number", () => ({
    components: { SfPagination },
    props: {
      current: {
        default: number("current (prop)", 2)
      },
      visible: {
        default: number("visible (prop)", 5)
      },
      total: {
        default: number("total (prop)", 12)
      }
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total">
      <template #number>
        <!-- -->
      </template>
    </SfPagination>`
  }));

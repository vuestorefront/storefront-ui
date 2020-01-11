import { storiesOf } from "@storybook/vue";
import { withKnobs, number } from "@storybook/addon-knobs";

import SfPagination from "./SfPagination.vue";

storiesOf("Molecules|Pagination", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfPagination },
    props: {
      visible: {
        default: number("visible", 5, {}, "Props")
      },
      total: {
        default: number("total", 12, {}, "Props")
      }
    },
    data() {
      return {
        current: 2
      };
    },
    template: `<SfPagination
        :current="current"
        :visible="visible"
        :total="total"
        @click="value => current = value"/>`
  }))
  .add("[slot] default", () => ({
    components: { SfPagination },
    props: {
      visible: {
        default: number("visible", 5, {}, "Props")
      },
      total: {
        default: number("total", 12, {}, "Props")
      }
    },
    data() {
      return {
        current: 2
      };
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total">
        <template #default="{go}">CUSTOM DEFAULT</template>
    </SfPagination>`
  }))
  .add("[slot] prev", () => ({
    components: { SfPagination },
    props: {
      visible: {
        default: number("visible", 5, {}, "Props")
      },
      total: {
        default: number("total", 12, {}, "Props")
      }
    },
    data() {
      return {
        current: 2
      };
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total"
      @click="value => current = value">
      <template #prev="{isDisabled, go}">
        <button @click="go">prev</button>
      </template>
    </SfPagination>`
  }))
  .add("[slot] next", () => ({
    components: { SfPagination },
    props: {
      visible: {
        default: number("visible", 5, {}, "Props")
      },
      total: {
        default: number("total", 12, {}, "Props")
      }
    },
    data() {
      return {
        current: 2
      };
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total"
      @click="value => current = value">
      <template #next="{isDisabled, go}">
        <button @click="go">next</button>
      </template>
    </SfPagination>`
  }))
  .add("[slot] number", () => ({
    components: { SfPagination },
    props: {
      visible: {
        default: number("visible", 5, {}, "Props")
      },
      total: {
        default: number("total", 12, {}, "Props")
      }
    },
    data() {
      return {
        current: 2
      };
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total"
      @click="value => current = value">
      <template #number="{number, go}">
        <button 
          class="sf-pagination__button"
          :class="{'sf-pagination__button--current': (current === number)}"
          @click="go(number)">{{number}}.-</button>
      </template>
    </SfPagination>`
  }));

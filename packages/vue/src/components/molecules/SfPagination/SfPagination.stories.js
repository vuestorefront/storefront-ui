import { storiesOf } from "@storybook/vue";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import { SfPagination } from "@storefront-ui/vue";
storiesOf("Molecules|Pagination", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfPagination },
    props: {
      visible: {
        default: number("visible", 5, {}, "Props"),
      },
      total: {
        default: number("total", 12, {}, "Props"),
      },
      hasArrows: {
        default: boolean("hasArrows", true, "Props"),
      },
    },
    data() {
      return {
        current: 2,
      };
    },
    template: `<SfPagination
        :current="current"
        :visible="visible"
        :total="total"
        :has-arrows="hasArrows"
        @click="value => current = value"/>`,
  }))
  .add("[slot] default", () => ({
    components: { SfPagination },
    props: {
      visible: {
        default: number("visible", 5, {}, "Props"),
      },
      total: {
        default: number("total", 12, {}, "Props"),
      },
      hasArrows: {
        default: boolean("hasArrows", true, "Props"),
      },
    },
    data() {
      return {
        current: 2,
      };
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total"
      :has-arrows="hasArrows">
        <template #default="{go}">CUSTOM DEFAULT</template>
    </SfPagination>`,
  }))
  .add("[slot] prev", () => ({
    components: { SfPagination },
    props: {
      visible: {
        default: number("visible", 5, {}, "Props"),
      },
      total: {
        default: number("total", 12, {}, "Props"),
      },
      hasArrows: {
        default: boolean("hasArrows", true, "Props"),
      },
    },
    data() {
      return {
        current: 2,
      };
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total"
      :has-arrows="hasArrows"
      @click="value => current = value">
      <template #prev="{isDisabled, go}">
        <button @click="go">prev</button>
      </template>
    </SfPagination>`,
  }))
  .add("[slot] next", () => ({
    components: { SfPagination },
    props: {
      visible: {
        default: number("visible", 5, {}, "Props"),
      },
      total: {
        default: number("total", 12, {}, "Props"),
      },
      hasArrows: {
        default: boolean("hasArrows", true, "Props"),
      },
    },
    data() {
      return {
        current: 2,
      };
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total"
      :has-arrows="hasArrows"
      @click="value => current = value">
      <template #next="{isDisabled, go}">
        <button @click="go">next</button>
      </template>
    </SfPagination>`,
  }))
  .add("[slot] number", () => ({
    components: { SfPagination },
    props: {
      visible: {
        default: number("visible", 5, {}, "Props"),
      },
      total: {
        default: number("total", 12, {}, "Props"),
      },
      hasArrows: {
        default: boolean("hasArrows", true, "Props"),
      },
    },
    data() {
      return {
        current: 2,
      };
    },
    template: `<SfPagination
      :current="current"
      :visible="visible"
      :total="total"
      :has-arrows="hasArrows"
      @click="value => current = value">
      <template #number="{page}">
        <button 
          class="sf-pagination__button"
          :class="{'sf-pagination__button--current': (current === number)}">{{page}}</button>
      </template>
    </SfPagination>`,
  }));

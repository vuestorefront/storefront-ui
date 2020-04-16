import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import SfPagination from "./SfPagination.vue";

export default {
  title: "Molecules|Pagination",
  decorators: [withKnobs],
};

export const Common = () => ({
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
});

export const SlotDefault = () => ({
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
});

SlotDefault.story = {
  name: "[slot] default",
};

export const SlotPrev = () => ({
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
});

SlotPrev.story = {
  name: "[slot] prev",
};

export const SlotNext = () => ({
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
});

SlotNext.story = {
  name: "[slot] next",
};

export const SlotNumber = () => ({
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
      <template #number="{number, go}">
        <button 
          class="sf-pagination__button"
          :class="{'sf-pagination__button--current': (current === number)}"
          @click="go(number)">{{number}}.-</button>
      </template>
    </SfPagination>`,
});

SlotNumber.story = {
  name: "[slot] number",
};

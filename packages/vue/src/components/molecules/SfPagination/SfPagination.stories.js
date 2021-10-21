import { SfPagination } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Pagination",
  component: SfPagination,
  parameters: {
    docs: {
      description: {
        component: "Pagination component with indicators.",
      },
    },
  },
  argTypes: {
    total: {
      control: "number",
      table: {
        category: "Props",
      },
      description: "Total number of pages",
      defaultValue: 0,
    },
    current: {
      control: "number",
      defaultValue: 1,
      table: {
        category: "Props",
      },
      description: "Current page number, for non router",
    },
    visible: {
      control: "number",
      defaultValue: 5,
      table: {
        category: "Props",
      },
      description: "Maximum visible pagination items",
    },
    hasArrows: {
      control: "boolean",
      defaultValue: true,
      table: {
        category: "Props",
      },
      description: "Status of arrows display",
    },
    pageParamName: {
      control: "text",
      defaultValue: "page",
      table: {
        category: "Props",
      },
      description: "Name of page query param for router",
    },
    click: { action: "Go to page clicked", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfPagination },
  props: Object.keys(argTypes),
  template: `
  <SfPagination
  :current="current"
  :visible="visible"
  :total="total"
  :has-arrows="hasArrows"
  @click="(current) => { this.click(current); this.current = current }"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  total: 5,
};

export const WithoutArrows = Template.bind({});
WithoutArrows.args = { ...Common.args, hasArrows: false };

export const UsePointsSlot = (args, { argTypes }) => ({
  components: { SfPagination },
  props: Object.keys(argTypes),
  template: `
  <SfPagination
  :current="current"
  :visible="visible"
  :total="total"
  :has-arrows="hasArrows"
  @click="click"
  >
    <template #points >🎉</template>
  </SfPagination>`,
});
UsePointsSlot.args = { ...Common.args };

export const UsePrevSlot = (args, { argTypes }) => ({
  components: { SfPagination },
  props: Object.keys(argTypes),
  template: `
  <SfPagination
  :current="current"
  :visible="visible"
  :total="total"
  :has-arrows="hasArrows"
  @click="click"
  >
    <template #prev="{isDisabled, go, prev}">
      <button @click="go(prev)">prev</button>
    </template>
  </SfPagination>`,
});
UsePrevSlot.args = { ...Common.args };

export const UseNextSlot = (args, { argTypes }) => ({
  components: { SfPagination },
  props: Object.keys(argTypes),
  template: `
  <SfPagination
  :current="current"
  :visible="visible"
  :total="total"
  :has-arrows="hasArrows"
  @click="click"
  >
    <template #next="{isDisabled, go, next}">
      <button @click="go(next)">next</button>
    </template>
  </SfPagination>`,
});
UseNextSlot.args = { ...Common.args };

export const UseNumberSlot = (args, { argTypes }) => ({
  components: { SfPagination },
  props: Object.keys(argTypes),
  template: `
  <SfPagination
  :current="current"
  :visible="visible"
  :total="total"
  :has-arrows="hasArrows"
  @click="click"
  >
    <template #number="{page}">
      <button 
        class="sf-pagination__item"
        :class="{'current': current === page}">{{page}}</button>
    </template>
  </SfPagination>`,
});
UseNumberSlot.args = { ...Common.args };

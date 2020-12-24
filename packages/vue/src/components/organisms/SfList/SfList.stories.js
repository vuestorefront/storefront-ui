import { storiesOf } from "@storybook/vue";
import { SfList, SfMenuItem } from "@storefront-ui/vue";
export default {
  title: "Molecules/AddressPicker",
  component: SfAddressPicker,
  argTypes: {
    name: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: 0,
    },
    current: {
      control: "number",
      defaultValue: 0,
      table: {
        category: "Props",
      },
    },
    input: { action: "Address picked", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfAddressPicker },
  props: Object.keys(argTypes),
  template: `<SfBar
  :title="title"
  :back="back"
  :close="close"
/>`,
});

export const Common = Template.bind({});
Common.args = {};
storiesOf("Organisms|List", module).add("Common", () => ({
  components: { SfList, SfMenuItem },
  data() {
    return {
      items: [
        { label: "All", count: "280" },
        { label: "Skirts", count: "11" },
        { label: "Dresses", count: "32" },
        { label: "Belts", count: "101" },
        { label: "Bag", count: "2" },
        { label: "Trainers", count: "22" },
        { label: "Sandals", count: "55" },
      ],
    };
  },
  template: `<SfList :style="{maxWidth: '186px'}">
      <SfListItem 
        v-for="item in items" 
        :key="item.label" 
        :style="{'--list-item-margin':'24px 0'}"
      >
        <SfMenuItem :label="item.label" :count="item.count"/>
      </SfListItem>
    </SfList>`,
}));

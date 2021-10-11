import { SfList, SfMenuItem } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/List",
  component: SfList,
  parameters: {
    docs: {
      description: {
        component: "Vertical list component.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfList },
  props: Object.keys(argTypes),
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
  template: `
  <SfList :style="{maxWidth: '186px'}">
    <SfListItem 
      v-for="item in items" 
      :key="item.label" 
      :style="{'--list-item-margin':'24px 0'}"
    >
      {{item.label}}: {{item.count}}
    </SfListItem>
  </SfList>`,
});

export const Common = Template.bind({});
Common.args = {};

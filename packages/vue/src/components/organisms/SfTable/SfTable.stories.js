import { SfTable, SfButton } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/Table",
  component: SfTable,
  parameters: {
    docs: {
      description: {
        component: "Table component with inner rows, headers and data.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["", "sf-table--no-border"],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfTable, SfButton },
  props: Object.keys(argTypes),
  data() {
    return {
      tableHeaders: [
        "Order ID",
        "Pay. date",
        "Pay. method",
        "Amount",
        "Status",
      ],
      tableRows: [
        ["#35767", "4th Nov", "Paypal", "12.00$", "Finalise"],
        ["#35767", "4th Nov", "Visa", "15.00$", "In process"],
        ["#35767", "4th Nov", "Paypal", "12.00$", "Finalise"],
      ],
      status: {
        Finalise: "text-success",
        "In process": "text-warning",
      },
    };
  },
  template: `
  <SfTable :class="classes">
    <SfTableHeading>
      <SfTableHeader 
          v-for="header in tableHeaders" 
          :key="header"
      >{{header}}</SfTableHeader>
      <SfTableHeader><SfButton class="sf-button--text">Download all</SfButton></SfTableHeader>
    </SfTableHeading>
    <SfTableRow 
      v-for="(row, key) in tableRows"
      :key="key"
    > 
      <SfTableData
        v-for="data in row"
        :key="data"
        :class="status[data]">{{data}}</SfTableData>
        <SfTableData><SfButton class="sf-button--text">View details</SfButton></SfTableData>
    </SfTableRow>
  </SfTable>`,
});

export const Common = Template.bind({});
Common.args = {};

export const WithoutBorder = Template.bind({});
WithoutBorder.args = {
  classes: "sf-table--no-border",
};

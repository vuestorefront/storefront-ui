import { SfTable, SfButton } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/Table",
  component: SfTable,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "table-width": { value: "100%", control: "text" },
      "table-border-spacing": { value: "0", control: "text" },
      "table-heading-padding": { value: "", control: "text" },
      "table-heading-background": { value: "", control: "text" },
      "table-border-heading": {
        value:
          "var(--table-border-heading-style, solid) var(--table-border-heading-color, var(--c-primary))",
        control: "text",
      },
      "table-border-heading-width": { value: "0 0 2px 0", control: "text" },
      "table-header-font": { value: "", control: "text" },
      "table-header-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "table-header-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "table-header-font-line-height": { value: "1.4", control: "text" },
      "table-header-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "table-header-color": { value: "var(--c-text)", control: "text" },
      "table-row-padding": { value: "", control: "text" },
      "table-row-background": { value: "", control: "text" },
      "table-row-box-shadow": { value: "", control: "text" },
      "table-row-border": { value: "", control: "text" },
      "table-row-border-width": { value: "", control: "text" },
      "table-data-color": { value: "var(--c-dark-variant)", control: "text" },
      "table-data-font": { value: "", control: "text" },
      "table-data-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "table-data-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "table-data-font-line-height": { value: "1.6", control: "text" },
      "table-data-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "table-column-flex": { value: "", control: "text" },
      "table-column-padding": { value: "0", control: "text" },
      "table-column-text-align": { value: "left", control: "text" },
      "_table-column-order": { value: "", control: "text" },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Table component with inner rows, headers and data. Built from main component - SfTable and internal components - SfTableData, SfTableHeader, SfTableHeading, SfTableRow.",
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
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfTable` component. Use this slot to pass data to your table",
    },
    "default ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfTableData` component. Use this slot to pass data to `<td>` tag",
    },
    "default  ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfTableHeader` component. Use this slot to pass data to `<th>` tag",
    },
    "default   ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfTableHeading` component. Use this slot to pass data to `<tr>` tag in `<thead>` tag",
    },
    "default    ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfTableRow` component. Use this slot to pass data to `<tr>` tag in `<tbody>` tag",
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

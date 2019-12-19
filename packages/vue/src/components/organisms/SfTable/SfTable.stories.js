import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";

import SfTable from "./SfTable.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

storiesOf("Organisms/Table", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    data() {
      return {
        headers: [
          "Quantity",
          "Payment date",
          "Payment method",
          "Amount",
          "Status"
        ],
        content: [
          ["#35767", "4th Nov", "Paypal", "12.00$"],
          ["#35767", "4th Nov", "Visa", "15.00$"],
          ["#35767", "4th Nov", "Paypal", "12.00$"]
        ]
      };
    },
    components: { SfTable, SfButton },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-table--bordered": "sf-table--bordered"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      }
    },
    template: `<SfTable :class="customClass">
    <template>
      <SfTableHeading>
        <SfTableHeader v-for="header in headers">{{ header }}</SfTableHeader>
        <SfTableHeader>
          <span class="mobile-only">Download</span>
          <SfButton class="desktop-only">DOWNLOAD ALL</SfButton>
        </SfTableHeader>
      </SfTableHeading>
      <SfTableRow v-for="data in content">
        <SfTableData v-for="item in data">{{ item }}</SfTableData>
        <SfTableData class="text-success">In process</SfTableData>
        <SfTableData>
          <a class="desktop-only">VIEW</a>
          <a class="mobile-only">Download</a>
        </SfTableData>
      </SfTableRow>
    </template>
    </SfTable>`
  }));

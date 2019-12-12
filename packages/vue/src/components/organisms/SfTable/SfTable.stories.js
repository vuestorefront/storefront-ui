import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import SfTable from "./SfTable.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";

storiesOf("Organisms/Table", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfTable, SfButton, SfImage },
    props: {
      headers: {
        type: Array,
        default: [
          "Quantity",
          "Payment date",
          "Payment method",
          "Amount",
          "Status"
        ]
      },
      content: {
        type: [Array, Object],
        default: [
          ["#35767", "4th Nov", "Paypal", "12.00$", "In process"],
          ["#35767", "4th Nov", "Visa", "15.00$", "Finalised"],
          ["#35767", "4th Nov", "Paypal", "12.00$", "In process"]
        ]
      }
    },
    template: `<SfTable>
    <template>
      <SfTableRow>
        <SfTableData :is-header="true" v-for="header in headers">{{ header }}</SfTableData>
        <SfTableData :is-header="true">
          <SfButton class="desktop-only">DOWNLOAD ALL</SfButton>
        </SfTableData>
      </SfTableRow>
      <SfTableRow v-for="data in content">
        <SfTableData v-for="item in data">{{ item }}</SfTableData>
        <SfTableData>
          <span>VIEW</span>
          <SfImage class="desktop-only" src="assets/storybook/download.svg"/>
        </SfTableData>
      </SfTableRow>
    </template>
    </SfTable>`
  }));

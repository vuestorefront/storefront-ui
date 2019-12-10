import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import SfTable from "./SfTable.vue";

storiesOf("Organisms/Table", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfTable },
    template: `<SfTable>
    </SfTable>`
  }));

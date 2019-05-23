// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md"
import SfBadge from "./SfBadge.vue";

storiesOf("Atoms|Badge", module)
  .addDecorator(withKnobs)
  .add(
    "info",
    () => ({
      components: { SfBadge },
      template: `<SfBadge>
        default type
        </SfBadge>`
    }),
  )
  .add(
    "warning",
    () => ({
      components: { SfBadge },
      template: `<SfBadge type="warning">
        warning type
        </SfBadge>`
    }),
  )
  .add(
    "alert",
    () => ({
      components: { SfBadge },
      template: `<SfBadge type="alert">
        alert type
        </SfBadge>`
    }),
  )


        

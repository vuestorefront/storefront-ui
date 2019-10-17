// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfPrice from "./SfPrice.vue";

storiesOf("Atoms|Price", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfPrice },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-price--big": "sf-price--big"
          },
          "",
          { display: "multi-select" }
        )
      },
      regular: {
        default: text("regular (prop)", "$50.00")
      },
      special: {
        default: text("special (prop)", "$100.00")
      }
    },
    template: `<SfPrice
        :class="customClass"
        :regular="regular"
        :special="special"/>`
  }))
  .add("[slot] special", () => ({
    components: { SfPrice },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-price--big": "sf-price--big"
          },
          "",
          { display: "multi-select" }
        )
      },
      regular: {
        default: text("regular (prop)", "$50.00")
      },
      special: {
        default: text("special (prop)", "$100.00")
      }
    },
    template: `<SfPrice
        :class="customClass"
        :regular="regular"
        :special="special">
        <template #special>
          <span></span>
        </template>  
      </SfPrice>`
  }))
  .add("[slot] old", () => ({
    components: { SfPrice },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-price--big": "sf-price--big"
          },
          "",
          { display: "multi-select" }
        )
      },
      regular: {
        default: text("regular (prop)", "$50.00")
      },
      special: {
        default: text("special (prop)", "$100.00")
      }
    },
    template: `<SfPrice
        :class="customClass"
        :regular="regular"
        :special="special">
        <template #old>
          <span></span>
        </template>
      </SfPrice>`
  }))
  .add("[slot] regular", () => ({
    components: { SfPrice },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-price--big": "sf-price--big"
          },
          "",
          { display: "multi-select" }
        )
      },
      regular: {
        default: text("regular (prop)", "$50.00")
      },
      special: {
        default: text("special (prop)", "")
      }
    },
    template: `<SfPrice
        :class="customClass"
        :regular="regular"
        :special="special">
        <template #regular>
          <span></span>
        </template>
      </SfPrice>`
  }));

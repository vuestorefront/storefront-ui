/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfPrice from "./SfPrice.vue";
import SfBadge from "../SfBadge/SfBadge.vue";

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
        default: text("regular (prop)", "$200.00")
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
    components: {
      SfPrice,
      SfBadge
    },
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
        default: text("regular (prop)", "$200.00")
      },
      special: {
        default: text("special (prop)", "$100.00")
      }
    },
    template: `<SfPrice
      :class="customClass"
      :regular="regular"
      :special="special">
      <template #special="{special}">
        <SfBadge class="color-warning">{{special}}</SfBadge>
      </template>  
    </SfPrice>`
  }))
  .add("[slot] old", () => ({
    components: {
      SfPrice,
      SfBadge
    },
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
        default: text("regular (prop)", "$200.00")
      },
      special: {
        default: text("special (prop)", "$100.00")
      }
    },
    template: `<SfPrice
      :class="customClass"
      :regular="regular"
      :special="special">
      <template #old="{regular, special}">
        <SfBadge class="color-secondary">{{regular}}</SfBadge>
      </template>
    </SfPrice>`
  }))
  .add("[slot] regular", () => ({
    components: {
      SfPrice,
      SfBadge
    },
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
        default: text("regular (prop)", "$200.00")
      },
      special: {
        default: text("special (prop)", "")
      }
    },
    template: `<SfPrice
      :class="customClass"
      :regular="regular"
      :special="special">
      <template #regular="{regular, special}">
        <SfBadge>{{regular}}</SfBadge>
      </template>
    </SfPrice>`
  }));

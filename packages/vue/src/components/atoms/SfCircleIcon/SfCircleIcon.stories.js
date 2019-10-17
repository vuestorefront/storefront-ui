// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, select, optionsKnob as options } from "@storybook/addon-knobs";
import { icons } from "@storefront-ui/shared/icons/icons";

import SfCircleIcon from "./SfCircleIcon.vue";

const icon =  Object.keys(icons);

storiesOf("Atoms|CircleIcon", module)
  .addDecorator(withKnobs)
  .add(
    "Default",
    () => ({
      components: { SfCircleIcon },
      props: {
        customClass: {
          default: options(
            "CSS modifier",
            {
              "sf-circle-icon--small": "sf-circle-icon--small",
              "sf-circle-icon--big": "sf-circle-icon--big",
              "color-primary": "color-primary",
              "color-secondary": "color-secondary",
              "color-warning": "color-warning",
              "color-danger": "color-danger",
              "color-info": "color-info",
              "color-success": "color-success"
            },
            "",
            { display: "multi-select" }
          )
        },
        icon: {
          default: select(
            "(prop) icon",
            icon,
            "home",
          )
        }
      },
      template: `<SfCircleIcon
        :class="customClass"
        :icon="icon" />`
    })
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfCircleIcon },
      props: {
        customClass: {
          default: options(
            "CSS modifier",
            {
              "sf-circle-icon--small": "sf-circle-icon--small",
              "sf-circle-icon--big": "sf-circle-icon--big",
              "color-primary": "color-primary",
              "color-secondary": "color-secondary",
              "color-warning": "color-warning",
              "color-danger": "color-danger",
              "color-info": "color-info",
              "color-success": "color-success"
            },
            "",
            { display: "multi-select" }
          )
        },
        icon: {
          default: select(
            "icon (prop)",
            icon,
            "home",
          )
        }
      },
      template: `<SfCircleIcon
        :class="customClass">
        <span></span>
      </SfCircleIcon>`
    })
  )

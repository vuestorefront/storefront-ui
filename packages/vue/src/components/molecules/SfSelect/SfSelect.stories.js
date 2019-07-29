// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import notes from "./SfSelect.md";
import SfSelect from "./SfSelect.vue";
import SfProductOption from "../SfProductOption/SfProductOption.vue";

storiesOf("Molecules|Select", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          selected: "s"
        };
      },
      components: { SfSelect, SfProductOption },
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-select--bordered", "sf-select--underlined"],
            "null"
          )
        }
      },
      template: `
      <div>
        <div style="max-width: 509px">
          <SfSelect v-model="selected" :class="customClass">
            <SfSelectOption value="xs">
              XS
            </SfSelectOption>
            <SfSelectOption value="s">
              S
            </SfSelectOption>
            <SfSelectOption value="m">
              M
            </SfSelectOption>
            <SfSelectOption value="l">
              L
            </SfSelectOption>
            <SfSelectOption value="xl">
              XL
            </SfSelectOption>
            <SfSelectOption value="xxl">
              XXL
            </SfSelectOption>
          </SfSelect>
        </div>
      </div>
      `,
      mounted: function(){
        document.body.style="background: #F1F2F4; height: 100%";
      }
    }),
    {
      info: true,
      notes
    }
  );

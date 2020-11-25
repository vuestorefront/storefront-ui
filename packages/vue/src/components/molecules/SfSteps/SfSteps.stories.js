import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { SfSteps } from "@storefront-ui/vue";
storiesOf("Molecules|Steps", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfSteps },
    props: {
      canGoBack: {
        default: boolean("canGoBack", true, "Props"),
      },
    },
    data() {
      return {
        active: 0,
        steps: ["Details", "Shipping", "Payment", "Review"],
      };
    },
    template: `<SfSteps
       v-model="active" 
       :steps="steps" 
       :can-go-back="canGoBack">
      <SfStep v-for="(step, key) in steps" :key="key" :name="step">
        <div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
          [#default slot content] {{step}}
        </div>
      </SfStep>
    </SfSteps>`,
  }));

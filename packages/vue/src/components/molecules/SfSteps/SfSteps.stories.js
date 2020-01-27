/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import SfSteps from "./SfSteps.vue";
const StoriesPlaceholder = {
  props: ["name"],
  template: `<div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">[#default slot content] {{name}}</div>`
};
storiesOf("Molecules|Steps", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfSteps, StoriesPlaceholder },
    props: {
      canGoBack: {
        default: boolean("canGoBack", true, "Props")
      }
    },
    data() {
      return {
        active: 0,
        steps: [
          "Personal details",
          "Shipping",
          "Billing address",
          "Order review"
        ]
      };
    },
    template: `<SfSteps
       v-model="active" 
       :steps="steps" 
       :can-go-back="canGoBack">
      <SfStep v-for="(step, key) in steps" :key="key" :name="step">
        <StoriesPlaceholder :name="step"/>
      </SfStep>
    </SfSteps>`
  }));

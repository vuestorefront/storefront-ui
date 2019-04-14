import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

export default storiesOf("Utilities/Spinners", module)
  .add("bounce", () => ({
    template: `
    <div class="spinner"></div>`,
    data: () => ({
      show: false
    })
  }))
  .add("linear", () => ({
    template: `
    <div class="spinner-linear">
      <div class="line">
      </div>
    </div>`,
    data: () => ({
      show: false
    })
  }));

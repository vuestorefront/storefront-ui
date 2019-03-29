import { storiesOf } from "@storybook/vue";

import SfAlert from "./SfAlert.vue";

storiesOf("Alert", module)
  .add("warning", () => ({
    components: { SfAlert },
    template: `
  <SfAlert type="warning" message="Lorem ipsum dolor, sit amet consectetur adipisicing">
  </SfAlert>`
  }))
  .add("alert", () => ({
    components: { SfAlert },
    template: `
  <SfAlert type="alert" message="alert">
  </SfAlert>`
  }))
  .add("info", () => ({
    components: { SfAlert },
    template: `
  <SfAlert type="info" message="info">
  </SfAlert>`
  }))
  .add("with message prop and slot-scope used", () => ({
    components: { SfAlert },
    template: `
  <SfAlert
      type="warning"
      message="Lorem ipsum dolor, sit amet consectetur adipisicing">
      <template slot="message" slot-scope="{ message }">
        {{ message }}
      </template>
    </SfAlert>`
  }))
  .add("with message prop", () => ({
    components: { SfAlert },
    template: `
    <SfAlert type="warning" message="Lorem ipsum dolor, sit amet consectetur adipisicing">
    </SfAlert>`
  }))
  .add("with message prop and icon slot and 0 padding", () => ({
    components: { SfAlert },
    template: `
    <SfAlert
      type="warning"
      message="Lorem ipsum dolor, sit amet consectetur adipisicing"
      style="padding: 0"
    >
      <img slot="icon" src="./assets/clock.svg"  />
    </SfAlert>`
  }))
  .add("with message prop and icon hidden", () => ({
    components: { SfAlert },
    template: `
    <SfAlert
    :icon="false"
    type="warning"
    message="Lorem ipsum dolor, sit amet consectetur adipisicing"
  >
  </SfAlert>`
  }))
  .add("with message prop and icon from link as slot", () => ({
    components: { SfAlert },
    template: `
    <SfAlert
      type="warning"
      message="Lorem ipsum dolor, sit amet consectetur adipisicing"
      icon="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"
    >
      <img slot-scope="{ icon }" :src="icon"  slot="icon" />
    </SfAlert>`
  }));

import { storiesOf } from "@storybook/vue";

import SfAlert from "../components/atoms/SfAlert/SfAlert.vue";

const template = (className, defaultSlot, iconSlot) => `
<SfAlert message='Default message via props' class="${className}">
    ${iconSlot}
    ${defaultSlot}
</SfAlert>
`;

storiesOf("Alert", module)
  .add("with modifier: info", () => ({
    components: { SfAlert },
    template: template("sf-alert--info", "Info", "")
  }))
  .add("with modifier: warning", () => ({
    components: { SfAlert },
    template: template("sf-alert--warning", "Warning", "")
  }))
  .add("with modifier: alert", () => ({
    components: { SfAlert },
    template: template("sf-alert--alert", "Alert", "")
  }))
  .add("with default value", () => ({
    components: { SfAlert },
    template: template("sf-alert--info", "", "")
  }));

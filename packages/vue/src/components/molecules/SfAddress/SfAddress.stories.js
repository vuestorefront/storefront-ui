import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import SfAddress from "./SfAddress.vue";
storiesOf("Molecules|Address", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfAddress },
    data() {
      return {
        selected: "",
      };
    },
    template: `<SfAddress valueName="default" v-model="selected" >
        <div style="display: flex; flex-direction: column;">
          <span>Jack Smith</span>
          <span>Mazowiecka 34</span>
          <span>02-020</span>
          <span>Warszawa, Mazowieckie</span>
          <span>Poland</span>
          <span>+48 777 777 777</span>
        </div>
      </SfAddress>`,
  }));

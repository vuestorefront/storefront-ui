import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import SfAddressPicker from "./SfAddressPicker.vue";
storiesOf("Molecules|Address", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfAddressPicker },
    data() {
      return {
        selected: "",
        addresses: [
          {
            id: "first",
            name: "Jack Smith",
            street: "Mazowiecka 34",
            postCode: "02-020",
            city: "Warszawa, Mazowieckie",
            country: "Poland",
            phone: "+48 777 777 777",
          },
          {
            id: "second",
            name: "Jack Doe",
            street: "Mazowiecka 24",
            postCode: "02-020",
            city: "Warszawa, Mazowieckie",
            country: "Poland",
            phone: "+48 999 556 777",
          },
        ],
      };
    },
    template: `<SfAddressPicker v-model="selected" >
        <SfAddress v-for="address in addresses" :key="address.id" :name="address.id">
          <div style="display: flex; flex-direction: column;">
            <span>{{address.name}}</span>
            <span>{{address.street}}</span>
            <span>{{address.postCode}}</span>
            <span>{{address.city}}</span>
            <span>{{address.country}}</span>
            <span>{{address.phone}}</span>
          </div>
        </SfAddress>
      </SfAddressPicker>`,
  }));

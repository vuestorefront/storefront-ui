import { shallowMount } from "@vue/test-utils";
const countries = ["United States", "Germany", "Poland"];
import SfPayment from "./SfPayment.vue";
describe("SfPayment.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfPayment, {
      methods: {
        getCountries: () => {
          return countries;
        },
      },
    });
    expect(component.classes("sf-payment")).toBe(true);
  });
});

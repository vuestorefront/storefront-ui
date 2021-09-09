import { shallowMount } from "@vue/test-utils";
import SfPayment from "./SfPayment.vue";
describe("SfPayment.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfPayment);
    expect(component.classes("sf-payment")).toBe(true);
  });
});

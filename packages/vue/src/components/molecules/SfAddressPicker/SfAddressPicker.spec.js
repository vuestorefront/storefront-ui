import { shallowMount } from "@vue/test-utils";
import SfAddressPicker from "./SfAddressPicker.vue";

describe("SfAddressPicker.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfAddressPicker);
    expect(component.classes("sf-address-picker")).toBe(true);
  });
});

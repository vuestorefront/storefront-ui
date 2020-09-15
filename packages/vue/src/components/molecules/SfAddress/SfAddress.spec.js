import { shallowMount } from "@vue/test-utils";
import SfAddress from "./SfAddress.vue";

describe("SfAddress.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfAddress);
    expect(component.contains(".sf-address")).toBe(true);
  });
});

import { shallowMount } from "@vue/test-utils";
import SfColor from "./SfColor.vue";
describe.only("SfColor.vue", () => {
  it("renders a chevron", () => {
    const component = shallowMount(SfColor);
    expect(component.contains(".sf-color")).toBe(true);
  });
});

import { shallowMount } from "@vue/test-utils";
import SfColorPicker from "./SfColorPicker.vue";

describe("SfColorPicker.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfColorPicker);
    expect(component.classes("sf-color-picker")).toBe(true);
  });
});

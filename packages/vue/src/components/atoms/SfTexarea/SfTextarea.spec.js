import { shallowMount } from "@vue/test-utils";
import SfTextarea from "./SfTextarea.vue";
describe("SfTextarea.vue", () => {
  it("renders component with defaults", () => {
    const component = shallowMount(SfTextarea);
    expect(component.classes("sf-textarea")).toBe(true);
  });
  it("renders component with value", () => {
    const component = shallowMount(SfTextarea, {
      propsData: {
        value: "text",
      },
    });
    expect(component.classes("sf-textarea--has-text")).toBe(true);
  });
});

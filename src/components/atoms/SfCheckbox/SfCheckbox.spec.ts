import { shallowMount } from "@vue/test-utils";
import SfCheckbox from "./SfCheckbox.vue";

describe("SfCheckbox.vue", () => {
  it("renders a checkbox", () => {
    const component = shallowMount(SfCheckbox);
    expect(component.contains("input[type='checkbox']")).toBe(true);
  });

  it("renders content slot text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfCheckbox, {
      slots: {
        content: msg
      }
    });
    expect(component.find(".sf-checkbox__label").text()).toMatch(msg);
  });
});

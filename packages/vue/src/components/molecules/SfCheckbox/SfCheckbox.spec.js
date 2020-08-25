import { shallowMount } from "@vue/test-utils";
import SfCheckbox from "./SfCheckbox.vue";
describe("SfCheckbox.vue", () => {
  it("renders a checkbox", () => {
    const component = shallowMount(SfCheckbox);
    expect(component.find(".sf-checkbox__input").exists()).toBe(true);
  });
  it("renders label text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfCheckbox, {
      propsData: {
        label: msg,
      },
    });
    expect(component.find(".sf-checkbox__label").text()).toMatch(msg);
  });
});

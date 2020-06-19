import { shallowMount } from "@vue/test-utils";
import SfInput from "./SfInput.vue";
describe("SfInput.vue", () => {
  it("renders a input", () => {
    const component = shallowMount(SfInput);
    expect(component.contains(".sf-input")).toBe(true);
  });
  it("renders label text when passed", () => {
    const label = "HelloWorld";
    const component = shallowMount(SfInput, {
      propsData: {
        label,
      },
    });
    expect(component.find(".sf-input__label").text()).toBe(label);
  });
  it("renders errorMessage with valid set to false when passed", () => {
    const errorMessage = "This phrase is wrong";
    const component = shallowMount(SfInput, {      
      propsData: {
        valid: false,
        errorMessage: errorMessage,
      },
    });
    expect(component.find(".sf-input__message--error").text()).toMatch(
      errorMessage
    );
  });
});

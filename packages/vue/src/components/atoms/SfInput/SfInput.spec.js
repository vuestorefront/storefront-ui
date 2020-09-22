import { shallowMount } from "@vue/test-utils";
import SfInput from "./SfInput.vue";
describe("SfInput.vue", () => {
  it("renders a input", () => {
    const component = shallowMount(SfInput);
    expect(component.classes("sf-input")).toBe(true);
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
  it("renders errorMessage slot with valid is false when passed", () => {
    const errorMessage = "This field is required";
    const component = shallowMount(SfInput, {
      slots: {
        "error-message": errorMessage,
      },
      propsData: {
        valid: false,
      },
    });
    expect(component.find(".sf-input__error-message").text()).toMatch(
      errorMessage
    );
  });
});

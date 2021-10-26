import { shallowMount } from "@vue/test-utils";
import SfInput from "./SfInput.vue";
describe("SfInput.vue", () => {
  it("renders a input", () => {
    const wrapper = shallowMount(SfInput);
    expect(wrapper.classes("sf-input")).toBe(true);
  });
  it("renders label text when passed", () => {
    const label = "HelloWorld";
    const wrapper = shallowMount(SfInput, {
      propsData: {
        label,
      },
    });
    expect(wrapper.find(".sf-input__label").text()).toBe(label);
  });
  it("renders errorMessage slot with valid is false when passed", () => {
    const errorMessage = "This field is required";
    const wrapper = shallowMount(SfInput, {
      slots: {
        "error-message": errorMessage,
      },
      propsData: {
        valid: false,
      },
    });
    expect(wrapper.find(".sf-input__error-message").text()).toMatch(
      errorMessage
    );
  });
});

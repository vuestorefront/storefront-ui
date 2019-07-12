import { shallowMount } from "@vue/test-utils";
import SfInput from "./SfInput.vue";

describe("SfInput.vue", () => {
  it("renders a input", () => {
    const component = shallowMount(SfInput);
    expect(component.contains(".sf-input")).toBe(true);
  });

  it("renders default slot as label when passed", () => {
    const label = "HelloWorld";
    const component = shallowMount(SfInput, {
      slots: {
        default: label
      }
    });
    expect(component.find(".sf-input__label").text()).toMatch(label);
  });

  it("renders errorMessage slot with valid is false when passed", () => {
    const errorMessage = "This field is required";
    const component = shallowMount(SfInput, {
      slots: {
        errorMessage
      },
      propsData: {
        valid: false
      }
    });
    expect(component.find(".sf-input__error-message").text()).toMatch(errorMessage);
  });
});

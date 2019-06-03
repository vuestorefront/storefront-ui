import { shallowMount } from "@vue/test-utils";
import SfCallToAction from "./SfCallToAction.vue";

describe("SfCallToAction.vue", () => {
  // DOM Element render check
  it("renders a section", () => {
    const component = shallowMount(SfCallToAction);
    expect(component.contains("section")).toBe(true);
  });

  // default slot check
  it("renders default slot text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfCallToAction, {
      slots: {
        default: msg
      }
    });
    expect(component.find(".sf-call-to-action").text()).toMatch(msg);
  });

  // button text check from prop
  it("renders button text from prop when passed", () => {
    const msg = "ButtonText";
    const component = shallowMount(SfCallToAction, {
      propsData: {
        buttonText: msg
      }
    });
    const wrapper = component.find(".sf-call-to-action__button");
    expect(wrapper.text()).toMatch(msg);
  });
});

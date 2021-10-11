import { shallowMount } from "@vue/test-utils";
import SfCallToAction from "./SfCallToAction.vue";
describe("SfCallToAction.vue", () => {
  it("renders a section", () => {
    const component = shallowMount(SfCallToAction);
    expect(component.classes("sf-call-to-action")).toBe(true);
  });
  it("renders title text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfCallToAction, {
      propsData: {
        title: msg,
      },
    });
    expect(component.find(".sf-call-to-action__title").text()).toMatch(msg);
  });
  it("renders button text from prop when passed", () => {
    const msg = "ButtonText";
    const component = shallowMount(SfCallToAction, {
      propsData: {
        buttonText: msg,
      },
    });
    const wrapper = component.find(".sf-call-to-action__button");
    expect(wrapper.text()).toMatch(msg);
  });
});

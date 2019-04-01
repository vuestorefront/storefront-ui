import { shallowMount } from "@vue/test-utils";
import SfLabel from "@/components/atoms/SfLabel/SfLabel.vue";

describe("SfButton.vue", () => {
  it("renders a label as a default tag", () => {
    const component = shallowMount(SfLabel);
    expect(component.contains("label")).toBe(true);
  });

  it("renders default slot when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfLabel, {
      slots: {
        default: msg
      }
    });
    expect(component.find(".sf-label").text()).toMatch(msg);
  });

  it("renders props tag when passed", () => {
    const tag = "div";
    const component = shallowMount(SfLabel, {
      propsData: {
        tag
      }
    });
    expect(component.contains(tag)).toBe(true);
  });
});

import { shallowMount } from "@vue/test-utils";
import SfLabel from "./SfLabel.vue";

describe("SfLabel.vue", () => {
  it("renders a label", () => {
    const component = shallowMount(SfLabel);
    expect(component.contains(".sf-label")).toBe(true);
  });

  it("renders default text slot when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfLabel, {
      slots: {
        default: msg
      }
    });
    expect(component.find(".sf-label").text()).toMatch(msg);
  });
});

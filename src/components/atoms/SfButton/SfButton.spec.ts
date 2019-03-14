import { shallowMount } from "@vue/test-utils";
import SfButton from "@/components/atoms/SfButton/SfButton.vue";

describe("HelloWorld.vue", () => {
  it("renders a button", () => {
    const component = shallowMount(SfButton);
    expect(component.contains("button")).toBe(true);
  });

  it("renders default prop text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfButton, {
      slots: {
        default: msg
      }
    });
    expect(component.find(".sf-button").text()).toMatch(msg);
  });
});

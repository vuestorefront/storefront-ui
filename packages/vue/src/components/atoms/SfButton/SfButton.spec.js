import { shallowMount } from "@vue/test-utils";
import SfButton from "./SfButton.vue";
describe("SfButton.vue", () => {
  it("renders a button", () => {
    const component = shallowMount(SfButton);
    expect(component.classes("sf-button")).toBe(true);
  });
  it("renders default prop text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfButton, {
      slots: {
        default: msg,
      },
    });
    expect(component.find(".sf-button").text()).toMatch(msg);
  });
});

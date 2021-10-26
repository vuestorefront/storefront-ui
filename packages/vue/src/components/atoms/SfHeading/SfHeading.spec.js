import { shallowMount } from "@vue/test-utils";
import SfHeading from "./SfHeading.vue";
describe("SfHeading.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfHeading);
    expect(wrapper.classes("sf-heading")).toBe(true);
  });
});

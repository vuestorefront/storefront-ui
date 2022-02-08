import { shallowMount } from "@vue/test-utils";
import SfSkeleton from "./SfSkeleton.vue";
describe("SfSkeleton.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfSkeleton);
    expect(wrapper.classes("sf-skeleton")).toBe(true);
  });
  it("renders component with specific type", () => {
    const wrapper = shallowMount(SfSkeleton, {
      propsData: {
        type: "image",
      },
    });
    expect(wrapper.classes("sf-skeleton--image")).toBe(true);
  });
});
